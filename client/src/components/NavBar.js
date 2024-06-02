import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const NavBar = () => {
  const { user, logout } = useContext(AuthContext);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    // Implementer søkefunksjonen her
    console.log('Søkestring:', searchQuery);
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="nav-bar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">IntelliSense</Link>
        <ul className="nav-links">
          <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/dashboard">Dashboard</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/services">Services</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
        </ul>
        <form className="navbar-search" onSubmit={handleSearch}>
          <input 
            type="text" 
            value={searchQuery} 
            onChange={(e) => setSearchQuery(e.target.value)} 
            placeholder="Search" 
            aria-label="Search" 
          />
          <button type="submit">Search</button>
        </form>
        <div className="navbar-links">
          {user ? (
            <button className="btn btn-logout" onClick={handleLogout}>Logout</button>
          ) : (
            <Link className="btn btn-login" to="/login">Login</Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
