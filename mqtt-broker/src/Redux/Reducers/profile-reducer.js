
const SET_USER_PROFILE = "SET_USER_PROFILE";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"

let initialState = { 
    email:"",
    name: "",
    avatar: "",
    isFetching: false,
};

const profileReducer = (state = initialState, action) => {

    switch(action.type){
        case SET_USER_PROFILE:{
            return {...state, ...action.profile}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        default:
            return state;
    }

}

export const setUserProfile = ({email, name}) => ({type: SET_USER_PROFILE, profile: {email, name}});

export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})

export default profileReducer;