import React from "react";
import { useNavigate } from 'react-router-dom'; // ✅ Import navigate hook

function StdyUsahero() {
  const navigate = useNavigate(); // ✅ Initialize navigation
  return (
    <div className="aush-hero-bg">
      <div className="aush-hero-content">
        <h1>Study in USA for Indian Students</h1>
        <h3>Explore diverse academic opportunities and vibrant culture in the USA, a global hub for higher education and personal growth.</h3>
         <button

      onClick={() => navigate("/contact")} // Must match the route path
    >
      Avail free councling
    </button>
      </div>
    </div>
  );
}

export default StdyUsahero;