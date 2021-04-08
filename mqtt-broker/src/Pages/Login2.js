import React from 'react';
import {reduxForm, Field} from 'redux-form';
import {Input} from '../Common/FormsControl';
import './Styles/Login.css';

const LoginForm = (props) => {
    return (
        <form onSubmit = {props.handleSubmit}>
            <div className ="wrapper-title">
                <div className ="title">
                  <h3>Добро пожаловать в MQTT Broker!</h3>
                </div>
            </div>
            <div className="window-login">
                <div className="wrapper-forms">
                    <div className="input-group mb-3">
                        <Field name={"email"}  component={Input} title="E-mail" id="email" type="email"  className="form-control" placeholder="Email" aria-label="Email" aria-describedby="mailLabel"/>
                    </div>
                    <div className="input-group mb-3">
                        <Field name={"password"}  component={Input} title="Пароль" id="password" type="password" className="form-control" placeholder="Password" aria-label="Password" aria-describedby="passwordLabel"/>
                    </div>
                </div>
    
                <div className="bottom-element">
                    <div className="forgot-password">
                        <a className="link" href="#">Забыли пароль?</a>
                    </div>

                    <div className = "wrapper-button">
                        <button className="btn btn-primary">Войти</button>
                    </div>
                </div>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm( {
    form: 'login',
})(LoginForm)

const Login2 = (props) => {
    const onSubmit = (formData) => {
        console.log(formData);
    }
    return <div>
        <LoginReduxForm onSubmit = {onSubmit}/> 
    </div>
}

export default Login2;