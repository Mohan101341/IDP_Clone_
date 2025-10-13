import React, { useState } from 'react'
import './BlueNav.css'

const BlueNav = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="blue-nav">
     
     
      {/* Down arrow for mobile */}
      <button
        className="blue-nav__arrow"
        onClick={() => setOpen(!open)}
        aria-label="Toggle navigation"
      >
        ▼
      </button>
      <ul className={`blue-nav__links${open ? ' open' : ''}`}>
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