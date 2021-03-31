import {connect} from "react-redux";
import Registration from "../Registration";
import{
    SendForm,
    onEmailChange,
    onPasswordChange,
    FormValidator,
    ChangeStatusUser,
} from "../../Redux/Reducers/registration-reducer";

let mapStateToProps = (state) => {
    return{
        registrationPage: state.registrationPage
    }
}

const RegistrationContainer = connect(mapStateToProps, {
    onEmailChange,
    onPasswordChange,
    FormValidator,
    SendForm,
    ChangeStatusUser
}) (Registration);
export default RegistrationContainer;