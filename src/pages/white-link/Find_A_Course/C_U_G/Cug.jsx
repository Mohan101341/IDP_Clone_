import React from "react";
import './Cug.css';
export default function Cug() {
    return (    
        <div>
<div className="cug">
            <p className="p1">IDP India/University Ranking/CUG</p>
            <h1 className="h1">CUG university rankings in United Kingdom for 2024</h1>
            <p className="p2">Discover UK's top-ranking universities according to the Complete University Guide (CUG) Rankings 2024. Search by subject or study level, and explore the courses and experience they offer.</p>
            
        </div>
        <div className="search-bars">
            <div className="field">
              <input type="text" placeholder="Search by university name" className="input"/>
            </div>
            <p className="or">or</p>
            <div className="field">
              <input type="text" placeholder="United Kingdom" className="input"/>
            </div>
            <button className="search-btn">Search</button>
        </div>
        <p className="line">75 Universities, showing 1-20 below</p>
        <div className="rankings">
          {[
            { name: "University of St Andrews", country: "United Kingdom",rank:"4" },
            { name: "University of Bath", country: "United kingdom",rank:"5" },
            { name: "Durham University", country: "United kingdom",rank:"8" },
            { name: "Lancaster University", country: "United kingdom",rank:"10" },
            { name: "The University of Edinburgh", country: "United Kingdom",rank:"12" },
            { name: "University of Surrey", country: "United kingdom" ,rank:"13"},
            { name: "University of Birmingham", country: "United kingdom",rank:"14" },
            { name: "University of Exeter", country: "United Kingdom",rank:"15" },
            { name: "University of York", country: "Switzerland",rank:"17" },
            { name: "University of Southampton", country: "United kingdom",rank:"17" },
            { name: "University of Manchester", country: "United Kingdom",rank:"19" },
            { name: "University of Sheffield", country: "United kingdom",rank:"20" },
            { name: "Cardiff University", country: "United kingdom",rank:"21" },
            { name: "University of Leeds", country: "United kingdom",rank:"22" },
            { name: "King's College London, University of London", country: "United kingdom",rank:"244" },
            { name: "University of Liverpool", country: "United kingdom",rank:"24" },
            { name: "Queen's University Belfast", country: "United kingdom",rank:"27" },
            { name: "University of the Arts London", country: "United kingdom",rank:"29" },
            { name: "University of Strathclyde", country: "United kingdom",rank:"31" },
            { name: "University of Essex", country: "United kingdom",rank:"32" }
          ].map((u, idx) => (
            <div key={u.name} className="rank-card">
              <div className="rank-num-wrap">
                <span className="rank-num">{idx + 1}</span>
              </div>
              <div className="rank-info">
                <h3 className="uni-name">{u.name}</h3>
                <p className="uni-country">{u.country}</p>
                <h3 className="uni-rank">Rank:{u.rank}</h3>
              </div>
              <div className="rank-actions">
                <button className="details-btn">View details</button>
              </div>
            </div>
          ))}
        </div>
    <div className="FIndU-Arrs">
    <span className="FIndU-page-link FIndU-disabled sizes">«</span> 
    <span className="FIndU-page-link FIndU-disabled sizes">‹</span> 
    <span className="FIndU-page-link FIndU-active">1</span>
    <span className="FIndU-page-link ">2</span>
    <span className="FIndU-page-link">3</span>
    <span className="FIndU-page-link">...</span>
    <span className="FIndU-page-link">6</span>
    <span className="FIndU-page-link">...</span>
    <span className="FIndU-page-link">10</span>
    <span className="FIndU-page-link">11</span>
    <span className="FIndU-page-link">12</span>
    <span className="FIndU-page-link sizes">›</span>
    <span className="FIndU-page-link sizes">»</span>
</div>
        </div>
    );}