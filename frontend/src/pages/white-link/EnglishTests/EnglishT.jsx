import React from "react";
import "./EnglishT.css";
import { Link } from "react-router-dom";

export default function EnglishT() {
  return (
    <div>
      {/* Hero Section */}
      <div className="MK">
        <p className="si">JRAMSYS OVERSEASE / ENGLISH Tests</p>
        <p className="he">English Tests</p>
        <p className="me">
          These global English proficiency tests evaluate reading, writing,
          speaking, and listening skills, helping you qualify for study or work
          abroad. They are key for meeting international language requirements.
        </p>
      </div>

      {/* Body Section */}
      <div className="bd">
        <p className="ee">
          Dreaming of studying or working abroad?...
          <br />
          Before you pack your bags, you must prove your English communication
          skills. International language tests help universities and employers
          understand your ability to succeed in English-speaking countries.
        </p>

        {/* TOEFL */}
        <p className="to"><span className="ul">T</span>OEFL (Test of English as a Foreign Language):</p>
        <ul className="Li">
          <li>TOEFL is an internationally recognized English proficiency test.</li>
          <li>Required for studying, working, or migrating to English-speaking countries.</li>
          <li>Focuses on academic and real-life English usage.</li>
          <li>Evaluates Reading, Listening, Speaking, and Writing.</li>
          <li>Accepted by 11,000+ universities worldwide.</li>
          <li>Available in iBT & paper formats; score validity: 2 years.</li>
        </ul>
        <Link to="/pages/Toefl"><button className="bu">Click for More</button></Link>

        {/* Duolingo */}
        <p className="to"><span className="ul">D</span>uolingo English Test (DET):</p>
        <ul className="Li">
          <li>A modern, convenient, and affordable online English exam.</li>
          <li>Can be taken anytime using a computer, webcam, and internet.</li>
          <li>Adaptive test evaluating Reading, Writing, Listening & Speaking.</li>
          <li>Takes less than 1 hour to complete; results in 48 hours.</li>
          <li>Accepted by 5,000+ institutions worldwide.</li>
        </ul>
        <Link to="/pages/Duolingo"><button className="bu">Click for More</button></Link>

        {/* IELTS */}
        <p className="to"><span className="ul">I</span>ELTS (International English Language Testing System):</p>
        <ul className="Li">
          <li>One of the most popular English tests globally.</li>
          <li>Evaluates Listening, Reading, Writing & Speaking.</li>
          <li>Managed by British Council, IDP & Cambridge English.</li>
          <li>Two types: Academic & General Training.</li>
          <li>Scored on a band scale of 1 to 9.</li>
          <li>Accepted by 11,000+ organizations worldwide.</li>
        </ul>
        <Link to="/pages/IELTSPage"><button className="bu">Click for More</button></Link>
      </div>

      {/* Final Paragraph */}
      <div className="ml">
        Each of these tests — TOEFL, IELTS, and Duolingo — opens the door to
        global opportunities. Your choice depends on your goals, country, and
        convenience. A strong English score helps you succeed in international
        academic and professional environments.
      </div>
    </div>
  );
}
