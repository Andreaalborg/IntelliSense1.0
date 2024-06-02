import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import NavBar from './components/NavBar';
import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard';
import About from './components/About';
import RegisterPage from './components/RegisterPage';
import LoginPage from './components/LoginPage';
import VerifyEmail from './components/VerifyEmail';
import Logout from './components/Logout';
import ProtectedRoute from './components/ProtectedRoute';
import './App.css';
import ThreeCanvas from './components/ThreeCanvas';



const AppContent = () => {
  return (
    <div className="App relative">
      <div className="custom-background"></div>
      <NavBar />
      <Routes>
        <Route path="/" element={<>
          <ThreeCanvas />
          <LandingPage />
        </>} />
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>
  );
}

export default App;
