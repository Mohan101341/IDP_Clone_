import React from 'react';
import StudyAbroadHero from './StudyAbroadHero';
import PrepareToDepartCnt from './Prepare_to_depart/PrepareToDepartCnt';

const PrepareToDepartPage = () => {
    return (
        <>
            <StudyAbroadHero
                title="Preparing to depart"
                subtitle="We're here to help set you up for your study abroad adventure"
                imageUrl="https://www.idp.com/medias/pre-departure-support-from-idp.jpg?context=bWFzdGVyfGltYWdlc3w3MjY5NHxpbWFnZS9qcGVnfGg5My9oZTYvODg0NDI4OTU4OTI3OC9wcmUtZGVwYXJ0dXJlIHN1cHBvcnQgZnJvbSBpZHAuanBnfDEzYjU2YjQzYjU2YjQzYjU2YjQzYjU2YjQzYjU2YjQzYjU2YjQzYjU2YjQzYjU2YjQzYjU2YjQ"
                imageAlt="Student packing a suitcase"
            />
            <PrepareToDepartCnt />
        </>
    );
};

export default PrepareToDepartPage;