import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import { controllerReducer } from './controller/controller.reducer';
import SignInReducer from './sign-in/signin-reducer';
import { userReducer } from './user/user.reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['currentUser']
}

const rootReducer = combineReducers({
    signin: SignInReducer,
    currentUser: userReducer,
    dropdownList: controllerReducer
})

export default persistReducer(persistConfig, rootReducer )