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
                <h5>e-mail</h5>
                <input type ='text'/>
                <h5>password</h5>
                <input type = "text"/>
                <button className="login__button"><h3>login</h3></button>
            </div>

        </div>
    )
}

export default Login
