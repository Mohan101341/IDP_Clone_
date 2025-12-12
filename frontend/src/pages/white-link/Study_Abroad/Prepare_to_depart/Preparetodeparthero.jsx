import React, { useEffect, useState } from 'react'
import './Preparetodeparthero.css'
const Preparetodeparthero = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 100); // slight delay for animation trigger
  }, []);

  return (
    <div className='stdab'>
      <div className={`stdab-left${animate ? ' slide-in-left' : ''}`}>
        <h1>Preparing to depart</h1>
        <h3>We're here to help set you up for your study abroad adventure</h3>

       
        <button className='stdy-btn'> contact IDP</button>
      </div>
      <div className={`stdab-right${animate ? ' slide-in-right' : ''}`}>
         <img
          src="https://www.idp.com/medias/pre-departure-support-from-idp.jpg?context=bWFzdGVyfGltYWdlc3w3MjY5NHxpbWFnZS9qcGVnfGg5My9oZTYvODg0NDI4OTU4OTI3OC9wcmUtZGVwYXJ0dXJlIHN1cHBvcnQgZnJvbSBpZHAuanBnfDEzYjU2YjQzYjU2YjQzYjU2YjQzYjU2YjQzYjU2YjQzYjU2YjQzYjU2YjQzYjU2YjQzYjU2YjQ"
          alt="Student packing a suitcase"
          className="stdab-img"
        />

        {/* Add your image or content here  */}
      </div>
    </div>
  )
}

export default Preparetodeparthero;
