import React from "react";

const Benefits = () => {
  const heroImageUrl =
    "https://th.bing.com/th/id/OIP.CqmIXMwW92lgIw70xHHW2AHaF1?w=250&h=197&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3";

  const styles = {
    heroSection: {
      backgroundImage: `url(${heroImageUrl})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      position: "relative",
      color: "white",
      textAlign: "center",
      padding: "6rem 1rem",
    },
    overlay: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0,0,0,0.6)",
    },
    heroTitle: {
      fontSize: "3rem",
      fontWeight: "bold",
      position: "relative",
      zIndex: 1,
      marginBottom: "1rem",
    },
    heroSubtext: {
      fontSize: "1.3rem",
      
      margin: "2rem auto 1rem auto",
      textAlign: "center",
      maxWidth: "100%",
    },
    heroDesc: {
      fontSize: "1.1rem",
      padding: "1rem 3rem",
      maxWidth: "100%",
      margin: "0 auto 3rem auto",
      textAlign: "center",
    },
    contentWrapper: {
      backgroundColor: "#f9fafb",
      padding: "4rem 3rem",
     
      fontFamily: "Arial, sans-serif",
      color: "#333",
      lineHeight: "1.7",
      maxWidth: "100%",
      margin: "0 auto",
    },
    heading: {
      fontSize: "2rem",
      fontWeight: "bold",
      marginBottom: "1.5rem",
      color: "#1e3a8a",
      borderLeft: "5px solid #6366f1",
      paddingLeft: "0.75rem",
    },
    paragraph: {
      marginBottom: "1.5rem",
      fontSize: "1.05rem",
    },
    listHeading: {
      fontWeight: "bold",
      color: "#1e40af",
      fontSize: "1.2rem",
      marginTop: "1.5rem",
    },
  };

  return (
    <div>
      {/* Hero Section */}
      <section style={styles.heroSection}>
        <div style={styles.overlay}></div>
        <h1 style={styles.heroTitle}>Benefits of Overseas Study</h1>
      </section>

      {/* Intro Text Below Hero */}
      <div>
        <p style={styles.heroSubtext}>
          Unlocking Global Opportunities for Career and Personal Growth
        </p>
        <p style={styles.heroDesc}>
          More than ever before, we live in a globalized world. Earning your
          degree overseas can have huge benefits for your career and personal
          development. Here are just a few of the advantages of choosing
          international study.
        </p>
      </div>

      {/* Main Detailed Content */}
      <div style={styles.contentWrapper}>
        <h2 style={styles.heading}>
          The Benefits of Earning Your Degree Overseas
        </h2>

        <p style={styles.paragraph}>
          More than ever before, we live in a globalized world. Earning your
          degree overseas can have huge benefits for your career and personal
          development.
        </p>

        <p style={styles.paragraph}>
          Here are just a few of the advantages of choosing international study.
        </p>

        <p style={styles.listHeading}>
          1. Start your career off on the right foot
        </p>
        <p style={styles.paragraph}>
          Graduates who’ve chosen to study internationally are highly sought
          after by employers. Pursuing a degree overseas signals courage,
          flexibility, cultural awareness and an understanding of how other
          people work and think. This will really put you ahead of the pack when
          it comes to internships and job applications.
        </p>

        <p style={styles.listHeading}>
          2. From learning a language to living a language
        </p>
        <p style={styles.paragraph}>
          Being surrounded by a language is the best way to become fluent and to
          understand the local culture. You'll be surrounded by English language
          speakers every day and seeing and hearing the language in the local
          cultural context. Living, studying and working in English can be
          challenging at first, but you’ll be surprised at how quickly it
          becomes second nature. Communicating confidently in English will help
          you to excel in your studies and meet new friends from other parts of
          the world who could even become professional connections down the
          road.
        </p>

        <p style={styles.listHeading}>3. Diverse choice of courses</p>
        <p style={styles.paragraph}>
          Expanding your options to consider overseas study opens up a world of
          new educational opportunities. IDP partners with more than 600
          high-quality universities and schools across the world. Students enjoy
          diverse teaching styles, from traditional class-based modules to
          teamwork and work experience components.
        </p>

        <p style={styles.listHeading}>4. Grow and develop personally</p>
        <p style={styles.paragraph}>
          Students who study overseas return home with an informed and much less
          biased perspective towards other cultures and peoples. Being able to
          think from a multinational perspective will help you face modern
          challenges, come up with innovative solutions, and learn new things
          about your own country and culture.
        </p>

        <p style={styles.listHeading}>5. Stories to last a lifetime</p>
        <p style={styles.paragraph}>
          Your international study experience doesn’t end at the campus gates.
          During weekends and holidays, you’ll have the chance to travel to
          tourist hotspots or get off the beaten track. Make sure to save
          mementos and keep a record of your adventures to share your incredible
          time for years to come.
        </p>
      </div>
    </div>
  );
};

export default Benefits;
