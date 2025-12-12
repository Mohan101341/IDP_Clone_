import React from "react";
import "./ServiceSection.css";

const ServicesSection = () => {
  const services = [
    {
      icon: "📋",
      title: "Wide range of services",
      desc: "Our diverse range of services removes the stress to let you start your study abroad journey with peace of mind.",
    },
    {
      icon: "✨",
      title: "One-stop solution",
      desc: "No need to search elsewhere. At IDP, we provide all of the essential study abroad services you need under one roof.",
    },
    {
      icon: "👥",
      title: "Personalised support",
      desc: "Receive individualised guidance and support to help you choose the right services tailored to your needs.",
    },
  ];

  return (
    <section className="services1">
      
      {services.map((service, index) => (
        <div key={index} className="service-card1">
          <div className="icon1">{service.icon}</div>
          <h3>{service.title}</h3>
          <p>{service.desc}</p>
        </div>
      ))}
    </section>
  );
};

export default ServicesSection;
