import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faAngleDown,
  faBars,
  faTimes,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart as faRegularHeart } from "@fortawesome/free-regular-svg-icons";

const styles = {
  navButton: {
    background: "none",
    border: "none",
    cursor: "pointer",
    fontSize: "inherit",
    color: "inherit",
    display: "flex",
    alignItems: "center",
    gap: "3px",
  },
  dropdownMenu: {
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 1)",
    boxShadow: "0 4px 8px rgba(18, 2, 2, 0.1)",
    listStyle: "none",
    padding: "10px 0",
    marginTop: "5px",
    borderRadius: "4px",
    zIndex: 1000,
    minWidth: 200,
  },
  dropdownItem: {
    padding: "8px 20px",
    cursor: "pointer",
    whiteSpace: "nowrap",
  },
  navItem: {
    cursor: "pointer",
    position: "relative",
  },
  secondLevelMenu: {
    position: "absolute",
    top: 0,
    left: "100%",
    backgroundColor: "#f5f5f5",
    boxShadow: "0 4px 8px rgba(18, 2, 2, 0.1)",
    listStyle: "none",
    padding: "10px 0",
    marginTop: 0,
    borderRadius: "4px",
    zIndex: 1001,
    minWidth: 260,
    height: "100%",
  },
};

const balckDropworn = {
  "Find-us": {
    path: "/pages/Find",
    items: [
      { label: "Our Office", path: "/pages/Find" },
      { label: "Office Hours", path: "/pages/Find" },
      { label: "Phone & Email", path: "/pages/Find" },
      { label: "Facebook", path: "/pages/Find" },
      { label: "Instagram", path: "/pages/Find" },
      { label: "LinkedIn", path: "/pages/Find" },
      { label: "YouTube", path: "/pages/Find" },
      { label: "Map Location", path: "/pages/Find" },
      { label: "Book Appointment", path: "/pages/Find" },
      { label: "Support Center", path: "/pages/Find" },
    ],
  },
};

const dropdownData = {
  "Study-abroad-steps": {
    path: "/pages/white-link/StudyAb",
    items: [
      { label: "Why study abroad?", path: "/pages/white-link/StudyAb" },
      { label: "Where and what to study?", path: "/pages/white-link/where-to-study-abroad" },
      { label: "How do I apply?", path: "/pages/white-link/how-to-apply" },
      { label: "After receiving an offer", path: "/pages/white-link/StudyAb" },
      { label: "Prepare to depart", path: "/pages/white-link/StudyAb" },
      { label: "Arrive and thrive", path: "/pages/white-link/StudyAb" },
    ],
  },
  "Study-destinations": {
    path: "/pages/white-link/StudyDs",
    items: [
      { label: "Study in Australia", path: "/pages/white-link/StudyDestinations/StudyInAustralia" },
      { label: "Study in Canada", path: "/pages/white-link/StudyDestinations/StudyInCanada" },
      { label: "Study in Ireland", path: "/pages/white-link/StudyDestinations/StudyInIreland" },
      { label: "Study in UK", path: "/pages/white-link/StudyDestinations/StudyInUk" },
      { label: "Study in USA", path: "/pages/white-link/StudyDestinations/StudyInUsa" },
    ],
  },
  "Find-a-course": {
    path: "/pages/white-link/Find1",
    items: [
      { label: "Course Advice", path: "/pages/CourseA" },
      { label: "Courses with Instant Offer", path: "/pages/Courseof" },
      { label: "Study Abroad cources", path: "/pages/Sabroad" },
      { label: "Find scholorships", path: "/pages/Scholar" },
      { label: "Find Universities", path: "/pages/FindU" },
      { label: "University Rankings - THE", path: "/pages/Uranking" },
      { label: "Complete University Guide (CUG)", path: "/pages/Cug" },
    ],
  },
  "IELTS": {
    path: "/pages/white-link/IELTS",
    items: [
      {label: "TOEFL", path: "/pages/Toefl" },
      { label: "DUOLINGO", path: "/pages/Duolingo" },
      { label: "IELTS", path: "/pages/IELTSPage" },
    ],
  },
  "Student-essentials": {
    path: "/pages/white-link/Student",
    items: [
      { label: "Accommodation", path: "/pages/white-link/Student" },
      { label: "Health Insurance", path: "/pages/white-link/Student" },
      { label: "Student Visa", path: "/pages/white-link/Student" },
      { label: "Travel Tips", path: "/pages/white-link/Student" },
    ],
  },
};

const submenuData = {
  "University Rankings - THE": [
    { label: "QS World University Rankings", path: "/pages/Qsworld" },
  ],
};

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openSecondLevel, setOpenSecondLevel] = useState(null);
  const [dropdownHeight, setDropdownHeight] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  const dropdownRef = React.useRef(null);
  const navigate = useNavigate();

  // Check if user is logged in
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) setLoggedIn(true);
  }, []);

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem("user");
    setLoggedIn(false);
    navigate("/");
  };

  const toggleDropdown = (key) => {
    setOpenDropdown((prev) => (prev === key ? null : key));
  };

  const closeDropdown = () => {
    setOpenDropdown(null);
    setOpenSecondLevel(null);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    closeDropdown();
  };

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
    return () => (document.body.style.overflow = "unset");
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (openDropdown && dropdownRef.current) {
      setDropdownHeight(dropdownRef.current.clientHeight);
    } else {
      setDropdownHeight(null);
    }
  }, [openDropdown]);

  return (
    <>
      {/* Top Black Bar */}
      <div className="black-container" style={{ position: "relative", zIndex: 9999 }}>
        <ul className="black-links" style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
          <li className="black-li">
            <Link to="/pages/NewAndA">News and articles</Link>
          </li>
          <li className="black-li">
            <Link to="/pages/Events">Events</Link>
          </li>

          <li
            className="black-li1"
            style={{ position: "relative" }}
            onMouseEnter={() => setOpenDropdown("Find-us-black")}
            onMouseLeave={closeDropdown}
          >
            <button
              style={{ ...styles.navButton, fontSize: "1rem" }}
              onClick={() => toggleDropdown("Find-us-black")}
            >
              Find us <FontAwesomeIcon icon={faAngleDown} />
            </button>

            {openDropdown === "Find-us-black" && (
              <ul
                style={{
                  ...styles.dropdownMenu,
                  top: "100%",
                  left: 0,
                  minWidth: 220,
                  backgroundColor: "#222",
                  color: "#fff",
                  zIndex: 10000,
                }}
              >
                {balckDropworn["Find-us"].items.map((item, idx) => (
                  <li key={idx} style={{ ...styles.dropdownItem, color: "#fff" }}>
                    <Link
                      to={item.path}
                      onClick={closeDropdown}
                      style={{ color: "#fff", textDecoration: "none" }}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          <li className="black-li1">
            <Link to="/pages/English">
              <FontAwesomeIcon icon={faGlobe} /> English
            </Link>
          </li>
        </ul>
      </div>

      {/* Main Navbar */}
      <nav className="main-navbar">
        <Link to="/">
          <img src="/assets/idp-logo.svg" alt="Logo" className="logo" />
        </Link>

        <ul className="nav-links">
          {Object.entries(dropdownData).map(([key, items]) => (
            <li
              key={key}
              style={styles.navItem}
              onMouseEnter={() => setOpenDropdown(key)}
              onMouseLeave={closeDropdown}
            >
              <Link
                to={items.path}
                style={styles.navButton}
                onClick={() => toggleDropdown(key)}
              >
                {key
                  .split("-")
                  .map((w) => w[0].toUpperCase() + w.slice(1))
                  .join(" ")}{" "}
                <FontAwesomeIcon icon={faAngleDown} />
              </Link>

              {openDropdown === key && (
                <ul style={styles.dropdownMenu} ref={dropdownRef}>
                  {items.items.map((item, idx) => (
                    <li
                      key={idx}
                      style={styles.dropdownItem}
                      onMouseEnter={() => setOpenSecondLevel(item.label)}
                      onMouseLeave={() => setOpenSecondLevel(null)}
                    >
                      <Link
                        to={item.path}
                        onClick={closeDropdown}
                        style={{ color: "#161111ff", textDecoration: "none" }}
                      >
                        {item.label}
                      </Link>

                      {submenuData[item.label] && openSecondLevel === item.label && (
                        <ul
                          style={{
                            ...styles.secondLevelMenu,
                            height: dropdownHeight ? dropdownHeight : styles.secondLevelMenu.height,
                          }}
                        >
                          {submenuData[item.label].map((sub, sIdx) => (
                            <li key={sIdx} style={styles.dropdownItem}>
                              <Link
                                to={sub.path}
                                onClick={closeDropdown}
                                style={{ color: "#161111ff", textDecoration: "none" }}
                              >
                                {sub.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* Right Buttons */}
        <div className="nav-buttons">
          <Link to="/pages/white-link/Avail">
            <button className="login-btn">Avail Free counselling</button>
          </Link>

          {loggedIn ? (
            <button className="signup-btn" onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <Link to="/pages/white-link/SignIN">
              <button className="signup-btn">Sign in</button>
            </Link>
          )}
        </div>

        <div className="right-icons">
          <Link to="#" className="icon-btn heart">
            <FontAwesomeIcon icon={faRegularHeart} />
          </Link>
          <Link to="#" className="icon-btn account">
            <FontAwesomeIcon icon={faUser} />
          </Link>
          <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
            <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />
          </button>
        </div>

        {/* Mobile Sidebar */}
        <div className={`mobile-sidebar ${isMobileMenuOpen ? "open" : ""}`}>
          <ul className="mobile-links">
            {Object.entries(dropdownData).map(([key, items]) => (
              <li key={key}>
                <Link to={items.path} onClick={toggleMobileMenu}>
                  {key
                    .split("-")
                    .map((w) => w[0].toUpperCase() + w.slice(1))
                    .join(" ")}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/pages/white-link/Avail">
                <button className="login-btn" onClick={toggleMobileMenu}>
                  Avail Free counselling
                </button>
              </Link>
            </li>
            <li>
              {loggedIn ? (
                <button className="signup-btn" onClick={handleLogout}>
                  Logout
                </button>
              ) : (
                <Link to="/pages/white-link/SignIN">
                  <button className="signup-btn" onClick={toggleMobileMenu}>
                    Sign in
                  </button>
                </Link>
              )}
            </li>
          </ul>
        </div>

        {isMobileMenuOpen && (
          <div
            className="mobile-menu-overlay"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </nav>
    </>
  );
};

export default Navbar;
