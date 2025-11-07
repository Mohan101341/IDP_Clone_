import React from "react";
import { useNavigate } from 'react-router-dom'; // ✅ Import navigate hook

function StdyUkhero() {
  const navigate = useNavigate(); // ✅ Initialize navigation
  return (
    <div className="aush-hero-bg">
      <div className="aush-hero-content">
        <h1>Study in the UK From India</h1>
        <h3>4 of the World’s Top 10 Universities | 50,000+ Courses | Globally Renowned Research | Shorter Degrees - Study in the UK: Where Excellence Meets Opportunity!</h3>
         <button

      onClick={() => navigate("/contact")} // Must match the route path
    >
     Avail free councling
    </button>
      </div>
    </div>
  );
}

export default StdyUkhero;