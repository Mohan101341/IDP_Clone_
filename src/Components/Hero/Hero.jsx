import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom"; 
import "./Hero.css";
import heroImg from "../../assets/hero-bg.jpg"; 

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

const AUTO_SLIDE_INTERVAL = 5000;

export default function Hero() {
  const [page, setPage] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setPage(prev => (prev + 1) % heroData.length);
    }, AUTO_SLIDE_INTERVAL);
    return () => clearInterval(intervalRef.current);
  }, []);

  const goToPage = idx => {
    setPage(idx);
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setPage(prev => (prev + 1) % heroData.length);
    }, AUTO_SLIDE_INTERVAL);
  };

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

          {/* ✅ Fixed Link paths */}
          <Link
            to={button.link}
            className="hero-btn"
            style={{ width: button.width }}
          >
            {button.label}
          </Link>

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
