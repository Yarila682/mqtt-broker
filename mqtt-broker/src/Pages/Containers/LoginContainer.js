import {connect} from "react-redux";
import Login from "../Login";
import{
    SendFormToLogin,
    onEmailChangeLogin,
    onPasswordChangeLogin,
    FormValidatorLogin,
    ChangeStatusUser,
} from "../../Redux/Reducers/login-reducer";

let mapStateToProps = (state) => {
    return{
        loginPage: state.loginPage
    }
}

const LoginContainer = connect(mapStateToProps, {
    onEmailChangeLogin,
    onPasswordChangeLogin,
    FormValidatorLogin,
    SendFormToLogin,
    ChangeStatusUser
}) (Login);

export default LoginContainer;