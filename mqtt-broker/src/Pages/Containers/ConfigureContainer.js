import React from 'react';
import {connect} from 'react-redux';
import {reduxForm} from 'redux-form';
import md5 from 'md5';
import {AddTopic, toggleIsFetching, setTopicData, setTopicList, GetTopics, deleteTopic} from '../../Redux/Reducers/configure-reducer';
import ConfigureForm from '../Configure';
import {withAuthRedirect} from '../../Common/HOC/withAuthRedirect';
import Preloader from '../../Common/Preloader';

const ConfigureReduxForm = reduxForm({
    form: 'configure'
})(ConfigureForm);

class ConfigureContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        this.props.GetTopics(this.props.token);
        this.props.toggleIsFetching(false);
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.topics !== this.props.topics){
            this.props.setTopicList(this.props.topics);
        }
    }

    onSubmit = (formData) => {
        let topicName = this.props.email + '/' + formData.topicname;
        let topicPassword = '';
      
        if(this.props.topics.find(item => item.topic_data.topicname === topicName)){
            alert('Имя топика уже занято!');
            return
        }
        
        if(!formData.topicpassword){
            topicPassword = this.props.password;
        }else{
            topicPassword = md5(formData.topicpassword);
        }
        this.props.AddTopic(topicName, topicPassword, this.props.token);
    }


    render() {
        return <>
        { this.props.isFetching ? <Preloader /> : null}
            <ConfigureReduxForm onSubmit = {this.onSubmit} {...this.props}/>
        </>
    }    
}

let AuthRedirectComponent = withAuthRedirect(ConfigureContainer);

let mapStateToProps = (state) => ({
    email: state.profilePage.email,
    password: state.profilePage.password,
    topics: state.configurePage.topics,
    isChange: state.configurePage.isChange,
    isFetching: state.configurePage.isFetching,
    token: state.auth.token,
});

export default connect(mapStateToProps, {AddTopic, GetTopics, toggleIsFetching, setTopicData, setTopicList, deleteTopic}) (AuthRedirectComponent);
