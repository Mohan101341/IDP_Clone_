
import React from "react";
import "./Aboutidp.css";

const Aboutidp = () => {
    return (
        <section className="aboutidp-section" aria-labelledby="aboutidp-heading">
            <div className="aboutidp-container">
                {/* Section Header */}
                <header className="aboutidp-header">
                    <h1 id="aboutidp-heading">
                        <span className="aboutidp-color">I</span>DP – Your study abroad partner every step of the way
                    </h1>
                    <p className="aboutidp-lead">
                        Finding the right university, securing funding, and navigating visa
                        requirements can feel like a lot to handle — but what if you had an
                        IDP study abroad consultant to take care of it with you? That’s where
                        IDP steps in. With 55+ years of experience, we’ve helped 113,000+
                        students in 2023 alone get into top universities across the world.
                        From choosing the right universities and courses to securing funding,
                        getting your visa, and settling in — we handle everything, so you can
                        focus on your future. With IDP, you don’t have to worry about a thing.
                        Let’s make your study abroad journey smooth, stress-free, and
                        successful.
                    </p>
                </header>

                {/* Content Grid */}
                <div className="aboutidp-grid">
                    <article className="aboutidp-card">
                        <h4>Why Students Trust IDP</h4>
                        <ul className="aboutidp-list">
                            <li><strong>Highest Visa Success Rate:</strong> Our deep expertise in student visas improves your chances of approval.</li>
                            <li><strong>Free Services:</strong> We provide all our services at no cost to you.</li>
                            <li><strong>Global Presence:</strong> With 200+ offices in 30+ countries, we’re always nearby.</li>
                            <li><strong>University Partnerships:</strong> We have strong relationships with 800+ top universities worldwide.</li>
                            <li><strong>Personalized Support:</strong> One-on-one guidance tailored to your needs.</li>
                            <li><strong>Experienced Counsellors:</strong> Our experts have helped 600,000+ students globally.</li>
                        </ul>
                    </article>

                    <article className="aboutidp-card">
                        <h4>IDP’s Services – We Handle It All</h4>
                        <ul>
                            <li><strong>Application Support:</strong> Complete guidance through the entire process.</li>
                            <li><strong>Document Preparation:</strong> Help with gathering and organizing documents.</li>
                            <li><strong>Interview Coaching:</strong> Mock interviews and preparation tips.</li>
                            <li><strong>Visa Guidance:</strong> Visa information and application assistance.</li>
                            <li><strong>Pre-departure Briefings:</strong> Preparation for life abroad.</li>
                            <li><strong>Post-arrival Support:</strong> Assistance to settle into your new environment.</li>
                            <li><strong>Language Training:</strong> IELTS and language course support.</li>
                        </ul>
                    </article>

                    <article className="aboutidp-card">
                        <h4>Study in Australia – High Salaries & Great Work Opportunities</h4>
                        <p>Australia is home to 9 of the world’s top 100 universities. 88% of international graduates land jobs within four months of finishing their degree. Average graduate salary: AUD 65,000.</p>
                    </article>

                    <article className="aboutidp-card">
                        <h4>Visa Assistance</h4>
                        <p>Our visa team ensures all your documents are complete and ready.</p>
                    </article>

                    <article className="aboutidp-card">
                        <h4>Study in Canada – A Global Hub for International Students</h4>
                        <p>Canada offers a great chance to become a permanent resident after graduation. PGWP allows work up to 3 years; average graduate salary is CAD 50,000.</p>
                    </article>

                    <article className="aboutidp-card">
                        <h4>Study in UK – A World-Class Education & Strong Job Market</h4>
                        <p>The UK hosts prestigious universities with strong job markets and high graduate demand. IDP supports you every step of the way.</p>
                    </article>

                    <article className="aboutidp-card">
                        <h4>Study in USA – Top Universities & Career Growth</h4>
                        <p>With 4000+ institutions, the US offers high employability through OPT (up to 3 years for STEM). Average salary: USD 100,000.</p>
                    </article>

                    <article className="aboutidp-card">
                        <h4>Study in Ireland – Europe’s Business & Tech Hub</h4>
                        <p>Ireland hosts tech giants like Google & Facebook. The Third Level Graduate Programme allows work for up to 2 years. Avg salary: €35,000.</p>
                    </article>

                    <article className="aboutidp-card">
                        <h4>Career Counselling</h4>
                        <p>Plan your future career path with personalized counselling.</p>
                    </article>

                    <article className="aboutidp-card">
                        <h4>Frequently Asked Questions</h4>
                        <p><strong>1.</strong> IDP provides all its services free of charge.</p>
                        <p><strong>2.</strong> We assist with the UK, USA, Canada, Australia, and New Zealand.</p>
                        <p><strong>3.</strong> 600,000+ students guided globally by experienced counsellors.</p>
                        <p><strong>4.</strong> We have one of the highest visa success rates in the industry.</p>
                        <p><strong>5.</strong> Pre-departure and post-arrival support included.</p>
                    </article>
                </div>
            </div>
        </section>
    );
};

export default Aboutidp;
