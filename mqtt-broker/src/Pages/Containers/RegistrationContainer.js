import {connect} from "react-redux";
import Registration from "../Registration";
import{
    SendFormRegistration,
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
    SendFormRegistration,
    ChangeStatusUser
}) (Registration);
export default RegistrationContainer;