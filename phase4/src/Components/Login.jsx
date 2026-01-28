import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  
  // 1. State to switch between Login and Sign Up
  const [isSignUp, setIsSignUp] = useState(false);
  
  // 2. Form States
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = formData;

    // --- LOGIC FOR SIGN UP ---
    if (isSignUp) {
      // 1. Get existing users
      const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
      
      // 2. Check if user already exists
      if (existingUsers.find(u => u.username === username)) {
        alert("User already exists! Please login.");
        return;
      }

      // 3. Save new user
      const newUser = { username, password };
      localStorage.setItem("users", JSON.stringify([...existingUsers, newUser]));
      
      alert("Account created successfully! Please Login.");
      setIsSignUp(false); // Switch back to Login mode
    } 
    
    // --- LOGIC FOR LOGIN ---
    else {
      // A. Check for ADMIN Login (Hardcoded)
      if (username === "admin" && password === "password123") {
        localStorage.setItem("userRole", "admin"); // Save role as admin
        localStorage.setItem("loggedInUser", "Admin");
        alert("Welcome Admin!");
        navigate("/admin");
        window.location.reload();
        return;
      }

      // B. Check for REGULAR User Login
      const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
      const validUser = existingUsers.find(
        (u) => u.username === username && u.password === password
      );

      if (validUser) {
        localStorage.setItem("userRole", "user"); // Save role as user
        localStorage.setItem("loggedInUser", validUser.username); // Save username
        alert(`Welcome back, ${validUser.username}!`);
        navigate("/"); // Go to Home page
        window.location.reload();
      } else {
        alert("Invalid Username or Password!");
      }
    }
  };

  return (
    <div style={{ 
      display: "flex", justifyContent: "center", alignItems: "center", 
      height: "70vh", backgroundColor: "#f4f4f4" 
    }}>
      <form onSubmit={handleSubmit} style={{ 
        padding: "40px", backgroundColor: "white", borderRadius: "10px", 
        boxShadow: "0 4px 15px rgba(0,0,0,0.1)", width: "350px", textAlign: "center" 
      }}>
        
        <h2 style={{ marginBottom: "20px", color: "#333" }}>
          {isSignUp ? "Create Account" : "Login"}
        </h2>
        
        <input 
          type="text" name="username" placeholder="Username" required
          value={formData.username} onChange={handleChange}
          style={{ width: "100%", padding: "12px", marginBottom: "15px", borderRadius: "5px", border: "1px solid #ccc" }}
        />

        <input 
          type="password" name="password" placeholder="Password" required
          value={formData.password} onChange={handleChange}
          style={{ width: "100%", padding: "12px", marginBottom: "20px", borderRadius: "5px", border: "1px solid #ccc" }}
        />

        <button type="submit" style={{ 
          width: "100%", padding: "12px", backgroundColor: "#2979ff", color: "white", 
          border: "none", borderRadius: "5px", fontSize: "1rem", cursor: "pointer", fontWeight: "bold"
        }}>
          {isSignUp ? "Sign Up" : "Login"}
        </button>

        {/* Toggle Button */}
        <p style={{ marginTop: "15px", fontSize: "0.9rem" }}>
          {isSignUp ? "Already have an account?" : "Don't have an account?"} 
          <span 
            onClick={() => setIsSignUp(!isSignUp)}
            style={{ color: "#2979ff", cursor: "pointer", fontWeight: "bold", marginLeft: "5px" }}
          >
            {isSignUp ? "Login here" : "Sign Up here"}
          </span>
        </p>
      </form>
    </div>
  );
}

export default Login;