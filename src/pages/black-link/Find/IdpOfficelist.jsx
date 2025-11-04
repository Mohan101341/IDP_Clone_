import React, { useState } from 'react';
import './IdpOfficeList.css';

const defaultOffices = [
    "IDP Ahmedabad", "IDP Amritsar", "IDP Bangalore", "IDP Bhopal", "IDP Bhubaneswar",
    "IDP Calicut", "IDP Chandigarh", "IDP Chennai", "IDP Coimbatore", "IDP Delhi",
    "IDP Gurgaon", "IDP Guwahati", "IDP Hyderabad", "IDP Indore", "IDP Jaipur",
    "IDP Jalandhar", "IDP Kochi", "IDP Kolkata", "IDP Lucknow", "IDP Ludhiana",
    "IDP Mangalore", "IDP Mumbai", "IDP Mysore", "IDP Nagpur", "IDP Noida",
    "IDP Patna", "IDP Pune", "IDP Rajkot", "IDP Surat", "IDP Thane",
    "IDP Trivandrum", "IDP Vadodara", "IDP Vijayawada", "IDP Vizag"
];

const ITEMS_PER_PAGE = 10;

const IdpOfficeList = ({ offices, countryName = "India" }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');

    const officeList = offices || defaultOffices;

    const filteredOffices = officeList.filter(office =>
        office.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const totalPages = Math.ceil(filteredOffices.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentOffices = filteredOffices.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
        setCurrentPage(1); // Reset to first page on new search
    };

    const goToNextPage = () => {
        setCurrentPage((prev) => Math.min(prev + 1, totalPages));
    };

    const goToPreviousPage = () => {
        setCurrentPage((prev) => Math.max(prev - 1, 1));
    };

    return (
        <div className="idp-container">
            <h2 className="office-list-title">Our Offices in {countryName}</h2>
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Search for an office..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="office-search-input"
                />
            </div>
            {filteredOffices.length === 0 && <p>No offices found for this location.</p>}
            <ul className="office-list">
                {currentOffices.map((office, index) => (
                    <li key={index} className="office-item">
                        <a href="#">{office}</a>
                        <span className="arrow">→</span>
                    </li>
                ))}
            </ul>
            {totalPages > 1 && (
                <div className="nav-buttons">
                    <button onClick={goToPreviousPage} disabled={currentPage === 1}>
                        Previous
                    </button>
                    <span>Page {currentPage} of {totalPages}</span>
                    <button onClick={goToNextPage} disabled={currentPage === totalPages}>
                        Next
                    </button>
                </div>
            )}
        </div>
    );
};

export default IdpOfficeList;