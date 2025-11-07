import React, { useState } from "react";
import "./SignIN.css";
import { Link, useNavigate } from "react-router-dom";

const SignIN = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill in all fields!");
      return;
    }

    try {
      const response = await fetch("http://localhost:8000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message || "Login successful!");
        console.log("✅ Logged in user:", data.user);

        // Optionally store user info in localStorage
        localStorage.setItem("user", JSON.stringify(data.user));

        setEmail("");
        setPassword("");
        navigate("/"); // Redirect to homepage
      } else {
        alert(data.message || "Invalid credentials!");
      }
    } catch (error) {
      console.error("❌ Error:", error);
      alert("Something went wrong while logging in!");
    }
  };

  return (
    <div className="signup-form">
      <form onSubmit={handleSignin}>
        <h2>Sign In</h2>

        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Sign In</button>

        <p>Don’t have an account?</p>
        <Link to="/signup">Create Account</Link>
      </form>
    </div>
  );
};

export default SignIN;
