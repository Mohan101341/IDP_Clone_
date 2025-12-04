import React from 'react';
import { useParams } from 'react-router-dom';
import './FindCountryPage.css';
import WhyIDPCounsellors from './WhyIDPCounsellors';
import ContactPage from '../../../Components/Contact/Contact';
import IdpOfficeList from './IdpOfficelist';
import IDP from '../../../Components/IdpStudents/IDP';
import InfoSection from './InfoSection';

// Enhanced office data with addresses and contact info
const officesByCountry = {
    australia: [
        { name: " Jramsys Sydney", address: "Level 8, 140 William Street, Sydney NSW 2000", phone: "+61 2 8235 5700", email: "sydney@idp.com" },
        { name: " Jramsys Melbourne", address: "Level 13, 440 Collins Street, Melbourne VIC 3000", phone: "+61 3 9614 2922", email: "melbourne@idp.com" },
        { name: " Jramsys Brisbane", address: "Level 18, 123 Eagle Street, Brisbane QLD 4000", phone: "+61 7 3221 2144", email: "brisbane@idp.com" },
        { name: " Jramsys Perth", address: "Level 2, 256 Adelaide Terrace, Perth WA 6000", phone: "+61 8 9321 1188", email: "perth@idp.com" },
        { name: " Jramsys Adelaide", address: "Level 5, 25 Grenfell Street, Adelaide SA 5000", phone: "+61 8 8212 5777", email: "adelaide@idp.com" }
    ], 
    bahrain: [ 
        { name: "IDP Jramsys Manama", address: "Building 1234, Road 1234, Block 123, Manama", phone: "+973 1722 3456", email: "manama@idp.com" }
    ], 
    bangladesh: [ 
        { name: "IDP Jramsys Dhaka", address: "House 15, Road 27, Dhanmondi, Dhaka 1209", phone: "+880 2 912 3456", email: "dhaka@idp.com" },
        { name: "IDP Jramsys Chittagong", address: "123 Agrabad Commercial Area, Chittagong", phone: "+880 31 712 3456", email: "chittagong@idp.com" }
    ], 
    cambodia: [ 
        { name: " Jramsys Phnom Penh", address: "No. 123, Street 123, Phnom Penh", phone: "+855 23 456 789", email: "phnompenh@idp.com" }
    ], 
    canada: [ 
        { name: " Jramsys Toronto", address: "123 Yonge Street, Suite 500, Toronto ON M5B 1M4", phone: "+1 416 555 1234", email: "toronto@idp.com" },
        { name: " Jramsys Vancouver", address: "456 Granville Street, Suite 200, Vancouver BC V6C 1T2", phone: "+1 604 555 5678", email: "vancouver@idp.com" },
        { name: " Jramsys Montreal", address: "789 Rue Sainte-Catherine, Suite 300, Montreal QC H3B 1A5", phone: "+1 514 555 9012", email: "montreal@idp.com" }
    ], 
    china: [ 
        { name: " Jramsys Beijing", address: "Room 1234, Tower A, 123 Chaoyang District, Beijing 100020", phone: "+86 10 1234 5678", email: "beijing@idp.com" },
        { name: " Jramsys Shanghai", address: "Floor 20, 123 Nanjing Road, Shanghai 200001", phone: "+86 21 8765 4321", email: "shanghai@idp.com" },
        { name: "Jramsys Guangzhou", address: "Unit 567, 123 Tianhe Road, Guangzhou 510000", phone: "+86 20 2345 6789", email: "guangzhou@idp.com" }
    ], 
    egypt: [ 
        { name: "Jramsys Cairo", address: "123 Tahrir Square, Downtown Cairo", phone: "+20 2 1234 5678", email: "cairo@idp.com" }
    ], 
    ghana: [ 
        { name: " Jramsys Accra", address: "123 Oxford Street, Osu, Accra", phone: "+233 302 123 456", email: "accra@idp.com" }
    ], 
    "hong-kong": [ 
        { name: " Jramsys Hong Kong", address: "Room 1234, 12/F, Central Plaza, 18 Harbour Road, Wan Chai, Hong Kong", phone: "+852 2123 4567", email: "hongkong@idp.com" }
    ], 
    indonesia: [ 
        { name: " Jramsys Jakarta", address: "Jl. Jend. Sudirman Kav. 52-53, Jakarta 12190", phone: "+62 21 1234 5678", email: "jakarta@idp.com" },
        { name: " Jramsys Surabaya", address: "Jl. Pemuda 123, Surabaya 60264", phone: "+62 31 2345 6789", email: "surabaya@idp.com" }
    ], 
    iran: [ 
        { name: " Jramsys Tehran", address: "No. 123, Valiasr Street, Tehran", phone: "+98 21 2345 6789", email: "tehran@idp.com" }
    ], 
    jordan: [ 
        { name: " Jramsys Amman", address: "123 King Hussein Street, Amman", phone: "+962 6 123 4567", email: "amman@idp.com" }
    ], 
    kenya: [ 
        { name: " Jramsys Nairobi", address: "123 Westlands Road, Westlands, Nairobi", phone: "+254 20 123 4567", email: "nairobi@idp.com" }
    ], 
    korea: [ 
        { name: " Jramsys Seoul", address: "123 Gangnam-daero, Gangnam-gu, Seoul 06000", phone: "+82 2 1234 5678", email: "seoul@idp.com" }
    ], 
    kuwait: [ 
        { name: " Jramsys Kuwait City", address: "Block 1, Street 123, Kuwait City", phone: "+965 1234 5678", email: "kuwait@idp.com" }
    ], 
    lebanon: [ 
        { name: "Jramsys Beirut", address: "123 Hamra Street, Beirut", phone: "+961 1 123 456", email: "beirut@idp.com" }
    ], 
    malaysia: [ 
        { name: " Jramsys Kuala Lumpur", address: "Level 15, Menara 123, Jalan Ampang, 50450 Kuala Lumpur", phone: "+60 3 1234 5678", email: "kualalumpur@idp.com" },
        { name: " Jramsys Penang", address: "123 Jalan Penang, 10000 Penang", phone: "+60 4 2345 6789", email: "penang@idp.com" }
    ], 
    mauritius: [ 
        { name: "Jramsys Port Louis", address: "123 Royal Street, Port Louis", phone: "+230 123 4567", email: "portlouis@idp.com" }
    ], 
    "middle-east": [ 
        { name: "Jramsys Dubai", address: "Office 123, Level 5, Business Bay, Dubai", phone: "+971 4 123 4567", email: "dubai@idp.com" },
        { name: " Jramsys Abu Dhabi", address: "Tower 123, Corniche Road, Abu Dhabi", phone: "+971 2 234 5678", email: "abudhabi@idp.com" }
    ], 
    nepal: [ 
        { name: "Jramsys Kathmandu", address: "123 Durbar Marg, Kathmandu 44600", phone: "+977 1 123 4567", email: "kathmandu@idp.com" }
    ], 
    india: [ 
        { name: "Jramsys Ahmedabad", address: "123 CG Road, Ahmedabad 380009", phone: "+91 79 1234 5678", email: "ahmedabad@idp.com" },
        { name: "Jramsys Bangalore", address: "123 MG Road, Bangalore 560001", phone: "+91 80 2345 6789", email: "bangalore@idp.com" },
        { name: "Jramsys Mumbai", address: "123 Nariman Point, Mumbai 400021", phone: "+91 22 3456 7890", email: "mumbai@idp.com" },
        { name: "Jramsys Delhi", address: "123 Connaught Place, New Delhi 110001", phone: "+91 11 4567 8901", email: "delhi@idp.com" }
    ] 
};

const FindCountryPage = () => {
    const { country } = useParams();
    const countryName = country.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    const officeList = officesByCountry[country.toLowerCase()] || [];

    return (
        <div className="find-country-page-container">
            <div style={{ background: "linear-gradient(135deg, #277af1 0%, #1e63c4 100%)", padding: "60px 20px", textAlign: "center", color: "white", marginBottom: "40px" }}>
                <p style={{ fontSize: "14px", opacity: 0.9, marginBottom: "10px" }}>
                    Home / Find Us / {countryName}
                </p>
                <h1 style={{ fontSize: "36px", fontWeight: 700, margin: "10px 0" }}>
                    Jramsys Offices in {countryName}
                </h1>
                <p style={{ fontSize: "18px", opacity: 0.95, maxWidth: "600px", margin: "0 auto" }}>
                    Connect with our expert counsellors in {countryName} to start your study abroad journey
                </p>
            </div>
            <IdpOfficeList offices={officeList} countryName={countryName} />
            <WhyIDPCounsellors />
            <InfoSection />
            <IDP />
            <ContactPage />
        </div>
    );
};

export default FindCountryPage;