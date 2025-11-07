
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import './Footer.css'; // Import external CSS

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-sections">
        <div className="footer-column">
          <h2>About IDP</h2>
          <ul>
            <li><a href="/">About us</a></li>
            <li><a href="/pages/white-link/Avail">Study abroad counselling</a></li>
            <li><a href="/pages/NewAndA">IDP Careers</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h2>Useful Links</h2>
          <ul>
            <li><a href="/pages/CourseA">Find a course</a></li>
            <li><a href="/pages/Scholar">Find scholarships</a></li>
            <li><a href="/pages/FindU">Find a university</a></li>
            <li><a href="/pages/white-link/Study_Abroad/AskIdp/Askidp">Ask IDP</a></li>
            <li><a href="/pages/NewAndA">Cost of living</a></li>
            <li><a href="/pages/NewAndA">Statement of Purpose</a></li>
            <li><a href="/pages/NewAndA">Letter of Recommendation</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h2>IELTS</h2>
          <ul>
            <li><a href="/pages/What">What is IELTS?</a></li>
            <li><a href="/pages/Prep">Why take IELTS with IDP?</a></li>
            <li><a href="/pages/Prep">IELTS Preparation</a></li>
            <li><a href="/pages/Book">Book a test</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h2>Connect with IDP</h2>
          <ul>
            <li><a href="/pages/Events">IDP Events</a></li>
            <li><a href="/pages/NewAndA">Corporate responsibility</a></li>
            <li><a href="/pages/Find">Our offices</a></li>
            <li><a href="/pages/NewAndA">Customer Grievances</a></li>
          </ul>
        </div>
      </div>
<div className="footer-row">
  <ul>
    <li><a href="#"><FontAwesomeIcon icon={faFacebook} /></a></li>
    <li><a href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
    <li><a href="#"><FontAwesomeIcon icon={faInstagram} /></a></li>
    <li><a href="#"><FontAwesomeIcon icon={faLinkedin} /></a></li>
  </ul>
</div>

      <div className="footer-bottom">
        <p>© 2023 IDP Education</p>
        <p>IELTS is jointly owned by IDP: IELTS Australia, British Council and Cambridge English.</p>
        <p>Cambridge English is part of Cambridge University Press & Assessment.</p>
      </div>
      <div className="footer-row">
      
          <ul>
            <li><a href="#">Investors</a></li>
            <li><a href="#">Terms of use</a></li>
            <li><a href="#">Privacy policy</a></li>
            <li><a href="#">Diclaimer</a></li>
          </ul>
        </div>
    </footer>
  );
};

export default Footer;