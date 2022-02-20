import {combineReducers} from 'redux';
import SignInReducer from './sign-in/signin-reducer';

export default combineReducers({
    signin: SignInReducer,
})