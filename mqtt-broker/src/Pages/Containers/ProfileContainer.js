import React from 'react'
import {connect} from 'react-redux';
import Profile from "../Profile";
import {usersAPI} from '../../Api/api.js';
import {setUserProfile, toggleIsFetching} from '../../Redux/Reducers/profile-reducer';
import Preloader from '../../Images/preloader';
import { withRouter } from 'react-router-dom';


class ProfileContainer extends React.Component {
    componentDidMount(){
        this.props.toggleIsFetching(true);
        let userId = this.props.match.params.userId;
        usersAPI.getProfile(userId).then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUserProfile(response.data);
        });
    }

    render() {
        return <>
        { this.props.isFetching ? <Preloader /> : null}
            <Profile {...this.props} profile = {this.props.profile} />
        </>
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile, toggleIsFetching}) (WithUrlDataContainerComponent);