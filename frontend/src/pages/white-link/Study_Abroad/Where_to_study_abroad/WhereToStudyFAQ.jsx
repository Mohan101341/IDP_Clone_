import React, { useState } from "react";

function WhereToStudyFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const sections = [
    {
      title: "What is studying abroad?",
      content: (
        <p>
          Studying abroad is the experience of living overseas in order to
          acquire a foreign education. It can take many forms – from a few
          weeks in a...
        </p>
      ),
    },
    {
      title: "Why study abroad vs study locally?",
      content: (
        <p>
          While studying locally is the easier option, in the longer run
          studying abroad offers unique opportunities and experiences that
          cannot be found at home.
        </p>
      ),
    },
    {
      title: "What are the benefits of studying abroad?",
      content: (
        <p>
          Studying abroad offers a wide range of benefits, from inspiring a
          global mindset to helping you learn new skills.
        </p>
      ),
    },
    {
      title: "What’s the experience like?",
      content: (
        <p>
          Studying abroad is a transformative experience of personal growth
          that helps you broaden your perspective and develop independence.
        </p>
      ),
    },
    {
      title: "How much does it cost to study abroad?",
      content: (
        <p>
          Studying abroad is not as expensive as you may think! Use cost
          calculators, explore scholarships, and consider study loans to plan
          your budget.
        </p>
      ),
    },
  ];

  const handleToggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const styles = {
    container: {
      maxWidth: "800px",
      margin: "40px auto",
      padding: "20px",
      fontFamily: "Arial, sans-serif",
    },
    title: {
      textAlign: "center",
      fontSize: "28px",
      fontWeight: "600",
      marginBottom: "30px",
      color: "#222",
    },
    item: {
      borderBottom: "1px solid #e0e0e0",
      padding: "10px 0",
    },
    header: {
      width: "100%",
      background: "none",
      border: "none",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      fontSize: "16px",
      fontWeight: "600",
      padding: "12px 0",
      cursor: "pointer",
      color: "#333",
      textAlign: "left",
    },
    icon: {
      fontSize: "22px",
      fontWeight: "400",
      marginLeft: "10px",
    },
    content: {
      padding: "10px 0 20px 0",
      color: "#555",
      fontSize: "15px",
      lineHeight: "1.6",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Frequently Asked Questions</h2>

      {sections.map((section, idx) => (
        <div key={idx} style={styles.item}>
          <button
            style={styles.header}
            onClick={() => handleToggle(idx)}
            aria-expanded={openIndex === idx}
          >
            <span>{section.title}</span>
            <span style={styles.icon}>
              {openIndex === idx ? "−" : "+"}
            </span>
          </button>

          {openIndex === idx && (
            <div style={styles.content}>{section.content}</div>
          )}
        </div>
      ))}
    </div>
  );
}

export default WhereToStudyFAQ;
