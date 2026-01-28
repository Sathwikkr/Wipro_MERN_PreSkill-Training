import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent page refresh

    // HARDCODED CREDENTIALS (You can change these)
    // Username: admin
    // Password: password123
    if (username === "admin" && password === "password123") {
      
      // 1. Save the "key" to unlock the Admin Panel
      localStorage.setItem("loggedIn", "true");
      
      alert("Login Successful!");
      
      // 2. Redirect to the Admin Page
      navigate("/admin");
      
      // 3. Reload to update the Header (show Logout button)
      window.location.reload(); 
    } else {
      alert("Invalid Username or Password!");
    }
  };

  return (
    <div style={{ 
      display: "flex", 
      justifyContent: "center", 
      alignItems: "center", 
      height: "60vh", 
      backgroundColor: "#f4f4f4" 
    }}>
      <form onSubmit={handleLogin} style={{ 
        padding: "40px", 
        backgroundColor: "white", 
        borderRadius: "8px", 
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        width: "300px",
        textAlign: "center"
      }}>
        <h2 style={{ marginBottom: "20px", color: "#333" }}>Admin Login</h2>
        
        {/* Username Input */}
        <div style={{ marginBottom: "15px", textAlign: "left" }}>
          <label style={{ display: "block", marginBottom: "5px", fontSize: "0.9rem" }}>Username</label>
          <input 
            type="text" 
            placeholder="Enter 'admin'"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
            required
          />
        </div>

        {/* Password Input */}
        <div style={{ marginBottom: "20px", textAlign: "left" }}>
          <label style={{ display: "block", marginBottom: "5px", fontSize: "0.9rem" }}>Password</label>
          <input 
            type="password" 
            placeholder="Enter 'password123'"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
            required
          />
        </div>

        {/* Login Button */}
        <button type="submit" style={{ 
          width: "100%", 
          padding: "10px", 
          backgroundColor: "#2979ff", 
          color: "white", 
          border: "none", 
          borderRadius: "5px", 
          cursor: "pointer",
          fontWeight: "bold"
        }}>
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;