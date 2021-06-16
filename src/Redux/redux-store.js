import {createStore, combineReducers, applyMiddleware} from 'redux';
import menuItemReducer from './Reducers/menuItem-reducer';
import authReducer from './Reducers/auth-reducer';
import profileReducer from './Reducers/profile-reducer';
import configureReducer from './Reducers/configure-reducer';
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';

let reducers = combineReducers({
    auth: authReducer,
    menuitemsPage: menuItemReducer,
    profilePage: profileReducer,
    configurePage: configureReducer,
    form: formReducer,
});
let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;