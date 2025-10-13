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
        src="https://tse3.mm.bing.net/th/id/OIP.LTkGshUbm5gaBmtjd0zs_AHaE8?rs=1&pid=ImgDetMain&o=7&rm=3"
          alt="Student packing a suitcase"
          className="stdab-img"
        />

        {/* Add your image or content here  */}
      </div>
    </div>
  )
}

export default Preparetodeparthero;
