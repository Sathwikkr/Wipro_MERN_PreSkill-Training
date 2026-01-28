import React from 'react';
import { Navigate } from 'react-router-dom';

function RequireAuth({ children }) {
  const isLoggedIn = localStorage.getItem("loggedIn");

  if (!isLoggedIn) {
    // Redirect to login if not authenticated
    return <Navigate to="/login" replace />;
  }

  // Render the protected component if authenticated
  return children;
}

// THIS LINE WAS MISSING OR INCORRECT
export default RequireAuth;