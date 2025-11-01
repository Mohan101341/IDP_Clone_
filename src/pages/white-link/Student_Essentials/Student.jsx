import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./StudentEss.css";
import StudentEssFrom from "./StudentEssFrom/StudentEssFrom";
import ServicesSection from "./StudentEssFrom/ServiceSection";
import EssentialsCards from "./StudentEssFrom/EssentialsCards";

const Student = () => {
  const navigate = useNavigate(); // Initialize navigate

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    destination: "",
    startTime: "",
    office: "",
    counsellingMode: "",
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
    alert("Form submitted successfully!");
  };

  const handleChange = () => {
    navigate("/pages/white-link/Sign_Up"); // Navigate to Sign Up page
  };

  return (
    <div className="essentials-container">
      <p className="breadcrumb">
        Study Abroad, Overseas Education... / Student Essentials Services...
      </p>
      <h1 className="heading">Student Essentials</h1>

      {/* Filter and recommendation section */}
      <div className="recommend-section">
        <p>Discover recommended products for your study destination.</p>
        <select className="destination-select">
          <option>All</option>
          <option>Australia</option>
          <option>UK</option>
          <option>Canada</option>
          <option>USA</option>
        </select>
      </div>

      {/* Bottom Section */}
      <div className="bottom-banner">
        <div className="banner-left">
          <img
            src="/assets/Blue Modern Study Counseling Banner.png"
            alt="Students"
            className="banner-img"
          />
        </div>
        <div className="banner-right">
          <h2>Simplifying your study abroad experience.</h2>
          <p>Watch how we take care of the boring stuff, so you don’t have to.</p>
          <button onClick={handleChange} className="free-btn">
            Sign Up for Free
          </button>
        </div>
      </div>

      {/* Form and Service Section */}
      <StudentEssFrom />
     
     
      <EssentialsCards />
      <ServicesSection />
    </div>
  );
};

export default Student;
