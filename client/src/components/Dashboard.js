import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import UsersList from './UsersList';

const Dashboard = () => {
  const [stats, setStats] = useState({ totalUsers: 0, activeUsers: 0, inactiveUsers: 0 });
  const { user, token } = useContext(AuthContext);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/auth/stats', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setStats(response.data);
      } catch (error) {
        console.error('Error fetching stats:', error);
      }
    };

    fetchStats();
  }, [token]);

  return (
    <div className="dashboard-page">
      <h2>Dashboard</h2>
      <p>Welcome to your dashboard!</p>
      <div className="dashboard-section">
        <h3>User Statistics</h3>
        <p>Number of users: {stats.totalUsers}</p>
        <p>Active users: {stats.activeUsers}</p>
        <p>Inactive users: {stats.inactiveUsers}</p>
      </div>
      {user && user.role === 'admin' && (
        <div className="dashboard-section">
          <h3>All Users</h3>
          <UsersList />
        </div>
      )}
    </div>
  );
};

export default Dashboard;
