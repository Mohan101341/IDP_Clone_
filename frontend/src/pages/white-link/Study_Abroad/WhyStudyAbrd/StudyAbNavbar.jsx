import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "./StudyAbNavbar.css";

function StudyAbNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
  { path: "/study-abroad/why-study-abroad", label: "Why Study Abroad" },
  { path: "/study-abroad/where-to-study", label: "Where and what to study" },
  { path: "/study-abroad/how-to-apply", label: "How do I apply" },
  { path: "/study-abroad/after-offer", label: "After receiving an offer" },
  { path: "/study-abroad/prepare-to-depart", label: "Prepare to depart" },
  { path: "/study-abroad/arrive-and-thrive", label: "Arrive and thrive" },
];


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path || location.hash === `#${path}`;
  };

  return (
    <nav className="study-ab-navbar">
      {/* Mobile Menu Button */}
      <button 
        className="mobile-menu-toggle" 
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
      >
        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className="menu-icon" />
        <span className="menu-label">Study Abroad Steps</span>
        <FontAwesomeIcon icon={faChevronDown} className={`chevron ${isOpen ? 'open' : ''}`} />
      </button>

      {/* Desktop Navigation */}
      <ul className="Nav-links desktop-nav">
        {navItems.map((item) => (
          <li key={item.path}>
            <Link 
              to={item.path}
              className={isActive(item.path) ? 'active' : ''}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Dropdown Menu */}
      <div className={`mobile-dropdown ${isOpen ? 'open' : ''}`}>
        <ul className="Nav-links mobile-nav">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link 
                to={item.path}
                className={isActive(item.path) ? 'active' : ''}
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div className="mobile-overlay" onClick={closeMenu}></div>
      )}
    </nav>
  );
}

export default StudyAbNavbar;