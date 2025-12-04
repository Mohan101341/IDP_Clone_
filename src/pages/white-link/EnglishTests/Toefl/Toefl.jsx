import React from "react";
import "./Toefl.css";
import { Link } from "react-router-dom";

export default function Toefl() {
  return (
    <div>
      <div className="Toefl-bas">
        <p className="sa">IDP India / TOEFL....</p>
        <h1 className="Toefl-head">TOEFL – Test of English as a Foreign Language</h1>
        <p className="Toefl-mat">
          TOEFL focuses more on academic English used in universities. It is fully computer-based and measures integrated skills like reading, listening, speaking, and writing together.
        </p>
      </div>

      <div className="Toefl-body">
        <h3 className="Toefl-MH">“Show your English skills and study at top universities worldwide.”</h3>
        <p className="Toefl-b">
          Prove your global readiness with TOEFL — one of the world’s most trusted English proficiency exams. Accepted by 11,000+ institutions across 150+ countries.
        </p>
      </div>

      <div className="Toefl-container">
        <h2 className="Toefl-heading">TOEFL – Your Gateway to Global Education 🌍</h2>

        <div className="Toefl-table-wrapper">
          <table className="Toefl-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Full Form</td><td>Test of English as a Foreign Language</td></tr>
              <tr><td>Purpose</td><td>Measure academic English proficiency</td></tr>
              <tr><td>Accepted By</td><td>11,000+ institutions worldwide</td></tr>
              <tr><td>Mode</td><td>Computer-based (iBT)</td></tr>
              <tr><td>Duration</td><td>~2 hours</td></tr>
              <tr><td>Score Range</td><td>0–120</td></tr>
              <tr><td>Results Validity</td><td>2 years</td></tr>
              <tr>
                <td>Official Website</td>
                <td><a href="https://www.ets.org/toefl" target="_blank" rel="noreferrer">Visit TOEFL Official Site</a></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <Link to="/pages/EnglishT">
        <button className="bu">⬅ Back to English Tests</button>
      </Link>
    </div>
  );
}
