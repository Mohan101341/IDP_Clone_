import React from "react";
import "./Duolingo.css";
import { Link } from "react-router-dom";

export default function Duolingo() {
  return (
    <div>
      {/* Hero Section */}
      <div className="Duolingo-bas">
        <p className="side-head">IDP India / Duolingo....</p>
        <h1 className="Duolingo-head">Duolingo English Test</h1>
        <p className="Duolingo-mat">
          The Duolingo English Test is an affordable, convenient, and secure
          online English proficiency test accepted by thousands of institutions
          worldwide.
        </p>
      </div>

      {/* Body Section */}
      <div className="Duolingo-body">
        <h3 className="Duolingo-MH">
          “Prove your English skills anytime, anywhere with the Duolingo English Test.”
        </h3>
        <p className="Duolingo-b">
          The test can be taken from home and is accepted by over 4000+ universities.
          It’s fast, adaptive, and gives results within 48 hours.
        </p>
      </div>

      {/* Table Section */}
      <div className="duolingo-container">
        <h2 className="duolingo-heading">
          Duolingo English Test – Simple, Fast, and Reliable 🎯
        </h2>

        <div className="duolingo-table-wrapper">
          <table className="duolingo-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Full Form</td><td>Duolingo English Test (DET)</td></tr>
              <tr><td>Purpose</td><td>Assess English proficiency for global study/work</td></tr>
              <tr><td>Accepted By</td><td>4000+ universities</td></tr>
              <tr><td>Mode</td><td>Online (from home)</td></tr>
              <tr><td>Duration</td><td>~1 hour</td></tr>
              <tr><td>Score Range</td><td>10–160</td></tr>
              <tr><td>Results Validity</td><td>2 years</td></tr>
              <tr>
                <td>Official Website</td>
                <td>
                  <a
                    href="https://englishtest.duolingo.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Visit Duolingo Official Site
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Back Button */}
      <Link to="/pages/EnglishT">
        <button className="bu">⬅ Back to English Tests</button>
      </Link>
    </div>
  );
}
