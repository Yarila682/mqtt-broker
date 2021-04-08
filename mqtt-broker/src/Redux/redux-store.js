import {createStore, combineReducers, applyMiddleware} from 'redux';
import loginReducer from './Reducers/login-reducer';
import menuItemReducer from './Reducers/menuItem-reducer';
import registrationReducer from './Reducers/registration-reducer';
import authReducer from './Reducers/auth-reducer';
import profileReducer from './Reducers/profile-reducer';
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';

let reducers = combineReducers({
    auth: authReducer,
    menuitemsPage: menuItemReducer,
    profilePage: profileReducer,
    loginPage: loginReducer,
    registrationPage: registrationReducer,
    form: formReducer,
});
let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;