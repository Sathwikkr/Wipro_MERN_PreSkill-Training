import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Header({ cartCount, onChangeTheme }) {
  const navigate = useNavigate();
  
  // 1. Get User Info from Storage
  const userRole = localStorage.getItem("userRole"); // 'admin' or 'user'
  const userName = localStorage.getItem("loggedInUser"); // e.g., 'John'

  const handleLogout = () => {
    // Clear all login data
    localStorage.removeItem("userRole");
    localStorage.removeItem("loggedInUser");
    localStorage.removeItem("loggedIn"); // clear old key just in case
    
    alert("Logged out successfully!");
    navigate("/");
    window.location.reload(); 
  };

  const getLinkStyle = ({ isActive }) => {
    return {
      marginLeft: "15px", textDecoration: "none", fontWeight: "500",
      padding: "8px 15px", borderRadius: "20px", transition: "all 0.3s ease",
      backgroundColor: isActive ? "var(--primary)" : "transparent",
      color: isActive ? "white" : "black",
    };
  };

  return (
    <header style={{
        display: "flex", justifyContent: "space-between", alignItems: "center",
        padding: "20px 60px", borderBottom: "1px solid #ddd", backgroundColor: "#c8e1f4",
      }}
    >
      <h2 style={{ fontSize: "22px", fontWeight: "bold" }}>SASA</h2>
      
      <nav style={{ display: "flex", alignItems: "center" }}>
        
        <NavLink to="/" style={getLinkStyle} onClick={() => onChangeTheme("#2979ff")}>Home</NavLink>
        
        <NavLink to="/shop" style={getLinkStyle} onClick={() => onChangeTheme("#9c27b0")}>Shop</NavLink>
        
        <NavLink to="/contact" style={getLinkStyle} onClick={() => onChangeTheme("#009688")}>Contact</NavLink>
        
        <NavLink to="/cart" style={getLinkStyle} onClick={() => onChangeTheme("#ff9800")}>
          Cart {cartCount > 0 ? `(${cartCount})` : ''}
        </NavLink>

        {/* 2. LOGIC: Show 'Admin' link ONLY if role is 'admin' */}
        {userRole === "admin" && (
          <NavLink to="/admin" style={getLinkStyle} onClick={() => onChangeTheme("#f44336")}>
            Admin
          </NavLink>
        )}

        {/* 3. LOGIC: Show Login vs Logout */}
        {!userName ? (
          <NavLink to="/login" style={getLinkStyle}>Login / Sign Up</NavLink>
        ) : (
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginLeft: "15px" }}>
            <span style={{ fontWeight: "bold", color: "#333" }}>Hi, {userName}</span>
            <button 
              onClick={handleLogout}
              style={{
                padding: "8px 15px", backgroundColor: "#333", color: "white", border: "none",
                borderRadius: "20px", cursor: "pointer", fontWeight: "bold"
              }}
            >
              Logout
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;