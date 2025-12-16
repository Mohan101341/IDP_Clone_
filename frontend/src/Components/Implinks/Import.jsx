import React from "react";
import "./import.css";


const Import = () => {
  const links = [
    {
   
      title: "Course Subjects",
      desc: "Explore different course subjects that align to your study objectives",
    },
    {
    
      title: "Scholarships",
      desc: "Search more than 5,000 scholarships offered by over 370 institutions across the world",
    },
    {
     
      title: "Check your eligibility before applying",
      desc: "FastLane allows you to see if you can get into a course before you apply",
    },
    {
    
      title: "Support with applications",
      desc: "Expert counsellors can help you to apply to multiple courses",
    },
    {
    
      title: "Jramsys Live app",
      desc: "Download the Jramsys Live app to browse and shortlist courses, track your applications and much more.",
    },
    {
     
      title: "Cost calculator",
      desc: "Estimate how much you will need to cover your expenses as an international student.",
    },
  ];

  return (
    <div className="implik-section">
      <div className="implik-container">
        <h2 className="implik-title "><span className="underline-green ">I</span>mportant Links </h2>

        <div className="implik-grid">
          {links.map((link, index) => (
            <div key={index} className="implik-card">
             

              <div className="implik-content">
                <div className="implik-text">{link.title}</div>
                <p className="implik-desc">{link.desc}</p>

                <a href="#" className="implik-link">
                  Learn More <span className="implik-chevron">→</span>
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
