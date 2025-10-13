import React from "react";
import { Link } from "react-router-dom";
import "./StudyAbNavbar.css";

function StudyAbNavbar() {
  return (
    <div>
      <ul className="Nav-links">
        <li><Link to="/pages/white-link/StudyAb">Why Study Abroad</Link></li>
        <li><Link to="/pages/white-link/where-to-study-abroad">where and what to study</Link></li>
        <li><Link to="/pages/white-link/how-to-apply">How do I apply</Link></li>
        <li><Link to="/pages/white-link/after-offer">After receiving an offer</Link></li>
        <li><Link to="/pages/white-link/prepare-to-depart">Prepare to depart</Link></li>
        <li><Link to="/pages/white-link/arrive-and-thrive">Arrive and thrive</Link></li>
      </ul>
    </div>
  );
}
export default StudyAbNavbar;