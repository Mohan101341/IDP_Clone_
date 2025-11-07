import React from "react";
import "./Uranking.css";
export default function Uranking() {
  return (
    <div>
        <div className="Uranking">
            <p className="p1">IDP India/University Ranking/THE</p>
            <h1 className="h1">THE University Rankings for 2025</h1>
            <p className="p2">Discover the world's top-ranking universities according to Times Higher Education University Rankings 2025. Search globally or by country and explore the courses and experience they offer.</p>
            
        </div>
        <div className="search-bars">
            <div className="field">
              <input type="text" placeholder="Search by university name" className="input"/>
            </div>
            <p className="or">or</p>
            <div className="field">
              <input type="text" placeholder="Study destinations" className="input"/>
            </div>
            <button className="search-btn">Search</button>
        </div>
        <p className="line">346 Universities, showing 1-20 below</p>

        {/* Rankings list */}
        <div className="rankings">
          {[
            { name: "University of Oxford", country: "United Kingdom" },
            { name: "Massachusetts Institute of Technology", country: "United States" },
            { name: "Harvard University", country: "United States" },
            { name: "Princeton University", country: "United States" },
            { name: "University of Cambridge", country: "United Kingdom" },
            { name: "Stanford University", country: "United States" },
            { name: "California Institute of Technology", country: "United States" },
            { name: "Imperial College London", country: "United Kingdom" },
            { name: "ETH Zurich", country: "Switzerland" },
            { name: "University of Chicago", country: "United States" },
            { name: "University College London", country: "United Kingdom" },
            { name: "Columbia University", country: "United States" },
            { name: "National University of Singapore", country: "Singapore" },
            { name: "Yale University", country: "United States" },
            { name: "Tsinghua University", country: "China" },
            { name: "Peking University", country: "China" },
            { name: "University of Pennsylvania", country: "United States" },
            { name: "Johns Hopkins University", country: "United States" },
            { name: "Cornell University", country: "United States" },
            { name: "University of Toronto", country: "Canada" }
          ].map((u, idx) => (
            <div key={u.name} className="rank-card">
              <div className="rank-num-wrap">
                <span className="rank-num">{idx + 1}</span>
              </div>
              <div className="rank-info">
                <h3 className="uni-name">{u.name}</h3>
                <p className="uni-country">{u.country}</p>
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
  );
}