import React, { useEffect, useRef, useState } from "react";
import "./IDP.css";
const videos = [
  { id: "kJQP7kiw5Fk", title: "Spanish – Despacito" },
  { id: "JGwWNGJdvx8", title: "English – Shape of You" },
  { id: "RgKAFK5djSk", title: "English – See You Again" },
  { id: "YQHsXMglC9A", title: "English – Hello (Adele)" },
  { id: "UceaB4D0jpo", title: "Korean – Gangnam Style" },
  { id: "OPf0YbXqDm0", title: "English – Uptown Funk" },
  { id: "hT_nvWreIhg", title: "English – Counting Stars" },
  { id: "e-ORhEE9VVg", title: "English – Blank Space" },
];

const visibleCount = 4;

const IDP = () => {
  const [startIndex, setStartIndex] = useState(0);
  const playersRef = useRef({});

  // Load YouTube API once
  useEffect(() => {
    if (!window.YT) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      document.body.appendChild(tag);
    }
  }, []);

  // Pause all videos
  const pauseAll = () => {
    Object.values(playersRef.current).forEach((player) => {
      if (player?.pauseVideo) player.pauseVideo();
    });
  };

  const prevSlide = () => {
    pauseAll();
    setStartIndex((prev) => Math.max(prev - visibleCount, 0));
  };

  const nextSlide = () => {
    pauseAll();
    setStartIndex((prev) =>
      prev + visibleCount >= videos.length ? prev : prev + visibleCount
    );
  };

  const visibleVideos = videos.slice(startIndex, startIndex + visibleCount);

  return (
    <section className="idp-section1">
      <div className="idp-container1">
        <h2 className="headi">Jramsys students succeeding globally</h2>
        <p>Enjoy popular songs from different languages and cultures.</p>

        <div className="idp-carousel1">
          {visibleVideos.map((video, index) => (
            <div className="video-card1" key={video.id}>
              <div className="iframe-wrapper">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}?enablejsapi=1`}
                  title={video.title}
                  ref={(el) => {
                    if (el && window.YT?.Player && !playersRef.current[video.id]) {
                      playersRef.current[video.id] = new window.YT.Player(el, {
                        events: {
                          onStateChange: (e) => {
                            if (e.data === window.YT.PlayerState.PLAYING) {
                              pauseAll();
                              playersRef.current[video.id].playVideo();
                            }
                          },
                        },
                      });
                    }
                  }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
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
