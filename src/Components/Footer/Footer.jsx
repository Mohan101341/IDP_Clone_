
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
            <li><a href="#">About us</a></li>
            <li><a href="#">Study abroad counselling</a></li>
            <li><a href="#">IDP Careers</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h2>Useful Links</h2>
          <ul>
            <li><a href="#">Find a course</a></li>
            <li><a href="#">Find scholarships</a></li>
            <li><a href="#">Find a university</a></li>
            <li><a href="#">Ask IDP</a></li>
            <li><a href="#">Cost of living</a></li>
            <li><a href="#">Statement of Purpose</a></li>
            <li><a href="#">Letter of Recommendation</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h2>IELTS</h2>
          <ul>
            <li><a href="#">What is IELTS?</a></li>
            <li><a href="#">Why take IELTS with IDP?</a></li>
            <li><a href="#">IELTS Preparation</a></li>
            <li><a href="#">Book a test</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h2>Connect with IDP</h2>
          <ul>
            <li><a href="#">IDP Events</a></li>
            <li><a href="#">Corporate responsibility</a></li>
            <li><a href="#">Our offices</a></li>
            <li><a href="#">Customer Grievances</a></li>
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