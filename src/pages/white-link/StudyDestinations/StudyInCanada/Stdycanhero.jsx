import React from "react";
import { useNavigate } from 'react-router-dom'

function Stdycanhero() {
  const navigate = useNavigate();
  return (
    <div className="aush-hero-bg">
      <div className="aush-hero-content">
        <h1>Study in Canada From India</h1>
        <h3>Explore everything you need to know about pursuing your studies in Canada from top universities and programs to scholarships, visas, and career prospects.</h3>
         <button
      
      onClick={() => navigate("/contact")} // Must match the route path
    >
    Avail Free Councling
    </button>
      </div>
    </div>
  );
}

export default Stdycanhero;