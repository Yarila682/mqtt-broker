import React from 'react';
import Main from '../Main';
import {connect} from 'react-redux';
import {authAPI} from '../../Api/api';
import setAuthUserData from '../../Redux/Reducers/auth-reducer';

class MainContainer extends React.Component {
    componentDidMount() {
        authAPI.me().then(response => {
            if(response.data.status){
                let {id, email} = response.data.user;
                this.props.setAuthUserData(id, email);
            }
        })
    }
    render(){ 
        return <Main {...this.props} />
    }
    
}

const mapStateToProps = (state) => ({
    isAuth: state.loginPage.isAuth,
    email: state.loginPage.email,
})

export default connect (mapStateToProps, {setAuthUserData}) (MainContainer);