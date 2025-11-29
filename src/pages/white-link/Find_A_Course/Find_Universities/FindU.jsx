// Import React hooks for state management and Link for navigation.
import React, { useState, useEffect } from "react";
import "./FindU.css";
import { Link } from "react-router-dom";

// A static list of all available universities. In a real application, this would come from an API.
const universitiesData = [
    { name: "Bond University", country: "Australia", ranking: 401, students: 2304, hasEnglishCourses: true, website: "https://bond.edu.au/" },
    { name: "Camosun College", country: "Canada", ranking: null, students: 2222, hasEnglishCourses: true, website: "http://camosun.ca/" },
    { name: "Acadia University", country: "Canada", ranking: null, students: 600, hasEnglishCourses: true, website: "https://acadiau.ca/" },
    { name: "University of Canberra", country: "Australia", ranking: 403, students: 3811, hasEnglishCourses: true, website: "https://www.canberra.edu.au/" },
    { name: "Confederation College of Applied Arts and Technology", country: "Canada", ranking: null, students: 1748, hasEnglishCourses: true, website: "https://www.confederationcollege.ca/" },
    { name: "La Trobe University", country: "Australia", ranking: 251, students: 7728, hasEnglishCourses: true, website: "https://www.latrobe.edu.au/" },
    { name: "RMIT University", country: "Australia", ranking: 251, students: 25369, hasEnglishCourses: true, website: "https://www.rmit.edu.au/" },
    { name: "University of New South Wales (UNSW Sydney)", country: "Australia", ranking: 83, students: 27695, hasEnglishCourses: true, website: "https://www.unsw.edu.au/" },
    { name: "The University of Waikato", country: "New zealand", ranking: 401, students: 2000, hasEnglishCourses: true, website: "https://www.waikato.ac.nz/" },
    { name: "International College of Management, Sydney", country: "Australia", ranking: null, students: 677, hasEnglishCourses: true, website: "https://www.icms.edu.au/" },
    { name: "Newcastle University", country: "United Kingdom", ranking: 157, students: 6800, hasEnglishCourses: true, website: "https://www.ncl.ac.uk/" },
    { name: "Fanshawe College", country: "Canada", ranking: null, students: 7500, hasEnglishCourses: true, website: "https://www.fanshawec.ca/" },
    { name: "Justice Institute of British Columbia", country: "Canada", ranking: null, students: 0, hasEnglishCourses: true, website: "https://www.jibc.ca/" },
    { name: "University of Wolverhampton", country: "United Kingdom", ranking: null, students: 3893, hasEnglishCourses: true, website: "https://www.wlv.ac.uk/" },
    { name: "Trent University", country: "Canada", ranking: null, students: 2799, hasEnglishCourses: true, website: "https://www.trentu.ca/" },
    { name: "University of Toronto", country: "Canada", ranking: 21, students: 23000, hasEnglishCourses: true, website: "https://www.utoronto.ca/" },
    { name: "University of British Columbia", country: "Canada", ranking: 34, students: 18000, hasEnglishCourses: true, website: "https://www.ubc.ca/" },
    { name: "University of Melbourne", country: "Australia", ranking: 33, students: 22000, hasEnglishCourses: true, website: "https://www.unimelb.edu.au/" },
    { name: "University of Sydney", country: "Australia", ranking: 41, students: 25000, hasEnglishCourses: true, website: "https://www.sydney.edu.au/" },
    { name: "University of Auckland", country: "New zealand", ranking: 87, students: 10000, hasEnglishCourses: true, website: "https://www.auckland.ac.nz/en.html" },
    { name: "University of Otago", country: "New zealand", ranking: 217, students: 4000, hasEnglishCourses: true, website: "https://www.otago.ac.nz/" },
    { name: "University of Manchester", country: "United Kingdom", ranking: 28, students: 18000, hasEnglishCourses: true, website: "https://www.manchester.ac.uk/" },
    { name: "King's College London", country: "United Kingdom", ranking: 37, students: 14000, hasEnglishCourses: true, website: "https://www.kcl.ac.uk/" },
    { name: "Monash University", country: "Australia", ranking: 57, students: 21000, hasEnglishCourses: true, website: "https://www.monash.edu/" },
];

// Options for the country filter dropdown.
const countryOptions = ["All", ...new Set(universitiesData.map(u => u.country))];
const rankOptions = {
    "Any": () => true,
    "Top 100": rank => rank <= 100,
    "101 - 300": rank => rank > 100 && rank <= 300,
    "301 - 500": rank => rank > 300 && rank <= 500,
    "500+": rank => rank > 500,
    "Unranked": rank => rank === null,
};

// This is the main component for the "Find a University" page.
export default function FindU() {
    // State to hold the list of universities to be displayed after filtering.
    const [universities, setUniversities] = useState(universitiesData);
    // State to manage the current page for pagination.
    const [currentPage, setCurrentPage] = useState(1);

    // Number of items to display per page.
    const itemsPerPage = 6;

    // State to hold the currently active filters.
    const [filters, setFilters] = useState({
        country: 'All',
        rank: 'Any',
    });

    // State to hold filters selected in the dropdowns before they are applied.
    const [selection, setSelection] = useState({
        country: 'All',
        rank: 'Any',
    });

    // This effect runs when the filters change to update the displayed universities.
    useEffect(() => {
        let filteredData = [...universitiesData];

        // Country filter
        if (filters.country !== 'All') {
            filteredData = filteredData.filter(uni => uni.country === filters.country);
        }

        // Rank filter
        if (filters.rank !== 'Any') {
            const rankFilterFunc = rankOptions[filters.rank];
            filteredData = filteredData.filter(uni => rankFilterFunc(uni.ranking));
        }

       
        filteredData.sort((a, b) => b.students - a.students);

        setUniversities(filteredData);
        setCurrentPage(1); // Reset to first page on filter change
    }, [filters]);

    // Function to update the selected filters when a dropdown value changes.
    const handleFilterChange = (filterType, value) => {
        setSelection(prev => ({ ...prev, [filterType]: value }));
    };

    // Function to apply the selected filters.
    const applyFilters = () => {
        setFilters(selection);
    }

    // Function to open the university's website in a new tab.
    const handleViewDetails = (url) => {
        window.open(url, "_blank", "noopener,noreferrer");
    };

    // Function to reset all filters to their initial state.
    const resetFilters = () => {
        setFilters({ country: 'All', rank: 'Any' });
        setSelection({ country: 'All', rank: 'Any' });
    };

    // Pagination logic
    const totalPages = Math.ceil(universities.length / itemsPerPage);
    const paginatedUniversities = universities.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    // Function to change the current page.
    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    // Function to render the page number links for pagination.
    const renderPageNumbers = () => {
        const pageNumbers = [];
        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(<span key={i} className={`FIndU-page-link ${currentPage === i ? 'FIndU-active' : ''}`} onClick={() => handlePageChange(i)}>{i}</span>);
        }
        return pageNumbers;
    };

    return (
        <div>
         {/* This is the main banner section for the page. */}
         <div className="FindU-container">      
            {/* Breadcrumb navigation. */}
            <p className="Find-h">JRAMSYS OVERSEASE/Find a University</p>
            {/* Main heading. */}
        <h1 className="FindU-t">
            These are the total Universities and Colleges</h1>            
         </div> 
            {/* This section contains the filter dropdowns and buttons. */}
            <div className="FindU-filter-panel">
                <div className="FindU-filter-section">
                    <h4>Filter by Country</h4>
                    <select value={selection.country} onChange={(e) => handleFilterChange('country', e.target.value)}>
                        {countryOptions.map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                </div>
                <div className="FindU-filter-section">
                    <h4>Filter by Rank</h4>
                    <select value={selection.rank} onChange={(e) => handleFilterChange('rank', e.target.value)}>
                        {Object.keys(rankOptions).map(r => <option key={r} value={r}>{r}</option>)}
                    </select>
                </div>
                <div className="FindU-filter-buttons">
                    <button className="FindU-apply-btn" onClick={applyFilters}>Filter</button>
                    <button className="FindU-reset-btn" onClick={resetFilters}>Reset Filters</button>
                </div>
            </div>

         {/* This container holds the grid of university cards. */}
         <div> 
            <div className="FindU-boxes">
                {/* Check if there are any universities to display. */}
                {paginatedUniversities.length > 0 ? paginatedUniversities.map((uni, index) => (
                    <div className="FindU-box1" key={index}>
                        {/* Header of the card with a heart icon. */}
                        <div className="FindU-card-header">
                            <div className="FindU-heart-icon">♡</div>
                        </div>
                        <div className="FindU-university-logo">
                            <div className="FindU-logo-m">{uni.name}</div>
                        </div>
                        <p className="FindU-university-name">{uni.country}</p>
                        
                        {/* This section displays the details of the university. */}
                        <div className="FindU-program-details">
                            <div className="FindU-detail-item">
                                <Link to="/pages/FindC" className="FindU-detail">View All Courses</Link>
                            </div>
                            {uni.ranking !== null ? (
                                <div className="FindU-detail-item">
                                    <span className="FindU-detail-icon">🎓</span>
                                    <span>THE World Ranking: {uni.ranking}</span>
                                </div>
                            ) : (
                                <div className="FindU-detail-item">
                                    <span className="FindU-detail-icon">🎓</span>
                                    <span>Unranked</span>
                                </div>
                            )}
                            {uni.students > 0 && (
                                <div className="FindU-detail-item">
                                    <span className="FindU-detail-icon">👤</span>
                                    <span>International students: {uni.students.toLocaleString()}</span>
                                </div>
                            )}
                            {uni.hasEnglishCourses && (
                                <div className="FindU-detail-item">
                                    <span className="FindU-detail-icon">✓</span>
                                    <span>English Courses available</span>
                                </div>
                            )}
                        </div>
                        
                        {/* Button to view more details about the university. */}
                        <div className="FindU-action-buttons">
                            <button className="FindU-btn" onClick={() => handleViewDetails(uni.website)}>View details</button>
                        </div>
                    </div>
                )) : (
                    // Display a message if no universities match the filters.
                    <div className="FindU-no-results">
                        <h3>No universities match your criteria.</h3>
                        <p>Try adjusting your filters or click 'Reset Filters'.</p>
                    </div>
                )}
            </div>
            {/* This section renders the pagination controls if there is more than one page. */}
            {totalPages > 1 && (
                <div className="FIndU-Arrs">
                    {/* Buttons for navigating to the first, previous, next, and last pages. */}
                    <span className={`FIndU-page-link sizes ${currentPage === 1 ? 'FIndU-disabled' : ''}`} onClick={() => handlePageChange(1)}>«</span>
                    <span className={`FIndU-page-link sizes ${currentPage === 1 ? 'FIndU-disabled' : ''}`} onClick={() => handlePageChange(currentPage - 1)}>‹</span>
                    {renderPageNumbers()}
                    <span className={`FIndU-page-link sizes ${currentPage === totalPages ? 'FIndU-disabled' : ''}`} onClick={() => handlePageChange(currentPage + 1)}>›</span>
                    <span className={`FIndU-page-link sizes ${currentPage === totalPages ? 'FIndU-disabled' : ''}`} onClick={() => handlePageChange(totalPages)}>»</span>
                </div>
            )}
        </div>
    </div>
    );
}