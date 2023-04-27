import React, { useContext }  from 'react';
import { StateContext } from '../context/StateContext';

export default function Login() {
  const {login, setLogin} = useContext(StateContext);
  
  setLogin(false);
  
  const handleLoginClick = (e) => {
    console.log('clicked');
    e.preventDefault();
    window.location.href = 'http://localhost:3000/login'
  }

  return (
    <div id="login">
      <h1>Welcome to Spinder 1.0</h1>
      <button onClick={handleLoginClick}>Login
        {/* here we want to make a condition on click go to spotify oauth */}
      </button>
    </div>
  )
}