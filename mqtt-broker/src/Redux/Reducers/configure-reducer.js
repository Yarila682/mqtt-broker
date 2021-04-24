import {topicAPI} from '../../Api/api'

const SET_TOPIC_DATA = 'SET_TOPIC_DATA';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const SET_TOPIC_LIST = 'SET_TOPIC_LIST';
const DELETE_TOPIC = 'DELETE_TOPIC';

let initialState = { 
    topics: [],
    topic: {
        id: null,
        id_user: null,
        topic_data: {
            mqqt_tcp_port: 1883,
            mqtt_over_websocket_port: 8883,
            secure_mqtt: 3883,
            topicname: null,
            passwordtopichash: null,
        }
    },
    isChange: false,
    isFetching: false,
};

const configureReducer = (state = initialState, action) => {

    switch(action.type){
        case SET_TOPIC_DATA:{
            let topic = action.topic
            return {
                ...state,
                topics: [...state.topics, topic],
                
            }
        }
        case SET_TOPIC_LIST: {
            return {
                ...state,
                topics: action.topics
            }
        }
        case DELETE_TOPIC: { 
            alert('delete');
            break;
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        default:
            return state;
    }

}

export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const setTopicData = ({id, id_user, topic_data}) => ({type: SET_TOPIC_DATA, topic: {id, id_user, topic_data}});
export const setTopicList = (topics) => ({type: SET_TOPIC_LIST, topics: topics});
export const deleteTopic = (topicname) => ({type: DELETE_TOPIC, topicname: topicname})


export const DeleteTopic = () => (dispatch) =>{

}

export const AddTopic = (nametopic, passwordtopichash, token) => (dispatch) => {
    topicAPI.create_topic(nametopic, passwordtopichash, token).then(response => {
        console.log(response)
        dispatch(setTopicData(response.data.topic));
    })
}

export const GetTopics = (token) => (dispatch) => {
    topicAPI.list_topics(token).then(response => {
        console.log(response)
        if(response.data.status){
            dispatch(setTopicList(response.data.data));
        }
    })
}

export default configureReducer;