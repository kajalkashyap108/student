import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

function Dashboard() {
  const { isLoggedIn, logout } = useContext(AuthContext);

  return (
    <div>
      <h1>Welcome to the Dashboard</h1>
      <p>This page is only accessible to logged-in users.</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Dashboard;