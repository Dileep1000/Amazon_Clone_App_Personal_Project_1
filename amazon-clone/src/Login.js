import React from 'react';
import './Login.css';
import { Link, useActionData } from "react-router-dom"; 
import { useState } from "react";

function Login() {
   
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    
  return (
    <div class = 'loginPage'>
        <Link to = '/Home'>
            <img class = 'Amazon_Logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'></img>
        </Link>

        <div class = 'loginContainer'>
            <h1>Sign-In</h1>
            <form>
                <h5>E-mail</h5>
                <input type = 'text' value = {email} onChange = {e => setEmail(e.target.value)}/>

                <h5>Password</h5>
                <input type = 'password' value = {password} onChange = {e => setPassword(e.target.value)}/> 

                <button class = 'Login_SignIn_Button'>Sign In</button>
            </form>

            <p>
                By signing in you agree to the FAKE AMAZON CLONE WEBSITE Conditions of Use & Sale. 
                Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
            </p>

            <button class = 'Register_Acc_Button'>Create your Amazon Account</button>
        </div>    
    </div>
  )
}

export default Login