import React from 'react';
import './Loader.css';
import logo from '../assets/logo.png'; // Asegúrate que tu logo esté aquí

function Loader() {
  return (
    <div className="loader-container">
      <img src={logo} alt="Cinemark logo" className="loader-logo" />
    </div>
  );
}

export default Loader;
