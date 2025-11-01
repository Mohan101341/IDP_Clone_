import React from "react";
import "./InfoSection.css";

const InfoSection = () => {
  return (
    <section className="info-section">
      <div className="info-container">
        <h2 className="info-title">Get Expert Guidance from IDP</h2>
        <p className="info-description">
          At IDP, our experienced counsellors are dedicated to helping you achieve your study abroad dreams. 
          We provide personalized guidance, from choosing the right course and university to assisting with 
          visa applications and pre-departure support.
        </p>

        <div className="info-grid">
          <div className="info-card">
            <img src="/images/counselling.png" alt="Counselling" />
            <h3>Free Counselling</h3>
            <p>Get one-on-one sessions with certified counsellors who guide you every step of the way.</p>
          </div>

          <div className="info-card">
            <img src="/images/university.png" alt="Universities" />
            <h3>Top Universities</h3>
            <p>Partnered with over 700 leading universities worldwide, ensuring you have the best options.</p>
          </div>

          <div className="info-card">
            <img src="/images/visa.png" alt="Visa Support" />
            <h3>Visa Assistance</h3>
            <p>Receive complete guidance for preparing and submitting your student visa applications smoothly.</p>
          </div>

          <div className="info-card">
            <img src="/images/support.png" alt="Support" />
            <h3>Ongoing Support</h3>
            <p>Even after admission, we offer pre-departure briefings and settlement support in your destination.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
