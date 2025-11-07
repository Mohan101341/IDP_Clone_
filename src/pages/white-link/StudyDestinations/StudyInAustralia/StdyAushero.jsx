import React from "react";
import { useNavigate } from "react-router-dom";
import "./StdyAushero.css";

function StdyAushero() {
  const navigate = useNavigate();
  return (
    <div className="aush-hero-bg">
      <div className="aush-hero-content">
        <h1>Study in Australia for Indian Students</h1>
        <h3>Attend Top 100 Universities in upcoming Admission Day.</h3>
        
         <button
      
      onClick={() => navigate("/contact")} // Must match the route path
    >
      Help me study in Australia
    </button>
      </div>
    </div>
  );
}

export default StdyAushero;