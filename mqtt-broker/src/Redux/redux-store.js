import {createStore, combineReducers} from 'redux';
import loginReducer from './Reducers/login-reducer';
import menuItemReducer from './Reducers/menuItem-reducer';
import registrationReducer from './Reducers/registration-reducer';

let reducers = combineReducers({
    menuitemsPage: menuItemReducer,
    loginPage: loginReducer,
    registrationPage: registrationReducer,
});
let store = createStore(reducers);

window.store = store;

export default store;