import React from "react";
import "./News.css";

const articles = [
  {
    img: "/assets/Ai.jpg",
    countries:
      "New Zealand, United States, Canada, Ireland, United Kingdom, Australia",
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
];

const NewsAndA = () => {
  return (
    <div className="news-section">
      <div className="news-container">
        <p>IDP India</p>
        <h1 className="news-title underline-green">746 News and Articles</h1>

        <div className="news-buttons">
          <button>Filter articles</button>
          <button>Sort by: Publish date</button>
        </div>

        <p className="result-count">Showing 1–10 of 746 results</p>

        <div className="news-grid">
          {articles.map((article, index) => (
            <div key={index} className="news-card">
              <div className="news-img-wrapper">
                <img
                  src={article.img}
                  alt={article.title}
                  className="news-img"
                />
              </div>

              <div className="news-content">
                <p className="article-country">{article.countries}</p>
                <h4 className="article-title">{article.title}</h4>

                <a href="#" className="news-link">
                  Read More <span className="news-chevron">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsAndA;
