import {combineReducers} from 'redux';
import SignInReducer from './sign-in/signin-reducer';
import { userReducer } from './user/user.reducer';

export default combineReducers({
    signin: SignInReducer,
    currentUser: userReducer
})