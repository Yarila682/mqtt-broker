import {connect} from "react-redux";
import Login from "../Login";
import{
    SendForm,
    onEmailChange,
    onPasswordChange,
    FormValidator,
    ChangeStatusUser,
} from "../../Redux/Reducers/login-reducer";

let mapStateToProps = (state) => {
    return{
        loginPage: state.loginPage
    }
}

const LoginContainer = connect(mapStateToProps, {
    onEmailChange,
    onPasswordChange,
    FormValidator,
    SendForm,
    ChangeStatusUser
}) (Login);

export default LoginContainer;