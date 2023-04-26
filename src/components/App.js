import React, { useContext } from 'react';
import MainPage from './mainPage';
import Login from './login';
import * as Spotify from './fetch';
import { StateContext } from '../context/StateContext';

const params = new URLSearchParams(window.location.search);

function App() {
  console.log(params);
  const { login } = useContext(StateContext);
  
  // If user is logged in, return mainpage component
  if (true) {
     return <MainPage />
    }  
}

export default App;

