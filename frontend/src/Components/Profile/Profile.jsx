import React from 'react'
import "./Profile.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faPhone, faMapMarkerAlt, faGraduationCap, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const Profile = () => {
  // Sample user data
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    location: "New York, USA",
    studyLevel: "Masters Degree",
  };

  const handleLogout = () => {
    // Implement your logout logic here
    console.log("User logged out");
    alert("You have been logged out!");
    // Redirect to login page or home page
  };

  return (
    <div className="profile-page-container">
      <div className="profile-card">
        <h2 className="profile-title">My Profile</h2>
        <div className="profile-info">
          <div className="info-item">
            <FontAwesomeIcon icon={faUser} className="info-icon" />
            <div>
              <span className="info-label">Name</span>
              <span className="info-value">{user.name}</span>
            </div>
          </div>
          <div className="info-item">
            <FontAwesomeIcon icon={faEnvelope} className="info-icon" />
            <div>
              <span className="info-label">Email</span>
              <span className="info-value">{user.email}</span>
            </div>
          </div>
          <div className="info-item">
            <FontAwesomeIcon icon={faPhone} className="info-icon" />
            <div>
              <span className="info-label">Phone</span>
              <span className="info-value">{user.phone}</span>
            </div>
          </div>
          <div className="info-item">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="info-icon" />
            <div>
              <span className="info-label">Location</span>
              <span className="info-value">{user.location}</span>
            </div>
          </div>
          <div className="info-item">
            <FontAwesomeIcon icon={faGraduationCap} className="info-icon" />
            <div>
              <span className="info-label">Study Level</span>
              <span className="info-value">{user.studyLevel}</span>
            </div>
          </div>
        </div>
        <button className="logout-button" onClick={handleLogout}>
          <FontAwesomeIcon icon={faSignOutAlt} />
          Logout
        </button>
      </div>
    </div>
  )
}

export default Profile
