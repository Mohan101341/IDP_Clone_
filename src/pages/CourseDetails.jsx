import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./CourseDetails.css";

const mockCourseData = {
  "Massachusetts Institute of Technology": {
    name: "Massachusetts Institute of Technology",
    country: "USA",
    ranking: 1,
    students: "3,700+",
    image: "/assets/uni-logo-sample.png",
    details: "A world leader in science and technology, MIT is renowned for its rigorous academic programs, cutting-edge research, and innovation.",
    programs: ["Electrical Engineering & Computer Science", "Mechanical Engineering", "Physics"],
    admission: {
      intake: "Fall",
      application_fee: "$75",
      requirements: ["SAT/ACT Scores", "Essays", "Letters of Recommendation", "Portfolio (for some programs)"]
    },
    campus_life: "MIT's campus in Cambridge, Massachusetts, is a hub of intellectual and creative energy, with a strong tradition of student-led initiatives.",
    website: "https://www.mit.edu/"
  },
  "Imperial College London": {
    name: "Imperial College London",
    country: "UK",
    ranking: 2,
    students: "9,000+",
    image: "/assets/uni-logo-sample.png",
    details: "A public research university in London, specializing in science, engineering, medicine, and business.",
    programs: ["Medicine", "Bioengineering", "Computing", "Physics"],
    admission: {
      intake: "October",
      application_fee: "£80 (UCAS)",
      requirements: ["A-levels or equivalent", "Personal Statement", "English Proficiency Test"]
    },
    campus_life: "Located in South Kensington, students have access to London's world-class museums, parks, and cultural venues.",
    website: "https://www.imperial.ac.uk/"
  },
  "University of Oxford": {
    name: "University of Oxford",
    country: "UK",
    ranking: 3,
    students: "11,500+",
    image: "/assets/uni-logo-sample.png",
    details: "The oldest university in the English-speaking world, Oxford is a unique and historic institution with a global reputation for academic excellence.",
    programs: ["Philosophy, Politics and Economics (PPE)", "Law", "History", "English Language and Literature"],
    admission: {
      intake: "October",
      application_fee: "£75 (UCAS)",
      requirements: ["A-levels or equivalent", "Personal Statement", "Admissions Tests (e.g., LNAT, BMAT)", "Interview"]
    },
    campus_life: "The collegiate system offers a strong sense of community, with students belonging to one of over 39 colleges.",
    website: "https://www.ox.ac.uk/"
  },
  "Harvard University": {
    name: "Harvard University",
    country: "USA",
    ranking: 4,
    students: "5,200+",
    image: "/assets/uni-logo-sample.png",
    details: "America's oldest institution of higher learning, Harvard offers a transformative educational experience with a vast array of resources.",
    programs: ["Economics", "Government", "Computer Science", "Law (JD)"],
    admission: {
      intake: "Fall",
      application_fee: "$85",
      requirements: ["SAT/ACT Scores (optional)", "Essays", "Letters of Recommendation", "Interview"]
    },
    campus_life: "Located in Cambridge, Massachusetts, Harvard's historic campus is home to a diverse and vibrant student community.",
    website: "https://www.harvard.edu/"
  },
  "University of Cambridge": {
    name: "University of Cambridge",
    country: "UK",
    ranking: 5,
    students: "9,000+",
    image: "/assets/uni-logo-sample.png",
    details: "A globally leading university, Cambridge is known for its outstanding academic achievements and world-class original research.",
    programs: ["Natural Sciences", "Mathematics", "Engineering", "Computer Science"],
    admission: {
      intake: "October",
      application_fee: "£75 (UCAS)",
      requirements: ["A-levels or equivalent", "Personal Statement", "Admissions Tests", "Interview"]
    },
    campus_life: "Like Oxford, Cambridge has a collegiate system, fostering close-knit communities and providing extensive student support.",
    website: "https://www.cam.ac.uk/"
  },
  "Stanford University": {
    name: "Stanford University",
    country: "USA",
    ranking: 6,
    students: "3,800+",
    image: "/assets/uni-logo-sample.png",
    details: "Located in the heart of Silicon Valley, Stanford is a private research university known for its entrepreneurial spirit and connection to the tech industry.",
    programs: ["Computer Science", "Engineering", "Business (MBA)", "Human Biology"],
    admission: {
      intake: "Fall",
      application_fee: "$85",
      requirements: ["SAT/ACT Scores", "Essays", "Letters of Recommendation"]
    },
    campus_life: "Stanford's large, beautiful campus offers a sunny climate and a wide range of extracurricular activities.",
    website: "https://www.stanford.edu/"
  },
  "ETH Zurich": {
    name: "ETH Zurich",
    country: "Switzerland",
    ranking: 7,
    students: "8,000+",
    image: "/assets/uni-logo-sample.png",
    details: "A leading university for science and technology in continental Europe, ETH Zurich has produced over 20 Nobel laureates, including Albert Einstein.",
    programs: ["Architecture", "Civil Engineering", "Computer Science", "Mechanical Engineering"],
    admission: {
      intake: "Autumn",
      application_fee: "CHF 150",
      requirements: ["Matura or equivalent", "Entrance Examination (for some)", "Language Proficiency (German/English)"]
    },
    campus_life: "Located in Zurich, Switzerland's largest city, students benefit from a high quality of life and a dynamic cultural scene.",
    website: "https://ethz.ch/en.html"
  },
  "National University of Singapore": {
    name: "National University of Singapore",
    country: "Singapore",
    ranking: 8,
    students: "10,000+",
    image: "/assets/uni-logo-sample.png",
    details: "Asia's top university, NUS is a comprehensive research university offering a global approach to education and research with a focus on Asian perspectives.",
    programs: ["Computer Science", "Business Administration", "Engineering", "Medicine"],
    admission: {
      intake: "August",
      application_fee: "SGD 20",
      requirements: ["High School Diploma or equivalent", "University Entrance Examination", "English Proficiency"]
    },
    campus_life: "NUS boasts a vibrant campus life with a diverse student body from over 100 countries.",
    website: "https://www.nus.edu.sg/"
  },
  "University of Toronto": {
    name: "University of Toronto",
    country: "Canada",
    ranking: 21,
    students: "27,000+",
    image: "/assets/uni-logo-sample.png",
    details: "Canada's leading university, known for its influential research and discovery, and a highly diverse student body.",
    programs: ["Life Sciences", "Commerce", "Computer Science", "Humanities"],
    admission: {
      intake: "September",
      application_fee: "CAD 180",
      requirements: ["High School Diploma", "English Proficiency", "Program-specific prerequisites"]
    },
    campus_life: "With three campuses in and around Toronto, students experience a vibrant, multicultural urban environment.",
    website: "https://www.utoronto.ca/"
  },
  "The University of Melbourne": {
    name: "The University of Melbourne",
    country: "Australia",
    ranking: 13,
    students: "22,000+",
    image: "/assets/uni-logo-sample.png",
    details: "A top-ranked Australian university with a strong research focus and a unique curriculum model.",
    programs: ["Arts", "Biomedicine", "Commerce", "Science"],
    admission: {
      intake: "February, July",
      application_fee: "AUD 100",
      requirements: ["ATAR or equivalent", "English Proficiency", "Prerequisite subjects"]
    },
    campus_life: "Located in the heart of Melbourne, the campus is a mix of historic architecture and modern facilities.",
    website: "https://www.unimelb.edu.au/"
  },
  "University of California, Berkeley": {
    name: "University of California, Berkeley",
    country: "USA",
    ranking: 12,
    students: "6,500+",
    image: "/assets/uni-logo-sample.png",
    details: "The top public university in the United States, known for its academic excellence and history of student activism.",
    programs: ["Computer Science", "Economics", "Political Science", "Molecular & Cell Biology"],
    admission: {
      intake: "Fall",
      application_fee: "$70",
      requirements: ["UC Application with Personal Insight Questions", "High School GPA"]
    },
    campus_life: "The campus overlooks the San Francisco Bay, offering a dynamic and intellectually stimulating environment.",
    website: "https://www.berkeley.edu/"
  },
  "The University of Sydney": {
    name: "The University of Sydney",
    country: "Australia",
    ranking: 18,
    students: "20,000+",
    image: "/assets/uni-logo-sample.png",
    details: "One of Australia's oldest and most prestigious universities, with a beautiful campus and a reputation for world-class teaching.",
    programs: ["Arts and Social Sciences", "Business", "Engineering and IT", "Medicine and Health"],
    admission: {
      intake: "February, July",
      application_fee: "AUD 125",
      requirements: ["ATAR or equivalent", "English Proficiency"]
    },
    campus_life: "The university has a vibrant campus culture with over 200 clubs and societies.",
    website: "https://www.sydney.edu.au/"
  },
};

export default function CourseDetails() {
  const { name } = useParams(); // University name from URL
  const [course, setCourse] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {

    const decodedName = decodeURIComponent(name);
    if (mockCourseData[decodedName]) {
      setCourse(mockCourseData[decodedName]);
    } else {
      console.error("Course not found in mock data:", decodedName);
    }
  }, [name]);

  if (!course) return <h2 style={{ textAlign: "center" }}>Loading details...</h2>;

  return (
    <div className="details-container">
      <button onClick={() => navigate(-1)} className="back-btn">⬅ Back</button>

      <div className="details-card">
        {/* University Logo */}
        {course.image && (
          <img
            src={course.image}
            alt={course.name}
            className="university-img"
          />
        )}

        {/* Basic Info */}
        <h1>{course.name}</h1>
        <p><strong>Country:</strong> {course.country}</p>
        <p><strong>World Ranking:</strong> {course.ranking}</p>
        <p><strong>Students:</strong> {course.students}</p>

        {/* Description */}
        <p className="details-text">{course.details}</p>

        {/* Programs Offered */}
        {course.programs && course.programs.length > 0 && (
          <div className="info-section">
            <h3>🎓 Programs Offered:</h3>
            <ul>
              {course.programs.map((program, i) => (
                <li key={i}>{program}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Admission Info */}
        {course.admission && (
          <div className="info-section">
            <h3>📝 Admission Information:</h3>
            <p><strong>Intake:</strong> {course.admission.intake}</p>
            <p><strong>Application Fee:</strong> {course.admission.application_fee}</p>

            {course.admission.requirements && (
              <>
                <p><strong>Requirements:</strong></p>
                <ul>
                  {course.admission.requirements.map((req, i) => (
                    <li key={i}>{req}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
        )}

        {/* Campus Life */}
        {course.campus_life && (
          <div className="info-section">
            <h3>🏫 Campus Life:</h3>
            <p>{course.campus_life}</p>
          </div>
        )}

        {/* Website */}
        {course.website && (
          <p style={{ marginTop: "20px" }}>
            <strong>🌐 Official Website:</strong>{" "}
            <a
              href={course.website}
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              {course.website}
            </a>
          </p>
        )}
      </div>
    </div>
  );
}
