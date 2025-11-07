import React, { useState, useEffect } from "react";

function Reasons_for_stdy() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
    },
    // ✅ Background only for first div
    stdab: {
      position: "relative",
      backgroundImage:
        "url('https://tse4.mm.bing.net/th/id/OIP.DPYjw2zFBe0SS5xOS6JKqwHaEJ?rs=1&pid=ImgDetMain&o=7&rm=3')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      height: "50vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "center",
      paddingLeft: "5rem",
      color: "#fff",
      overflow: "hidden",
      width: "100%",
    },
    overlay: {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.4)",
      zIndex: 0,
    },
    stdabLeft: {
      position: "relative",
      zIndex: 1,
      color: "#fff",
      maxWidth: "600px",
      opacity: animate ? 1 : 0,
      transform: animate ? "translateX(0)" : "translateX(-60px)",
      transition: "all 1s ease",
    },
    heading: {
      fontSize: "2.5rem",
      fontWeight: 700,
      marginBottom: "1.5rem",
    },
    vidSection: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      padding: "3rem 2rem",
      width: "100%",
      backgroundColor: "#f8f9fa",
    },
    paragraph: {
      fontSize: "1.1rem",
      maxWidth: "800px",
      color: "#333",
      marginTop: "1.5rem",
      lineHeight: 1.6,
    },
  };

  return (
    <div style={styles.container}>
      {/* ✅ First div with background image */}
      <div style={styles.stdab}>
        <div style={styles.overlay}></div>
        <div style={styles.stdabLeft}>
          <h1 style={{ color: "white" }}>Reasons to Study Abroad</h1>
        </div>
      </div>

      {/* ✅ Second div (below, no background) */}
      <div style={styles.vidSection}>
        <iframe
          width="60%"
          height="400"
          src="https://www.youtube.com/embed/oSU4oW0jqgU?autoplay=1&mute=0"
          title="What is Studying Abroad"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{
            borderRadius: "20px",
            boxShadow: "0 0 20px rgba(0, 0, 0, 0.3)",
          }}
        ></iframe>

        <p style={styles.paragraph}>
          See the world, experience a new culture, dive into a world-class education – and prepare for your global future.
          Nothing beats the immersive international experience you’ll get while studying abroad.
        </p>
      </div>
    </div>
  );
}

export default Reasons_for_stdy;
