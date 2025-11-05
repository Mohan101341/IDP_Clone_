import React from "react";
import { HashRouter, Routes, Route, Link } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero.jsx/Hero";
import Contact from "./Components/Contact/Contact";
import Services from "./Components/services/Services";
import Destinations from "./Components/Destination/Destinations";
import English from "./pages/black-link/English";
import Events from "./pages/black-link/Events";
import Find from "./pages/black-link/Find";
import Fastlane from "./Components/Fastlane/Fastlane";
import IDP from "./Components/IdpStudents/IDP";
import Essentials from "./Components/Essentials/Essentials";
import Aboutidp from "./Components/IDP-P/Aboutidp";
import StudySteps from "./Components/StudySteps/StudySteps";
import Testimonials from "./Components/Testimonials/Testimonials";
import ComingSoon from "./pages/ComingSoon/ComingSoon";
import StudyAb from "./pages/white-link/Study_Abroad/WhyStudyAbrd/StudyAb";
import StudyDs from "./pages/white-link/StudyDestinations/StudyDs";

import Student from "./pages/white-link/Student_Essentials/Student.jsx";
import Avail from "./pages/white-link/Avail_Free/Avail.jsx";
import SignIN from "./pages/white-link/Sign_In/SignIN.jsx";
import Import from "./Components/Implinks/Import";
import BlueNav from "./Components/bLUE-nav/BlueNav";
import NewAndA from "./pages/black-link/NewAndA";
import CourseA from "./pages/white-link/Find_A_Course/CourseAdvice/CourseAdvice";
import FindC from "./pages/white-link/Find_A_Course/CourseAdvice/Findcourses/FindC";
import Courseof from "./pages/white-link/Find_A_Course/Courseinstant/Courseof";
import Sabroad from "./pages/white-link/Find_A_Course/Study_Abroad/Sabroad";
import Scholar from "./pages/white-link/Find_A_Course/FindScholar/Scholar";

import Oneac from "./Components/On_signin_banner/Oneac";
import Uranking from "./pages/white-link/Find_A_Course/University_Ranking/Uranking";
import Qsworld from "./pages/white-link/Find_A_Course/University_Ranking/Qs_World/Qsworld";
import Cug from "./pages/white-link/Find_A_Course/C_U_G/Cug";
import Book from "./pages/white-link/IELTS/Book_IELTS/Book";
import What from "./pages/white-link/IELTS/What_is_IELTS/What";
import Prep from "./pages/white-link/IELTS/IELTS_prep/Prep";



import StudyAbNavbar from "./pages/white-link/Study_Abroad/WhyStudyAbrd/StudyAbNavbar";
import StdyAbVid from "./pages/white-link/Study_Abroad/WhyStudyAbrd/StdyAbVid";
import StdyAbcnt from "./pages/white-link/Study_Abroad/WhyStudyAbrd/StdyAbcnt";
import WhereStdhero from "./pages/white-link/Study_Abroad/Where_to_study_abroad/WhereStdhero";
import WhereStdyVid from "./pages/white-link/Study_Abroad/Where_to_study_abroad/WhereStdyvid";
import WhereStdyAbcnt from "./pages/white-link/Study_Abroad/Where_to_study_abroad/WhereStdycnt";
import HowtoApplyhero from "./pages/white-link/Study_Abroad/how_do_i_apply/HowtoApplyhero";
import HowDoApplyVid from "./pages/white-link/Study_Abroad/how_do_i_apply/howdoaplyvid";
import Howdoapplycnt from "./pages/white-link/Study_Abroad/how_do_i_apply/Howdoapplycnt";
import AfterOfferhero from "./pages/white-link/Study_Abroad/AfterOffe/AfterOfferhero";
import AfterOfferVid from "./pages/white-link/Study_Abroad/AfterOffe/AfterOffervid";

import Preparetodeparthero from "./pages/white-link/Study_Abroad/Prepare_to_depart/Preparetodeparthero";
import Preparetodepartvid from "./pages/white-link/Study_Abroad/Prepare_to_depart/Preparetodepartvid";

import Arriveandthrivehero from "./pages/white-link/Study_Abroad/Arrive_and_thrive/Arriveandthrivehero";
import Arriveandthrivevid from "./pages/white-link/Study_Abroad/Arrive_and_thrive/Arriveandthrivevid";
import StdAbhlp from "./pages/white-link/Study_Abroad/WhyStudyAbrd/StdAbhlp";
import FrequentlyAskedQuestions from "./pages/white-link/Study_Abroad/FrequentlyAskedQuestions/FrequentlyAskedQuestions";
import StdyabroadOptions from "./pages/white-link/Study_Abroad/Where_to_study_abroad/StdyabroadOptions";
import HowToApplyHelp from "./pages/white-link/Study_Abroad/how_do_i_apply/HowToApplyHelp";
import HowToApplyFAQ from "./pages/white-link/Study_Abroad/how_do_i_apply/HowToApplyFAQ";
import AfterOfferHelp from "./pages/white-link/Study_Abroad/AfterOffe/AfterOfferHelp";
import AfterOfferFAQ from "./pages/white-link/Study_Abroad/AfterOffe/AfterOfferFAQ";
import Preparetohlp from "./pages/white-link/Study_Abroad/Prepare_to_depart/Preparetohlp";
import PrepareFAQ from "./pages/white-link/Study_Abroad/Prepare_to_depart/PrepareFAQ";
import Arrivethrivehlp from "./pages/white-link/Study_Abroad/Arrive_and_thrive/Arrivethrivehlp";
import ArrivethriveFAQ from "./pages/white-link/Study_Abroad/Arrive_and_thrive/ArrivethriveFAQ";
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
import StdyUsacnt from "./pages/white-link/StudyDestinations/StudyInUsa/StdyUsacnt.jsx";
import SignupForm from "./pages/white-link/Sign_In/SignupForm";
import What_is_stdnghero from "./pages/white-link/Study_Abroad/WhyStudyAbrd/What_is_studying/What_is_stdnghero.jsx";
import What_isstdngcnt from "./pages/white-link/Study_Abroad/WhyStudyAbrd/What_is_studying/What_isstdngcnt.jsx";
import Reasons_for_stdy from "./pages/white-link/Study_Abroad/WhyStudyAbrd/Reasons_for_stdy_abrd/Reasons_for_stdy.jsx";
import Benefits from "./pages/white-link/Study_Abroad/WhyStudyAbrd/Benefits/Benefits.jsx";
// Layout wrapper for white-link pages
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
        {/* Home Page */}
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

        {/* Study Detail Page */}
        <Route
          path="/study/:slug"
          element={
            <>
              <Navbar />
              <ComingSoon />
              <Footer />
            </>
          }
        />
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
          path="/pages/FindU"
          element={
            <>
              <Navbar />
              
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
        {/* Black-link Pages */}
        <Route
          path="/pages/Events"
          element={
            <>
              <Navbar />
              <BlueNav />
              <Events/>
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
          path="/pages/Find"
          element={
            <>
              <Navbar />
              <BlueNav />
              <Find />
              <Footer />
            </>
          }
        />
        
        {/* White-link Pages (use layout) */}
        <Route path="/pages/white-link/StudyAb" element={
          <>
            <Navbar />
            <StudyAbNavbar />
            <StudyAb />
            <StdyAbVid/>
            <StdyAbcnt />
            <StdAbhlp />
            <Askidp/>
            <FrequentlyAskedQuestions />
            <NewAndA />
            <Contact />
            <Footer />
          </>
        } />


        
        <Route
          path="/pages/white-link/where-to-study-abroad"
          element={
            <>
              <Navbar />
              <StudyAbNavbar />
              <WhereStdhero />
              <WhereStdyVid/>
              <WhereStdyAbcnt/>
              <StdyabroadOptions />
                <Askidp/>
              <NewAndA />
              <Contact />
              <Footer />
            </>
          }
        />

        <Route
          path="/pages/white-link/how-to-apply"
          element={
            <>
              <Navbar />
              <StudyAbNavbar />
              <HowtoApplyhero />
              <HowDoApplyVid />
              <Howdoapplycnt />
              <HowToApplyHelp/>
                <Askidp/>
              <HowToApplyFAQ/>
              <NewAndA />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route
          path="/pages/white-link/after-offer"
          element={
            <>
              <Navbar />
              <StudyAbNavbar />
              <AfterOfferhero />
              <AfterOfferVid />
              <AfterOfferHelp />
                <Askidp/>
              <AfterOfferFAQ/>
              <NewAndA />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route
          path="/pages/white-link/prepare-to-depart"
          element={
            <>
              <Navbar />
              <StudyAbNavbar />
              <Preparetodeparthero />
              <Preparetodepartvid />
              <Preparetohlp/>
                <Askidp/>
              <PrepareFAQ/>
              <NewAndA />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route
          path="/pages/white-link/arrive-and-thrive"
          element={
            <>
              <Navbar />
              <StudyAbNavbar />
              <Arriveandthrivehero />
              <Arriveandthrivevid />
              <Arrivethrivehlp/>
                <Askidp/>
              <ArrivethriveFAQ />
              <NewAndA />
              <Contact />
              <Footer />
            </>
          }
        />
        


        <Route path="/pages/white-link/StudyDs" element={
          <>
            <Navbar />
            <StudyDs />
            <ExploreAbroadPrgms />
            <Studydestcnt />
            <Askidp/>
            <Contact />
            <Footer />
            
            </>
          } />
        <Route path="/pages/white-link/StudyDestinations/StudyInAustralia" element={
          <>
            <Navbar />
            <StdyAushero />
            <StdyAustcnt />
            <Contact />
            <Footer />
          </>
        } />
        
        <Route path="/pages/white-link/StudyDestinations/StudyInCanada" element={
          <>
            <Navbar />
            <Stdycanhero />
            <Stdycancnt />
            <Contact />
            <Footer />
          </>
        } />
      

         <Route path="/pages/white-link/StudyDestinations/StudyInIreland" element={
          <>
            <Navbar />
           <StdyIrlndhero />
            <StdyIrlndcnt />
            <Contact />
            <Footer />
          </>
        } />

        
         <Route path="/pages/white-link/StudyDestinations/StudyInUk" element={
          <>
            <Navbar />
           <StdyUkhero />
           <Stdyinukcnt/>
            <Contact />
            <Footer />
          </>
        } />

        <Route path="/pages/white-link/StudyDestinations/StudyInUsa" element={
          <>
            <Navbar />
          <StdyUsahero />
           <StdyUsacnt/>
            <Contact />
            <Footer />
          </>
        } />

         
      <Route
         path="/contact"
         element={
         <WhiteLinkLayout>
         <Contact />
       </WhiteLinkLayout>
      }
      />

      <Route
         path="/pages/white-link/Study_Abroad/WhyStudyAbrd/What_is_studying"
         element={
         <WhiteLinkLayout>
         <What_is_stdnghero />
         <What_isstdngcnt />
         <Contact />
       </WhiteLinkLayout>
      }
      />
      <Route
         path="/pages/white-link/Study_Abroad/WhyStudyAbrd/Reasons_for_stdy_abrd"
         element={
          <WhiteLinkLayout>
            <Reasons_for_stdy />
            <Contact />
       </WhiteLinkLayout>
      }
      />

      <Route
         path="/pages/white-link/Study_Abroad/WhyStudyAbrd/Benefits"
         element={
          <WhiteLinkLayout>
          <Benefits />
          <Contact />
       </WhiteLinkLayout>
      }
      />

      <Route
         path="/pages/white-link/SignUp"
         element={
          <>
          <signupForm />
          <Footer />
          </>
      
      }
      />
      
        


        <Route path="/pages/white-link/Find1" element={<WhiteLinkLayout></WhiteLinkLayout>} />
        <Route path="/pages/white-link/IELTS" element={<WhiteLinkLayout><ComingSoon /></WhiteLinkLayout>} />

        <Route path="/pages/white-link/Student" element={<WhiteLinkLayout><Student /></WhiteLinkLayout>} />
        <Route path="/pages/white-link/Avail" element={<WhiteLinkLayout><Avail /></WhiteLinkLayout>} />
        <Route path="/pages/white-link/SignIN" element={<WhiteLinkLayout><SignIN /></WhiteLinkLayout>} />
        <Route path="/signup" element={<WhiteLinkLayout><SignupForm /></WhiteLinkLayout>} />

        {/* 404 Page */}
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