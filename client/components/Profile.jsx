import React, { useEffect, useState } from 'react';
import '../styles/profile.css';
// import { response } from '../../server/server';

const Profile = ({ user }) => {
  const [hubs, setHubs] = useState([]);

  const getHubs = () => {
    return fetch(`http://localhost:8080/hubs/${user}`)
      .then((response) => response.json())
      .then((hub) => {
        console.log(hub);
        setHubs([hub]);
      });
  };

  useEffect(() => {
    getHubs();
  }, []);

  return (
    <div className="profileComponentContainer">
      <div className="titleBox">
        <h1 className="profileTitle">WeShould App</h1>
      </div>

      <div className="messageBox">
        <h2 className="welcomeMessage">Welcome {user}</h2>
      </div>

      <div className="HubList flex">
        <h3 className="yourConnections">Your Connections</h3>

        {hubs[0] && (
          <div className="hub flex">
            <p className="hubName">{hubs[0].name}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
