import React from "react";
import "./News.css";

// Different article data
const articles = [
  {
    img: "/assets/Ai.jpg",
    countries: "New Zealand, United States, Canada, Ireland, United Kingdom, Australia",
    title: "AI-powered support for your study-abroad journey",
  },
  {
    img: "/assets/Cyber_security_in_science.webp",
    countries: "United Kingdom",
    title: "Why UK is the top choice for Indian students in 2025",
  },
  {
    img: "/assets/cost_of_studying_in_canda.webp",
    countries: "United States",
    title: "Scholarship opportunities for studying in the US",
  },
  {
    img: "/assets/Highest-Paying_Part-Time_Jobs_In_The_UK.webp",
    countries: "Canada",
    title: "Canada opens new post-study work options",
  },
  {
    img: "/assets/MAY19-ARTICLE-WEB-13.jpg_.webp",
    countries: "Australia",
    title: "Australia announces updated visa rules for students",
  },
  {
    img: "/assets/ses-article-4-banner.webp",
    countries: "Ireland",
    title: "Top universities in Ireland for international students",
  },
 
  {
    img: "/assets/Medical_School.webp",
    countries: "Global",
    title: "Visa updates for international students in 2025",
  },
  {
    img: "/assets/Radiologist.jpg",
    countries: "Global",
    title: "10 travel tips for your study abroad journey",
  },
  {
    img: "/assets/steps-bannerr.webp",
    countries: "United States, United Kingdom, Australia",
    title: "Building your career abroad: A student guide",
  },
   {
    img: "/assets/ses-article-5-banner.webp",
    countries: "New Zealand",
    title: "Explore world-class education in New Zealand",
  },
 
  
];

const NewAndA = () => {
  return (
    <div>
      {/* Header Section */}
      <div className="News2con">
        <p>IDP India</p>
        <h1>746 news and articles</h1>
        <button>Filter articles</button>
        <button>Sort by: Publish date (new to old)</button>
      </div>

      <p>Showing 1-12 of 746 results</p>

      {/* Cards Grid */}
      <div className="card1-grid">
        {articles.map((article, index) => (
          <div className="card1" key={index}>
            <div>
              <img src={article.img} alt={article.title} />
            </div>
            <p>{article.countries}</p>
            <h4>{article.title}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewAndA;
