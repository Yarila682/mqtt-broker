import React from 'react';
import {Field} from 'redux-form'
import {Input} from '../Common/FormsControl';
import './Styles/Configure.css';

const ConfigureForm = (props) => {

    let topics = props.topics;
    //() => {props.deleteTopic(m.topic_data.name)}
    //props.token, m.topic_data.name,
    console.log(topics)
    if (topics) {
        topics = topics.map((m, i) => <li className="topic-element">{m.name}<span className="delete" onClick={() => {props.DeleteTopic(props.token, m.id, i)}}></span></li>)
    }
    
    return( 
        <form onSubmit = {props.handleSubmit}>
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
                                <div className="input-group mb-3">
                                    <Field name={"name"}  component={Input} title={props.email} id="name" type="text"  className="form-control" placeholder="name" aria-label="name" required/>
                                </div>
                                <div className = "wrapper-button">
                                    <button className="btn btn-primary">Добавить</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="available_topics">
                        <div className = "title">
                            <b>Доступные топики:</b>
                        </div>
                        <div>
                            <ul className="topic_list">
                                {topics}
                            </ul>
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
        </form>
    )
}

export default ConfigureForm;
