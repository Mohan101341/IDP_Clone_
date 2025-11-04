import React from 'react';
import StudyAbroadHero from './StudyAbroadHero';
import ArriveAndThriveCnt from './Arrive_and_thrive/ArriveAndThriveCnt';

const ArriveAndThrivePage = () => {
    return (
        <>
            <StudyAbroadHero
                title="Arrive and thrive"
                subtitle="Settle into your new home with our arrival support services."
                imageUrl="https://www.idp.com/medias/Student-friends-in-a-new-city.jpg?context=bWFzdGVyfGltYWdlc3w4MjU3MHxpbWFnZS9qcGVnfGg3NC9oZDMvODg0NDI4OTI1OTU1MC9TdHVkZW50IGZyaWVuZHMgaW4gYSBuZXcgY2l0eS5qcGd8ZDYzYjY3YjY3YjY3YjY3YjY3YjY3YjY3YjY3YjY3YjY3YjY3YjY3YjY3YjY3YjY"
                imageAlt="Students in a new city"
            />
            <ArriveAndThriveCnt />
        </>
    );
};

export default ArriveAndThrivePage;