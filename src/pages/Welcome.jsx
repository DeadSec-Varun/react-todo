import React, { useState } from 'react';
import Login from '../components/Login';
import Signup from '../components/Signup';
import welcomeLeftPng from '../assets/welcome-left.png';
import welcomeRightPng from '../assets/welcome-right.png';

const Welcome = () => {
  const [welcomePage, setWelcomePage] = useState('login');

  return (
    <div className="flex items-center justify-evenly p-4 h-screen bg-white shadow-lg">
        <img src={welcomeLeftPng} alt="welcome-left" className="h-3/4" />
        <div className="flex flex-col items-center justify-center w-1/2 h-full p-4">
          {welcomePage === 'login' ? <Login setPage={setWelcomePage} /> : <Signup setPage={setWelcomePage} />}
        </div>
        <img src={welcomeRightPng} alt="welcome-right" className="h-3/4" />
    </div>
  );
};

export default Welcome;