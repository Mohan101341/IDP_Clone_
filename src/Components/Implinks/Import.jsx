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
    <div className="important-links-section2">
      <div className="container2">
        <h2 className="heading2">
          Important Links
          <span className="underline2"></span>
        </h2>
        <div className="links-grid2">
          {links.map((link, index) => (
            <div key={index} className="card2">
              <div className="icon2">{link.icon}</div>
              <h3>{link.title}</h3>
              <p>{link.desc}</p>
              <a href="#" className="learn-more2">
                Learn More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Import;
