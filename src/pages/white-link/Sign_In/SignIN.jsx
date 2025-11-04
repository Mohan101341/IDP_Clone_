import React, { useState } from "react";
import "./SignIN.css";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

// ✅ Firebase Configuration (same as Signup)
const firebaseConfig = {
  apiKey: "AIzaSyB5ULRDn3ZMWn1shouoH--MA8OJrFmK1aI", //TODO: Add your api key
  authDomain: "idp-clone.firebaseapp.com",
  projectId: "idp-clone",
  storageBucket: "idp-clone.firebasestorage.app",
  messagingSenderId: "704275243689",
  appId: "1:704275243689:web:2b7a906388961fc8c6ffb8",
  measurementId: "G-5P0N2Q3KQE"
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const SignIN = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignin = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);

      alert("Login successful!");
      navigate('/');
      
      setEmail("");
      setPassword("");

    } catch (error) {
      alert(`Error: ${error.message}`);
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
