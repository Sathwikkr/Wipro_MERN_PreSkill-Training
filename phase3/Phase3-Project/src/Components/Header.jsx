import React from "react";
import { Link, useNavigate } from "react-router-dom";

// 1. We accept 'cartCount' as a prop here so we can show the number (e.g., Cart (2))
function Header({ cartCount }) {
  const navigate = useNavigate();
  // 2. Check if the user is currently logged in
  const isLoggedIn = localStorage.getItem("loggedIn");

  const handleLogout = () => {
    // 3. Delete the "key" to lock the Admin page again
    localStorage.removeItem("loggedIn");
    alert("Logged out successfully!");
    navigate("/");
    window.location.reload(); // Refresh to update the button visibility
  };

  return (
    <header style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 60px",
        borderBottom: "1px solid #ddd",
        backgroundColor: "#c8e1f4",
      }}
    >
      <h2 style={{ fontSize: "22px", fontWeight: "bold" }}>SASA</h2>
      
      <nav style={{ display: "flex", alignItems: "center" }}>
        <Link style={{ marginLeft: "20px", textDecoration: 'none', color: 'black' }} to="/">Home</Link>
        <Link style={{ marginLeft: "20px", textDecoration: 'none', color: 'black' }} to="/shop">Shop</Link>
        <Link style={{ marginLeft: "20px", textDecoration: 'none', color: 'black' }} to="/contact">Contact</Link>
        
        {/* 4. Display the Cart Count */}
        <Link style={{ marginLeft: "20px", textDecoration: 'none', color: 'black' }} to="/cart">
          Cart {cartCount > 0 ? `(${cartCount})` : ''}
        </Link>
        
        <Link style={{ marginLeft: "20px", textDecoration: 'none', color: 'black' }} to="/admin">Admin</Link>

        {/* 5. LOGOUT BUTTON: Only visible if you are logged in */}
        {isLoggedIn && (
          <button 
            onClick={handleLogout}
            style={{
              marginLeft: "20px",
              padding: "8px 15px",
              backgroundColor: "#ff4444",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              fontWeight: "bold"
            }}
          >
            Logout
          </button>
        )}
      </nav>
    </header>
  );
}

export default Header;