import React from 'react'
import './Fastlane.css'   // import external CSS

// This component is a promotional section for the "Fastlane" service.
const Fastlane = () => {
  return (
    <section className="fastlane-section">
      <div className="fastlane-container">
        
        {/* Left text section with title, description, and a call-to-action button */}
        <div className="fastlane-text">
          <h4 className="fastlane-title">Get ready for the Fastlane</h4>
          <p className="fastlane-desc">
            Make your university application stress free and discover in minutes 
            if you’d get into the university you’ve always dreamed of.
          </p>
          <button className="fastlane-button">Get Started</button>
        </div>

        {/* Right image section with an illustration */}
        <div className="fastlane-image">
          <picture>
            <img 
              src="./public/assets/Fastlane_promo.webp" 
              alt="fastlane-illustration" 
            />
          </picture>
        </div>
      </div>
    </section>
  )
}

export default Fastlane
