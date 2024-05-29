// src/components/UsersList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UsersList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/auth/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h3>User List</h3>
      <ul>
        {users.map(user => (
          <li key={user._id}>{user.firstName} {user.lastName} ({user.email})</li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
