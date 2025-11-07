import React from "react";
import "./ImportantLinks.css";
import {
  FaSearch,
  FaGraduationCap,
  FaBolt,
  FaClipboardCheck,
  FaMobileAlt,
  FaCalculator,
} from "react-icons/fa";

const ImportantLinks = () => {
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
      title: "IDP Live app",
      desc: "Download the IDP Live app to browse and shortlist courses, track your applications and much more.",
    },
    {
      icon: <FaCalculator />,
      title: "Cost calculator",
      desc: "Estimate how much you will need to cover your expenses as an international student with our cost calculator.",
    },
  ];

  return (
    <div className="important-links-section">
      <div className="container">
        <h2 className="heading">
          Important Links
          <span className="underline"></span>
        </h2>
        <div className="links-grid">
          {links.map((link, index) => (
            <div key={index} className="card">
              <div className="icon">{link.icon}</div>
              <h3>{link.title}</h3>
              <p>{link.desc}</p>
              <a href="#" className="learn-more">
                Learn More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImportantLinks;
