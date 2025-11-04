import React, { useState } from 'react';

const FindH = () => {
    const [destination, setDestination] = useState('All destinations');

    return (
        <div className="insurance-container">
            <div className="health-container">
                {/* Breadcrumb */}
                <p className="breadcrumb">
                    Home / Find an IDP office
                </p>

                {/* Heading */}
                <h1 className="main-heading">
                    Find an IDP office near you
                </h1>
                <p>
                    Our counsellors are ready to help you on your study abroad journey.
                </p>
            </div>
        </div>
    )
}

export default FindH
