import React, { useState } from "react";
import "./IDP.css";

const videos = [
  {
    src: "./assetsFrom India to Australia _ Life Abroad _ IDP India - Study Abroad Expert.mp4",
    title: "Study in Australia with IDP",
  },
  {
    src: "/videos/student1.mp4",
    title: "Business and creative arts",
  },
  {
    src: "/videos/student1.mp4",
    title: "Left them back home #USA",
  },
  {
    src: "/videos/student1.mp4",
    title: "The culture, or even the climate",
  },
  {
    src: "/videos/student1.mp4",
    title: "The culture, or even the climate",
  },{
    src: "/videos/student1.mp4",
    title: "The culture, or even the climate",
  },{
    src: "/videos/student1.mp4",
    title: "The culture, or even the climate",
  },{
    src: "/videos/student1.mp4",
    title: "The culture, or even the climate",
  },
  
  
];

const IDP = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 4; // Number of videos to show at a time

  const prevSlide = () => {
    setStartIndex((prev) => (prev - visibleCount < 0 ? 0 : prev - visibleCount));
  };

  const nextSlide = () => {
    setStartIndex((prev) =>
      prev + visibleCount >= videos.length ? prev : prev + visibleCount
    );
  };

  const visibleVideos = videos.slice(startIndex, startIndex + visibleCount);

  return (
    <section className="idp-section">
      <div className="idp-container">
        <h2>IDP students succeeding globally</h2>
        <p>
          There’s nothing more rewarding than seeing our students achieve their dreams
          and share their success stories with us.
        </p>

        {/* Video Carousel */}
        <div className="idp-carousel">
          {visibleVideos.map((video, index) => (
            <div className="video-card" key={index}>
              <video controls>
                <source src={video.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <p>{video.title}</p>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="carousel-buttons">
          <button onClick={prevSlide} disabled={startIndex === 0}>
            &lt; 
          </button>
          <button
            onClick={nextSlide}
            disabled={startIndex + visibleCount >= videos.length}
          >
             &gt;
          </button>
        </div>
      </div>
    </section>
  );
};

export default IDP;
