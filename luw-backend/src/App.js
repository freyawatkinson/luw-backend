
import React, { useState } from 'react';
import './App.css';

import Axios from 'axios';
import LoginPage from './Components/LoginPage';
import Layout from './Components/Layout';

function App() {

  // const [usernameReg, setUsernameReg] = useState("");
  // const [passwordReg, setPasswordReg] = useState("");

  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");

  // const [loginStatus, setLoginStatus] = useState("");

  // const register = () => {
  //   Axios.post('http://localhost3002/register', {
  //     username: usernameReg,
  //     password: passwordReg,
  //   }).then((response) => {
  //     console.log(response);
  //   }) ;
  // }

  // const login = () => {
  //   Axios.post('http://localhost3002/login', {
  //     username: username,
  //     password: password,

  //   }).then((response) => {
  //     if (response.data.message) {
  //       setLoginStatus(response.data.message)
  //     } else {
  //       setLoginStatus(response.data[0].username)
  //     }
  //   }) ;
  // }

  return (
    <div className="App">
      <Layout/>
      <LoginPage/>
      
      {/* <div className="registration">
        <h1>Registration</h1>
        <label>Username</label>
        <input type="text" onChange={(e) => {
          setUsernameReg(e.target.value)
        }}></input>
        <label>Password</label>
        <input type="text"></input>
        <button onClick={register}>Register</button>
      </div>
      <div className="login">
        <h1>Login</h1>
        <input type="text" placeholder="Enter Username"></input>
        <input type="text" placeholder="Enter Password"></input>
        <button>Login</button>
      </div> */}
    </div>
  );
}

export default App;
