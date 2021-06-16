import { act } from "react-dom/test-utils";
import { stopSubmit } from "redux-form";
import { authAPI } from "../../Api/api";

const SET_USER_DATA = 'SET_USER_DATA';
const SET_TOKEN = 'SET_TOKEN';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const SET_IS_AUTH = 'SET_IS_AUTH';

let initialState = {
    token: null,
    isAuth: false,
    isFetching: false,
}

const authReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data
            }
        case SET_TOKEN:
            return{
                ...state,
                token: action.token
            }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case SET_IS_AUTH: {
            return {...state, isAuth: action.isAuth}
        }
        default:
            return state;
    }
}

export const setAuthToken = (token) => ({type: SET_TOKEN, token: token});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const setAuthUserData = ({id, email, isAuth}) => ({type: SET_USER_DATA, data: {id, email, isAuth}});
const setAuthUser = (isAuth) => ({type: SET_IS_AUTH, isAuth});

export const getAuthUserData = (token) => (dispatch) => {
    authAPI.me(token).then(response => {
        console.log(response);
        if(response.data.status){
            let id = response.data.profile.id;
            let email = response.data.profile.user_data.email;
            //let mosquittoIsOn
            dispatch(setAuthUserData(id, email, true));
        }
    })
}

export const registration = (email, password) => (dispatch) => {
    authAPI.registration(email, password).then(response => {
        console.log(response)
        if(response.data.status){

        }else{
            dispatch(stopSubmit("registration", {_error: response.data.message}));
        }
    })
}

export const login = (email, password) => (dispatch) => {
    authAPI.login(email, password).then(response => {
        console.log(response);
        if(response.data.status){
            dispatch(setAuthToken(response.data.token))
            dispatch(setAuthUser(true))
        }else{
            dispatch(stopSubmit("login", {_error: response.data.message}));
        }
    })
}

export const logout = () => (dispatch) => {
    dispatch(setAuthUserData(0, null, false));
    dispatch(setAuthToken(null));
}

export default authReducer;