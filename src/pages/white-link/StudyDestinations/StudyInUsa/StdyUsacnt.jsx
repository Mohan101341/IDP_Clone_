import React from 'react';

const StdyUsacnt = () => {
  const mainContainerStyle = {
    fontFamily: 'Arial, sans-serif',
    width:'100%',
    margin: '0 auto',
    padding: '20px',
    lineHeight: '1.6',
    color: '#333'
  };

  const headerStyle = {
    backgroundColor: '#a2acb5ff',
    color: 'white',
    padding: '15px',
    textAlign: 'center',
    marginBottom: '20px',
    borderRadius: '5px'
  };

  const sectionStyle = {
    marginBottom: '30px',
    borderBottom: '1px solid #eee',
    paddingBottom: '15px'
  };

  const listStyle = {
    listStyleType: 'disc',
    paddingLeft: '20px'
  };

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '10px'
  };

  const thTdStyle = {
    border: '1px solid #ddd',
    padding: '8px',
    textAlign: 'left'
  };

  const callToActionStyle = {
    textAlign: 'center',
    marginTop: '20px',
    padding: '10px',
    backgroundColor: '#ffc107',
    borderRadius: '5px',
    fontWeight: 'bold',
    cursor: 'pointer'
  };

  return (
    <div style={mainContainerStyle}>
      <header style={headerStyle}>
        <h1>Why Indian Students Love to Study in the USA! 🇺🇸</h1>
        <p>10 of the World’s Top 20 Universities | 4,000+ Institutions | Leading in Research & Innovation | Strong Employability – **The U.S.: Your Launchpad to Global Success!**</p>
      </header>

      <section style={sectionStyle}>
        <h2>Introduction</h2>
        <p>
          The United States of America stands as the premier destination for Indian students globally, drawing the largest number from across the world. Renowned for its **high-quality education, innovative curriculum**, and vibrant multicultural environment, the U.S. offers unparalleled opportunities for personal and professional growth. These compelling attributes continue to make it the top choice for many Indian students seeking to broaden their horizons and achieve their dreams.
        </p>
      </section>
      
      <section style={sectionStyle}>
        <h2>Why Study in the US?</h2>
        <p>Here's why the US is the best destination to study abroad:</p>
        <ul style={listStyle}>
          <li style={{ marginBottom: '10px' }}>
            <strong>Global Leadership in Higher Education:</strong> The U.S. is home to **10 of the top 20 universities** in the world according to the QS World University Rankings 2025, demonstrating its global leadership in higher education.
          </li>
          <li style={{ marginBottom: '10px' }}>
            <strong>Diverse Educational Opportunities:</strong> With over **4,000 higher education institutions**, ranging from large research universities to small liberal arts colleges, the U.S. offers a wide spectrum of academic and social environments to fit a variety of student needs and interests.
          </li>
          <li style={{ marginBottom: '10px' }}>
            <strong>Research and Innovation:</strong> The U.S. leads the world in research and development spending. U.S. universities are at the forefront of research, technology, and innovation, providing students with opportunities to work alongside distinguished faculty on transformative projects.
          </li>
          <li style={{ marginBottom: '10px' }}>
            <strong>Cultural Diversity:</strong> The U.S. hosts more Indian students than any other country in the world, with over 1 million foreign students.
          </li>
          <li style={{ marginBottom: '10px' }}>
            <strong>Career Opportunities:</strong> Many education programs in the U.S. are aligned with industry needs, providing practical experience through internships and training with leading global corporations. This practical emphasis is reflected in the strong employability rates of graduates.
          </li>
          <li style={{ marginBottom: '10px' }}>
            <strong>Flexible Curriculum:</strong> U.S. universities often provide flexible course options that allow students to tailor their studies to their specific interests and career goals, encouraging a broader educational experience and fostering innovative thinking.
          </li>
          <li style={{ marginBottom: '10px' }}>
            <strong>Support Services for Indian Students:</strong> U.S. universities offer robust support systems for Indian students, including orientation programs, English language classes, and assistance with visa status and employment opportunities, making the transition easier for those from abroad.
          </li>
        </ul>
      </section>

      <section style={sectionStyle}>
        <h2>Top Courses to Study in the US</h2>
        <p>Here are the top fields preferred by international students to study abroad:</p>
        <ul style={listStyle}>
          <li>Engineering and computer science courses</li>
          <li>Life science courses</li>
          <li>Business management courses</li>
        </ul>
       <button>Avail Free councling</button>
      </section>

      <section style={sectionStyle}>
        <h2>Top Universities to Study in the US (QS Ranking 2025)</h2>
        <p>Check where your favourite American university ranks</p>
        <ol style={listStyle}>
          <li>Harvard University</li>
          <li>Stanford University</li>
          <li>Massachusetts Institute of Technology</li>
          <li>Princeton University</li>
          <li>University of California, Berkeley</li>
          <li>University of Pennsylvania</li>
          <li>California Institute of Technology</li>
          <li>Columbia University</li>
          <li>Cornell University</li>
        </ol>
        <p>Check where these American universities rank on the Times Higher Education charts.</p>
      </section>

      <section style={sectionStyle}>
        <h2>Intakes Available in the USA</h2>
        <p>Unlike a single intake in Indian universities, American colleges and universities offer three intakes. In some universities, intakes may also be referred to as a semester. The three intakes available in the US are:</p>
        <ul style={listStyle}>
          <li>
            <strong>Fall:</strong> A popular intake among Indian students, The Fall intake starts in the month of September
          </li>
          <li>
            <strong>Spring:</strong> Starts in January; it’s best if you miss the September intake
          </li>
          <li>
            <strong>Summer:</strong> Available for limited programs and colleges, the Summer intake usually starts around May
          </li>
        </ul>
         <button>Avail For Free councling</button>
      </section>

      <section style={sectionStyle}>
        <h2>Cost of Studying in the USA</h2>
        <p>Universities in the US are majorly divided into two categories - Public/State and Private. The education cost at a public/state university is comparatively lesser than that of a private institution. Your expenditure on tuition fees depends on the type of qualification and university or school you opt for. To cover tuition fees, you will need approx. **$8,000 to $55,000 (USD)** a year (indicative).</p>
        
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thTdStyle}>School</th>
              <th style={thTdStyle}>Tuition fees in USD (indicative)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={thTdStyle}>English language studies</td>
              <td style={thTdStyle}>$700 to $2,000 a month</td>
            </tr>
            <tr>
              <td style={thTdStyle}>Community colleges</td>
              <td style={thTdStyle}>$6,000 to $20,000 per year</td>
            </tr>
            <tr>
              <td style={thTdStyle}>Undergraduate bachelor degree</td>
              <td style={thTdStyle}>$20,000 to $40,000 per year</td>
            </tr>
            <tr>
              <td style={thTdStyle}>Graduate programs</td>
              <td style={thTdStyle}>$20,000 to $45,000 per year</td>
            </tr>
            <tr>
              <td style={thTdStyle}>Doctoral degree</td>
              <td style={thTdStyle}>$28,000 to $55,000 per year</td>
            </tr>
          </tbody>
        </table>
        <p>*Please note: An MBA degree can cost significantly more, as can professional programs such as law, medicine, dentistry, some design programs, etc. Most doctoral degrees are 100% funded through research/teaching assistantships, research aid and bursaries.</p>
        <button>Avail For Free councling</button>
      </section>

      <section style={sectionStyle}>
        <h2>Scholarships to Study in the USA</h2>
        <p>The amount of money available and the type of award varies between institutions. Certain research programs may provide up to 100% of the tuition fee besides covering a part of your living expenditures.</p>
        <p>Here are some popular scholarship programs you can apply to study in the US as an Indian student:</p>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thTdStyle}>S.No.</th>
              <th style={thTdStyle}>Name of the scholarship</th>
              <th style={thTdStyle}>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={thTdStyle}>1</td>
              <td style={thTdStyle}><strong>Fulbright- Nehru Fellowships (Government-funded)</strong></td>
              <td style={thTdStyle}>Applicable for Indian students who are applying to master’s or PhD programs; this scholarship covers tuition fees, accident and sickness coverage as per US guidelines, airfare, and living costs</td>
            </tr>
            <tr>
              <td style={thTdStyle}>2</td>
              <td style={thTdStyle}><strong>Hubert Humphrey Fellowship Program (Government-funded)</strong></td>
              <td style={thTdStyle}>This program is a part of the Fullbright program and aims to bring an accomplished young and mid-career professional from a developing country to study in the US for 10 months of non-degree graduate study and related practical experience</td>
            </tr>
            <tr>
              <td style={thTdStyle}>3</td>
              <td style={thTdStyle}><strong>#YouAreWelcomeHere Scholarship (Non-Government scholarship)</strong></td>
              <td style={thTdStyle}>It’s a scholarship and social media campaign designed to welcome Indian students into the US higher education system irrespective of the subject area</td>
            </tr>
            <tr>
              <td style={thTdStyle}>4</td>
              <td style={thTdStyle}><strong>UEFA (Non-Government scholarship)</strong></td>
              <td style={thTdStyle}>This is a summer program sponsored by Abbey Road Inc. which grants scholarships to 14-18 aged high school student that shows exemplary performance in their academics and extracurricular activities</td>
            </tr>
            <tr>
              <td style={thTdStyle}>5</td>
              <td style={thTdStyle}><strong>AAUW International Fellowships (Non-Government scholarship)</strong></td>
              <td style={thTdStyle}>These fellowships are awarded to Indian women students for full-time study and research in the US. It supports both graduate and post-graduate students accredited in the US institutions</td>
            </tr>
          </tbody>
        </table>
        <p>If you want to bring down your educational expenses, it is best to apply to various U.S scholarships available for Indian students.</p>
        <button>Avail Free councling</button>
      </section>
    </div>
  );
};

export default StdyUsacnt;