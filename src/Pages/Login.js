import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Input } from '../Common/FormsControl';
import { login, toggleIsFetching } from '../Redux/Reducers/auth-reducer';
import Preloader from '../Common/Preloader';
import './Styles/Login.css';

//разметка страницы входа
const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className="wrapper-title">
                <div className="title">
                    <h3>Добро пожаловать в MQTT Broker!</h3>
                </div>
            </div>
            {
                /* Вывод сообщения в случае ошибки */
                props.error &&
                <div className="alert-message">
                    <div class="alert alert-danger" role="alert">
                        {props.error}
                    </div>
                </div>
            }
        
            <div className="window-login">
                <div className="wrapper-forms">
                    <div className="input-group mb-3">
                        <Field name={"email"} component={Input} title="E-mail" id="email"
                            type="email" className="form-control" placeholder="Email"
                            aria-label="Email" aria-describedby="mailLabel" required />
                    </div>
                    <div className="input-group mb-3">
                        <Field name={"password"} component={Input} title="Пароль" id="password"
                            type="password" className="form-control" placeholder="Password" aria-label="Password"
                            Ы aria-describedby="passwordLabel" required />
                    </div>
                </div>

                <div className="bottom-element">
                    <div className="forgot-password">
                        <a className="link" href="#">Забыли пароль?</a>
                    </div>
                    <div className="wrapper-button">
                        <button className="btn btn-primary">Войти</button>
                    </div>
                </div>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login',
})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.toggleIsFetching(true);
        props.login(formData.email, formData.password);
        props.toggleIsFetching(false);
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"} />;
    }

    return <div>
        {props.isFetching ? <Preloader /> : null}
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
}

//Объект с необходимыми данными
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    isFetching: state.auth.isFetching
})

export default connect(mapStateToProps, { login, toggleIsFetching })(Login);