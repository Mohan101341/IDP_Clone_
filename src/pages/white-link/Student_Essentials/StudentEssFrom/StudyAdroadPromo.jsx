import React from 'react';
import './StudyAbroadPromo.css'; // Optional external stylesheet

const StudyAbroadPromo = () => {
  return (
    <header className="promo-container">
      
      
       
        <h1 className="promo-heading">Study Abroad Made Simple</h1>
        <p className="promo-description">
          Your journey to studying abroad starts here. Let us guide you every step of the way.
        </p>

      <div className="promo-hero">
        <div className="hero-image">
          {/* Replace with actual image or component */}
          <video controls>
            <source src="public/videos/From India to Australia _ Life Abroad _ IDP India - Study Abroad Expert.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="hero-text">
          <h2>Simplifying your study abroad experience.</h2>
          <p>Watch how we take care of the boring stuff, so you don’t have to.</p>
        </div>
      </div>
      
    </header>
  );
};

export default StudyAbroadPromo;