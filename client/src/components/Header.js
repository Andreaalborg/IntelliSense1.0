// src/components/Header.js
import React from 'react';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  return (
    <header className="App-header">
      {location.pathname === '/' && <h1>Welcome to IntelliSense</h1>}
    </header>
  );
};

export default Header;
