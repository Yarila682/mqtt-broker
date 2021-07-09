import React from 'react';
import './Styles/Profile.css';

const ProfileForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div className="title">
                <h1>Информация о профиле</h1>
            </div>
            <div className="information">
                <div className="email-wrapper">
                    <h4>Email:</h4>
                    <div className="email">{props.email}</div>
                    
                </div>
                <div className="firstName">
                    <h4>Имя:</h4>
                </div>
                <div className="lastName">
                    <h4>Фамилия:</h4>
                </div>
                <div className="mosquitto-switch">
                    <h4>Mosquitto</h4>
                    <div className="form-button">
                        {
                            props.mosquittoIsOn ?
                                <button className="btn btn-primary" onClick={() => {
                                    props.mosquittoOff(props.token)
                                }}
                                >Выключить</button>
                                :
                                <button className="btn btn-primary" onClick={() => {
                                    props.mosquittoOn(props.token)
                                }}>Включить</button>
                        }
                    </div>
                </div>
            </div>
        </form>
    )
}

export default ProfileForm;