import React, { useEffect, useState } from "react";
import "./UniversitiesList.css";

function TopUniversities() {
  const [universities, setUniversities] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/universities")
      .then((res) => res.json())
      .then((data) => setUniversities(data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  return (
    <div className="container">
      <h1>Top Universities in Australia</h1>
      <div className="card-grid">
        {universities.map((uni, index) => (
          <div className="card" key={index}>
            <h2 className="uni-name">{uni.name}</h2>
            <p><strong>World Ranking:</strong> {uni.world_ranking || "N/A"}</p>
            <p><strong>International Students:</strong> {uni.international_students || "N/A"}</p>
            <p><strong>English Courses:</strong> {uni.english_courses}</p>
            <a href={uni.details_url} target="_blank" rel="noopener noreferrer" className="details-btn">
              View Details
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopUniversities;
