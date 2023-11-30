import React, { useState } from 'react';
import './Navbar.css';
import cadburrylogo from '../Images/Cadbury Logo.png';
import logo2d from '../Images/2d logo.png';
import Hamburger from '../Images/Hamburger.png';
import HamCross from '../Images/Cross.png';
import maglenz from '../Images/MDLZ SMR Logo Reversed RGB 1.png';

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className='NavDiv'>
        <div>
          <img className='img1' src={cadburrylogo} alt='Cadbury Logo' />
          <img className='img2' src={logo2d} alt='2D Logo' />
        </div>
        <div className="container">
          <img
            src={Hamburger}
            alt="Hamburger"
            onClick={toggleMenu}
            className="hamburger-icon img3"
          />

          {menuOpen && (
            <>
              <div className="overlay" onClick={toggleMenu}></div>
              <div className="menu">
                <img
                  src={HamCross}
                  alt="Close"
                  onClick={toggleMenu}
                  className="close-icon"
                />  
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                  <p className=' link1' style={{ marginTop: '9.6rem' }}>How to Participate</p>
                  <p className='link link2' >Terms & Conditions</p>
                  <p className='link link3' >Privacy Policy</p>
                  <p className='link link4' >Contact Us</p>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: 'auto' }}>
                  <img src={maglenz} style={{ width: '6.25rem', marginRight: '2.8125rem' }} alt="Maglenz Logo" />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default NavBar;
