import { stopSubmit } from "redux-form";
import { authAPI } from "../../Api/api";

//Необходимые константы
const SET_USER_DATA = 'SET_USER_DATA';
const SET_TOKEN = 'SET_TOKEN';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const SET_IS_AUTH = 'SET_IS_AUTH';
const SET_IS_REGISTERED = 'SET_IS_REGISTERED';

//Начальный state
let initialState = {
    token: null,
    isAuth: false,
    isRegistered: false,
    isFetching: false,
}

//Редьюсер аутентификации
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
        case SET_IS_REGISTERED: {
            return {...state, isRegistered: action.isRegistered}
        }
        default:
            return state;
    }
}

export const setAuthToken = (token) => ({type: SET_TOKEN, token: token});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const setAuthUserData = ({id, email, isAuth}) => ({type: SET_USER_DATA, data: {id, email, isAuth}});
const setAuthUser = (isAuth) => ({type: SET_IS_AUTH, isAuth});
export const setRegistered = (isRegistered) => ({type: SET_IS_REGISTERED, isRegistered});


export const getAuthUserData = (token) => (dispatch) => {
    authAPI.me(token).then(response => {
        console.log(response);
        if(response.data.status){
            let id = response.data.profile.id;
            let email = response.data.profile.user_data.email;
            dispatch(setAuthUserData(id, email, true, response.data.message));
        }
    })
}

//ThunkCreator для получения отправки данных из формы регистрации
export const registration = (email, password) => (dispatch) => {
    authAPI.registration(email, password).then(response => {
        console.log(response)
        if(response.data.status){
            dispatch(setRegistered(true))
        }else{
            dispatch(stopSubmit("registration", {_error: response.data.message}));
        }
    })
}

//ThunkCreator для получения отправки данных из формы логинизации
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

//ThunkCreator для выхода
export const logout = () => (dispatch) => {
    authAPI.logout().then(response => {
        if(response.data.status){
            dispatch(setAuthUserData(0, null, false, null));
            dispatch(setAuthToken(null));
        }
    })
}

export default authReducer;