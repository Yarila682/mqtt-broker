import React from 'react'
import {connect} from 'react-redux';
import Configure from '../Configure';
import {toggleIsFetching} from '../../Redux/Reducers/profile-reducer';
import {withAuthRedirect} from '../../Common/HOC/withAuthRedirect';
import Preloader from '../../Common/Preloader';
import {topicAPI} from '../../Api/api';



class ConfigureContainer extends React.Component {
    componentDidMount(){

        this.props.toggleIsFetching(true);
        //загрузка 
        topicAPI.list_topics(this.props.token).then(response => {
            console.log("wsup")
            console.log(response);
        });
        this.props.toggleIsFetching(false);
    }

    render() {
        return <>
        { this.props.isFetching ? <Preloader /> : null}
            <Configure {...this.props} />
        </>
    }
}

let AuthRedirectComponent = withAuthRedirect(ConfigureContainer);

let mapStateToProps = (state) => ({
    isFetching: state.profilePage.isFetching,
    token: state.auth.token,
});

export default connect(mapStateToProps, {toggleIsFetching}) (AuthRedirectComponent);