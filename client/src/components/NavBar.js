import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch the user information from localStorage
    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  return (
    <nav className="nav-bar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/logout">Logout</Link></li>
      </ul>
      {user && (
        <div className="user-info">
          <p>Logged in as: {user.username}</p>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
