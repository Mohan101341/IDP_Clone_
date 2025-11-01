import React from "react";
import { Link } from "react-router-dom";
import "./StdyAushero.css";

function StdyAushero() {
  return (
    <div className="aush-hero-bg">
      <div className="aush-hero-content">
        <h1>Study in Australia for Indian Students</h1>
        <h3>Attend Top 100 Universities in upcoming Admission Day.</h3>
        <Link to="/pages/white-link/Avail" className="hero-btn-like">
          Avail FREE counselling
        </Link>
      </div>
    </div>
  );
}

export default StdyAushero;