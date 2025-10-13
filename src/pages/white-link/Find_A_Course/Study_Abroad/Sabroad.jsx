import React from "react";
import "./Sabroad.css";
import { Link } from "react-router-dom";
export default function Sabroad() {
    return (
        <div>
            <div className="Sabroad-container"> 
                <p className="Sabroad-description">IDP Education/Study Abroad Subjects</p>
                <h1 className="Sabroad-title">Explore subjects</h1>
                <h3 className="Sabroad-p">
                    With so many courses and universities to choose from, deciding where and what to study abroad can be a daunting task. Don't worry, we are here to guide you during the entire process.
                </h3>
            </div>
            <div className="Sabroad-card-container">
                <h1><span className="Sabroad-l">B</span>rowse Subjects</h1>
                <div className="search-bar-container">
                    <input
                        type="text"
                        placeholder="Search subjects by Keywords"
                        className="search-input"
                    />
                    <span className="FindC-search-icon">🔍</span>
                </div>
            </div>
            <div className="Sabroad-in">
                <h1 className="side">Want to find a suitable course?</h1>
                <p>
                    Sign in to get personalised content for you or get in touch with one of our counsellors for free consultation.
                </p>
                <Link to="/pages/FindC" className="Sabroad-bt">
                    <button>Find a course</button>
                </Link> 
            </div>            
			<div className="Sabroad-mat">
				<h1 className="Sabroad-mat-title">A</h1>
				<div className="subject-list">
					<div className="subject-row"><span className="subject-text">Agriculture Sciences</span><span className="subject-plus">+</span></div>
					<div className="subject-row"><span className="subject-text">Agriculture, Environmental & Rel Studies</span><span className="subject-plus">+</span></div>
					<div className="subject-row"><span className="subject-text">All Accounting</span><span className="subject-plus">+</span></div>
					<div className="subject-row"><span className="subject-text">All Pharmacy</span><span className="subject-plus">+</span></div>
					<div className="subject-row"><span className="subject-text">Architecture and Planning</span><span className="subject-plus">+</span></div>
					<div className="subject-row"><span className="subject-text">Art and Design</span><span className="subject-plus">+</span></div>
					<div className="subject-row"><span className="subject-text">Arts, Humanities And Social Science</span><span className="subject-plus">+</span></div>
				</div>
				<h1 className="Sabroad-mat-title">B</h1>
				<div className="subject-list">
					<div className="subject-row"><span className="subject-text">Biological and Biomedical Sciences</span><span className="subject-plus">+</span></div>
					<div className="subject-row"><span className="subject-text">Biological and life Sciences</span><span className="subject-plus">+</span></div>
					<div className="subject-row"><span className="subject-text">Building and Architecture</span><span className="subject-plus">+</span></div>
					<div className="subject-row"><span className="subject-text">Business</span><span className="subject-plus">+</span></div>
					<div className="subject-row"><span className="subject-text">Business, Commerce And Management</span><span className="subject-plus">+</span></div>
				</div>
				<h1 className="Sabroad-mat-title">C</h1>
				<div className="subject-list">
					<div className="subject-row"><span className="subject-text">Communication and Journalism</span><span className="subject-plus">+</span></div>
					<div className="subject-row"><span className="subject-text">Computer and Information Sciences</span><span className="subject-plus">+</span></div>
					<div className="subject-row"><span className="subject-text">Computing and IT</span><span className="subject-plus">+</span></div>
				</div>
				<h1 className="Sabroad-mat-title">E</h1>
				<div className="subject-list">
					<div className="subject-row"><span className="subject-text">Economics</span><span className="subject-plus">+</span></div>
					<div className="subject-row"><span className="subject-text">Education</span><span className="subject-plus">+</span></div>
					<div className="subject-row"><span className="subject-text">Engineering</span><span className="subject-plus">+</span></div>
					<div className="subject-row"><span className="subject-text">English Language and Literature</span><span className="subject-plus">+</span></div>
					<div className="subject-row"><span className="subject-text">English Language Studies</span><span className="subject-plus">+</span></div>
					<div className="subject-row"><span className="subject-text">Environmental Science</span><span className="subject-plus">+</span></div>
				</div>
				<h1 className="Sabroad-mat-title">F</h1>
				<div className="subject-list">
					<div className="subject-row"><span className="subject-text">Family and Consumer Sciences</span><span className="subject-plus">+</span></div>
					<div className="subject-row"><span className="subject-text">Food, Hospitality And Personal Services</span><span className="subject-plus">+</span></div>
				</div>
				<h1 className="Sabroad-mat-title">G</h1>
				<div className="subject-list">
					<div className="subject-row"><span className="subject-text">General Primary And Secondary Education</span><span className="subject-plus">+</span></div>
				</div>
				<h1 className="Sabroad-mat-title">H</h1>
				<div className="subject-list">
					<div className="subject-row"><span className="subject-text">Health and Medical Sciences</span><span className="subject-plus">+</span></div>
					<div className="subject-row"><span className="subject-text">Health Professions & Clinical Sciences</span><span className="subject-plus">+</span></div>
					<div className="subject-row"><span className="subject-text">Health, Medicine And Veterinary Studies</span><span className="subject-plus">+</span></div>
					<div className="subject-row"><span className="subject-text">History</span><span className="subject-plus">+</span></div>
					<div className="subject-row"><span className="subject-text">Hospitality, Leisure, Sport And Tourism</span><span className="subject-plus">+</span></div>
				</div>
				<h1 className="Sabroad-mat-title">L</h1>
				<div className="subject-list">
					<div className="subject-row"><span className="subject-text">Language and Culture</span><span className="subject-plus">+</span></div>
					<div className="subject-row"><span className="subject-text">Law and Legal Studies</span><span className="subject-plus">+</span></div>
				</div>
				<h1 className="Sabroad-mat-title">M</h1>
				<div className="subject-list">
					<div className="subject-row"><span className="subject-text">Marketing, Media and Communication</span><span className="subject-plus">+</span></div>
				</div>
				<h1 className="Sabroad-mat-title">N</h1>
				<div className="subject-list">
					<div className="subject-row"><span className="subject-text">Natural and Physical Sciences</span><span className="subject-plus">+</span></div>
					<div className="subject-row"><span className="subject-text">Natural Resources and Conservation</span><span className="subject-plus">+</span></div>
				</div>
				<h1 className="Sabroad-mat-title">P</h1>
				<div className="subject-list">
					<div className="subject-row"><span className="subject-text">Personal and Culinary Services</span><span className="subject-plus">+</span></div>
					<div className="subject-row"><span className="subject-text">Philosophy and Religious Studies</span><span className="subject-plus">+</span></div>
					<div className="subject-row"><span className="subject-text">Physical Sciences</span><span className="subject-plus">+</span></div>
					<div className="subject-row"><span className="subject-text">Psychology</span><span className="subject-plus">+</span></div>
					<div className="subject-row"><span className="subject-text">Political and Social Sciences</span><span className="subject-plus">+</span></div>
				</div>
				<h1 className="Sabroad-mat-title">S</h1>
				<div className="subject-list">
					<div className="subject-row"><span className="subject-text">Social Sciences</span><span className="subject-plus">+</span></div>
				</div>
				<h1 className="Sabroad-mat-title">T</h1>
				<div className="subject-list">
					<div className="subject-row"><span className="subject-text">Teaching and Education</span><span className="subject-plus">+</span></div>
				</div>
			</div>
        </div>
    );
}
