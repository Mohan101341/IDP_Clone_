import React from "react";
import "./WhyIDPCounsellors.css";

const WhyIDPCounsellors = () => {
  const counsellorData = [
    {
      icon: "🌍",
      title: "Connect globally",
      desc: "Get one-to-one access to more than 2,200 expert education counsellors across 190 IDP offices in 35 countries.",
    },
    {
      icon: "🎓",
      title: "Experts in their field",
      desc: "Our counsellors are highly trained to support you to find and apply to courses matching your interest and aptitude.",
    },
    {
      icon: "💙",
      title: "An unbeatable track record",
      desc: "To-date, we have helped more than half a million students achieve their dream of studying abroad.",
    },
    {
      icon: "🤝",
      title: "Friendly and approachable",
      desc: "Many IDP counsellors were once international students too. You'll always find them ready to go the extra mile.",
    },
    {
      icon: "💰",
      title: "Zero commission",
      desc: "IDP doesn’t charge you for its services. Many universities also waive their application fees when you apply through us.",
    },
    {
      icon: "⭐",
      title: "Putting you first",
      desc: "All our services are designed to enhance your experience and ensure that you achieve your study abroad goals.",
    },
  ];

  return (
    <section className="why-idp-section">
      <h2 className="why-idp-title">
        Why <span>IDP Counsellors?</span>
      </h2>

      <div className="why-idp-grid">
        {counsellorData.map((item, index) => (
          <div key={index} className="why-idp-card">
            <div className="why-idp-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyIDPCounsellors;
