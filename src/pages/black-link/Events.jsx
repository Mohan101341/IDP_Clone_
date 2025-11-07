import React from 'react'

const Events = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Upcoming Events</h1>
      <p>
        Stay updated with our latest events, workshops, and seminars designed to help you succeed in your academic and professional journey.
      </p>
      <h2>Featured Events</h2>
      <ul>
        <li>
          <strong>Study Abroad Seminar</strong> <br />
          <span>Date:</span> October 10, 2025 <br />
          <span>Location:</span> Main Auditorium <br />
          <span>Description:</span> Learn about study destinations, scholarships, and application tips.
        </li>
        <li>
          <strong>English Language Workshop</strong> <br />
          <span>Date:</span> November 5, 2025 <br />
          <span>Location:</span> Room 204 <br />
          <span>Description:</span> Improve your English skills with expert trainers.
        </li>
        <li>
          <strong>Career Guidance Fair</strong> <br />
          <span>Date:</span> December 2, 2025 <br />
          <span>Location:</span> Conference Hall <br />
          <span>Description:</span> Meet career counselors and explore job opportunities.
        </li>
      </ul>
      <p>
        For more details and registration, please contact our support team or visit the events section regularly.
      </p>
    </div>
  )
}

export default Events
