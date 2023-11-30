import React, { useEffect, useState } from 'react'
import loaderImage from '../Images/Final_Mobile_UI13[2] (1).jpg'
import finalImage from '../Images/Final_Mobile_UI14[2] (1).jpg'
import './RS6.css'
function RS6() {
    const [data, setData] = useState(false);
  
    useEffect(() => {
      const timeout = setTimeout(() => {
        setData(true);
      }, 2000);
      return () => clearTimeout(timeout); 

    }, []);
  return (
    <>
    {!data?(<div className='landing-container1'>
        <img className='landing-page-image1' src={loaderImage} alt='loader'/>
        </div>):(
            
            <div className='landing-container1'>
        <img className='landing-page-image1' src={finalImage} alt='loader'/>
        </div>
        )}
    </>
  )
}

export default RS6