import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'; // ✅ Import navigate hook
import './WhereStdhero.css'
const WhereStdhero = () => {
  const [animate, setAnimate] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => setAnimate(true), 100); // slight delay for animation trigger
  }, []);

  return (
    <div className='stda'>
      <div className={`stdab-left${animate ? ' slide-in-left' : ''}`}>
        <h1> Where to study abroad – Top destinations for international students</h1>
        <h3>We're here to help you navigate through your study abroad options with ease. From choosing a destination through to course advice
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
          alt="Girl studying with open book"
          className="stdab-img"
        />
        
        {/* Add your image or content here  */}
      </div>
    </div>
  )
}

export default WhereStdhero;