import React from 'react';
import '../styles/profile.css';

const Profile = ({ user }) => {
  return (
    <div className="profileComponentContainer">
      <div className="titleBox">
        <h1 className="profileTitle">WeShould App</h1>
      </div>

      <div className="messageBox">
        <h2 className="welcomeMessage">Welcome {user}</h2>
      </div>
    </div>
  );
};

export default Profile;
