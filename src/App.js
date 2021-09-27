//import logo from './logo.svg';
import React from 'react';
import profileImage from './img/piggy.png'

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>My React Application</h1>
      <h2>Author: Eva</h2>
      <img src={profileImage} alt="profile-image" />
    </div>
  );
}

export default App;
