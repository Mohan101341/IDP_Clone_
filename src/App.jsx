import React from "react";
import { HashRouter, Routes, Route, Link } from "react-router-dom";

// Common Components
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Contact from "./Components/Contact/Contact";
import Services from "./Components/Services/Services";
import Destinations from "./Components/Destination/Destinations";
import Hero from "./Components/Hero/Hero";
import Testimonials from "./Components/Testimonials/Testimonials";
import Import from "./Components/Implinks/Import";
import Fastlane from "./Components/Fastlane/Fastlane";
import IDP from "./Components/IdpStudents/IDP";
import Essentials from "./Components/Essentials/Essentials";
import Aboutidp from "./Components/IDP-P/Aboutidp";
import StudySteps from "./Components/StudySteps/StudySteps";
import BlueNav from "./Components/bLUE-nav/BlueNav";

// Black-Link Pages
import English from "./pages/black-link/English";
import Events from "./pages/black-link/Events";
import Find from "./pages/black-link/Find/Find";
import NewAndA from "./pages/black-link/NewAndA";
import ComingSoon from "./pages/ComingSoon/ComingSoon";

// White-Link Pages
import EnglishT from "./pages/white-link/EnglishTests/EnglishT.jsx";
import Avail from "./pages/white-link/Avail_Free/Avail";
import IELTSPage from "./pages/white-link/IELTS/IELTS1.jsx";
import SignIN from "./pages/white-link/Sign_In/SignIN";
import Sign_Up from "./pages/white-link/Sign_Up/Sign_Up";

// Study Abroad
import WhyStudyAbroadPage from "./pages/white-link/Study_Abroad/WhyStudyAbroadPage";
import AfterOfferPage from "./pages/white-link/Study_Abroad/AfterOfferPage";
import HowToApplyPage from "./pages/white-link/Study_Abroad/HowToApplyPage";
import WhereToStudyPage from "./pages/white-link/Study_Abroad/WhereToStudyPage";
import PrepareToDepartPage from "./pages/white-link/Study_Abroad/PrepareToDepartPage";
import ArriveAndThrivePage from "./pages/white-link/Study_Abroad/ArriveAndThrivePage";
import StudyAbNavbar from "./pages/white-link/Study_Abroad/WhyStudyAbrd/StudyAbNavbar";

// Student Essentials
import Student from "./pages/white-link/Student_Essentials/Student";
import StudentEssFrom from "./pages/white-link/Student_Essentials/StudentEssFrom/StudentEssFrom";
import Accommodation from "./pages/white-link/Student_Essentials/StudentEs-Types/Accommodation";
import EducationLoan from "./pages/white-link/Student_Essentials/StudentEs-Types/Education_loan";
import HealthInsurance from "./pages/white-link/Student_Essentials/StudentEs-Types/Health_Insurance";
import StudentBanking from "./pages/white-link/Student_Essentials/StudentEs-Types/Student_banking";
import ForexCards from "./pages/white-link/Student_Essentials/StudentEs-Types/Forex_Cards";
import Guardian_Ship from "./pages/white-link/Student_Essentials/StudentEs-Types/Guardian_Ship";
import ISIC from "./pages/white-link/Student_Essentials/StudentEs-Types/ISIC";
import InternationalSimCards from "./pages/white-link/Student_Essentials/StudentEs-Types/International_SIM_Cards";
import ServicesSection from "./pages/white-link/Student_Essentials/StudentEssFrom/ServiceSection";
import EssentialsCards from "./pages/white-link/Student_Essentials/StudentEssFrom/EssentialsCards";
import MoneyTransfer from "./pages/white-link/Student_Essentials/StudentEs-Types/Money_transfer";
import StudyAbroadPromo from "./pages/white-link/Student_Essentials/StudentEssFrom/StudyAdroadPromo";
import ShortList from "./Components/ShortList/ShortList";
import Related_Articles from "./pages/Related_Articles/Related_Articles";
import FindH from "./pages/black-link/Find/FindH";
import FindCountryPage from "./pages/black-link/Find/FindCountryPage";
import InfoSection from "./pages/black-link/Find/InfoSection";
//Find a course and IELTS 

import CourseA from "./pages/white-link/Find_A_Course/CourseAdvice/CourseAdvice";
import FindC from "./pages/white-link/Find_A_Course/CourseAdvice/Findcourses/FindC";
import Courseof from "./pages/white-link/Find_A_Course/Courseinstant/Courseof";
import Sabroad from "./pages/white-link/Find_A_Course/Study_Abroad/Sabroad";
import Scholar from "./pages/white-link/Find_A_Course/FindScholar/Scholar"
import FindU from "./pages/white-link/Find_A_Course/Find_Universities/FindU";
import Oneac from "./Components/On_signin_banner/Oneac";
import Uranking from "./pages/white-link/Find_A_Course/University_Ranking/Uranking";
import Qsworld from "./pages/white-link/Find_A_Course/University_Ranking/Qs_World/Qsworld";
import Cug from "./pages/white-link/Find_A_Course/C_U_G/Cug";
import Book from "./pages/white-link/IELTS/Book_IELTS/Book";
import What from "./pages/white-link/IELTS/What_is_IELTS/What";
import Prep from "./pages/white-link/IELTS/IELTS_prep/Prep";
// Study Destinations
import Askidp from "./pages/white-link/Study_Abroad/AskIdp/Askidp";
import ExploreAbroadPrgms from "./pages/white-link/StudyDestinations/ExploreAbroadPrgms";
import Studydestcnt from "./pages/white-link/StudyDestinations/Studydestcnt";
import StdyAushero from "./pages/white-link/StudyDestinations/StudyInAustralia/StdyAushero";
import StdyAustcnt from "./pages/white-link/StudyDestinations/StudyInAustralia/StdyAustcnt.jsx";
import Stdycanhero from "./pages/white-link/StudyDestinations/StudyInCanada/Stdycanhero.jsx";
import Stdycancnt from "./pages/white-link/StudyDestinations/StudyInCanada/Stdycancnt.jsx";
import StdyUkhero from "./pages/white-link/StudyDestinations/StudyInUk/StdyUkhero.jsx";
import StdyIrlndhero from "./pages/white-link/StudyDestinations/StudyInIreland/StudyIn/StdyIrlndhero.jsx";
import StdyUsahero from "./pages/white-link/StudyDestinations/StudyInUsa/StdyUsahero.jsx";
import StdyIrlndcnt from "./pages/white-link/StudyDestinations/StudyInIreland/StudyIn/StdyIrlndcnt.jsx";
import Stdyinukcnt from "./pages/white-link/StudyDestinations/StudyInUk/Stdyinukcnt.jsx";


// ✅ Layout for white-link pages
const WhiteLinkLayout = ({ children }) => (
  <>
    <Navbar />
    {children}
    <Footer />
  </>
);

export default function App() {
  return (
    <HashRouter>
      <Routes>
        {/* 🏠 Home Page */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Hero />
              <Testimonials />
              <Contact />
              <Services />
              <Destinations />
              <StudySteps />
              <Import />
              <Fastlane />
              <IDP />
              <Essentials />
              <Aboutidp />
              <Footer />
            </>
          }
        />

        {/* ⚙️ Services Page */}
        <Route
          path="/services"
          element={
            <WhiteLinkLayout>
              <Services />
            </WhiteLinkLayout>
          }
        />

        {/* 📚 Study Details - Generic and Specific */}
        <Route
          path="/study/:slug"
          element={
            <WhiteLinkLayout>
              <ComingSoon />
            </WhiteLinkLayout>
          }
        />

        {/* ⚫ Black-Link Pages */}
        <Route
          path="/pages/Events"
          element={
            <>
              <Navbar />
              <BlueNav />
              <Events />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route
          path="/pages/NewAndA"
          element={
            <>
              <Navbar />
              <BlueNav />
              <NewAndA />
              <Footer />
            </>
          }
        />
        <Route
          path="/pages/English"
          element={
            <>
              <Navbar />
              <BlueNav />
              <English />
              <Footer />
            </>
          }
        />
        <Route
          path="/pages/black-link/Find/Find"
          element={
            <>
              <Navbar />
              <BlueNav />
              <FindH />
              <InfoSection />
              <Find />
              <Footer />
            </>
          }
        />

        {/* ⚪ White-Link Pages */}
        <Route
          path="/study-abroad/why-study-abroad"
          element={
            <WhiteLinkLayout>
              <StudyAbNavbar />
              <WhyStudyAbroadPage />
              <NewAndA />
              <Contact />
            </WhiteLinkLayout>
          }
        />
        <Route
          path="/study-abroad/how-to-apply"
          element={
            <WhiteLinkLayout>
              <StudyAbNavbar />
              <HowToApplyPage />
              <NewAndA />
              <Contact />
            </WhiteLinkLayout>
          }
        />
        <Route
          path="/study-abroad/where-to-study"
          element={
            <WhiteLinkLayout>
              <StudyAbNavbar />
              <WhereToStudyPage />
              <NewAndA />
              <Contact />
            </WhiteLinkLayout>
          }
        />
        <Route
          path="/study-abroad/after-offer"
          element={
            <WhiteLinkLayout>
              <StudyAbNavbar />
              <AfterOfferPage />
              <NewAndA />
              <Contact />
            </WhiteLinkLayout>
          }
        />
        <Route
          path="/study-abroad/prepare-to-depart"
          element={
            <WhiteLinkLayout>
              <StudyAbNavbar />
              <PrepareToDepartPage />
              <NewAndA />
              <Contact />
            </WhiteLinkLayout>
          }
        />
        <Route
          path="/study-abroad/arrive-and-thrive"
          element={
            <WhiteLinkLayout>
              <StudyAbNavbar />
              <ArriveAndThrivePage />
              <NewAndA />
              <Contact />
            </WhiteLinkLayout>
          }
        />

        <Route
          path="/study-destinations"
          element={
            <WhiteLinkLayout>
              {/* <StudyDs /> This component was not provided */}
              <ExploreAbroadPrgms />
              <Studydestcnt />
              <Askidp />
              <Contact />
            </WhiteLinkLayout>
          }
        />
        <Route
          path="/study-destinations/australia"
          element={
            <WhiteLinkLayout>
              <StdyAushero />
              <StdyAustcnt />
              <Contact />
            </WhiteLinkLayout>
          }
        />
        <Route
          path="/study-destinations/canada"
          element={
            <WhiteLinkLayout>
              <Stdycanhero />
              <Stdycancnt />
              <Contact />
            </WhiteLinkLayout>
          }
        />
        <Route
          path="/study-destinations/ireland"
          element={
            <WhiteLinkLayout>
              <StdyIrlndhero />
              <StdyIrlndcnt />
              <Contact />
            </WhiteLinkLayout>
          }
        />
        <Route
          path="/study-destinations/uk"
          element={
            <WhiteLinkLayout>
              <StdyUkhero />
              <Stdyinukcnt />
              <Contact />
            </WhiteLinkLayout>
          }
        />
        <Route
          path="/study-destinations/usa"
          element={
            <WhiteLinkLayout>
              <StdyUsahero />
              <Contact />
            </WhiteLinkLayout>
          }
        />
        
        {/* Find A course */}
          <Route
          path="/pages/CourseA"
          element={
            <>
              <Navbar />
              <CourseA/>
              <Contact />
              <Footer />
            </>
          }
          />
          <Route
          path="/pages/Scholar"
          element={
            <>
              <Navbar />
              <Scholar/>
              <IDP />
              <Contact />
              <Footer />
            </>
          }
          />
            <Route
          path="/pages/Sabroad"
          element={
            <>
              <Navbar />
              <Sabroad />
              <Contact />
              <Footer />
            </>
          }
          />
            <Route
          path="/pages/EnglishT"
          element={
            <>
              <Navbar />
              <EnglishT />
              <Contact />
              <Footer />
            </>
          }
          />
            <Route
          path="/pages/FindU"
          element={
            <>
              <Navbar />
              <FindU/>
              <Oneac />
              <Fastlane />
              <Footer />
            </>
          }
          />
            <Route
          path="/pages/Courseof"
          element={
            <>
              <Navbar />
              <Courseof />
              <Fastlane />
              <Contact />
              <Footer />
            </>
          }
          />
          <Route
          path="/pages/FindC"
          element={
            <>
              <Navbar />
              <FindC/>
              <Oneac />
              <Fastlane />
              <Contact />
              <Footer />
            </>
          }
          />
          <Route
          path="/pages/Uranking"
          element={
            <>
              <Navbar />
              <Uranking/>
              <Oneac/>
              <Contact />
              <Footer />
            </>
          }
          />
          <Route
          path="/pages/IELTSPage"
          element={
            <>
              <Navbar />
              <IELTSPage/>
              <Contact />
              <Footer />
            </>
          }
           />
          <Route
          path="/pages/Qsworld"
          element={
            <>
              <Navbar />
              <Qsworld/>
              <Contact />
              <Footer />
            </>
          }
           />
          <Route
          path="/pages/Cug"
          element={
            <>
              <Navbar />
              <Cug/>
              <Oneac/>
              <Contact />
              <Footer />
            </>
          }
          />

        {/* IELTS Page */}
       <Route
          path="/pages/What"
          element={
            <>
              <Navbar />
              <What/>
              <Contact />
              <Footer />
            </>
          }
            />
          <Route
          path="/pages/Book"
          element={
            <>

              <Book/>
              <Footer />
            </>
          }
            />
          <Route
          path="/pages/Prep"
          element={
            <>
              <Navbar />
              <Prep/>
              <Contact />
              <Footer />
            </>
          }
          />


        {/* 🎓 Student Essentials */}
        <Route
          path="/student-essentials"
          element={
            <WhiteLinkLayout>
              <Student />
            </WhiteLinkLayout>
          }
        />

        {[
          ["EducationLoan", EducationLoan],
          ["HealthInsurance", HealthInsurance],
          ["Money_Transfer", MoneyTransfer],
          ["StudentBanking", StudentBanking],
          ["Accommodation", Accommodation],
          ["InternationalSimCards", InternationalSimCards],
          ["Guardian-Ship", Guardian_Ship],
          ["ForexCards", ForexCards],
          ["ISIC", ISIC],
          ["Travel_Support", ComingSoon],
        ].map(([pathName, Component]) => (
          <Route
            key={pathName}
            path={`/student-essentials/${pathName}`}
            element={
              <WhiteLinkLayout>
                <Component />
                {pathName === "Money_Transfer" && <StudyAbroadPromo />}
                <StudentEssFrom />
                <EssentialsCards style={{ margin: "2rem 0" }} />
                <ServicesSection />
              </WhiteLinkLayout>
            }
          />
        ))}

        <Route
          path="/pages/white-link/Avail"
          element={
            <WhiteLinkLayout>
              <Avail />
            </WhiteLinkLayout>
          }
        />

        <Route
          path="/pages/Related_Articles"
          element={
            <WhiteLinkLayout>
              <Related_Articles />
            </WhiteLinkLayout>
          }
        />


        <Route
          path="/pages/white-link/SignIN"
          element={
            <WhiteLinkLayout>
              <SignIN />
            </WhiteLinkLayout>
          }
        />

        <Route
          path="/pages/white-link/Sign_Up"
          element={
            <WhiteLinkLayout>
              <Sign_Up />
            </WhiteLinkLayout>
          }
        />

        <Route
          path="/ShortList"
          element={
            <WhiteLinkLayout>
              <ShortList />
            </WhiteLinkLayout>
          }
        />

        {/* 🚧 Coming Soon Page */}
        <Route
          path="/coming-soon"
          element={
            <WhiteLinkLayout>
              <ComingSoon />
            </WhiteLinkLayout>
          }
        />

        {/* 🌏 Find Us by Country Page (Dynamic) */}
        <Route
          path="/find-us/:country"
          element={
            <WhiteLinkLayout>
              <FindCountryPage />
            </WhiteLinkLayout>}
        />

        {/* ❌ 404 Page */}
        <Route
          path="*"
          element={
            <div style={{ padding: "2rem", textAlign: "center" }}>
              <h2>Page Not Found</h2>
              <Link to="/" style={{ color: "#1d4ed8", textDecoration: "none" }}>
                Go back home
              </Link>
            </div>
          }
        />
      </Routes>
    </HashRouter>
  );
}
