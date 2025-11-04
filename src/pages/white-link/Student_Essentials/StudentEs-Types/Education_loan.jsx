import React, { useState } from "react";
import "./Education_loan.css";
import Related_Articles from "../../../Related_Articles/Related_Articles";

const partners = [{
    name: "ICICI Bank iSMART Education Loans",
    logo: "/assets/ICICI_Bank_iSMART_logo.png",
    features: [
      "Tax Saving (ITR sec-80E)",
      "Covers tuition fee & more",
      "Track and apply online",
    ],
    destinations: ["AU", "CA", "GB", "IE", "NZ", "US"],
  },
  {
    name: "Avanse",
    logo: "/assets/Avanse_logo_cropped.png",
    features: ["Covers tuition fee & more", "Track and apply online"],
    destinations: ["AU", "CA", "GB", "IE", "NZ", "US"],
  },
  {
    name: "Credila",
    logo: "/assets/Credila-Logo-Sept24.png",
    features: [
      "Tax Saving (ITR sec-80E)",
      "Covers tuition fee & more",
      "Track and apply online",
    ],
    destinations: ["AU", "CA", "GB", "IE", "NZ", "US"],
  },

  
  {
    name: "Poonawalla Fincorp Limited",
    logo: "/assets/PFL-logo (1).jpeg",
    features: [
      "Tax Saving (ITR sec-80E)",
      "Covers tuition fee & more",
      "Track and apply online",
    ],
    destinations: ["AU", "CA", "GB", "IE", "NZ", "US"],
  },
  {
    name: "Union Bank of India Services Limited",
    logo: "/assets/UBI_SL_Logo.jpeg",
    features: [
      "Tax Saving (ITR sec-80E)",
      "Covers tuition fees & more",
      "Track and apply online",
    ],
    destinations: ["AU", "CA", "GB", "IE", "NZ", "US"],
  },
 {
    name: "State Bank of India (SBI)",
    logo: "/assets/SBI.png",
    features: [
      "Tax Saving (ITR sec-80E)",
      "Covers tuition fee & more",
      "Track and apply online",
    ],
    destinations: ["AU", "CA", "GB", "IE", "NZ", "US"],
  },


  

];

const Education_loan = () => {

  const [destination, setDestination] = useState("All destinations");
  const [selectedDestination, setSelectedDestination] = useState("All");

  const filteredPartners =
    selectedDestination === "All"
      ? partners
      : partners.filter((p) => p.destinations.includes(selectedDestination));

  return (
    <div className="insurance-container">
     

     
         <div className="health-container">
        {/* Breadcrumb */}
        <p className="breadcrumb">
          Study Abroad, Overseas Education... / Student Essentials /Education_loan
        </p>

        {/* Heading */}
        <h1 className="main-heading">
          Education Loan services for International Students
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



     
     

      <div className="partner-grid">
        {filteredPartners.map((bank, i) => (
          <div key={i} className="partner-card">
            <div>
              <div className="flex justify-between items-center mb-3">
                <h3>{bank.name}</h3>
                <img src={bank.logo} alt={`${bank.name} logo`} />
              </div>
              <ul>
                {bank.features.map((f, index) => (
                  <li key={index}>{f}</li>
                ))}
              </ul>
              <p>Available for: {bank.destinations.join(", ")}</p>
            </div>
            <div className="button-group">
              <button className="button-primary" aria-label={`Enquire about ${bank.name}`}>
                Enquire now
              </button>
              <button className="button-secondary" aria-label={`Learn more about ${bank.name}`}>
                Learn more
              </button>
            </div>
          </div>
        ))}
      </div>
      <Related_Articles/>
    </div>
  );
};

export default Education_loan;