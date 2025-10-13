import React from "react";
import "./Services.css";

const Services = () => {
  const services = [
    {
      title: "Personalized Profile Assessment",
      desc:
        "We start by understanding your unique profile and requirements, so we can help find the best destination, course, and institution that match your eligibility, interests, and aspirations",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      ),
    },
    {
      title: "Applying to Institutions",
      desc:
        "We handhold you through the entire application process from preparation to submission, including identifying scholarship opportunities for you",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M6 2h9l5 5v15a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
        </svg>
      ),
    },
    {
      title: "Admission letter acceptance",
      desc:
        "Our expert help you evaluate your offers and make the right choice. We further guide you with essential services like tuition fee payments, accommodation, and more",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M8 15l4-4 4 4"></path>
          <path d="M12 12V8"></path>
        </svg>
      ),
    },
    {
      title: "Education loan",
      desc:
        "Need financial support? Thanks to our exclusive partnerships, we help you with the best interest rates and hassle-free education loan process",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M12 1v22"></path>
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
        </svg>
      ),
    },
    {
      title: "Visa Preparation",
      desc:
        "We assist you with document preparation and conduct thorough checks to ensure everything is accurate for your visa submission. By the way, IDP has the highest student visa success rate",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <rect x="3" y="2" width="18" height="20" rx="2"></rect>
          <path d="M7 6h10"></path>
          <path d="M7 10h10"></path>
          <circle cx="12" cy="16" r="2"></circle>
        </svg>
      ),
    },
    {
      title: "Pre-departure briefing",
      desc:
        "SIM card, international bank account, forex, or settling in the first few weeks in your dream destination, we help you with EVERYTHING before you leave your home country.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M17.5 19.5L9.5 12l8-7.5"></path>
          <path d="M2 12h7.5"></path>
        </svg>
      ),
    },
  ];

  return (
    <section className="services-section">
      <div className="services-container">
        <h2 className="services-title"><span className="underline-green ">S</span>ervices</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <div className="service-content">
                <h3 className="service-text">{service.title}</h3>
                {service.desc && <p className="service-desc">{service.desc}</p>}
                <a href="#" className="service-link">Learn More</a>
              </div>
              <svg className="service-chevron" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
