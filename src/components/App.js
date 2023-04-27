import React, { useContext, useEffect } from 'react';
import MainPage from './MainPage';
import Login from './login';
import * as Spotify from './fetch';
import { StateContext } from '../context/StateContext';
import axios from 'axios';

 function App() {

  // need to set header with token for axios fetch requests
  axios.defaults.headers.common['Authorization'] = `${tokenType} ${token}`;

  // global state for login
  const { login, setLogin } = useContext(StateContext);
  const { token, setToken } = useContext(StateContext);
  const { tokenType, setTokenType } = useContext(StateContext);
  // const {user, setUser} = useContext(stateContext)

  // grabs token and token type from cookies using helper function defined in bottom
  setToken(getCookieValue('access_token'));
  setTokenType(getCookieValue('token_type'));

  // testing
  console.log('token', token);
  console.log('tokenType', tokenType);



  // making req to backend to verify token ( we pass in our token from cookies), will change login state with logic depending on result
  // try {
  //   const result = await axios.post('/some_end_point', {tokenType, token});
  //   if(result) {
  //     setLogin(true)
  //   }
  // } catch (err) {
  //   console.log(err);
  // }
  
  // If user is logged in, return mainpage component
  // return true for now deciding if to implement verifying tokens on backend
  useEffect(() => {
    console.log('this is using useEffect')
    console.log('before we set Login: ', login);
    setLogin(true)
    console.log('after we set login: ', login)
  }, [login, setLogin]);

  console.log('type of token', typeof(token))
  console.log(login)
  if (login) {
     console.log('u should return to the main page')
     return <MainPage />
  } else {
     return <Login />
  }
}


const getCookieValue = (name) => (
  document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)')?.pop() || ''
)


export default App;

