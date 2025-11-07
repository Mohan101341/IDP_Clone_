import React from "react";
import "./Scholar.css";
const categories = [
  "School",
  "Pre-Degree & Vocational",
  "Foundation",
  "Undergraduate",
  "Postgraduate",
  "Doctorate",
  "VET",
];
const destinations = [
    "Australia",
    "Canada",
    "New Zealand",
    "United Kingdom",
    "United States of America",
    "Ireland",
];

const scholarshipCards = [
  {
    title: "Vice Chancellor's International Excellence Scholarship for India",
    university: "The University of Waikato",
    location: "New Zealand",
    studyLevel: "Postgraduate",
    deadline: "31 Dec 2025",
    fee: "Fee waiver/discount"
  },
  {
    title: "India Undergraduate Scholarships",
    university: "Trinity College Dublin, the University of Dublin",
    location: "Ireland",
    studyLevel: "Undergraduate",
    deadline: null,
    fee: "Fee waiver/discount"
  },
  {
    title: "University of Auckland India High Achievers Scholarship",
    university: "The University of Auckland",
    location: "New Zealand",
    studyLevel: "Postgraduate",
    deadline: "23 Oct 2025",
    fee: "Fee waiver/discount"
  },
  {
    title: "Indian Students Scholarship",
    university: "University of Limerick",
    location: "Ireland",
    studyLevel: "Postgraduate",
    fee: "Fee waiver/discount"
  },
  {
    title: "AUT international Scholarship South Asia",
    university: "Auckland University of Technology",
    location: "New Zealand",
    studyLevel: "Undergraduate",
    fee: "Fee waiver/discount"
  },
  {
    title: "Deakin india Merit Scholarship 25%",
    university: "Deakin University",
    location: "Australia",
    studyLevel: "Undergraduate",
    fee: "Fee waiver/discount"
  },
  {
    title: "Deakin india Postgraduate Bursary 20%",
    university: "Deakin University",
    location: "Australia",
    studyLevel: "Postgraduate",
    fee: "Fee waiver/discount"
  },
   {
    title: "Global Scholarship",
    university: "The University of Otago",
    location: "New Zealand",
    studyLevel: "Undergraduate",
    fee: "Fee waiver/discount"
  },
   {
    title: "Deakin Vice-Chancellor's Meritorious Scholarship 100%",
    university: "Deakin University",
    location: "Australia",
    studyLevel: "Undergraduate",
    fee: "Fee products/services"
  }
];
export default function Scholar() {
    const scrollLeft = () => {
        const container = document.querySelector('.scholarship-cards-wrapper');
        container.scrollBy(-690, 0);
    };
    
    const scrollRight = () => {
        const container = document.querySelector('.scholarship-cards-wrapper');
        container.scrollBy(690, 0);
    };
    
    return (
        <div>
        <div className="Scholar-container">
            <p className="l1">IDP india/Find a Scholarship</p>
            <h1 className="head">Scholarships for international students studying abroad</h1>
            <button className="Scholar-button">Search Scholarship</button>
        </div>
        <div className="Scholar-matter">
            <p className="l2">Looking for a scholarship to fund your overseas studies? Most universities these days offer a variety of different scholarship options to international students. Merit-based scholarships are awarded to students who demonstrate outstanding academic performance or potential in a field of study. They may also be awarded for excellence in sports or extracurricular activities. Some universities may also offer need-based scholarships to students who require financial assistance. It's always worth checking with the institution before committing to funding your studies through family or a loan.</p>
            </div>
        <div className="Scholar-browse">
            <h2 className="head2"><span className="ul ">B</span>rowse scholarships</h2>
            <p className="l3">By study levels</p>
        </div>
        <div className="container">
      {categories.map((item, i) => (
        <div className="card" key={i}>
          <span>{item}</span>
          <span className="arrow">›</span>
        </div>
      ))}
    </div>
    <p className="l4">By study destinations</p>
     <div className="container">
      {destinations.map((item, i) => (
        <div className="card" key={i}>
          <span>{item}</span>
          <span className="arrow">›</span>
        </div>
      ))}
    </div>
    <div className="link">View all scholarships<span className="arrow1">›</span></div>
    <div className="bg">
        <h2 className="head3"><span className="ul ">P</span>opular scholarships</h2>
        <div className="scholarship-cards-container">
            <div className="scholarship-cards-wrapper">
                {scholarshipCards.map((card, index) => (
                    <div key={index} className="scholarship-card">
                        <h3 className="card-title">{card.title}</h3>
                        <p className="card-university">{card.university}</p>
                        <div className="card-divider"></div>
                        <div className="card-details">
                            <div className="detail-item">
                                <span className="detail-icon">📍</span>
                                <span>{card.location}</span>
                            </div>
                            <div className="detail-item">
                                <span className="detail-icon">🎓</span>
                                <span>{card.studyLevel}</span>
                            </div>
                            {card.deadline && (
                                <div className="detail-item">
                                    <span className="detail-icon">📅</span>
                                    <span>{card.deadline}</span>
                                </div>
                            )}
                            <div className="detail-item">
                                <span className="detail-icon">💰</span>
                                <span>{card.fee}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="card-navigation">
                <button className="nav-arrow" onClick={scrollLeft}>←</button>
                <button className="nav-arrow" onClick={scrollRight}>→</button>
            </div>
        </div>
    </div>



















        </div>
    );
}