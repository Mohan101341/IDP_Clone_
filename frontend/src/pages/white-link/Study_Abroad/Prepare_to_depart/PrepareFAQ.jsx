import React, { useState } from "react";

function PrepareFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const sections = [
    {
      title: "What is studying abroad?",
      content: (
        <p>
          Studying abroad is the experience of living overseas in order to
          acquire a foreign education. It can take many forms – from a few
          weeks to full-degree programs.
        </p>
      ),
    },
    {
      title: "Why study abroad vs study locally?",
      content: (
        <p>
          While studying locally is the easier option, studying abroad offers
          global exposure, cultural understanding, and long-term career
          advantages.
        </p>
      ),
    },
    {
      title: "What are the benefits of studying abroad?",
      content: (
        <p>
          Benefits include developing a global mindset, independence, language
          skills, and improved career prospects.
        </p>
      ),
    },
    {
      title: "What’s the experience like?",
      content: (
        <p>
          It’s a transformative journey that builds confidence, adaptability,
          and lifelong memories.
        </p>
      ),
    },
    {
      title: "How much does it cost to study abroad?",
      content: (
        <p>
          Costs depend on destination and lifestyle. Scholarships, budgeting
          tools, and study loans can help manage expenses.
        </p>
      ),
    },
  ];

  const handleToggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <>
      <style>{`
        .asked-questions {
          max-width: 900px;
          margin: 60px auto;
          padding: 0 20px;
          font-family: "Inter", Arial, sans-serif;
        }

        .accordion-title {
          text-align: center;
          font-size: 28px;
          font-weight: 600;
          color: #1f2937;
          margin-bottom: 40px;
        }

        .accordion-list {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .accordion-item {
          background: #ffffff;
          border-radius: 10px;
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
          overflow: hidden;
        }

        .accordion-header {
          width: 100%;
          border: none;
          background: none;
          padding: 18px 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
          font-size: 16px;
          font-weight: 600;
          color: #111827;
          text-align: left;
        }

        .accordion-header:hover {
          background-color: #f9fafb;
        }

        .accordion-header:focus {
          outline: none;
        }

        .accordion-icon {
          font-size: 22px;
          color: #2563eb;
          flex-shrink: 0;
        }

        .accordion-content {
          padding: 0 20px 20px;
          font-size: 15px;
          line-height: 1.7;
          color: #4b5563;
        }

        .accordion-divider {
          height: 1px;
          background: #e5e7eb;
        }

        /* Responsive styles */
        @media (max-width: 768px) {
          .accordion-title {
            font-size: 24px;
            margin-bottom: 30px;
          }

          .accordion-header {
            font-size: 15px;
            padding: 16px;
          }

          .accordion-content {
            font-size: 14px;
            padding: 0 16px 16px;
          }
        }

        @media (max-width: 480px) {
          .accordion-title {
            font-size: 22px;
          }

          .accordion-icon {
            font-size: 20px;
          }
        }
      `}</style>

      <div className="asked-questions">
        <h2 className="accordion-title">Frequently Asked Questions</h2>

        <div className="accordion-list">
          {sections.map((section, idx) => (
            <div key={idx} className="accordion-item">
              <button
                className="accordion-header"
                onClick={() => handleToggle(idx)}
                aria-expanded={openIndex === idx}
              >
                <span>{section.title}</span>
                <span className="accordion-icon">
                  {openIndex === idx ? "−" : "+"}
                </span>
              </button>

              {openIndex === idx && (
                <div className="accordion-content">{section.content}</div>
              )}

              <div className="accordion-divider" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default PrepareFAQ;
