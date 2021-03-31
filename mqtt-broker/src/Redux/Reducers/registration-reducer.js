import EmailValidator  from 'email-validator';
import md5 from 'md5';
import {usersAPI} from '../../Api/api'

const UPDATE_EMAIL_INPUT = 'UPDATE-EMAIL-INPUT';
const UPDATE_PASSWORD_INPUT = 'UPDATE-PASSWORD-INPUT';
const FORM_VALIDATOR = 'FORM-VALIDATOR';
const SEND_FORM = 'SEND-FORM';
const CHANGE_STATUS_USER = 'CHANGE-STATUS-USER';

let initialState = { 
    email: "",
        password:"",
        type: "guest",
        alert_message: "",
        statusValid: false,
};

const registrationReducer = (state = initialState, action) => {

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
            let response_data;
            usersAPI.SendtoRegistration(action.email, md5(action.password)).then(data => {
                response_data = data;  
            })
            return {
                ...state,
                newUser: {...state.newUser,
                     email: action.email,
                    password: md5(action.password),
                    alert_message: response_data 
                },
            };
        case FORM_VALIDATOR:
            if(!EmailValidator.validate(action.email)){
                return {
                    ...state,
                    newUser: {...state.newUser, 
                        alert_message: 'Email введен неверно!',
                        statusValid: false,
                    },
                };
            }
            if(action.email === '' || action.password === ''){
                return {
                    ...state,
                    newUser: {...state.newUser,
                    alert_message: "Заполните все поля!",
                    statusValid: false
                    },
                };
            }
        
            return {
                ...state,
                newUser: {...state.newUser, 
                    email: action.email,
                    statusValid: true, 
                    alert_message: "OK!"
                },
            };
        case CHANGE_STATUS_USER:
            return {
                ...state,
                newUser: {...state.newUser, type: action.typeUser},
            };
        default:
            return {state};
    }
};

export const onEmailChange = (Email) => ({type: UPDATE_EMAIL_INPUT, email: Email});

export const onPasswordChange = (Password) => ({type: UPDATE_PASSWORD_INPUT, password: Password});

export const FormValidator = (Email,Password) => ({type: FORM_VALIDATOR, email: Email, password: Password});

export const SendForm = (Email, Password) => ({type: SEND_FORM, email: Email, password: Password});

export const ChangeStatusUser = (TypeUser) => ({type: CHANGE_STATUS_USER, typeUser: TypeUser});

export default registrationReducer;