import React from "react";
import './What.css';

export default function What() {
    return(
        <div>
        <div className="what-container">
        <p className="wp">IDP india/What is IELTS?</p>
        <h1 className="wh">What is IELTS?</h1>
        <p className="wr">The world’s leading test of English for international higher education and migration.</p>
        <button className="wb">Book an IELTS Test</button>
        </div>
        <div className="mm">
        <div className="matter">
            <p>
                The International English Language Testing System (IELTS) is the world's most popular high-stakes English language proficiency test.
            </p>
            <p>
                IELTS is applicable for study, work and migration, with more than 3.5 million tests taken in the past year.
            </p>
            <p>
                IELTS results are recognised by more than 12,000 organisations, including educational institutions, employers, professional associations and governments, in 150 countries around the world and test centres available in 140 countries.
            </p>
            <p>
                IELTS test content is developed by an international team of experts and undergoes extensive research to ensure the test remains fair and unbiased.
            </p>
            <p>
                This promises every candidate a fair chance, regardless of factors like nationality, background, gender, lifestyle or location. You can take IELTS Academic or IELTS General Training, depending on the organisation you are applying to and your plans for the future.
            </p>
        </div>
        </div>
    <div>
        <h1 className="h2"><span className="ul">L</span>earn more</h1>
        <div className="box-container">
        <p className="box">Why take IELTS with IDP?</p>
        <p className="box">How to Prepare for IELTS</p>
        <p className="box">Book an IELTS test</p>
        </div>
        <h1 className="h2"><span className="ul">R</span>elated articles</h1>
        <div className="cards-grid">
          <div className="card">
            <h3 className="card-title">IELTS vs other English language proficiency tests</h3>
            <p className="card-desc">Planning to take your English proficiency test? There are a number of factors you need to consider. Let’s look into them in detail.</p>
          </div>
          <div className="card">
            <h3 className="card-title">Minimum IELTS score requirements for UK universities</h3>
            <p className="card-desc">Minimum IELTS band score requirements for the UK. Check the required IELTS score for UK universities, courses, and student visa.</p>
          </div>
        </div>
    </div>

        </div>
    );
}