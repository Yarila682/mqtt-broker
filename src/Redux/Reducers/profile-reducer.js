import { mosquittoAPI } from "../../Api/api";

const SET_USER_PROFILE = "SET_USER_PROFILE";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const SET_MOSQUITTO_DATA = "SET_MOSQUITTO_DATA";

let initialState = { 
    email:"",
    password: "",
    mosquittoIsOn: null,
    isFetching: false,
};

const profileReducer = (state = initialState, action) => {

    switch(action.type){
        case SET_USER_PROFILE:{
            return {...state, email: action.email, password: action.password}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case SET_MOSQUITTO_DATA: {
            return {...state, mosquittoIsOn: action.mosquittoIsOn}
        }
        default:
            return state;
    }

}

export const setUserProfile = (email, password, mosquittoIsOn) => ({type: SET_USER_PROFILE, email: email, password: password,mosquittoIsOn: mosquittoIsOn});
export const setMosquittoData = (mosquittoIsOn) => ({type: SET_MOSQUITTO_DATA, mosquittoIsOn})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});

export const mosquittoOn = (token) => (dispatch) => {
    mosquittoAPI.mosquittoOn(token).then(response => {
        console.log(response)
        if(response.data.status){
            dispatch(setMosquittoData(true))
        }
    })
}

export const mosquittoOff = (token) => (dispatch) => {
    mosquittoAPI.mosquittoOff(token).then(response => {
        console.log(response)
        if(response.data.status){
            dispatch(setMosquittoData(false))
        }
    })
}

export default profileReducer;