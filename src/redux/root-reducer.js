import {combineReducers} from 'redux';
import { controllerReducer } from './controller/controller.reducer';
import SignInReducer from './sign-in/signin-reducer';
import { userReducer } from './user/user.reducer';

export default combineReducers({
    signin: SignInReducer,
    currentUser: userReducer,
    dropdownList: controllerReducer
})