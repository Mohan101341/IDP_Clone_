import React from 'react';
import { useParams } from 'react-router-dom';
import WhyIDPCounsellors from './WhyIDPCounsellors';
import ContactPage from '../../../Components/Contact/Contact';
import IdpOfficeList from './IdpOfficelist';
import IDP from '../../../Components/IdpStudents/IDP';
import InfoSection from './InfoSection';

// Mock data for offices by country. In a real app, this would come from an API.
const officesByCountry = {
    australia: ["IDP Sydney", "IDP Melbourne", "IDP Brisbane"],
    bahrain: ["IDP Manama"],
    bangladesh: ["IDP Dhaka", "IDP Chittagong"],
    cambodia: ["IDP Phnom Penh"],
    canada: ["IDP Toronto", "IDP Vancouver"],
    china: ["IDP Beijing", "IDP Shanghai"],
    egypt: ["IDP Cairo"],
    ghana: ["IDP Accra"],
    "hong-kong": ["IDP Hong Kong"],
    indonesia: ["IDP Jakarta"],
    iran: ["IDP Tehran"],
    jordan: ["IDP Amman"],
    kenya: ["IDP Nairobi"],
    korea: ["IDP Seoul"],
    kuwait: ["IDP Kuwait City"],
    lebanon: ["IDP Beirut"],
    malaysia: ["IDP Kuala Lumpur"],
    mauritius: ["IDP Port Louis"],
    "middle-east": ["IDP Dubai"],
    nepal: ["IDP Kathmandu"],
};

const FindCountryPage = () => {
    const { country } = useParams();
    const countryName = country.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    const officeList = officesByCountry[country.toLowerCase()] || [];

    return (
        <div>
            <div className="insurance-container">
                <div className="health-container">
                    <p className="breadcrumb">Home / Find an IDP office / {countryName}</p>
                    <h1 className="main-heading">IDP Offices in {countryName}</h1>
                    <p>Our counsellors in {countryName} are ready to help you on your study abroad journey.</p>
                </div>
            </div>
            <IdpOfficeList offices={officeList} countryName={countryName} />
            <WhyIDPCounsellors />
            <InfoSection/>
            <IDP/>
            <ContactPage />
           
           
        </div>
    );
};

export default FindCountryPage;