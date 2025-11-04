import React, { useState } from 'react'
import Related_Articles from '../../../Related_Articles/Related_Articles';

const ISIC = () => {
    const [destination, setDestination] = useState("All destinations");
  return (
    
    <div className="insurance-container">
      <div className="health-container">
        {/* Breadcrumb */}
        <p className="breadcrumb">
          Study Abroad, Overseas Education... / Student Essentials / ISIC
        </p>

        {/* Heading */}
        <h1 className="main-heading">
          ISIC Services for International Students
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
      <Related_Articles/>
    </div>
  )
}

export default ISIC
