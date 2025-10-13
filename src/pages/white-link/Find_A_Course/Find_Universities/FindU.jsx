import React from "react";
import "./FindU.css";
import { Link } from "react-router-dom";
export default function FindU() {
    return (
        <div>
         <div className="FindU-container">      
            <p className="Find-h">IDP Education/Find a University</p>
        <h1 className="FindU-t">
            These are the total Universities and Colleges</h1>
            <button className="FindU-button">Filter Universiy</button>
            <button className="FindU-b1">→ Sort by:Popularity</button>
         </div> 
         <div> 
            <div className="FindU-boxes">

        <div className="FindU-box1">
            <div className="FindU-card-header">
                <div className="FindU-heart-icon">♡</div>
            </div>
            <div className="FindU-university-logo">
                <div className="FindU-logo-m">Bond University</div>
            </div>
            <p className="FindU-university-name">Australia</p>
            
            <div className="FindU-program-details">
                <div className="FindU-detail-item">
                    <Link to="/pages/FindC" className="FindU-detail">View All Courses</Link>
                </div>
                <div className="FindU-detail-item">
                    <span className="FindU-detail-icon">🎓</span>
                    <span>THE World Ranking: 401</span>
                </div>
                <div className="FindU-detail-item">
                    <span className="FindU-detail-icon">👤</span>
                    <span>International students: 2304</span>
                </div>
                <div className="FindU-detail-item">
                    <span className="FindU-detail-icon">✓</span>
                    <span>English Courses available</span>
                </div>
            </div>
            
            <div className="FindU-action-buttons">
                <button className="FindU-btn">View details</button>
            </div>
        </div>
            <div className="FindU-box1">
                <div className="FindU-card-header">
                <div className="FindU-heart-icon">♡</div>
                </div>
                <div className="FindU-university-logo">
                <div className="FindU-logo-m">Camosun College</div>
                </div>
                <p className="FindU-university-name">Canada</p>
                
                <div className="FindU-program-details">
                <div className="FindU-detail-item">
                    <Link to="/pages/FindC" className="FindU-detail">View All Courses</Link>
                </div>
                <div className="FindU-detail-item">
                    <span className="FindU-detail-icon">👤</span>
                    <span>International students: 2222</span>
                </div>
                <div className="FindU-detail-item">
                    <span className="FindU-detail-icon">✓</span>
                    <span>English Courses available</span>
                </div>
                </div>
                
                <div className="FindU-action-buttons">
                <button className="FindU-btn">View details</button>
                </div>
            </div>

        <div className="FindU-box1">
            <div className="FindU-card-header">
                <div className="FindU-heart-icon">♡</div>
            </div>
            <div className="FindU-university-logo">
                <div className="FindU-logo-m">Acadia University</div>
            </div>
            <p className="FindU-university-name">Canada</p>
            
            <div className="FindU-program-details">
                <div className="FindU-detail-item">
                    <Link to="/pages/FindC" className="FindU-detail">View All Courses</Link>
                </div>
                <div className="FindU-detail-item">
                    <span className="FindU-detail-icon">👤</span>
                    <span>International students: 600</span>
                </div>
                <div className="FindU-detail-item">
                    <span className="FindU-detail-icon">✓</span>
                    <span>English Courses available</span>
                </div>
            </div>
            
            <div className="FindU-action-buttons">
                <button className="FindU-btn">View details</button>
            </div>
        </div>

        </div>

        {/* Additional 3-card row  */}
        <div className="FindU-boxes">

        <div className="FindU-box1">
            <div className="FindU-card-header">
                <div className="FindU-heart-icon">♡</div>
            </div>
            <div className="FindU-university-logo">
                <div className="FindU-logo-m">University of Canberra</div>
            </div>
            <p className="FindU-university-name">Australia</p>
            
            <div className="FindU-program-details">
                <div className="FindU-detail-item">
                    <Link to="/pages/FindC" className="FindU-detail">View All Courses</Link>
                </div>
                <div className="FindU-detail-item">
                    <span className="FindU-detail-icon">👤</span>
                    <span>International students: 3811</span>
                </div>
                <div className="FindU-detail-item">
                    <span className="FindU-detail-icon">🎓</span>
                    <span>THE World Ranking: 403</span>
                </div>
                <div className="FindU-detail-item">
                    <span className="FindU-detail-icon">✓</span>
                    <span>English Courses available</span>
                </div>
            </div>
            
            <div className="FindU-action-buttons">
                <button className="FindU-btn">View details</button>
            </div>
        </div>

        <div className="FindU-box1">
            <div className="FindU-card-header">
                <div className="FindU-heart-icon">♡</div>
            </div>
            <div className="FindU-university-logo">
                <div className="FindU-logo-m">Confederation College of Applied Arts and Technology</div>
            </div>
            <p className="FindU-university-name">Canada</p>
            
            <div className="FindU-program-details">
                <div className="FindU-detail-item">
                    <Link to="/pages/FindC" className="FindU-detail">View All Courses</Link>
                </div>
                <div className="FindU-detail-item">
                    <span className="FindU-detail-icon">👤</span>
                    <span>International students: 1748</span>
                </div>
                <div className="FindU-detail-item">
                    <span className="FindU-detail-icon">✓</span>
                    <span>English Courses available</span>
                </div>
            </div>
            
            <div className="FindU-action-buttons">
                <button className="FindU-btn">View details</button>
            </div>
        </div>

        <div className="FindU-box1">
            <div className="FindU-card-header">
                <div className="FindU-heart-icon">♡</div>
            </div>
            <div className="FindU-university-logo">
                <div className="FindU-logo-m">La Trobe University</div>
            </div>
            <p className="FindU-university-name">Australia</p>
            
            <div className="FindU-program-details">
                <div className="FindU-detail-item">
                    <Link to="/pages/FindC" className="FindU-detail">View All Courses</Link>
                </div>
                <div className="FindU-detail-item">
                    <span className="FindU-detail-icon">🎓</span>
                    <span>THE World Ranking: 251</span>
                </div>
                <div className="FindU-detail-item">
                    <span className="FindU-detail-icon">👤</span>
                    <span>International students: 7728</span>
                </div>
                <div className="FindU-detail-item">
                    <span className="FindU-detail-icon">✓</span>
                    <span>English Courses available</span>
                </div>
            </div>
            
            <div className="FindU-action-buttons">
                <button className="FindU-btn">View details</button>
            </div>
        </div>
        </div>
         <div className="FindU-boxes">

        <div className="FindU-box1">
            <div className="FindU-card-header">
                <div className="FindU-heart-icon">♡</div>
            </div>
            <div className="FindU-university-logo">
                <div className="FindU-logo-m">RMIT University</div>
            </div>
            <p className="FindU-university-name">Australia</p>
            
            <div className="FindU-program-details">
                <div className="FindU-detail-item">
                    <Link to="/pages/FindC" className="FindU-detail">View All Courses</Link>
                </div>
                <div className="FindU-detail-item">
                    <span className="FindU-detail-icon">🎓</span>
                    <span>THE World Ranking: 251</span>
            </div>
                <div className="FindU-detail-item">
                    <span className="FindU-detail-icon">👤</span>
                    <span>International students: 25369</span>
                </div>
                <div className="FindU-detail-item">
                    <span className="FindU-detail-icon">✓</span>
                    <span>English Courses available</span>
                </div>
            </div>
            
            <div className="FindU-action-buttons">
                <button className="FindU-btn">View details</button>
            </div>
        </div>

        <div className="FindU-box1">
            <div className="FindU-card-header">
                <div className="FindU-heart-icon">♡</div>
            </div>
            <div className="FindU-university-logo">
                <div className="FindU-logo-m">University of New South Wales (UNSW Sydney)</div>
            </div>
            <p className="FindU-university-name">Australia</p>
            
            <div className="FindU-program-details">
                <div className="FindU-detail-item">
                    <Link to="/pages/FindC" className="FindU-detail">View All Courses</Link>
                </div>
                 <div className="FindU-detail-item">
                    <span className="FindU-detail-icon">🎓</span>
                    <span>THE World Ranking: 83</span>
            </div>
                <div className="FindU-detail-item">
                    <span className="FindU-detail-icon">👤</span>
                    <span>International students: 27695</span>
                </div>
                
                <div className="FindU-detail-item">
                    <span className="FindU-detail-icon">✓</span>
                    <span>English Courses available</span>
                </div>
            </div>
            
            <div className="FindU-action-buttons">
                <button className="FindU-btn">View details</button>
            </div>
        </div>

        <div className="FindU-box1">
            <div className="FindU-card-header">
                <div className="FindU-heart-icon">♡</div>
            </div>
            <div className="FindU-university-logo">
                <div className="FindU-logo-m">The University of Waikato</div>
            </div>
            <p className="FindU-university-name">New zealand</p>
            
            <div className="FindU-program-details">
                <div className="FindU-detail-item">
                    <Link to="/pages/FindC" className="FindU-detail">View All Courses</Link>
                </div>
                <div className="FindU-detail-item">
                    <span className="FindU-detail-icon">🎓</span>
                    <span>THE World Ranking: 401</span>
                </div>
                <div className="FindU-detail-item">
                    <span className="FindU-detail-icon">👤</span>
                    <span>International students: 2000</span>
                </div>
                <div className="FindU-detail-item">
                    <span className="FindU-detail-icon">✓</span>
                    <span>English Courses available</span>
                </div>
            </div>
            
            <div className="FindU-action-buttons">
                <button className="FindU-btn">View details</button>
            </div>
        </div>
        </div>
         <div className="FindU-boxes">

        <div className="FindU-box1">
            <div className="FindU-card-header">
                <div className="FindU-heart-icon">♡</div>
            </div>
            <div className="FindU-university-logo">
                <div className="FindU-logo-m">International colage of Management,Sydney</div>
            </div>
            <p className="FindU-university-name">Australia</p>
            <div className="FindU-program-details">
                <div className="FindU-detail-item">
                    <Link to="/pages/FindC" className="FindU-detail">View All Courses</Link>
                </div>
                <div className="FindU-detail-item">
                    <span className="FindU-detail-icon">👤</span>
                    <span>International students: 677</span>
                </div>
                <div className="FindU-detail-item">
                    <span className="FindU-detail-icon">✓</span>
                    <span>English Courses available</span>
                </div>
            </div>
            
            <div className="FindU-action-buttons">
                <button className="FindU-btn">View details</button>
            </div>
        </div>

        <div className="FindU-box1">
            <div className="FindU-card-header">
                <div className="FindU-heart-icon">♡</div>
            </div>
            <div className="FindU-university-logo">
                <div className="FindU-logo-m">Newcastle University</div>
            </div>
            <p className="FindU-university-name">United Kingdom</p>
            
            <div className="FindU-program-details">
                <div className="FindU-detail-item">
                    <Link to="/pages/FindC" className="FindU-detail">View All Courses</Link>
                </div>
                <div className="FindU-detail-item">
                    <span className="FindU-detail-icon">👤</span>
                    <span>International students: 157</span>
                </div>
                <div className="FindU-detail-item">
                    <span className="FindU-detail-icon">✓</span>
                    <span>English Courses available</span>
                </div>
            </div>
            
            <div className="FindU-action-buttons">
                <button className="FindU-btn">View details</button>
            </div>
        </div>

        <div className="FindU-box1">
            <div className="FindU-card-header">
                <div className="FindU-heart-icon">♡</div>
            </div>
            <div className="FindU-university-logo">
                <div className="FindU-logo-m">Fanshawe College</div>
            </div>
            <p className="FindU-university-name">Canada</p>
            
            <div className="FindU-program-details">
                <div className="FindU-detail-item">
                    <Link to="/pages/FindC" className="FindU-detail">View All Courses</Link>
                </div>
                <div className="FindU-detail-item">
                    <span className="FindU-detail-icon">👤</span>
                    <span>International students: 7500</span>
                </div>
                <div className="FindU-detail-item">
                    <span className="FindU-detail-icon">✓</span>
                    <span>English Courses available</span>
                </div>
            </div>
            
            <div className="FindU-action-buttons">
                <button className="FindU-btn">View details</button>
            </div>
        </div>

        </div>
         <div className="FindU-boxes">

        <div className="FindU-box1">
            <div className="FindU-card-header">
                <div className="FindU-heart-icon">♡</div>
            </div>
            <div className="FindU-university-logo">
                <div className="FindU-logo-m">Justice Institue of British Columbia</div>
            </div>
            <p className="FindU-university-name">Canada</p>
            <div className="FindU-program-details">
                <div className="FindU-detail-item">
                    <Link to="/pages/FindC" className="FindU-detail">View All Courses</Link>
                </div>
                <div className="FindU-detail-item">
                    <span className="FindU-detail-icon">✓</span>
                    <span>English Courses available</span>
                </div>
            </div>
            
            <div className="FindU-action-buttons">
                <button className="FindU-btn">View details</button>
            </div>
        </div>

        <div className="FindU-box1">
            <div className="FindU-card-header">
                <div className="FindU-heart-icon">♡</div>
            </div>
            <div className="FindU-university-logo">
                <div className="FindU-logo-m">University of Wolverhampton</div>
            </div>
            <p className="FindU-university-name">United Kingdom</p>
            
            <div className="FindU-program-details">
                <div className="FindU-detail-item">
                    <Link to="/pages/FindC" className="FindU-detail">View All Courses</Link>
                </div>
                <div className="FindU-detail-item">
                    <span className="FindU-detail-icon">👤</span>
                    <span>International students: 3893</span>
                </div>
                <div className="FindU-detail-item">
                    <span className="FindU-detail-icon">✓</span>
                    <span>English Courses available</span>
                </div>
            </div>
            
            <div className="FindU-action-buttons">
                <button className="FindU-btn">View details</button>
            </div>
        </div>

        <div className="FindU-box1">
            <div className="FindU-card-header">
                <div className="FindU-heart-icon">♡</div>
            </div>
            <div className="FindU-university-logo">
                <div className="FindU-logo-m">Trent University</div>
            </div>
            <p className="FindU-university-name">Canada</p>
            
            <div className="FindU-program-details">
                <div className="FindU-detail-item">
                    <Link to="/pages/FindC" className="FindU-detail">View All Courses</Link>
                </div>
                <div className="FindU-detail-item">
                    <span className="FindU-detail-icon">👤</span>
                    <span>International students: 2799</span>
                </div>
                <div className="FindU-detail-item">
                    <span className="FindU-detail-icon">✓</span>
                    <span>English Courses available</span>
                </div>
            </div>
            
            <div className="FindU-action-buttons">
                <button className="FindU-btn">View details</button>
            </div>
        </div>
        
        </div>
<div className="FIndU-Arrs">
    <span className="FIndU-page-link FIndU-disabled sizes">«</span> 
    <span className="FIndU-page-link FIndU-disabled sizes">‹</span> 
    <span className="FIndU-page-link FIndU-active">1</span>
    <span className="FIndU-page-link ">2</span>
    <span className="FIndU-page-link">3</span>
    <span className="FIndU-page-link">...</span>
    <span className="FIndU-page-link">6</span>
    <span className="FIndU-page-link">...</span>
    <span className="FIndU-page-link">10</span>
    <span className="FIndU-page-link">11</span>
    <span className="FIndU-page-link">12</span>
    <span className="FIndU-page-link sizes">›</span>
    <span className="FIndU-page-link sizes">»</span>
</div>
        
        
        
        
        
        
        </div>
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        </div>
    
    );
}