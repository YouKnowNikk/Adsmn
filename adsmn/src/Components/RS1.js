import React, { useState } from 'react';
import './RS1.css'
import Progressbar from './Progressbar';
import Progressbar1 from '../Images/progress bar.png';
import celebration from '../Images/Celebrations(Bg).png';

import Otp from './Otp';

function RS1() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [otpPopup,setOtpPopup] = useState(false)
  const handlePhoneNumberChange = (event) => {
    const inputValue = event.target.value.replace(/[^\d]/g, ''); 
    setPhoneNumber(inputValue);
  };

  const handleNameChange = (event) => {
    const inputValue = event.target.value.replace(/[^A-Za-z ]/g, ''); 
    setName(inputValue);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleCheck1Change = () => {
    setCheck1(!check1);
  };

  const handleCheck2Change = () => {
    setCheck2(!check2);
  };
  const handleSubmit = () => {
    if (!validateEmail(email)) {
      alert('Please enter a valid email.');
    } else if (phoneNumber.length !== 10 || isNaN(phoneNumber)) {
      alert('Please enter a valid 10-digit phone number.');
    } else if (name.trim() === '' || email.trim() === '' || phoneNumber.trim() === ''||check1===false||check2===false) {
      alert('Please fill in all fields.');
    } else {
      
      setPhoneNumber('');
    setName('');
    setEmail('');
    setCheck1(false);
    setCheck2(false);
    otpPopupHandler()
    }
  };
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const otpPopupHandler = ()=>{
    setOtpPopup(true)
  }
  const closePopUp = ()=>{
    setOtpPopup(false)
  }
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center',minHeight:'100%' }}>
        <Progressbar image={Progressbar1} />
        <img className='celebration' src={celebration} alt='celebration' />
        <h4 style={{ color: 'white', marginTop: '-4.7rem', marginBottom: '10px' }}>Register to create</h4>
        <input
          className='RSinput RSinput1 '
          type="tel"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
        />
        <input
          className='RSinput RSinput2'
          // style={{width:'90%',padding:'15px'}}
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={handleNameChange}
        />
        <input
        // style={{width:'90%',padding:'15px'}}
          className='RSinput RSinput3'
          type="email"
          placeholder="Email ID"
          value={email}
          onChange={handleEmailChange}
        />
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '10px' }}>
          <label htmlFor="checkbox1" className="checkbox-label" style={{ fontSize: '10px', margin: '0 30px', textAlign: 'left', color: 'white' }}>
            <input
              type="checkbox"
              id="checkbox1"
              checked={check1}
              onChange={handleCheck1Change}
            />
            I accept Terms & Conditions and Privacy and Policy of Mondleze(Cadbury)
          </label>

          <label htmlFor="checkbox2" className="checkbox-label" style={{ fontSize: '10px', margin: '0 30px', textAlign: 'left', color: 'white' }}>
            <input
              style={{ width: '27px', height: '20px' }}
              type="checkbox"
              id="checkbox2"
              checked={check2}
              onChange={handleCheck2Change}
            />
            I would like to receive promotional communication from Mondleze(Cadbury) about its products and offers.
          </label>
          <div>
            <button
              style={{ padding: '12px 32px', backgroundColor: '#e7b464', color: '#340073', fontWeight: '700', borderRadius: '10px', marginTop: '1rem',cursor:'pointer'}}
              onClick={handleSubmit}
            >
              SUBMIT
            </button>
          </div>
          <div >
          {otpPopup?<Otp onClose={closePopUp}/>:null}
          </div>
        </div>
      </div>
    </>
  );
}

export default RS1;
