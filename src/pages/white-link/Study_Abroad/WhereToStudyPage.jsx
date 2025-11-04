import React from 'react';
import StudyAbroadHero from './StudyAbroadHero';
import WhereToStudyCnt from './Where_to_study_abroad/WhereToStudyCnt';

const WhereToStudyPage = () => {
    return (
        <>
            <StudyAbroadHero
                title="Where and what to study?"
                subtitle="Find the perfect country, university and course with our expert guidance."
                imageUrl="https://www.idp.com/medias/Where-to-study-banner-mob.jpg?context=bWFzdGVyfGltYWdlc3w0NjU0NnxpbWFnZS9qcGVnfGg0MC9oZWYvODg0NDI4OTM5MDYyMi9XaGVyZSB0byBzdHVkeSBiYW5uZXIgbW9iLmpwZ3w1YjYyYjYyYjYyYjYyYjYyYjYyYjYyYjYyYjYyYjYyYjYyYjYyYjYyYjYyYjYyYjY"
                imageAlt="Globe with graduation cap"
            />
            <WhereToStudyCnt />
        </>
    );
};

export default WhereToStudyPage;