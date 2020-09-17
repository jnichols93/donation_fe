import React, { useState } from "react";
import "../../Styles/Login.scss";
import { auth } from "../../firebase";
import { Link, useHistory } from "react-router-dom";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    //   firebase login logic
    auth.signInWithEmailAndPassword(email, password).then((auth) => {});
  };
  return (
    <div className="login">
      <div className="login__fields">
        <img
          className="login__logo"
          src="https://d2k4rtwxmqgfh9.cloudfront.net/images/logo.png"
          alt="College HUNKS"
        />
        <small>e-mail</small>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <small>password</small>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="login__button" onClick={signIn} type="submit">
          <h3>login</h3>
        </button>
      </div>
    </div>
  );
}

export default Login;
