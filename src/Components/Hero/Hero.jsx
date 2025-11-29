import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom"; 
import "./Hero.css";
import heroImg from "../../assets/hero-bg.jpg"; 

// This array holds the data for each slide in the hero section.
const heroData = [
  {
    heading: "Your Study Abroad Journey Begins Here",
    subheading: "1,13,000+ students achieved their study abroad dreams with IDP in one year",
    button: { label: "Avail FREE counselling", link: "/pages/white-link/Avail", width: 230 },
  },
  {
    heading: "IDP Guided 28,000+ students to the UK in just one year. Your future starts here!",
    subheading: "Attend IDP’s Biggest Study Abroad Expo in your city",
    button: { label: "Sign In", link: "/pages/white-link/SignIN", width: 148 },
  },
  {
    heading: "60+ Universities, up to 100% Scholarships – Attend IDP’s Biggest Education Fair",
    subheading: "Australia | New Zealand",
    button: { label: "Sign Up", link: "/pages/white-link/Sign_Up", width: 180 },
  },
 
  
];

// The interval for auto-sliding in milliseconds.
const AUTO_SLIDE_INTERVAL = 5000;

// This component is the hero section of the website with an auto-sliding carousel.
export default function Hero() {
  // State to keep track of the current slide index.
  const [page, setPage] = useState(0);
  // Ref to store the interval ID for auto-sliding.
  const intervalRef = useRef(null);

  // Effect to set up and clear the auto-sliding interval.
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setPage(prev => (prev + 1) % heroData.length);
    }, AUTO_SLIDE_INTERVAL);
    return () => clearInterval(intervalRef.current);
  }, []);

  // Function to go to a specific slide.
  const goToPage = idx => {
    setPage(idx);
    // Reset the auto-sliding interval when a dot is clicked.
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setPage(prev => (prev + 1) % heroData.length);
    }, AUTO_SLIDE_INTERVAL);
  };

  // Get the data for the current slide.
  const { heading, subheading, button } = heroData[page];

  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>{heading}</h1>
          <p className="hero-subheading">{subheading}</p>

          {/* Link to the specified page for the button. */}
          <Link
            to={button.link}
            className="hero-btn"
            style={{ width: button.width }}
          >
            {button.label}
          </Link>

          {/* Dots for navigating between slides. */}
          <div className="hero-dots">
            {heroData.map((_, idx) => (
              <button
                key={idx}
                aria-label={`Go to hero slide ${idx + 1}`}
                className={`hero-dot ${page === idx ? "active" : ""}`}
                onClick={() => goToPage(idx)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
