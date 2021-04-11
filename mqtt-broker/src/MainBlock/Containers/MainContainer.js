import React from 'react';
import Main from '../Main';
import {connect} from 'react-redux';
import {authAPI} from '../../Api/api';
import setAuthUserData from '../../Redux/Reducers/auth-reducer';

class MainContainer extends React.Component {
    componentDidMount() {
        // df
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

export default connect (mapStateToProps, {setAuthUserData}) (MainContainer);