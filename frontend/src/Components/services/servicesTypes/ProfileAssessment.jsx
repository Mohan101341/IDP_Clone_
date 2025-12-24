import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ProfileAssessment.css";

const ProfileAssessment = () => {
  const navigate = useNavigate();

  // State for form fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    destination: "",
    intake: "",
    studyLevel: "",
    fundingSource: "",
  });

  // State for profile strength (simple example)
  const [profileStrength, setProfileStrength] = useState(0); // 0-100%

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    // A very basic way to update strength based on filled fields
    updateProfileStrength();
  };

  const updateProfileStrength = () => {
    let filledFields = 0;
    const totalFields = Object.keys(formData).length;
    for (const key in formData) {
      if (formData[key] !== "") {
        filledFields++;
      }
    }
    setProfileStrength(Math.round((filledFields / totalFields) * 100));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Profile Assessment Form Submitted:", formData);
    alert("Thank you for your submission! Our experts will contact you shortly.");
    // In a real app, you'd send this data to a backend API
    // navigate("/thank-you"); // Or navigate to a thank you page
  };

  // Options for dropdowns
  const destinations = ["Select Destination", "Australia", "Canada", "UK", "USA", "Germany", "Other"];
  const intakes = ["Select Intake", "Jan 2026", "May 2026", "Sep 2026", "Jan 2027", "Other"];
  const studyLevels = ["Select Study Level", "High School", "Undergraduate", "Postgraduate", "PhD", "Vocational"];
  const fundingSources = ["Select Funding Source", "Self-funded", "Education Loan", "Scholarship", "Family Support", "Other"];

  return (
    <section className="profile-assessment-page">
      {/* ===== HEADER ===== */}
      <header className="profile-assessment-header">
        <h1>Get Your Personalized Profile Assessment</h1>
        <p>
          Unlock your study abroad potential! Our experts will evaluate your academic, professional, and career profile to provide tailored recommendations and guide you towards your dream university.
        </p>
      </header>

      <div className="profile-assessment-content">
        {/* ===== PROFILE STRENGTH METER ===== */}
        <div className="profile-strength-meter">
          <h2>Your Profile Strength: {profileStrength}% Complete</h2>
          <div className="strength-bar-container">
            <div className="strength-bar" style={{ width: `${profileStrength}%` }}></div>
          </div>
          <p>Fill out the form below to get a more accurate assessment and personalized guidance.</p>
        </div>

        {/* ===== ASSESSMENT FORM ===== */}
        <div className="assessment-form-container">
          <h2>Tell Us About Yourself</h2>
          <form onSubmit={handleSubmit} className="profile-assessment-form">
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="mobile">Mobile Number</label>
              <input
                type="tel"
                id="mobile"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="e.g., +1234567890"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="destination">Preferred Study Destination</label>
              <select
                id="destination"
                name="destination"
                value={formData.destination}
                onChange={handleChange}
                required
              >
                {destinations.map((option) => (
                  <option key={option} value={option === "Select Destination" ? "" : option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="intake">Preferred Intake</label>
              <select
                id="intake"
                name="intake"
                value={formData.intake}
                onChange={handleChange}
                required
              >
                {intakes.map((option) => (
                  <option key={option} value={option === "Select Intake" ? "" : option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="studyLevel">Current/Highest Study Level</label>
              <select
                id="studyLevel"
                name="studyLevel"
                value={formData.studyLevel}
                onChange={handleChange}
                required
              >
                {studyLevels.map((option) => (
                  <option key={option} value={option === "Select Study Level" ? "" : option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="fundingSource">Primary Funding Source</label>
              <select
                id="fundingSource"
                name="fundingSource"
                value={formData.fundingSource}
                onChange={handleChange}
                required
              >
                {fundingSources.map((option) => (
                  <option key={option} value={option === "Select Funding Source" ? "" : option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <button type="submit" className="submit-assessment-btn">
              Get My Free Assessment
            </button>
          </form>
        </div>
      </div>

      {/* ===== CTA ===== */}
      <div className="profile-assessment-cta">
        <h2>Ready for Personalized Guidance?</h2>
        <p>
          Submit your profile details, and our expert counsellors will reach out to you for a free 1-on-1 session.
        </p>
        {/* The button here can be removed if the form submission is the primary CTA */}
        {/* <button onClick={() => navigate("/contact")}>
          Book a Free Counselling Session
        </button> */}
      </div>
    </section>
  );
};

export default ProfileAssessment;
