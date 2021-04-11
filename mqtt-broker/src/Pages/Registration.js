import React from 'react';
import {reduxForm, Field} from 'redux-form';
import {connect} from 'react-redux';
import md5 from 'md5';
import {Link} from 'react-router-dom';
import {Input} from '../Common/FormsControl';
import {registration} from '../Redux/Reducers/auth-reducer';
import './Styles/Registration.css';

const RegistrationForm = (props) => {
    return (
        <form onSubmit = {props.handleSubmit}>
            <div className ="wrapper-title">
                <div className ="title">
                  <h3>Добро пожаловать в MQTT Broker!</h3>
                </div>
            </div>
            <div className="window-registration">
                <div className="wrapper-forms">
                    <div className="input-group mb-3">
                        <Field name={"email"}  component={Input} title="E-mail" id="email" type="email"  className="form-control" placeholder="Email" aria-label="Email" aria-describedby="mailLabel"/>
                    </div>
                    <div className="input-group mb-3">
                        <Field name={"password"}  component={Input} title="Пароль" id="password" type="password" className="form-control" placeholder="Password" aria-label="Password" aria-describedby="passwordLabel"/>
                    </div>
                </div>
    
                <div className = "bottom-element">
                <div className="account-exists">
                    <Link to = {'/login'}>Уже есть аккаунт?</Link>
                </div>               
                <div className = "wrapper-button">
                    <button className="btn btn-primary">Войти</button>
                </div>
            </div>
            </div>
        </form>
    )
}

const RegistrationReduxForm = reduxForm( {
    form: 'registration',
})(RegistrationForm)

const Registration2 = (props) => {
    const onSubmit = (formData) => {
        props.registration(formData.email, md5(formData.password));
    }
    return <div>
        <RegistrationReduxForm onSubmit = {onSubmit}/> 
    </div>
}

export default connect(null, {registration}) (Registration2);