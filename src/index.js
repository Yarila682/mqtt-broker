import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import store from './Redux/redux-store';
import {Provider} from "react-redux";


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store = {store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


// let rerenderEntireTree = (state) => {
//   ReactDOM.render(
//       <React.StrictMode>
//         <BrowserRouter>
//           <Provider store = {store}>
//             <App />
//           </Provider>
//         </BrowserRouter>
//       </React.StrictMode>,
//       document.getElementById('root'));
// }

// rerenderEntireTree(store.getState());

// store.subscribe(() => {
//   let state = store.getState();
//   rerenderEntireTree(state);
// });
