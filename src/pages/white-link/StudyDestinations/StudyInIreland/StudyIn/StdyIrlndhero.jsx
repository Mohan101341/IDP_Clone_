import React from "react";
import { useNavigate } from 'react-router-dom'; // ✅ Import navigate hook

function StdyIrlndhero() {
  const navigate = useNavigate(); // ✅ Initialize navigation
  return (
    <div className="aush-hero-bg">
      <div className="aush-hero-content">
        <h1>Study in Ireland From India</h1>
        <h3>Discover a comprehensive guide tailored for international students considering studying in Ireland.
           Avail FREE Counselling</h3>
         <button
      onClick={() => navigate("/contact")} // Must match the route path
    >
     Avail free councling
    </button>
      </div>
    </div>
  );
}

export default StdyIrlndhero;