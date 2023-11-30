import React, { useState } from 'react'
import Progressbar from './Progressbar'
import Progressbar2 from '../Images/progress bar1.png'
import capGift from '../Images/Cap&Gift.png'
import asset from '../Images/Asset 1.png';
import balloon from '../Images/Balloon.png'
import {useNavigate} from 'react-router-dom'
import './RS2.css';
function RS2() {
    const navigate  = useNavigate()
    const initialFormData = {
        name: '',
        age: null,
        gender: 'male',
      };
    const [formData, setFormData] = useState(initialFormData);
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.name.trim() === '' || formData.age <= 0) {
          alert('Please fill in all fields with valid information.');
          return;
        }
        setFormData(initialFormData);
        navigate('/rs3')
      };
  return (
    <>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center',minHeight:'100%' }}>
        <Progressbar image = {Progressbar2} />
        <p style={{color:'white',marginTop:'10px'}}>Tell us about your loved one...</p>
        <div style={{display:'flex'}} >
        <img src={asset} style={{width:"40px",height:'80px',marginTop:'100px',paddingLeft:'20px'}} alt='sparkling element' />
        <img src={capGift} alt='cap and gift' style={{marginTop:'-10px',marginLeft:'30px'}}/>
        <img src={balloon} style={{width:"60px",height:'60px',marginTop:'130px',paddingRight:'20px'}} alt='ballon'/>
        </div>
        <div style={{display:'flex',flexDirection:"column",fontSize:'16px',color:'white',fontWeight:'700',alignItems:'center',width:'80%'}}>
        <label htmlFor="name" style={{marginBottom:'0.6rem'}}>Their Name</label>
        <input
        className='input input1'
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div style={{display:'flex',flexDirection:"column",fontSize:'16px',color:'white',fontWeight:'700',alignItems:'center',width:'80%'}}>
        <label htmlFor="age" style={{marginBottom:'0.6rem'}}>How old will they be this birthday</label>
        <input
        className='input input1'
          type="number"
          id="age"
          name="age"
          value={formData.age} 
          onChange={handleChange}
          required
        />
      </div>

      <div style={{display:'flex',flexDirection:"column",fontSize:'16px',color:'white',fontWeight:'700',alignItems:'center',width:'80%'}}>
        <label htmlFor="gender" style={{marginBottom:'0.6rem'}}>Gender</label>
        <select
        className='input input1 select-input'
          id="gender"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
      <button
              style={{ padding: '12px 32px', backgroundColor: '#e7b464', color: '#340073', fontWeight: '700', borderRadius: '10px', marginTop: '1rem',cursor:'pointer'}}
              onClick={handleSubmit}
            >
              Proceed
            </button>
    </div>
    </>
  )
}

export default RS2