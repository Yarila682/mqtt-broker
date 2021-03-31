import {createStore, combineReducers, applyMiddleware} from 'redux';
import loginReducer from './Reducers/login-reducer';
import menuItemReducer from './Reducers/menuItem-reducer';
import registrationReducer from './Reducers/registration-reducer';
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
    menuitemsPage: menuItemReducer,
    loginPage: loginReducer,
    registrationPage: registrationReducer,
});
let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;