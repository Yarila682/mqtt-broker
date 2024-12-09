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
            name: null,
            passwordtopichash: null,
        }
    },
    isChange: false,
    isFetching: false,
};

const configureReducer = (state = initialState, action) => {

    switch(action.type){
        case SET_TOPIC_DATA:{
            if (state.topics) {
                let topic = action.topic
            return {
                ...state,
                topics: [...state.topics, topic],
                
            }
            }
            else {
                let topic = action.topic
                return {
                    ...state,
                    topics: [topic],
                }
            }
            
        }
        case SET_TOPIC_LIST: {
            return {
                ...state,
                topics: action.topics
            }
        }
        case DELETE_TOPIC: { 
           let stateCopy = {...state};
           let index = action.index;
           stateCopy.topics = state.topics.slice()
           stateCopy.topics.splice(index, 1);
           return stateCopy;
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
export const deleteTopic = (index) => ({type: DELETE_TOPIC, index: index})


export const DeleteTopic = (token, name, index) => (dispatch) =>{
    topicAPI.delete_topic(token, name).then(response => {
        if(response.status){
            dispatch(deleteTopic(index));
        }
    })
}

export const AddTopic = (name, passwordtopichash, token) => (dispatch) => {
    topicAPI.create_topic(name, passwordtopichash, token).then(response => {
        console.log(response)
        dispatch(setTopicData(response.data.topic));
    })
}

export const GetTopics = (token, email) => (dispatch) => {
    topicAPI.list_topics(token, email).then(response => {
        if (response.status === 200) {
            dispatch(setTopicList(response.data.topics));
        }
    });
};

export default configureReducer;