import React, { useState } from 'react';

import '../styles/signUp.css';

const SignIn = ({ CreateUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="signinComponentContainer">
      <div className="titleContainer flex">
        <p className="signin-title">WeShould</p>
        <p className="info">
          Never again forget all those <strong>"We Should..."</strong> plans
          with your friends
        </p>
      </div>

      <div className="signUp-container flex">
        <form
          onSubmit={(event) => {
            CreateUser(username, password);
            event.preventDefault();
          }}
          className="flex"
        >
          <input
            name="username"
            type="text"
            placeholder="username"
            value={username}
            onChange={(event) => {
              const { value } = event.target;
              setUsername(value);
            }}
          />
          <input
            name="password"
            type="text"
            placeholder="password"
            value={password}
            onChange={(event) => {
              const { value } = event.target;
              setPassword(value);
            }}
          />
          <input className="logIn-Btn" type="submit" value="Create User" />
        </form>
      </div>
    </div>
  );
};

export default SignIn;
