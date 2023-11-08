import React from 'react';

import '../styles/signUp.css';

const SignIn = ({ setNeedAccount, setLoggedIn }) => {
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
        <form method="POST" className="flex">
          <input name="username" type="text" placeholder="username" />
          <input name="password" type="text" placeholder="password" />
          <input
            className="logIn-Btn"
            type="submit"
            value="Create User"
            onClick={() => {
              setLoggedIn(true);
              setNeedAccount(false);
            }}
          />
        </form>
      </div>
    </div>
  );
};

export default SignIn;
