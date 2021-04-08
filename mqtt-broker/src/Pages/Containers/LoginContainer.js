import {connect} from "react-redux";
import Login2 from "../Login2";
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
}) (Login2);

export default LoginContainer;