import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import './UsersList.css';

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const { token } = useContext(AuthContext);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/auth/users', {
        headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, [token]);

  return (
    <div>
      <h3>User List</h3>
      <div className="table-wrapper">
        <table className="users-table">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Birth Date</th>
              <th>Gender</th>
              <th>Country</th>
              <th>Password (Hashed)</th>
              <th>Verified</th>
              <th>Verification Code</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user._id}>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>{new Date(user.birthDate).toLocaleDateString()}</td>
                <td>{user.gender}</td>
                <td>{user.country}</td>
                <td>{user.password}</td>
                <td>{user.isVerified ? 'Yes' : 'No'}</td>
                <td>{user.verificationCode || 'N/A'}</td>
                <td>{user.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersList;
