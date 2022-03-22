import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router';
import './App.css';

import Homepage from './pages/homepage/homepage';
import { Navigate } from 'react-router';

import SignUpPage from './pages/sign-up/sign-up';
import Main from './pages/main/main';
import { useEffect } from 'react';
import { setCurrentUser } from './redux/user/user.action';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './firebase/firebase.config';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { ProfilePage } from './pages/profile/profile';
import { getUserData } from './firebase/firestore/firestore';
import { setProfileInfo } from './redux/profile/profile.action';


function App() {
  const user = useSelector(state => state.currentUser.currentUser);
  const dispatch = useDispatch()

  useEffect(() => {
    const app = initializeApp(firebaseConfig)
    const db = getFirestore();
    const auth = getAuth();

    auth.onAuthStateChanged(async(user) => {
      await dispatch(setCurrentUser(user));
      await getUserData(user.uid).then(result => dispatch(setProfileInfo(result))); 
    })
  }, [])
  

  return (
    <div className='container'>
        <Routes>
          <Route path="/" element={user ? <Navigate to = "/main" /> : <Homepage />} />
          <Route path="/signup" element={user ? <Navigate to="/main" /> : <SignUpPage /> } />
          <Route path="/main" element={user ? <Main /> : <Navigate to="/"/>} />
          <Route path='/profile' element={user ? <ProfilePage /> : <Navigate to="/" />} />
        </Routes>
    </div>
  );
}

export default App;
