import React from 'react';
import '../../Styles/Login.scss';


function Login() {
    return (
        <div className ="login">

            <div className="login__fields">
            <img 
            className="login__logo"
            src='https://d2k4rtwxmqgfh9.cloudfront.net/images/logo.png'
            alt='College HUNKS'/>
                <small>e-mail</small>
                <input type ='text'/>
                <small>password</small>
                <input type = "text"/>
                <button className="login__button"><h3>login</h3></button>
            </div>

        </div>
    )
}

export default Login
