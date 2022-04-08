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
import { getData } from './firebase/firestore/firestore';
import { setProfileInfo } from './redux/profile/profile.action';
import { onSnapshot } from 'firebase/firestore';
import { doc } from 'firebase/firestore';
import { CoursePage } from './pages/course/course-page';
import { CoursesPage } from './pages/courses/courses-page';
import { WishlistPage } from './pages/wishlist/wishlist-page';


function App() {
  const user = useSelector(state => state.currentUser.currentUser);
  const profileInfo = useSelector(state => state.profileInfo.profileInfo)
  const dispatch = useDispatch()

  useEffect(() => {
    const app = initializeApp(firebaseConfig)
    const db = getFirestore();
    const auth = getAuth();

    // onAuthStateChanged using for listening auth state
    auth.onAuthStateChanged(async(user) => {
      await dispatch(setCurrentUser(user));
      await getData('users',user.uid).then(result => dispatch(setProfileInfo(result))); 
    })

    // onSnapShot using for listeng firestore changes and updating profile info
    onSnapshot(doc(db, "users", `${user.uid}`), (doc) => {
      dispatch(setProfileInfo(doc.data()))
  });
  }, [])
  

  return (
    <div className='container'>
        <Routes>
          <Route path="/" element={user ? <Navigate to = "/main" /> : <Homepage />} />
          <Route path="signup" element={user ? <Navigate to="/main" /> : <SignUpPage /> } />
          <Route path="main" element={user ? <Main /> : <Navigate to="/"/>} />
          <Route path="courses" element={user ? <CoursesPage/> : <Navigate to='/'/> } />
          <Route path="courses/:itemid" element={<CoursePage />}/>
          <Route path='profile' element={user ? <ProfilePage /> : <Navigate to="/" />} />
          <Route path='profile/wishlist' element={user ? <WishlistPage /> : <Navigate to="/"/>}/>
        </Routes>
    </div>
  );
}

export default App;
