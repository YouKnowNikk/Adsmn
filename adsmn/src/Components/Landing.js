import React from 'react';
import finalImage from '../Images/Final_Mobile_UI1.jpg';
import './Landing.css'
function Landing() {
  return (
    <div className='landing-container'>
      <img className='landing-page-image' src={finalImage} alt='Landing page ' />
    </div>
  );
}

export default Landing;