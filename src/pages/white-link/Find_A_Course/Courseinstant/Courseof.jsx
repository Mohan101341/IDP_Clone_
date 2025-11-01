import React from "react";
import "./Courseof.css";
import { Link } from "react-router-dom";
export default function Courseof() {
    return (
        <div>
         <div className="Courseof-container">
            <p className="h">IDP Education/Find a University</p> 
            <h1 className="Courseof-t">
            Given below are the list of Universities and Colleges with Offers</h1>
            <button className="Courseof-button">Filter Universiy</button>
            <button className="Courseof-b1">→ Sort by:Popularity</button>
         </div> 
         <div> 
            <div className="Courseof-boxes">

        <div className="Courseof-box1">
            <div className="Courseof-card-header">
                <div className="Courseof-heart-icon">♡</div>
            </div>
            <div className="Courseof-university-logo">
                <div className="Courseof-logo-m">Bond University</div>
            </div>
            <p className="Courseof-university-name">Australia</p>
            
            <div className="Courseof-program-details">
                <div className="Courseof-detail-item">
                    <Link to="/pages/FindC" className="Courseof-detail">View All Courses</Link>
                </div>
                <div className="Courseof-detail-item">
                    <span className="Courseof-detail-icon">🎓</span>
                    <span>THE World Ranking: 401</span>
                </div>
                <div className="Courseof-detail-item">
                    <span className="Courseof-detail-icon">👤</span>
                    <span>International students: 2304</span>
                </div>
                <div className="Courseof-detail-item">
                    <span className="Courseof-detail-icon">✓</span>
                    <span>English Courses available</span>
                </div>
            </div>
            
            <div className="Courseof-action-buttons">
                <button className="Courseof-btn">View details</button>
            </div>
        </div>
            <div className="Courseof-box1">
                <div className="Courseof-card-header">
                <div className="Courseof-heart-icon">♡</div>
                </div>
                <div className="Courseof-university-logo">
                <div className="Courseof-logo-m">Camosun College</div>
                </div>
                <p className="Courseof-university-name">Canada</p>
                
                <div className="Courseof-program-details">
                <div className="Courseof-detail-item">
                    <Link to="/pages/FindC" className="Courseof-detail">View All Courses</Link>
                </div>
                <div className="Courseof-detail-item">
                    <span className="Courseof-detail-icon">👤</span>
                    <span>International students: 2222</span>
                </div>
                <div className="Courseof-detail-item">
                    <span className="Courseof-detail-icon">✓</span>
                    <span>English Courses available</span>
                </div>
                </div>
                
                <div className="Courseof-action-buttons">
                <button className="Courseof-btn">View details</button>
                </div>
            </div>

        <div className="Courseof-box1">
            <div className="Courseof-card-header">
                <div className="Courseof-heart-icon">♡</div>
            </div>
            <div className="Courseof-university-logo">
                <div className="Courseof-logo-m">Acadia University</div>
            </div>
            <p className="Courseof-university-name">Canada</p>
            
            <div className="Courseof-program-details">
                <div className="Courseof-detail-item">
                    <Link to="/pages/FindC" className="Courseof-detail">View All Courses</Link>
                </div>
                <div className="Courseof-detail-item">
                    <span className="Courseof-detail-icon">👤</span>
                    <span>International students: 600</span>
                </div>
                <div className="Courseof-detail-item">
                    <span className="Courseof-detail-icon">✓</span>
                    <span>English Courses available</span>
                </div>
            </div>
            
            <div className="Courseof-action-buttons">
                <button className="Courseof-btn">View details</button>
            </div>
        </div>

        </div>

        <div className="Courseof-boxes">

        <div className="Courseof-box1">
            <div className="Courseof-card-header">
                <div className="Courseof-heart-icon">♡</div>
            </div>
            <div className="Courseof-university-logo">
                <div className="Courseof-logo-m">University of Canberra</div>
            </div>
            <p className="Courseof-university-name">Australia</p>
            <div className="Courseof-detail-item">
                    <span className="Courseof-detail-icon">🎓</span>
                    <span>THE World Ranking: 403</span>
                </div>
            <div className="Courseof-program-details">
                <div className="Courseof-detail-item">
                    <Link to="/pages/FindC" className="Courseof-detail">View All Courses</Link>
                </div>
                <div className="Courseof-detail-item">
                    <span className="Courseof-detail-icon">👤</span>
                    <span>International students: 3811</span>
                </div>
                <div className="Courseof-detail-item">
                    <span className="Courseof-detail-icon">✓</span>
                    <span>English Courses available</span>
                </div>
            </div>
            
            <div className="Courseof-action-buttons">
                <button className="Courseof-btn">View details</button>
            </div>
        </div>

        <div className="Courseof-box1">
            <div className="Courseof-card-header">
                <div className="Courseof-heart-icon">♡</div>
            </div>
            <div className="Courseof-university-logo">
                <div className="Courseof-logo-m">Confederation College of Applied Arts and Technology</div>
            </div>
            <p className="Courseof-university-name">Canada</p>
            
            <div className="Courseof-program-details">
                <div className="Courseof-detail-item">
                    <Link to="/pages/FindC" className="Courseof-detail">View All Courses</Link>
                </div>
                <div className="Courseof-detail-item">
                    <span className="Courseof-detail-icon">👤</span>
                    <span>International students: 1748</span>
                </div>
                <div className="Courseof-detail-item">
                    <span className="Courseof-detail-icon">✓</span>
                    <span>English Courses available</span>
                </div>
            </div>
            
            <div className="Courseof-action-buttons">
                <button className="Courseof-btn">View details</button>
            </div>
        </div>

        <div className="Courseof-box1">
            <div className="Courseof-card-header">
                <div className="Courseof-heart-icon">♡</div>
            </div>
            <div className="Courseof-university-logo">
                <div className="Courseof-logo-m">La Trobe University</div>
            </div>
            <p className="Courseof-university-name">Australia</p>
            
            <div className="Courseof-program-details">
                <div className="Courseof-detail-item">
                    <Link to="/pages/FindC" className="Courseof-detail">View All Courses</Link>
                </div>
                <div className="Courseof-detail-item">
                    <span className="Courseof-detail-icon">🎓</span>
                    <span>THE World Ranking: 251</span>
                </div>
                <div className="Courseof-detail-item">
                    <span className="Courseof-detail-icon">👤</span>
                    <span>International students: 7728</span>
                </div>
                <div className="Courseof-detail-item">
                    <span className="Courseof-detail-icon">✓</span>
                    <span>English Courses available</span>
                </div>
            </div>
            
            <div className="Courseof-action-buttons">
                <button className="Courseof-btn">View details</button>
            </div>
        </div>

        </div>

        </div>
         
         
    </div>
    );
}