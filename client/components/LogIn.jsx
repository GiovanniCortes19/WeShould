import React from 'react';

import '../styles/logIn.css';

const LogIn = ({ needAccount, setNeedAccount }) => {
  return (
    <div className="loginComponentContainer">
      <div className="titleContainer flex">
        <p className="login-title">WeShould</p>
        <p className="info">
          Never again forget all those <strong>We Should</strong> plans with
          your friends
        </p>
      </div>

      <div className="logIn-container flex">
        <form method="POST" action="/login" className="flex">
          <input name="username" type="text" placeholder="username" />
          <input name="password" type="text" placeholder="password" />
          <input className="logIn-Btn" type="submit" value="Login" />
        </form>
        <div className="brLine"></div>
        <a
          className="signUp-Btn"
          // href="/signup"
          onClick={() => {
            setNeedAccount(true);
          }}
        >
          Create Account
        </a>
      </div>
    </div>
  );
};

export default LogIn;
