import React from 'react'
import {connect} from 'react-redux';
import {reduxForm} from 'redux-form';
import ProfileForm from '../Profile';
import {authAPI} from '../../Api/api';
import {setUserProfile, toggleIsFetching, mosquittoOn, mosquittoOff} from '../../Redux/Reducers/profile-reducer';
import {withAuthRedirect} from '../../Common/HOC/withAuthRedirect';
import Preloader from '../../Common/Preloader';

const ProfileReduxForm = reduxForm({
    form: 'profile'
})(ProfileForm);

class ProfileContainer extends React.Component {

    componentDidMount(){
        this.props.toggleIsFetching(true);
        authAPI.me(this.props.token).then(response => {
            console.log(response)
            this.props.setUserProfile(response.data.profile.user_data.email, response.data.profile.user_data.password, response.data.profile.user_data.mosquitto);
            this.props.toggleIsFetching(false);
        });
    }

    onSubmit = (formData) => {
        
    }

    render() {
        return <>
        { this.props.isFetching ? <Preloader /> : null}
            {/* <Profile {...this.props} /> */}
            <ProfileReduxForm onSubmit= {this.onSubmit} {...this.props}/>
        </>
    }
}

let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

let mapStateToProps = (state) => ({
    email: state.profilePage.email,
    isFetching: state.profilePage.isFetching,
    mosquittoIsOn: state.profilePage.mosquittoIsOn,
    token: state.auth.token,
});

export default connect(mapStateToProps, {setUserProfile, toggleIsFetching, mosquittoOn, mosquittoOff}) (AuthRedirectComponent);