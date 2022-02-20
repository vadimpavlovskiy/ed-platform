import { Route, Routes } from 'react-router';
import './App.css';

import Homepage from './pages/homepage/homepage';

import SignUpPage from './pages/sign-up/sign-up';

function App() {
  return (
    <div className='container'>
        <Routes>
          <Route path="/" element={ <Homepage />} /> 
          <Route path="signup" element={ <SignUpPage /> } />
        </Routes>
    </div>
  );
}

export default App;
