import React from 'react';

const Hub = ({ activeHub }) => {
  return (
    <div>
      <h2>Inside the Hub: </h2>
      <h2>{activeHub.name}</h2>
    </div>
  );
};

export default Hub;
