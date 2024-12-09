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
    token: localStorage.getItem('authToken'),
    isAuth: !!localStorage.getItem('authToken'),
    isRegistered: false,
    isFetching: false,
};

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


export const getAuthUserData = () => (dispatch) => {
    const token = localStorage.getItem('authToken');
    if (token) {
        authAPI.me(token).then(response => {
            console.log(response);
            if (response.status) {
                const { id, email } = response.data.user;
                dispatch(setAuthUserData({ id, email, isAuth: true }));
                dispatch(setAuthToken(token)); // Optional, to ensure Redux has the token
            } else {
                localStorage.removeItem('authToken');
                dispatch(setAuthUserData({ id: null, email: null, isAuth: false }));
                dispatch(setAuthToken(null));
            }
        });
    }
};

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
        if (response.status === 200) {
            const token = response.data.access_token;

            // Save token to localStorage
            localStorage.setItem('authToken', token);

            // Update Redux state
            dispatch(setAuthToken(token));
            dispatch(setAuthUser(true));
            console.log("Login successful, token saved:", token);
        } else {
            dispatch(stopSubmit("login", { _error: response.data.error }));
            console.log("Login failed:", response.data.error);
        }
    });
};

//ThunkCreator для выхода
export const logout = () => (dispatch) => {
    authAPI.logout().then(response => {
        if (response.data.status) {
            // Remove token from localStorage
            localStorage.removeItem('authToken');

            // Update Redux state
            dispatch(setAuthUserData({ id: null, email: null, isAuth: false }));
            dispatch(setAuthToken(null));
            console.log("Logout successful, token removed.");
        }
    });
};

export default authReducer;