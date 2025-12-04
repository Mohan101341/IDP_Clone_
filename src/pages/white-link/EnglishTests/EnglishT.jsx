import React from "react";
import "./EnglishT.css";
import { Link } from "react-router-dom";

export default function EnglishT() {
  return (
    <div>
      <div className="MK">
        <p className="si">IDP India / ENGLISH Tests....</p>

        <h2 className="he">English Tests</h2>
        <p className="me">
          These global English proficiency tests evaluate reading, writing,
          speaking, and listening skills, helping you qualify for study or work
          abroad. They are key for meeting international language requirements.
        </p>
      </div>

      <div className="bd">
        <p className="ee">
          Dreaming of studying or working abroad? Before you pack your bags,
          you’ll need to prove your English communication skills. International
          language tests help universities and employers understand your ability
          to succeed in English-speaking countries.
        </p>

        {/* TOEFL Section */}
        <h3 className="to">
          <span className="ul">T</span>OEFL (Test of English as a Foreign Language)
        </h3>
        <ul className="Li">
          <li>TOEFL is an internationally recognized test that measures English proficiency for non-native speakers.</li>
          <li>It is mainly required for studying, working, or migrating to English-speaking countries.</li>
          <li>The test focuses on using and understanding English in academic and real-life contexts.</li>
          <li>It evaluates four main skills: Reading, Listening, Speaking, and Writing.</li>
          <li>TOEFL is accepted by over 11,000 universities and institutions in more than 150 countries.</li>
          <li>It is offered in internet-based (iBT) and paper-based formats, with scores valid for two years.</li>
        </ul>
        <Link to="/pages/Toefl">
          <button className="bu">Click for More</button>
        </Link>

        {/* Duolingo Section */}
        <h3 className="to">
          <span className="ul">D</span>uolingo English Test (DET)
        </h3>
        <ul className="Li">
          <li>The Duolingo English Test is a modern, convenient, and affordable online English proficiency exam.</li>
          <li>It can be taken anytime and anywhere with a computer, webcam, and internet connection.</li>
          <li>It typically takes less than 1 hour to complete.</li>
          <li>Results are available within 48 hours, making it one of the fastest English tests.</li>
          <li>Accepted by over 5,000 universities worldwide, including top institutions in the USA, Canada, and the UK.</li>
        </ul>
        <Link to="/pages/Duolingo">
          <button className="bu">Click for More</button>
        </Link>

        {/* IELTS Section */}
        <h3 className="to">
          <span className="ul">I</span>ELTS (International English Language Testing System)
        </h3>
        <ul className="Li">
          <li>IELTS measures your ability to communicate effectively in English through Listening, Reading, Writing, and Speaking modules.</li>
          <li>It is accepted by over 11,000 organizations worldwide, including universities and immigration authorities.</li>
        </ul>
      </div>

      <div className="ml">
        Each of these tests — TOEFL, IELTS, and Duolingo — serves as a bridge
        connecting you to opportunities across the world. Choosing the right
        test depends on your goals, preferred country, and convenience.
      </div>
    </div>
  );
}
