import { authAPI } from "../../Api/api";

const SET_USER_DATA = 'SET_USER_DATA';
const SET_TOKEN = 'SET_TOKEN';

let initialState = {
    id: null,
    email: null,
    password: null,
    token: "",
    isAuth: false,
}

const authReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
            case SET_TOKEN:
                console.log(action.token)
                return{
                    ...state,
                    token: action.token
                }

        default:
            return state;
    }
}

export const setAuthUserData = (userId, email, isAuth) => ({type: SET_USER_DATA, data: {userId, email, isAuth}});

export const setAuthToken = (token) => ({type: SET_TOKEN, token: token});

export const getAuthUserData = (token) => (dispatch) => {
    authAPI.me(token).then(response => {
        console.log(response);
        if(response.data.status){
            let id = response.data.user.id;
            let email = response.data.user.user_data.email;
            dispatch(setAuthUserData(id, email, true));
        }
    })
}

export const login = (email, password) => (dispatch) => {
    authAPI.login(email, password).then(response => {
        console.log(response);
        if(response.data.status){
            dispatch(setAuthToken(response.data.user.token))
            dispatch(getAuthUserData(response.data.user.token));
            // let id = response.data.user.id;
            // let email = response.data.user.user_data.email;
            // dispatch(setAuthUserData(id, email, true));
        }
    })
}

export const logout = () => (dispatch) => {
    authAPI.logout().then(response => {
        if(!response.data.status){
            dispatch(setAuthUserData(null, null, null, false));
        }
    })
}

export default authReducer;