import React from "react";
import "./Oneac.css";
import { Link } from "react-router-dom";
export default function Oneac() {
    return (
        <div className="oneac-container">
            <div className="oneac-content">
                <h1 className="head1">One account for all your study abroad needs</h1>
                <p className="oneac-para">Create your profile and unlock a wide array of features including personalised recommendations, fast-tracked applications and much more.</p>
            </div>
            <div className="oneac-actions">
                <Link to="/pages/white-link/Sign_Up"><button className="oneac-btn">Sign up</button></Link>
                <Link to="/pages/white-link/SignIN"><button className="oneac-btn1">Sign in</button></Link>
            </div>
        </div>
    );
}