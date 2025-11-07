import React, { useEffect, useState, useRef } from "react";
import "./hero.css";
import heroImg from "../../assets/hero-bg.jpg"; // <-- Make sure this file exists!

const heroData = [
  {
    heading: "Your Study Abroad Journey Begins Here",
    subheading: "1,13,000+ students achieved their study abroad dreams with IDP in one-year",
    button: { label: "Avail FREE counselling", link: "#", width: 230 },
  },
  {
    heading: "IDP Guided 28,000+ students to the UK in just one–year. Your future starts here!",
    subheading: "Attend IDP’s Biggest Study Abroad Expo in your city",
    button: { label: "Register Now", link: "#", width: 148 },
  },
  {
    heading: "60+ Universities, up to 100% Scholarships – Attend IDP’s Biggest Education Fair",
    subheading: "Australia | New Zealand",
    button: { label: "Secure your spot", link: "#", width: 180 },
  },
  {
    heading: "Women in STEM 100% Scholarship at The University of Newcastle",
    subheading: "Exclusively for IDP Students",
    button: { label: "Apply now", link: "#", width: 125 },
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
      style={{
        backgroundImage: `url(${heroImg})`,
      }}
    >
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>{heading}</h1>
          <p className="hero-subheading">{subheading}</p>
          <a
            href={button.link}
            className="hero-btn"
            style={{ width: button.width }}
          >
            {button.label}
          </a>
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
