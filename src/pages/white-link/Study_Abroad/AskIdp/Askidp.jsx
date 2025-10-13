import React from "react";
import "./Askidp.css";

function Askidp() {
  const videos = [
    "https://youtube.com/shorts/QCBiRJB7dzA?si=opIn1FnBNNGua46k",
    "https://youtube.com/shorts/EzpAwxspRFQ?si=_4lAX4H9FM7mFSkK",
    "https://youtube.com/shorts/sZLsDZVRbs0?si=mB8Hk7yijTy10D9D",
    "https://youtube.com/shorts/h_Q7DlmGQiw?si=G1Vv4ufvZco8FP8N",
  ];

  // Convert shorts URLs to embeddable format
  const getEmbedUrl = (url) => {
    const match = url.match(/shorts\/([a-zA-Z0-9_-]+)/);
    return match ? `https://www.youtube.com/embed/${match[1]}` : url;
  };

  return (
    <div className="shorts-gallery">
      {videos.map((url, idx) => (
        <div className="shorts-video" key={idx}>
          <iframe
            width="220"
            height="390"
            src={getEmbedUrl(url)}
            title={`YouTube Short ${idx + 1}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      ))}
    </div>
  );
}

export default Askidp;