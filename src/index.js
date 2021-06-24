import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import store from './Redux/redux-store';
import {Provider} from "react-redux";


//Рендер основной компоненты App
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      {/*Конпонент позволяющий подписаться дочерним элементам на изменения контекста*/}
      <Provider store = {store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
