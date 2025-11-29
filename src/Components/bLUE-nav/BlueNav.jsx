import React, { useState } from 'react'
import './BlueNav.css'

// This component is a blue navigation bar with a dropdown menu for mobile devices.
const BlueNav = () => {
  // State to manage the opening and closing of the mobile navigation menu
  const [open, setOpen] = useState(false);

  return (
    <nav className="blue-nav">
     
     
      {/* Down arrow button to toggle the navigation menu on mobile */}
      <button
        className="blue-nav__arrow"
        onClick={() => setOpen(!open)}
        aria-label="Toggle navigation"
      >
        ▼
      </button>
      {/* The list of navigation links */}
      <ul className={`blue-nav__links${open ? ' open' : ''}`}>
        {/* Each list item is a navigation link */}
        <li className="blue-nav__link"><a href="/#">Why-study-abroad</a><span>&gt;&gt;</span></li>
        <li className="blue-nav__link"><a href="/#">Where and What to study</a><span>&gt;&gt;</span> </li>
        <li className="blue-nav__link"><a href="/#">How do I apply</a><span>&gt;&gt;</span></li>
         <li className="blue-nav__link"><a href="/#">After receiving an offer</a><span>&gt;&gt;</span></li>
        <li className="blue-nav__link"><a href="/#">Prepare to depart</a><span>&gt;&gt;</span></li>
        <li className="blue-nav__link"><a href="/#">Arrive and thrive</a><span>&gt;&gt;</span></li>
      </ul>
    </nav>
  )
}

export default BlueNav