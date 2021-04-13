import React from 'react'
import {connect} from 'react-redux';
import Profile from "../Profile";
import {authAPI} from '../../Api/api';
import {setUserProfile, toggleIsFetching} from '../../Redux/Reducers/profile-reducer';
import {withAuthRedirect} from '../../Common/HOC/withAuthRedirect';
import Preloader from '../../Common/Preloader';



class ProfileContainer extends React.Component {
    componentDidMount(){
        this.props.toggleIsFetching(true);
        authAPI.me(this.props.token).then(response => {
            console.log(response)
            let email = response.data.user.user_data.email;
            this.props.setUserProfile(email);
            this.props.toggleIsFetching(false);
        });
    }

    render() {
        return <>
        { this.props.isFetching ? <Preloader /> : null}
            <Profile {...this.props} />
        </>
    }
}

let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

let mapStateToProps = (state) => ({
    email: state.auth.email,
    isFetching: state.profilePage.isFetching,
    token: state.auth.token,
});

export default connect(mapStateToProps, {setUserProfile, toggleIsFetching}) (AuthRedirectComponent);