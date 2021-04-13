
const SUBMIT_TOPIC = "SUBMIT_TOPIC";

let initialState = { 
    name:"",
    isFetching: false,
};

const configureReducer = (state = initialState, action) => {

    switch(action.type){
        case SUBMIT_TOPIC:{
            return {...state, email: action.name}
        }
        default:
            return state;
    }

}

export default configureReducer;