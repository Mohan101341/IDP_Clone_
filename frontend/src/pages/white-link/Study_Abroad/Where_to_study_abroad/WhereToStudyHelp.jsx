import React, { useState } from "react";

function WhereToStdyHelp() {
  const [openIndex, setOpenIndex] = useState(null);

  const sections = [
    {
      title: "1. Benefits of studying abroad",
      content: (
        <div>
          <p>
            From quality education, personal growth to career progression,
            discover how studying abroad can help you succeed.
          </p>
          <ul>
            <li>What is studying abroad</li>
            <li>Why study abroad</li>
            <li>Study abroad vs study locally</li>
            <li>Benefits</li>
          </ul>
        </div>
      ),
    },
    {
      title: "2. The study abroad experience",
      content: (
        <div>
          <p>
            Learn all about what it’s like to experience life in a different
            country.
          </p>
          <ul>
            <li>What’s the experience like</li>
            <li>How much does it typically cost</li>
          </ul>
        </div>
      ),
    },
    {
      title: "3. Breaking down the steps",
      content: (
        <div>
          <p>Not sure where to start? Follow these simple steps.</p>
        </div>
      ),
    },
    {
      title: "4. Study abroad guide for parents",
      content: (
        <div>
          <p>
            Learn how you can support your child’s overseas education journey
            with helpful resources.
          </p>
        </div>
      ),
    },
    {
      title: "5. Hear from our students",
      content: (
        <div>
          <p>
            Read and watch videos to hear first-hand experiences from our
            students.
          </p>
        </div>
      ),
    },
  ];

  const handleToggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <>
      <style>{`
        .accordion-outer {
          max-width: 900px;
          margin: 60px auto;
          padding: 0 20px;
          font-family: Arial, sans-serif;
        }

        .accordion-title {
          text-align: center;
          font-size: 28px;
          font-weight: 600;
          margin-bottom: 40px;
          color: #1f2937;
        }

        .accordion-list {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .accordion-item {
          background: #ffffff;
          border-radius: 10px;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
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

        .accordion-content ul {
          margin-top: 10px;
          padding-left: 20px;
        }

        .accordion-content li {
          margin-bottom: 6px;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .accordion-title {
            font-size: 24px;
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

      <div className="accordion-outer">
        <h2 className="accordion-title">
          Discover how studying abroad can help you
        </h2>

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
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default WhereToStdyHelp;
