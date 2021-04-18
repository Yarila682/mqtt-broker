import {topicAPI} from '../../Api/api'

const SET_TOPIC_DATA = 'SET_TOPIC_DATA';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = { 
    topics: [],
    id: null,
    topicname:"",
    passwordtopichash: null,
    isFetching: false,
};

const configureReducer = (state = initialState, action) => {

    switch(action.type){
        case SET_TOPIC_DATA:{
            return {
                ...state,
                id: action.id,
                topicname: action.topicname,
                passwordtopichash: action.passwordtopichash
            }
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        default:
            return state;
    }

}

export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const setTopicData = (id, topicname, passwordtopichash) => ({type: SET_TOPIC_DATA, id: id, topicname: topicname, passwordtopichash: passwordtopichash});

export const configure = (nametopic, passwordtopichash) => (dispatch) => {
    topicAPI.create_topic(nametopic, passwordtopichash).then(response => {
        if(response.data.status){
            dispatch(setTopicData())
        }
    })
}

export default configureReducer;