import React from 'react';
import { useMemo } from 'react';

// Using inline styles instead of an external CSS import to ensure single-file integrity
const styles = {
  container: {
    maxWidth: '100%',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Inter, Arial, sans-serif',
    lineHeight: '1.6',
    backgroundColor: '#f8f9fa',
    borderRadius: '12px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  header: {
    color: '#004d99',
    fontSize: '2.5rem',
    marginBottom: '20px',
    textAlign: 'center',
    fontWeight: '800',
  },
  navLinks: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    padding: '15px 0',
    marginBottom: '30px',
    borderBottom: '2px solid #ffcc00',
  },
  navLink: {
    color: '#004d99',
    fontWeight: '600',
    textDecoration: 'none',
    fontSize: '1.1rem',
    padding: '8px 15px',
    borderRadius: '6px',
    transition: 'background-color 0.3s',
    cursor: 'pointer',
  },
  sectionTitle: {
    color: '#004d99',
    borderBottom: '3px solid #ffcc00',
    paddingBottom: '5px',
    marginTop: '40px',
    marginBottom: '20px',
    fontSize: '1.8rem',
    fontWeight: '700',
  },
  paragraph: {
    marginBottom: '20px',
    color: '#333',
  },
  benefitsList: {
    listStyle: 'none',
    paddingLeft: '0',
  },
  listItem: {
    marginBottom: '20px',
    paddingLeft: '20px',
    
    borderRadius: '0 4px 4px 0',
  },
  benefitTitle: {
    fontWeight: 'bold',
    color: '#007bff',
    marginBottom: '5px',
  },
  benefitText: {
    marginTop: '5px',
    color: '#555',
  },
  callout: {
    border: '1px solid #cce5ff',
    padding: '25px',
    marginTop: '30px',
    backgroundColor: '#e9f7ff',
    borderRadius: '10px',
    
  },
  ctaLink: {
  
    fontWeight: 'bold',
    textDecoration: 'none',
  }
};

const What_isstdngcnt = () => {

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const navItems = useMemo(() => [
    { id: 'why-consider-studying-abroad', title: 'Why Study Abroad?' },
    { id: 'how-can-idp-help', title: 'How Can IDP Help?' },
  ], []);

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Your Guide to Studying Abroad</h1>

      {/* Navigation Links (Table of Contents) - These link to the sections below */}
      <nav style={styles.navLinks}>
        {navItems.map(item => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection(item.id);
            }}
            style={styles.navLink}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#e0f7fa'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            {item.title}
          </a>
        ))}
      </nav>

      {/* Introduction Section (First two paragraphs of the provided text) */}
      <p style={styles.paragraph}>
        Studying abroad is about meeting the challenge of getting an education in a foreign country. It's an opportunity to thrive in a new culture, language, and educational system, while also gaining new experiences and skills.
      </p>
      <p style={styles.paragraph}>
        Studying abroad can take many forms, from a few weeks in a short course, to a four years’ program of full-time study. Programs can range from language immersion to research-based programs, and can be customised to fit your individual needs and interests.
      </p>

      {/* --- Why Study Abroad Section --- */}
      <section id="why-consider-studying-abroad">
        <h2 style={styles.sectionTitle}>Why should you consider studying abroad?</h2>
        <p style={styles.paragraph}>
          Learning at an overseas institution can offer a wide range of benefits, from enhancing your education, to personal growth and career opportunities. By studying abroad, you can:
        </p>

        <ul style={styles.benefitsList}>
          <li style={styles.listItem}>
            <p style={styles.benefitTitle}>Broaden your horizons:</p>
            <p style={styles.benefitText}>
              Studying overseas exposes you to new ways of thinking, different perspectives, and diverse cultural practices. It challenges your preconceptions and encourages you to step out of your comfort zone, fostering personal growth and self-discovery. The experience enables you to develop a global mindset and gain a deeper understanding and appreciation of different cultures.
            </p>
          </li>
          <li style={styles.listItem}>
            <p style={styles.benefitTitle}>Gain language skills:</p>
            <p style={styles.benefitText}>
              Another compelling reason to study abroad is the chance to enhance your language skills. Whether you're studying in an English-speaking country or learning a new language from scratch, being surrounded by native speakers provides a rich language learning environment. Immersion in a new language helps you improve your fluency, pronunciation, and comprehension, giving you a competitive edge in an increasingly globalised world.
            </p>
          </li>
          <li style={styles.listItem}>
            <p style={styles.benefitTitle}>Expand your network:</p>
            <p style={styles.benefitText}>
              Studying overseas also offers unparalleled opportunities to expand your network. You'll meet fellow students from all corners of the globe, forming lifelong friendships and professional connections. These connections can prove invaluable in the future, whether you're seeking international job opportunities, collaborating on research projects, or simply wanting to maintain a diverse and multicultural network.
            </p>
          </li>
          <li style={styles.listItem}>
            <p style={styles.benefitTitle}>Enhance your career prospects:</p>
            <p style={styles.benefitText}>
              In today's global job market, employers value candidates with international experience. Studying abroad equips you with a unique set of skills and experiences that can set you apart from other applicants. Adaptability, cultural competency, independence, and resilience are just a few of the qualities you develop while navigating life in a foreign country. Employers recognise the value of these skills and often prioritize candidates who have studied abroad, as it demonstrates a willingness to embrace challenges and a capacity to thrive in diverse environments.
            </p>
          </li>
        </ul>
      </section>

      {/* --- IDP Help Section --- */}
      <section id="how-can-idp-help">
        <h2 style={styles.sectionTitle}>How can IDP help you study abroad?</h2>
        <p style={styles.paragraph}>
          If you're considering studying abroad, IDP can provide you with expert guidance and support to help you navigate the process. With over 50 years of experience in international education, IDP has the knowledge and resources to help you choose the right program, apply to universities, and guide you through the visa process. IDP also offers pre-departure preparation and support with travel arrangements and accommodation, making your transition to a new country as smooth as possible.
        </p>

        <div style={styles.callout}>
          <p style={styles.paragraph}>
            If you're considering studying abroad, IDP can help you make your dream a reality. Explore our range of resources, including the IDP Live app, which connects you to a wide array of courses and universities. 
            Download the app today to discover your options and kickstart your study abroad journey. Additionally, 
            sign up for our newsletter and stay updated on the latest information, tips, advice and much more. 
          </p>
          <p >
            Take the first step towards your international education goals and let IDP be your partner on this exciting adventure!
          </p>
        </div>
      </section>

    </div>
  );
};

export default What_isstdngcnt;
