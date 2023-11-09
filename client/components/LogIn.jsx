import React, { useState } from 'react';

import '../styles/logIn.css';

const LogIn = ({ needAccount, setNeedAccount, LogInUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

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
        <form
          onSubmit={(event) => {
            LogInUser(username, password);
            event.preventDefault();
          }}
          className="flex"
        >
          <input
            name="username"
            type="text"
            onChange={(event) => {
              const { value } = event.target;
              setUsername(value);
            }}
            placeholder="username"
          />
          <input
            name="password"
            type="text"
            onChange={(event) => {
              const { value } = event.target;
              setPassword(value);
            }}
            placeholder="password"
          />
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
