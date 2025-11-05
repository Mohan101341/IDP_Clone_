import React, { useState, useEffect } from "react";

function What_is_stdnghero() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Trigger animation on mount
    const timer = setTimeout(() => setAnimate(true), 200);
    return () => clearTimeout(timer);
  }, []);

  // Inline styles (CSS-in-JS)
  const styles = {
    stdab: {
      position: "relative",
      backgroundImage: "url('https://tse4.mm.bing.net/th/id/OIP.DPYjw2zFBe0SS5xOS6JKqwHaEJ?rs=1&pid=ImgDetMain&o=7&rm=3')", // ✅ Image in public/images
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      height: "50vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
      paddingLeft: "5rem",
      color: "#fff",
      overflow: "hidden",
    },
    overlay: {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
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
      fontSize: "2.8rem",
      lineHeight: 1.3,
      fontWeight: 700,
      marginBottom: "1.5rem",
    },
    
  };

  return (
    <div style={styles.stdab}>
      {/* Overlay for dark effect */}
      <div style={styles.overlay}></div>

      {/* Left content */}
      <div style={styles.stdabLeft}>
       <h1 style={{ color: "white" }}>
  What is studying abroad and <br /> why should you consider it?
</h1>


       
      </div>
    </div>
  );
}

export default What_is_stdnghero;
