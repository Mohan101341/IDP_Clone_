import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faAngleDown, faBars, faTimes, faUser } from "@fortawesome/free-solid-svg-icons";
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
// Black bar dropdown data
const balckDropworn = {
  "Find-us": {
    path: "/pages/black-link/Find",
    items: [
      { label: "IDP Australia", path: "/find-us/australia" },
      { label: "IDP Bahrain", path: "/find-us/bahrain" },
      { label: "IDP Bangladesh", path: "/find-us/bangladesh" },
      { label: "IDP Cambodia", path: "/find-us/cambodia" },
      { label: "IDP Canada", path: "/find-us/canada" },
      { label: "IDP China", path: "/find-us/china" },
      { label: "IDP Egypt", path: "/find-us/egypt" },
      { label: "IDP Ghana", path: "/find-us/ghana" },
      { label: "IDP Hong Kong", path: "/find-us/hong-kong" },
      { label: "IDP Indonesia", path: "/find-us/indonesia" },
      { label: "IDP Iran", path: "/find-us/iran" },
      { label: "IDP Jordan", path: "/find-us/jordan" },
      { label: "IDP Kenya", path: "/find-us/kenya" },
      { label: "IDP Korea", path: "/find-us/korea" },
      { label: "IDP Kuwait", path: "/find-us/kuwait" },
      { label: "IDP Lebanon", path: "/find-us/lebanon" },
      { label: "IDP Malaysia", path: "/find-us/malaysia" },
      { label: "IDP Mauritius", path: "/find-us/mauritius" },
      { label: "IDP Middle East", path: "/find-us/middle-east" },
      { label: "IDP Nepal", path: "/find-us/nepal" },
    ],
  },
};



const dropdownData = {
  "Study-abroad-steps": {
    path: "/study-abroad/why-study-abroad",
    items: [
      { label: "Why study abroad?", path: "/study-abroad/why-study-abroad" },
      { label: "Where and what to study?", path: "/study-abroad/where-to-study" },
      { label: "How do I apply?", path: "/study-abroad/how-to-apply" },
      { label: "After receiving an offer", path: "/study-abroad/after-offer" },
      { label: "Prepare to depart", path: "/study-abroad/prepare-to-depart" },
      { label: "Arrive and thrive", path: "/study-abroad/arrive-and-thrive" },
    ],
  },


  "Study-destinations": {
    path: "/study-destinations",
    items: [
      { label: "Study in Australia", path: "/study-destinations/australia" },
      { label: "Study in Canada", path: "/study-destinations/canada" },
      { label: "Study in Ireland", path: "/study-destinations/ireland" },
      { label: "Study in UK", path: "/study-destinations/uk" },
      { label: "Study in USA", path: "/study-destinations/usa" },
    ],
  },

  "Find-a-course": {
    path: "/pages/FindC",
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
  "English Tests": {
    path: "/pages/EnglishT",
    items: [
      {label: "TOEFL", path: "/pages/Toefl" },
      { label: "DUOLINGO", path: "/pages/Duolingo" },
      { label: "IELTS", path: "/pages/IELTSPage" },
    ],
  },

  "Student-essentials": {
    path: "/student-essentials",
    items: [
      { label: "Education Loan", path: "/student-essentials/EducationLoan" },
      { label: "Money Transfer", path: "/student-essentials/Money_Transfer" },
      { label: "Health Insurance", path: "/student-essentials/HealthInsurance" },
      { label: "Student Banking", path: "/student-essentials/StudentBanking" },
      { label: "Accommodation", path: "/student-essentials/Accommodation" },
      { label: "International SIM Cards", path: "/student-essentials/InternationalSimCards" },
      { label: "Guardian Ship", path: "/student-essentials/Guardian-Ship" },
      { label: "Forex Cards", path: "/student-essentials/ForexCards" },
      { label: "ISIC", path: "/student-essentials/ISIC" },
      { label: "Student Travel Support", path: "/student-essentials/Travel_Support" },
    ],
  },


};

const submenuData = {
  "University Rankings - THE": [
    { label: "QS World University Rankings", path: "/pages/Qsworld" }
  ],
  "IELTS": [
    { label: "Book an IELTS Test", path: "/pages/Book" },
    { label: "What is IELTS?", path: "/pages/what" },
    { label: "IELTS Preparation", path: "/pages/Prep" }
  ],
};

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openSecondLevel, setOpenSecondLevel] = useState(null);
  const [dropdownHeight, setDropdownHeight] = useState(null);
 
  const dropdownRef = React.useRef(null);
  
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
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
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
      <div className="black-containera">
        <ul className="black-linksa">
          <li className="black-lia">
            <Link to="/pages/NewAndA">News and articles</Link>
          </li>
          <li className="black-lia">
            <Link to="/pages/Events">Events</Link>
          </li>

          {/* Find-us Dropdown */}
          <li
            className="black-li1 has-dropdown"
            onMouseEnter={() => setOpenDropdown("Find-us-black")}
            onMouseLeave={closeDropdown}
          >
            <button className="nav-button" onClick={() => toggleDropdown("Find-us-black")}>
              Find us <FontAwesomeIcon icon={faAngleDown} />
            </button>

            {openDropdown === "Find-us-black" && (
              <ul
                className="find-us-dropdown"
                onMouseEnter={() => setOpenDropdown("Find-us-black")}
                onMouseLeave={closeDropdown}
              >
                {/* Special Button on Top */}
                <li >
                  <Link to="/pages/black-link/Find/Find" style={{ textDecoration: "none" }}>
                    <button

                    >
                      Find nearest IDP Offices
                    </button>
                  </Link>
                </li>

                {/* Office Links */}
                {balckDropworn["Find-us"].items.map((item, idx) => (
                  <li key={idx}>
                    <Link to={item.path} onClick={closeDropdown} style={{ color: "#fff", textDecoration: "none" }}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          <li className="black-li2">
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

        <div className="nav-links-wrapper">
          <ul className="nav-links">
            {Object.entries(dropdownData).map(([key, items]) => (
              <li
                key={key}
                className="nav-item"
                onMouseEnter={() => setOpenDropdown(key)}
                onMouseLeave={closeDropdown}
              >
                <Link
                  to={items.path}
                  className="nav-button"
                  aria-haspopup="true"
                  aria-expanded={openDropdown === key}
                >
                  {key
                    .split("-")
                    .map((w) => w[0].toUpperCase() + w.slice(1))
                    .join(" ")}
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
                        <ul style={{
                          ...styles.secondLevelMenu,
                          height: dropdownHeight ? dropdownHeight : styles.secondLevelMenu.height,
                        }}>
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
        </div>

        <div className="nav-buttons">
          <Link to="/pages/white-link/Avail">
            <button className="login-btn">Avail Free counselling</button>
          </Link>
          <Link to="/pages/white-link/SignIN">
            <button className="signup-btn">Sign in</button>
          </Link>
        </div>

        <div className="right-icons">

          <Link to="/ShortList" className="icon-btn heart">
            <FontAwesomeIcon icon={faRegularHeart} />
          </Link>

          <Link to="/pages/white-link/SignIN" className="icon-btn account">
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
                  {key.split("-").map((w) => w[0].toUpperCase() + w.slice(1)).join(" ")}
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
              <Link to="/pages/white-link/SignIN">
                <button className="signup-btn" onClick={toggleMobileMenu}>
                  Sign in
                </button>
              </Link>
            </li>
          </ul>
        </div>

        {isMobileMenuOpen && <div className="mobile-menu-overlay" onClick={() => setIsMobileMenuOpen(false)} />}
      </nav>
    </>
  );
};

export default Navbar;
