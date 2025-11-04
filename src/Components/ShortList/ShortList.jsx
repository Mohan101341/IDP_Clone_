import React from 'react'
import { Info } from "lucide-react";

import './ShortList.css'
const ShortList = () => {
  return (
    <div className="saved-courses-container">
      <h2 className="saved-title">
        <span className="underline">S</span>aved courses
      </h2>

      <p className="saved-description">
        Courses you have saved appear here, explore our new feature that sorts based on eligibility!
        Let us help set you up for the best success.
      </p>

      <div className="save-box">
        <Info size={20} className="info-icon" />
        <div>
          <p className="save-text">
            <strong>Save your shortlists to compare later</strong>
          </p>
          <p className="save-link">
            <a href="#">Create an account today</a> to access your favourites on any device.
          </p>
        </div>
      </div>

      <h3 className="no-course-text">No Shortlist courses Found</h3>
    </div>

  )
}

export default ShortList
