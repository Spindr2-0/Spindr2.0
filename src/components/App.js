import React, { useContext } from 'react';
import MainPage from './mainPage';
import Login from './Login';
import * as Spotify from './fetch';
import { StateContext } from '../context/StateContext';
import axios from 'axios';


// need to set header with token for axios fetch requests
axios.defaults.headers.common['Authorization'] = `${tokenType} ${token}`;

async function App() {
  // global state for login
  const { login, setLogin } = useContext(StateContext);
  // const {user, setUser} = useContext(stateContext)

  // grabs token and token type from cookies using helper function defined in bottom
  const token = getCookieValue('access_token');
  const tokenType = getCookieValue('token_type');

  // testing
  console.log('token', token);
  console.log('tokenType', tokenType);

  // making req to backend to verify token ( we pass in our token from cookies), will change login state with logic depending on result
  try {
    const result = await axios.post('/some_end_point', {tokenType, token});
    if(result) {
      setLogin(true)
    }
  } catch (err) {
    console.log(err);
  }
  
  // If user is logged in, return mainpage component
  if (login) {
     return <MainPage />
  } else {
     return <Login />
  }
}


const getCookieValue = (name) => (
  document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)')?.pop() || ''
)


export default App;

