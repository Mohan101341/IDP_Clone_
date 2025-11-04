import React, { useState } from "react";
const contactImg1 = "/assets/form-banner3.webp";
import './StudentEssForm.css'
export default function StudentEssFrom() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    destination: "",
    startTime: "",
    office: "",
    studyLevel: "",
    funding: "",
    agreeTerms: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="contact1-page">
      <div className="contact-container">
        {/* LEFT SIDE */}
        <div className="contact-left">
          <div className="contact-header">
            <h1>
              <span className="g-accent">G</span>et support with your student essentials
            </h1>
            <p className="contact-subtitle">
           Tell us what you need, and we’ll help you get it sorted
            </p>
          </div>

          <form onSubmit={handleSubmit} className="contact-form">
            {/* FIRST + LAST NAME */}
            <div className="form-row">
              <div className="form-field">
                <label>First name*</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-field">
                <label>Last name*</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            {/* EMAIL */}
            <div className="form-row">
              <div className="form-field full-width">
                <label>Email address*</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            {/* MOBILE */}
            <div className="form-row">
              <div className="form-field full-width">
                <label>Mobile number*</label>
                <div className="mobile-group">
                  <input
                    type="text"
                    className="country-code"
                    value="+91"
                    readOnly
                  />
                  <input
                    type="tel"
                    name="mobile"
                    className="mobile-number"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
            </div>

            {/* DESTINATION + START TIME */}
            <div className="form-row">
              <div className="form-field">
                <label>Your preferred study destination*</label>
                <select
                  name="destination"
                  value={formData.destination}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select</option>
                  <option value="australia">Australia</option>
                  <option value="canada">Canada</option>
                  <option value="uk">United Kingdom</option>
                  <option value="usa">United States</option>
                  <option value="newzealand">New Zealand</option>
                  <option value="ireland">Ireland</option>
                </select>
              </div>
              
              <div className="form-field">
                <label>When would you like to start?*</label>
                <select
                  name="startTime"
                  value={formData.startTime}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select</option>
                  <option value="2025">2025</option>
                  <option value="2026">2026</option>
                </select>
              </div>
            </div>

            {/* OFFICE + MODE */}
            <div className="form-row">
              <div className="form-field">
                <label>Nearest IDP Office*</label>
                <select
                  name="office"
                  value={formData.office}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select</option>
                  <option value="delhi">Delhi</option>
                  <option value="mumbai">Mumbai</option>
                  <option value="bangalore">Bangalore</option>
                  <option value="chennai">Chennai</option>
                  <option value="hyderabad">Hyderabad</option>
                  <option value="pune">Pune</option>
                </select>
              </div>
            </div>

            {/* STUDY LEVEL + FUNDING */}
            <div className="form-row">
              <div className="form-field">
                <label>Preferred study level*</label>
                <select
                  name="studyLevel"
                  value={formData.studyLevel}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select</option>
                  <option value="bachelor">Bachelor&apos;s</option>
                  <option value="master">Master&apos;s</option>
                  <option value="phd">PhD</option>
                  <option value="diploma">Diploma</option>
                </select>
              </div>
              <div className="form-field">
                <label>How would you fund your education?*</label>
                <select
                  name="funding"
                  value={formData.funding}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select</option>
                  <option value="self-funded">Self-funded</option>
                  <option value="scholarship">Scholarship</option>
                  <option value="education-loan">Education Loan</option>
                  <option value="family-support">Family Support</option>
                </select>
              </div>
            </div>

            {/* TERMS */}
            <div className="form-checkbox">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  name="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={handleInputChange}
                  required
                />
                I agree to IDP{" "}
                <a href="#" className="link">
                  Terms and Conditions 
                </a>{" "}
                and{" "}
                <a href="#" className="link">
                  Privacy Policy
                </a>{" "}
                *
              </label>
            </div>
             <div className="form-checkbox">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  name="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={handleInputChange}
                  required
                />
              Please contact me by phone, email or SMS to assist with my enquiry
              </label>
            </div>
             <div className="form-checkbox">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  name="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={handleInputChange}
                  required
                />
               I would like to receive updates and offers from IDP
               
              </label>
            </div>

            <button type="submit" className="submit-button">
            
            Enquire now
            </button>
          </form>
        </div>

        {/* RIGHT SIDE */}
        <div className="contact-right">
          <div className="image-container">
            <div className="background-shapes">
              <div className="shape-green"></div>
              <div className="shape-orange"></div>
              <div className="shape-blue"></div>
            </div>
            <img
              src={contactImg1}
              alt="Contact Representative"
              className="contact-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
