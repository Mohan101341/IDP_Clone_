import React from "react";
import "./import.css";
import {
  FaSearch,
  FaGraduationCap,
  FaBolt,
  FaClipboardCheck,
  FaMobileAlt,
  FaCalculator,
} from "react-icons/fa";

const Import = () => {
  const links = [
    {
      icon: <FaSearch />,
      title: "Course Subjects",
      desc: "Explore different course subjects that align to your study objectives",
    },
    {
      icon: <FaGraduationCap />,
      title: "Scholarships",
      desc: "Search more than 5,000 scholarships offered by over 370 institutions across the world",
    },
    {
      icon: <FaBolt />,
      title: "Check your eligibility before applying",
      desc: "FastLane allows you to see if you can get into a course before you apply",
    },
    {
      icon: <FaClipboardCheck />,
      title: "Support with applications",
      desc: "Expert counsellors can help you to apply to multiple courses",
    },
    {
      icon: <FaMobileAlt />,
      title: "Jramsys Live app",
      desc: "Download the Jramsys Live app to browse and shortlist courses, track your applications and much more.",
    },
    {
      icon: <FaCalculator />,
      title: "Cost calculator",
      desc: "Estimate how much you will need to cover your expenses as an international student with our cost calculator.",
    },
  ];

  return (
    <div className="services-section">
      <div className="services-container">
        <h2 className="services-title underline-green">Important Links</h2>

        <div className="services-grid">
          {links.map((link, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{link.icon}</div>

              <div className="service-content">
                <div className="service-text">{link.title}</div>
                <p className="service-desc">{link.desc}</p>

                <a href="#" className="service-link">
                  Learn More <span className="service-chevron">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Import;
