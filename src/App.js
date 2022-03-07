import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router';
import './App.css';

import Homepage from './pages/homepage/homepage';
import { Navigate } from 'react-router';

import SignUpPage from './pages/sign-up/sign-up';
import Main from './pages/main/main';

function App() {
  const user = useSelector(state => state.currentUser.currentUser);
  
  return (
    <div className='container'>
        <Routes>
          <Route path="/" element={ <Homepage />} />
          <Route path="/signup" element={ <SignUpPage /> } />
          <Route path="/main" element={user ? <Main /> : <Navigate to="/"/>} />
        </Routes>
    </div>
  );
}

export default App;
