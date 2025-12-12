import React, { useEffect, useState } from 'react'
import './Arriveandthrivehero.css'
const Arriveandthrivehero = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 100); // slight delay for animation trigger
  }, []);

  return (
    <div className='stdab'>
      <div className={`stdab-left${animate ? ' slide-in-left' : ''}`}>
        <h1>Arrive and Thrive</h1>
        <h3>Learn how to make the most of your study abroad experience
Contact IDP</h3>
       
        <button className='stdy-btn'> contact IDP</button>
      </div>
      <div className={`stdab-right${animate ? ' slide-in-right' : ''}`}>
         <img
          src="https://www.idp.com/medias/students-in-a-classroom.jpg?context=bWFzdGVyfGltYWdlc3w5NjYyN3xpbWFnZS9qcGVnfGg2MC9oYjAvODg0NDI4OTI2MjYyMi9zdHVkZW50cy1pbi1hLWNsYXNzcm9vbS5qcGd8ZDYwZjYwZjYwZjYwZjYwZjYwZjYwZjYwZjYwZjYwZjYwZjYwZjYwZjYwZjYwZjYwZjYwZjYwZjYwZjYwZjYwZjY"
          alt="Students in a classroom"
          className="stdab-img"
        />

        {/* Add your image or content here  */}
      </div>
    </div>
  )
}

export default Arriveandthrivehero;
