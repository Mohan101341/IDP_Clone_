import React, { useState } from "react";
import "./StudySteps.css";

const STEPS = [
  { title: "Why study abroad?" },
  { title: "Where and what to study?" },
  { title: "How do I apply?" },
  { title: "After receiving an offer" },
  { title: "Prepare to depart" },
  { title: "Arrive and thrive" },
];

export default function StudySteps() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleIndex = (idx) => {
    setActiveIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section className="study-steps-sec">
      <div className="study-steps-wrap">
        <h2 className="steps-title"><span className="color">Y</span>our study abroad steps</h2>

        <div className="steps-grid">
          <div className="steps-visual">
            <img
              src="/assets/steps-bannerr.webp"
              alt="Smiling student holding books"
            />
          </div>

          <div className="steps-list" role="list">
            {STEPS.map((step, idx) => (
              <button
                key={step.title}
                className={`step-item ${activeIndex === idx ? "active" : ""}`}
                onClick={() => toggleIndex(idx)}
                aria-expanded={activeIndex === idx}
              >
                <span>{step.title}</span>
                <svg
                  className="chev"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M8.12 9l3.88 3.88L15.88 9 17 10.12l-5 5-5-5L8.12 9z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


