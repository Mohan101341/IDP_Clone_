import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


function SignupForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !phone || !password) {
      alert("Please fill all fields!");
      return;
    }

    try {
      const response = await fetch("http://localhost:8000/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: name,
          email: email,
          password: password,
          phone: phone,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message || "Signup successful!");
        setName("");
        setEmail("");
        setPhone("");
        setPassword("");
        navigate("/"); // redirect to homepage or login
      } else if (response.status === 409) {
        alert(data.message || "Email already in use!");
      } else {
        alert(data.message || "Something went wrong!");
      }
    } catch (error) {
      console.error("❌ Error:", error);
      alert("Error connecting to server!");
    }
  };

  return (
    <div className="signup-form">
      <form onSubmit={handleSubmit}>
        <h2>Create an Account!</h2>

        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Phone</label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />

        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Sign Up</button>

        <p>
          Already have an account?{" "}
          <Link to="/pages/white-link/SignIN">Sign In</Link>
        </p>
      </form>
    </div>
  );
}

export default SignupForm;
