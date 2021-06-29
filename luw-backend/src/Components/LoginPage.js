import React, { useState } from 'react';
import './LoginPage.css';
import loginimage from './loginimage.png';

import Axios from 'axios';

function LoginPage() {

    const [usernameReg, setUsernameReg] = useState("");
    const [passwordReg, setPasswordReg] = useState("");
  
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
  
    const [loginStatus, setLoginStatus] = useState("");
  
    const register = () => {
      Axios.post('http://localhost3002/register', {
        username: usernameReg,
        password: passwordReg,
      }).then((response) => {
        console.log(response);
      }) ;
    }
  
    const login = () => {
      Axios.post('http://localhost3002/login', {
        username: username,
        password: password,
  
      }).then((response) => {
        if (response.data.message) {
          setLoginStatus(response.data.message)
        } else {
          setLoginStatus(response.data[0].username)
        }
      }) ;
    }
  
    return (
      <div className="container">
          <img className="loginImage" alt="logo" src={loginimage} />
        <h2>Welcome Back</h2>
        
        <div className="login">
          <h1 className="heading"><h1>Login to your account</h1></h1>
          <label className="label">Username</label>
          <input type="text" placeholder="Enter Username"></input>
          <label className="label">Password</label>
          <input type="text" placeholder="Enter Password"></input>
          <button className="button">Login</button>
         
        </div>

        <div className="account">
             
          <h3>Remember me</h3>
          <h3>Forgot password?</h3>
        </div>
        
        

        <div className="registration">
          <h1 className="heading"><h2>Don't have an account? Join our program!</h2></h1>
          <label className="label">Username</label>
          <input type="text" onChange={(e) => {
            setUsernameReg(e.target.value)
          }}></input>
          <label className="label">Password</label>
          <input type="text"></input>
          <button className="button" onClick={register}>Register</button>
        </div>

      </div>
    );
  }
  
  export default LoginPage;
  