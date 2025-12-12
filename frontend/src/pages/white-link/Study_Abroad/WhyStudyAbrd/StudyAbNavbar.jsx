import React from "react";
import { Link } from "react-router-dom";
import "./StudyAbNavbar.css";

function StudyAbNavbar() {
  return (
    <div>
      <ul className="Nav-links">
        <li><Link to="/study-abroad/why-study-abroad">Why Study Abroad</Link></li>
        <li><Link to="/study-abroad/where-to-study">where and what to study</Link></li>
        <li><Link to="/study-abroad/how-to-apply">How do I apply</Link></li>
        <li><Link to="/study-abroad/after-offer">After receiving an offer</Link></li>
        <li><Link to="/study-abroad/prepare-to-depart">Prepare to depart</Link></li>
        <li><Link to="/study-abroad/arrive-and-thrive">Arrive and thrive</Link></li>
      </ul>
    </div>
  );
}
export default StudyAbNavbar;