import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Arriveandthrivehero.css'
const Arriveandthrivehero = () => {
  const [animate, setAnimate] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => setAnimate(true), 100); // slight delay for animation trigger
  }, []);

  return (
    <div className='stdab'>
      <div className={`stdab-left${animate ? ' slide-in-left' : ''}`}>
        <h1>Arrive and Thrive</h1>
        <h3>Learn how to make the most of your study abroad experience
Contact IDP</h3>
       
       <button
      className="stdy-btn"
      onClick={() => navigate("/contact")} // Must match the route path
    >
      Contact IDP
    </button>
      </div>
      <div className={`stdab-right${animate ? ' slide-in-right' : ''}`}>
         <img
        src="https://tse3.mm.bing.net/th/id/OIP.LTkGshUbm5gaBmtjd0zs_AHaE8?rs=1&pid=ImgDetMain&o=7&rm=3"
          alt="Students in a classroom"
          className="stdab-img"
        />

        {/* Add your image or content here  */}
      </div>
    </div>
  )
}

export default Arriveandthrivehero;
