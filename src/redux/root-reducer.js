import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import { controllerReducer } from './controller/controller.reducer';
import { coursesReducer } from './courses/courses.reducer';
import { profileInfoReducer } from './profile/profile.reducer';
import SignInReducer from './sign-in/signin-reducer';
import { userReducer } from './user/user.reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['currentUser', 'profileInfo']
}

const rootReducer = combineReducers({
    signin: SignInReducer,
    currentUser: userReducer,
    dropdownList: controllerReducer,
    profileInfo: profileInfoReducer,
    courses: coursesReducer
})

export default persistReducer(persistConfig, rootReducer )