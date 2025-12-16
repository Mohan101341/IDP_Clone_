
import React, { useState } from "react";
import "./News.css";

const articlesData = [
  {
    img: "/assets/Ai.jpg",
    countries: "New Zealand, United States, Canada, Ireland, United Kingdom, Australia",
    title: "AI-powered support for your study-abroad journey",
    publishedAt: "2025-02-01",
  },
  {
    img: "/assets/Cyber_security_in_science.webp",
    countries: "United Kingdom",
    title: "Why UK is the top choice for Indian students in 2025",
    publishedAt: "2025-01-20",
  },
  {
    img: "/assets/cost_of_studying_in_canda.webp",
    countries: "United States",
    title: "Scholarship opportunities for studying in the US",
    publishedAt: "2025-01-12",
  },
  {
    img: "/assets/Highest-Paying_Part-Time_Jobs_In_The_UK.webp",
    countries: "Canada",
    title: "Canada opens new post-study work options",
    publishedAt: "2025-01-10",
  },
  {
    img: "/assets/MAY19-ARTICLE-WEB-13.jpg_.webp",
    countries: "Australia",
    title: "Australia announces updated visa rules for students",
    publishedAt: "2025-01-05",
  },
  {
    img: "/assets/Ielts banner.jpg",
    countries: "Ireland",
    title: "Top universities in Ireland for international students",
    publishedAt: "2025-01-03",
  },
  {
    img: "/assets/Medical_School.webp",
    countries: "Global",
    title: "Visa updates for international students in 2025",
    publishedAt: "2024-12-28",
  },
  {
    img: "/assets/Radiologist.jpg",
    countries: "Global",
    title: "10 travel tips for your study abroad journey",
    publishedAt: "2024-12-20",
  },
  {
    img: "/assets/Am.jpg",
    countries: "United States, United Kingdom, Australia",
    title: "Building your career abroad: A student guide",
    publishedAt: "2024-12-10",
  },
];

const NewsAndA = () => {
  const [search, setSearch] = useState("");
  const [sortType, setSortType] = useState("date");
  const [filterCountry, setFilterCountry] = useState("All");

  // 1️⃣ Filter by Country
  let filtered = articlesData.filter((article) =>
    filterCountry === "All"
      ? true
      : article.countries.toLowerCase().includes(filterCountry.toLowerCase())
  );

  // 2️⃣ Search Filter
  if (search) {
    filtered = filtered.filter((article) =>
      article.title.toLowerCase().includes(search.toLowerCase())
    );
  }

  // 3️⃣ Sort
  if (sortType === "date") {
    filtered.sort(
      (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)
    );
  } else if (sortType === "title") {
    filtered.sort((a, b) => a.title.localeCompare(b.title));
  }

  return (
    <div className="news-section">
      <div className="news-container">
        <p>Jramsys India</p>

        <h1 className="news-title "><span className="underline-green">764</span> News and Articles</h1>

        {/* FILTER & SORT UI */}
        <div className="news-controls">
          {/* Country Filter */}
          <select onChange={(e) => setFilterCountry(e.target.value)}>
            <option value="All">All Countries</option>
            <option value="United States">United States</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="Australia">Australia</option>
            <option value="Canada">Canada</option>
            <option value="Ireland">Ireland</option>
            <option value="Global">Global</option>
          </select>

          {/* Sort */}
          <select onChange={(e) => setSortType(e.target.value)}>
            <option value="date">Sort by Date</option>
            <option value="title">Sort by Title</option>
          </select>

          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search articles..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <p className="result-count">
          Showing {filtered.length} of {articlesData.length} results
        </p>

        {/* ARTICLES */}
        <div className="news-grid">
          {filtered.map((article, index) => (
            <div key={index} className="news-card">
              <div className="news-img-wrapper">
                <img src={article.img} alt={article.title} className="news-img" />
              </div>

              <div className="news-content">
                <p className="article-country">{article.countries}</p>
                <h4 className="article-title">{article.title}</h4>

                <a href="#" className="news-link">
                  Read More <span className="news-chevron">→</span>
                </a>

                <p className="published-date">
                  Published: {new Date(article.publishedAt).toLocaleDateString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsAndA;
