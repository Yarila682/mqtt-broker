
const SET_USER_PROFILE = "SET_USER_PROFILE";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

let initialState = { 
    email:"",
    password: "",
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
        default:
            return state;
    }

}

export const setUserProfile = (email, password) => ({type: SET_USER_PROFILE, email: email, password: password});

export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});

export default profileReducer;