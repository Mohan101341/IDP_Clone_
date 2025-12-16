import React from "react";
import "./StdYAbvid.css";
function StdyAbVid() {
  return (
    <div className="stdabvid">
      <div>
        Thinking about studying in another country? You are not alone! More students than ever are packing their bags to head overseas and experience their study abroad dream. But why? Well, studying abroad not only opens doors to high-paying jobs but also helps expand your horizons. It adds a new dimension to your life. You get to earn a foreign degree, gain skills that textbooks alone can’t teach, and secure better pay. And who knows? Maybe, eventually, you will find an opportunity to settle down in a new country. Picture yourself in a new cultural setup, making friends globally and having life-altering experiences.
      </div>


      <div className="vid" >
      <div style={{ margin: "2rem 0" }}>
       <iframe
  width="315"
  height="560"
  src="https://www.youtube.com/embed/1kfugHv60ag"
  title="YouTube Shorts player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen>
</iframe>
      </div>
      <div className="vid-txt">
        <h2>One account for all your study abroad needs</h2>
        <h3>Create your profile and unlock a wide array of features including personalised recommendations, fast-tracked applications and much more.</h3>
        
        <button>Signup</button>
        </div>
        

       </div>
    </div>
  );
}

export default StdyAbVid;