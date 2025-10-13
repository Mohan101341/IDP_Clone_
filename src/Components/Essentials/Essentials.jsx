import React from "react";
import "./Essentials.css";

const Essentials = () => {
  const essentials = [
    {
      title: "Education Loan",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 7v7c0 5 10 5 10 5s10 0 10-5V7" />
        <line x1="12" y1="12" x2="12" y2="22" />
      </svg>`,
    },
    {
      title: "Accommodation",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path d="M3 12 L12 3 L21 12 V21 H3 V12 Z" />
        <path d="M9 21 V14 H15 V21" />
        <path d="M7 12 H17" />
      </svg>`,
    },
    {
      title: "Banking",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 7v13h20V7" />
        <path d="M6 10v6" />
        <path d="M10 10v6" />
        <path d="M14 10v6" />
        <path d="M18 10v6" />
      </svg>`,
    },
    {
      title: "Health Cover",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <rect x="6" y="3" width="12" height="18" rx="2" />
        <line x1="12" y1="7" x2="12" y2="17" />
        <line x1="7" y1="12" x2="17" y2="12" />
      </svg>`,
    },
    {
      title: "Money Transfer",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <rect x="3" y="2" width="18" height="20" rx="2" />
        <path d="M7 6h10" />
        <path d="M7 10h10" />
        <circle cx="12" cy="16" r="2" />
      </svg>`,
    },
    {
      title: "SIM Card",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path d="M17.5 19.5L9.5 12l8-7.5" />
        <path d="M2 12h7.5" />
      </svg>`,
    },
  ];

  return (
    <section className="essentials-section">
      <div className="essentials-container">
        <h2 className="essentials-title">Student Essentials Services</h2>
        <div className="essentials-grid">
          {essentials.map((essential, index) => (
            <div key={index} className="essential-card">
              <div
                className="essential-icon"
                dangerouslySetInnerHTML={{ __html: essential.icon }}
              />
              <h3 className="essential-text">{essential.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Essentials;
