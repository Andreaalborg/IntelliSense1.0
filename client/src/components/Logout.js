// src/components/Logout.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem('token'); // Fjern token fra lokal lagring
    navigate('/'); // Omdiriger til hovedsiden
  }, [navigate]);

  return null;
};

export default Logout;
