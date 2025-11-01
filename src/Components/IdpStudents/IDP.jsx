import React, { useState, useRef, useEffect } from "react";
import "./IDP.css";

const videos = [
  { src: "/videos/videoplayback01.mp4", title: "Business and Creative Arts" },
  { src: "/videos/videoplayback02.mp4", title: "Left Them Back Home #USA" },
  { src: "/videos/videoplayback03.mp4", title: "The Culture, or Even the Climate" },
  { src: "/videos/videoplayback04.mp4", title: "Students Exploring New Opportunities" },
  { src: "/videos/videoplayback05.mp4", title: "Learning Beyond Borders" },
  { src: "/videos/videoplayback06.mp4", title: "Journey to Global Success" },
  { src: "/videos/videoplayback07.mp4", title: "From Dreams to Reality" },
  { src: "/videos/videoplayback08.mp4", title: "Embracing New Cultures" },
  { src: "/videos/videoplayback09.mp4", title: "Academic Excellence Abroad" },

];

const IDP = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 4;
  const videoRefs = useRef([]);

  const pauseAllVideos = () => {
    videoRefs.current.forEach((video) => {
      if (video) video.pause();
    });
  };

  const prevSlide = () => {
    pauseAllVideos();
    setStartIndex((prev) => (prev - visibleCount < 0 ? 0 : prev - visibleCount));
  };

  const nextSlide = () => {
    pauseAllVideos();
    setStartIndex((prev) =>
      prev + visibleCount >= videos.length ? prev : prev + visibleCount
    );
  };

  const visibleVideos = videos.slice(startIndex, startIndex + visibleCount);

  const handlePlay = (currentIndex) => {
    videoRefs.current.forEach((video, index) => {
      if (video && index !== currentIndex) video.pause();
    });
  };

  useEffect(() => {
    return () => pauseAllVideos();
  }, [startIndex]);

  return (
    <section className="idp-section1">
      <div className="idp-container1">
        <h2 className="headi">IDP students succeeding globally</h2>
        <p>
          There’s nothing more rewarding than seeing our students achieve their dreams
          and share their success stories with us.
        </p>

        <div className="idp-carousel1">
          {visibleVideos.map((video, index) => (
            <div className="video-card1" key={startIndex + index}>
              <video
                ref={(el) => (videoRefs.current[index] = el)} // cleaner ref mapping
                controls
                onPlay={() => handlePlay(index)}
              >
                <source src={video.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <p>{video.title}</p>
            </div>
          ))}
        </div>

        <div className="carousel-buttons1">
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
