import React from 'react'
import './Progressbar.css'
function Progressbar(props) {
  return (
    <>
    <div className='progress'>
        <img  src={props.image} alt='progresssbar'/>
    </div>
    </>
  )
}

export default Progressbar