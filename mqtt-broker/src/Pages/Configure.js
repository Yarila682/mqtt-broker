import React from 'react';
import './Styles/Configure.css';
import {Input} from '../Common/FormsControl';

const Configure = (props) => {

    return(
        <div className="configure">
            <div className = "title">
                <h3>Конфигурация Брокера</h3>
            </div>
            <div className="configure_management">
                <div className="topic_management">
                    <div className = "title">
                        <h4>Управление топиком:</h4>
                    </div>
                    <div className="description">
                        <p>Обратите внимание, что ваш Email MQTT является префиксом для всех топиков.</p>
                    </div>
                    <div className="new_topic">
                        <div className="title_new_topic">
                            <div className="wrapper">
                                <div className="prefix"><b>Новый топик:</b></div>
                                <div className="email">props.email</div>
                                <input />
                                <div className="submit"><button>Добавить</button></div>
                            </div>
                        </div>
                    </div>
                    <div className="available_topics">
                        <div className = "title">
                            <b>Доступные топики:</b>
                        </div>
                        <div className="list">
                            props.topics
                        </div>
                    </div>
                </div>
                <div className="user_management">
                    <div className="title">
                        <h4>Пользовательское управление</h4>
                    </div>
                    <div className="description_username">
                        <p>Имя пользователя для вашего MQTT-соединения: props.name</p>
                    </div>
                    <div className="description_password">
                        <p>Ваш пароль брокера MQTT по умолчанию будет таким же, как тот, который вы уже вошли в эту систему.</p>
                        <div className="change_password">
                            <div className="np"><b>Новый MQTT пароль</b></div>
                            <input />
                            <button onClick={props.Submit}>Изменить</button>
                        </div>
                    </div>
                </div>
                <div className="port_management">
                    <div className="title">
                        <h4>Управление Портом</h4>
                    </div>
                    <div className="description">
                        <ul>
                            <li>MQTT TCP Port: 1883 </li>
                            <li>Secure MQTT over TLS/SSL: 3883 </li>
                            <li>MQTT over Websocket Port: 8883 </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Configure;