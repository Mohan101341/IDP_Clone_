import React from 'react';
import StudyAbroadHero from './StudyAbroadHero';
import AfterOfferVid from './AfterOffe/AfterOffervid';
import AfterOfferCnt from './AfterOffe/AfterOfferCnt';

const AfterOfferPage = () => {
    return (
        <>
            <StudyAbroadHero
                title="After receiving an offer"
                subtitle="Here are the steps to take from accepting an offer through to planning for your trip to make your study abroad dream a reality"
                imageUrl="https://www.idp.com/medias/Student-holding-an-offer-letter-from-a-university-web.jpg?context=bWFzdGVyfGltYWdlc3w1MzYyOXxpbWFnZS9qcGVnfGg1MS9oZTAvODg0NDI4OTk4MjQ5NC9TdHVkZW50IGhvbGRpbmcgYW4gb2ZmZXIgbGV0dGVyIGZyb20gYSB1bml2ZXJzaXR5IHdlYi5qcGd8ZDEzYzJkYjU4ODg1OWY5YjJkYmI3ZDU2MjA0YjU5ZGM4YjYyYjJkYjYyYjYyYjYyYjYyYjYyYjYyYjY"
                imageAlt="Student holding an offer letter"
            />
            <AfterOfferVid />
            <AfterOfferCnt />
        </>
    );
};

export default AfterOfferPage;