import { authAPI } from "../../Api/api";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    id: null,
    email: null,
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

        default:
            return state;
    }
}

export const setAuthUserData = (userId, {email, password}) => ({type: SET_USER_DATA, data: {userId, email, password}});


export const getAuthUserData = () => (dispatch) => {
    authAPI.me().then(response => {
        if(response.data.status){
            let id = response.data.user.id;
            let {email, password} = response.data.user.user_data;
            dispatch(setAuthUserData(id, {email, password}));
        }
    })
}

export const login = (email, password) => (dispatch) => {
    authAPI.login(email, password).then(response => {
        if(response.data.status){
            dispatch(getAuthUserData());
        }
    })
}

export default authReducer;