import { stopSubmit } from "redux-form";
import { authAPI } from "../../Api/api";

const SET_USER_DATA = 'SET_USER_DATA';
const SET_TOKEN = 'SET_TOKEN';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
    id: null,
    email: null,
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
        default:
            return state;
    }
}

export const setAuthToken = (token) => ({type: SET_TOKEN, token: token});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const setAuthUserData = ({id, email, isAuth}) => ({type: SET_USER_DATA, data: {id, email, isAuth}});

export const getAuthUserData = (token) => (dispatch) => {
    authAPI.me(token).then(response => {
        if(response.data.status){
            let id = response.data.user.id;
            let email = response.data.user.user_data.email;
            dispatch(setAuthUserData(id, email, true));
        }
    })
}

export const registration = (email, password) => (dispatch) => {
    authAPI.registration(email, password).then(response => {
        console.log(response)
        if(response.data.status){
            dispatch(setAuthToken(response.data.user.token))
            let id = response.data.user.id;
            let email = response.data.user.user_data.email;
            dispatch(setAuthUserData(id, email, true));
        }else{
            dispatch(stopSubmit("registration", {_error: response.data.message}));
        }
    })
}

export const login = (email, password) => (dispatch) => {
    authAPI.login(email, password).then(response => {
        console.log(response);
        if(response.data.status){
            dispatch(setAuthToken(response.data.user.token))
            let id = response.data.user.id;
            let email = response.data.user.user_data.email;
            let password = response.data.user.user_data.password;
            let isAuth = response.data.status;
            dispatch(setAuthUserData({id, email, password, isAuth}));
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