import React, { useState } from "react";
import "./Health_Insurance.css";
import Related_Articles from "../../../Related_Articles/Related_Articles";

const Health_Insurance = () => {
  const [destination, setDestination] = useState("All destinations");

  return (
    <div className="insurance-container">
      <div className="health-container">
        {/* Breadcrumb */}
        <p className="breadcrumb">
          Study Abroad, Overseas Education... / Student Essentials / Health Insurance
        </p>

        {/* Heading */}
        <h1 className="main-heading">
          Health Insurance services for International Students
        </h1>

        {/* Recommendation Section */}
        <div className="recommend-box">
          <p>Discover recommended products for your study destination.</p>
          <select
            className="destination-dropdown"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          >
            <option>All destinations</option>
            <option>Australia</option>
            <option>UK</option>
            <option>Canada</option>
            <option>USA</option>
          </select>
        </div>

       
       
       
       
      </div>

      {/* Top Banner */}
      <section className="insurance-banner">
        <h1>Health Insurance for International Students</h1>
        <p>
          Ensure peace of mind while studying abroad. Get coverage for doctor visits,
          hospital stays, emergency ambulance services, and prescription medicine.
        </p>
        <button className="cta-btn">
          Apply for Student Visa Money Transfer
        </button>
      </section>

      {/* Options Section */}
      <section className="insurance-options">
        <div className="option-card">
          <h2>Compare and choose what’s right for you</h2>
          <p>
            Explore plans from trusted providers that meet the strict conditions of
            registered health funds. Find the coverage that fits your needs.
          </p>
          <button className="option-btn">Compare Plans</button>
        </div>

        <div className="option-card">
          <h2>Apply online for a quick turnaround</h2>
          <p>
            Get insured fast with our streamlined online application. No paperwork,
            no hassle—just protection when you need it most.
          </p>
          <button className="option-btn">Apply Now</button>
        </div>
      </section>
      <Related_Articles/>
    </div>
  );
};

export default Health_Insurance;
