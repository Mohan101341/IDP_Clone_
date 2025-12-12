

import React, { useState } from "react";
import "./SignIn.css";
import { Link, useNavigate, useLocation } from "react-router-dom";

const API_BASE = "http://127.0.0.1:5000";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors

    // Basic validation
    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    try {
      console.log("Attempting login to:", `${API_BASE}/api/auth/login`);
      
      const response = await fetch(`${API_BASE}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ email, password }),
      });

      console.log("Response status:", response.status);

      let data = {};
      try {
        data = await response.json();
        console.log("Response data:", data);
      } catch (parseError) {
        console.error("Failed to parse response:", parseError);
        setError("Invalid response from server. Please try again.");
        return;
      }

      if (response.ok && data.success) {
        // Login successful
        // Store the token and user info for future authenticated requests
        if (data.token) {
          localStorage.setItem("token", data.token);
        }
        if (data.user) {
          localStorage.setItem("user", JSON.stringify(data.user));
          localStorage.setItem("email", data.user.email);
          localStorage.setItem("fullName", data.user.fullName);
        } else {
          localStorage.setItem("email", email);
        }

        // Redirect to the page the user was trying to access, or homepage
        const from = location.state?.from?.pathname || "/";
        navigate(from, { replace: true });
      } else {
        // Handle login failure
        setError(data.message || "Invalid credentials. Please try again.");
      }
    } catch (err) {
      // Handle network or server errors
      console.error("Login error:", err);
      if (err.message.includes("Failed to fetch") || err.message.includes("NetworkError")) {
        setError("Cannot connect to server. Make sure the backend is running on http://127.0.0.1:5000");
      } else {
        setError(err.message || "Failed to connect to the server. Please check your connection and try again.");
      }
    }
  };

  return (
    <div className="signin-container">
      <div className="signin-card">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          {error && <p className="error-message">{error}</p>}
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
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="signin-btn">Login</button>

          <p className="signup-link">
            Don’t have an account? <Link to="/pages/white-link/Sign_Up">Create an account</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
