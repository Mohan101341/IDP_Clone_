import React from "react";
import "./EnglishT.css";
import { Link } from "react-router-dom";
export default function EnglishT(){
    return(
        <div>
        <div className="MK">
        <p className="si" >IDP india/ENGLISH Tests....</p>
        <p1 className="he">English Tests...</p1>
        <p className="me">These global English proficiency tests evaluate reading, writing, speaking, and listening skills, helping you qualify for study or work abroad. They are key for meeting international language requirements.
</p>
       </div>
        <div className="bd">
        <p className="ee">Dreaming of studying or working abroad?....<br/> Before you pack your bags, you’ll need to prove your English communication skills. International language tests help universities and employers understand your ability to succeed in English-speaking countries.</p>
        <p1 className="to"><span className="ul">T</span>OEFL (Test of English as a Foreign Language):</p1>
        <ul className="Li">
            <li>TOEFL is an internationally recognized test that measures English proficiency for non-native speakers.</li>
            <li>It is mainly required for studying, working, or migrating to English-speaking countries.</li>
            <li>The test focuses on using and understanding English in academic and real-life contexts.</li>
            <li>It evaluates four main skills: Reading, Listening, Speaking, and Writing.</li>
            <li>The Reading section tests comprehension of academic passages.</li>
            <li>The Listening section checks understanding of lectures and conversations.</li>
            <li>The Speaking section measures how clearly and effectively you express ideas.</li>
            <li>The Writing section assesses your ability to write organized, well-structured essays.</li>
            <li>TOEFL is accepted by over 11,000 universities and institutions in more than 150 countries.</li>
            <li>It is offered in internet-based (iBT) and paper-based formats, with scores valid for two years.</li>
            <li>Overall, TOEFL proves your ability to communicate and succeed in an English-speaking academic environment.</li>
        </ul>
       <Link to="/pages/Toefl"> <button className="bu">Click for More</button></Link>
       <p className="to"><span className="ul">D</span>uolingo English Test (DET):</p>
        <ul className="Li">
            <li>The Duolingo English Test is a modern, convenient, and affordable online English proficiency exam.</li>
            <li>It is designed for students and professionals applying to universities or jobs abroad.</li>
            <li>Unlike traditional tests, it can be taken anytime and anywhere with a computer, webcam, and internet connection.</li>
            <li>The test evaluates Reading, Writing, Listening, and Speaking skills using adaptive technology that adjusts question difficulty based on your responses.</li>
            <li>It typically takes less than 1 hour to complete.</li>
            <li>Results are available within 48 hours, making it one of the fastest English tests.</li>
            <li>The score ranges from 10 to 160, representing overall language proficiency.</li>
            <li>It also includes a short video interview and writing sample for institutions to review communication skills.</li>
            <li>Accepted by over 5,000 universities worldwide, including top institutions in the USA, Canada, and the UK.</li>
            <li>It is offered in internet-based (iBT) and paper-based formats, with scores valid for two years.</li>
            <li>Duolingo offers a user-friendly and cost-effective alternative to other major English tests, suitable for quick and flexible evaluation.</li>
        </ul>
       <Link to="/pages/Duolingo"><button className="bu">Click for More</button></Link> 
       
       <p className="to"><span className="ul">I</span>ELTS (International English Language Testing System):</p>
        <ul className="Li">
            <li>IELTS is one of the world’s most popular English proficiency tests for study, work, and migration purposes.</li>
            <li>It measures your ability to communicate effectively in English through Listening, Reading, Writing, and Speaking modules.</li>
            <li>The test is jointly managed by the British Council, IDP: IELTS Australia, and Cambridge Assessment English.</li>
            <li>There are two types of IELTS: Academic (for higher education) and General Training (for work or immigration).</li>
            <li>The Listening and Speaking sections are the same for both versions, while Reading and Writing differ slightly.</li>
            <li>The Speaking test is conducted face-to-face with an examiner to assess real communication skills.</li>
            <li>Scores are given on a band scale from 1 to 9, with 9 being expert level.</li>
            <li>IELTS is accepted by over 11,000 organizations worldwide, including universities, employers, and immigration authorities.</li>
            <li>It is available in both computer-based and paper-based formats for flexibility.</li>
            <li>Overall, IELTS evaluates your English in practical, everyday contexts, proving your readiness for life in English-speaking countries.</li>
        </ul>
       <Link to="/pages/IELTSPage"> <button className="bu">Click for More</button></Link>
       
        </div>
        <div className="ml">Each of these tests — TOEFL, IELTS, and Duolingo — serves as a bridge connecting you to opportunities across the world. Choosing the right test depends on your goals, preferred country, and convenience. Regardless of the test you take, a strong English score highlights your readiness to excel in global education and career environments.</div>



        </div>
    );
}
