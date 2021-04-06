import EmailValidator  from 'email-validator';
import md5 from 'md5';
import {usersAPI} from '../../Api/api';

const UPDATE_EMAIL_INPUT = 'UPDATE-EMAIL-INPUT';
const UPDATE_PASSWORD_INPUT = 'UPDATE-PASSWORD-INPUT';
const FORM_VALIDATOR = 'FORM-VALIDATOR';
const SEND_FORM = 'SEND-FORM';
const CHANGE_STATUS_USER = 'CHANGE-STATUS-USER';

let initialState = { 
    email:"",
    password:"",
    type:"guest",
    alert_message: "",
    isAuth: false,
};

const loginReducer = (state = initialState, action) => {
   
    switch(action.type){
        case UPDATE_EMAIL_INPUT:
            return {
                ...state,
               email: action.email,
            };
        case UPDATE_PASSWORD_INPUT:
            return {
                ...state,
                password: action.password,
            };
        case SEND_FORM:
            usersAPI.SendtoLogin(action.email, md5(action.password)).then(data => {
                console.log(data.status);
            })
            return {
                ...state,
                isAuth: true,
            };
        case FORM_VALIDATOR:
            if(!EmailValidator.validate(action.email)){
                return {
                    ...state,
                    statusValid: false,
                    alert_message: "Email введен неверно!",
                };
            }
            if(action.email === '' || action.password === ''){
                return {
                    ...state,
                    status: true,
                    statusValid: false,
                    alert_message: "Заполните все поля!"
                };
            }
            return {
                ...state,
                statusValid: true, 
                alert_message: "status of valid is OK!"
            };
        case CHANGE_STATUS_USER:
            return {
                ...state,
                type: action.typeUser
            };
        default:
            return state;
    }
};


export const onEmailChangeLogin = (Email) => ({type: UPDATE_EMAIL_INPUT, email: Email});

export const onPasswordChangeLogin = (Password) => ({type: UPDATE_PASSWORD_INPUT, password: Password});

export const FormValidatorLogin = (Email,Password) => ({type: FORM_VALIDATOR, email: Email, password: Password});

export const SendFormToLogin = (Email, Password) => ({type: SEND_FORM, email: Email, password: Password});

export const ChangeStatusUser = (TypeUser) => ({type: CHANGE_STATUS_USER, typeUser: TypeUser});

// export const SendDataThunkCreator = (email, password) => {
//     return (dispatch) => {
//         dispatch(FormValidator(email, password));
//         usersAPI.SendtoLogin(email, md5(password))
//         .then(data => {
//             response_data = data;  
//         })
//     }
// }

export default  loginReducer;