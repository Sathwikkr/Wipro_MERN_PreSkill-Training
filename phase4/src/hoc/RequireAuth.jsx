import React from 'react';
import { Navigate } from 'react-router-dom';

function RequireAuth({ children }) {
  // Check if the user is actually logged in as 'admin'
  const userRole = localStorage.getItem("userRole");

  if (userRole !== "admin") {
    // If not admin, kick them back to the Login page
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default RequireAuth;