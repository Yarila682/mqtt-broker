import './Styles/Registration.css';
import React from 'react';
import {Link} from 'react-router-dom';

export default function Registration(props){
    let NewEmailElement = React.createRef();
    let NewPasswordElement = React.createRef();

    let onEmailChange = () => {
        let Email = NewEmailElement.current.value;
        props.onEmailChange(Email);
    }
    let onPasswordChange = () => {
        let Password = NewPasswordElement.current.value;
        props.onPasswordChange(Password);
    }
   
    let SendForm = () => {
        let Email = NewEmailElement.current.value;
        let Password = NewPasswordElement.current.value;
        props.FormValidator(Email, Password)
        if(!props.registrationPage.statusValid){
            console.log(props.registrationPage.alert_message)
            return;
        }
        props.SendForm(Email, Password);
        
        console.log(props.registrationPage.alert_message);
        if(props.registrationPage.type === 'user'){
            NewEmailElement.current.value = '';
            NewPasswordElement.current.value = '';
        }
    }

    return(
        <div className = "registration">
            <div className = "wrapper-title">
                <div className = "title">
                    <h3>Добро пожаловать в MQTT Broker!</h3>
                </div>
            </div>
        
        <div className = "window-registration">
            <div className = "wrapper-forms">
                <div className="input-group mb-3">
                    <span className="input-group-text" id="mailLabel">E-mail</span>
                    <input  ref={NewEmailElement} onChange={onEmailChange} id="email" name="email" type="email"  className="form-control" placeholder="Email" aria-label="Email" aria-describedby="mailLabel" />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="passwordLabel">Пароль</span>
                    <input ref = {NewPasswordElement} onChange={onPasswordChange} id="password" name="password" type="password" className="form-control" placeholder="Password" aria-label="Password" aria-describedby="passwordLabel" />
                </div>
            </div>

            <div className = "bottom-element">
                    <div className="account-exists">
                        
                        <Link to = {'/login'}>Уже есть аккаунт?</Link>
                    </div>               
                <div className = "wrapper-button">
                    <button onClick={SendForm} type="submit" className="btn btn-primary">Войти</button>
                </div>
            </div>
        </div>
    </div>
    )
};