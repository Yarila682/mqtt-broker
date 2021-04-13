import React from 'react';
import Main from '../Main';
import {connect} from 'react-redux';
import {getAuthUserData,logout } from '../../Redux/Reducers/auth-reducer';

class MainContainer extends React.Component {
    componentDidMount() {
        this.props.getAuthUserData();
    }
    render(){ 
        return <Main {...this.props} />
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    email: state.auth.email,
    token: state.auth.token,
})

export default connect (mapStateToProps, {getAuthUserData, logout}) (MainContainer);