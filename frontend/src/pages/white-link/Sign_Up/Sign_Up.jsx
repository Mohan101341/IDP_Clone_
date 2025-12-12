import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SignUp.css"; // You'll need to create a corresponding CSS file

const API_BASE = "http://127.0.0.1:5000";

const SignUp = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setError(""); // Clear previous errors

    // Validate password length
    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    try {
      console.log("Attempting signup to:", `${API_BASE}/api/auth/signup`);
      
      const res = await fetch(`${API_BASE}/api/auth/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ fullName, email, password }),
      });
      
      console.log("Response status:", res.status);
      
      let data = {};
      try {
        data = await res.json();
        console.log("Response data:", data);
      } catch (parseError) {
        console.error("Failed to parse response:", parseError);
        setError("Invalid response from server. Please try again.");
        return;
      }
      
      if (res.ok && data.success) {
        alert("Account created successfully! Please log in.");
        navigate("/pages/white-link/Sign_In"); // Redirect to login page
      } else {
        setError(data.message || "Failed to create account. Please try again.");
      }
    } catch (err) {
      console.error("Signup error:", err);
      if (err.message.includes("Failed to fetch") || err.message.includes("NetworkError")) {
        setError("Cannot connect to server. Make sure the backend is running on http://127.0.0.1:5000");
      } else {
        setError(err.message || "Failed to connect to the server. Please try again later.");
      }
    }
  }

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2>Create Account</h2>
        <form onSubmit={handleSubmit}>
          {error && <p className="error-message">{error}</p>}
          <div className="input-group">
            <label>Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="signup-btn">
            Sign Up
          </button>

          <p className="login-link">
            Already have an account? <Link to="/pages/white-link/Sign_In">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;