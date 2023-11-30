import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import {useNavigate} from 'react-router-dom'
const otpRoot = document.getElementById('otp');

function Otp({ onClose }) {
    const navigate = useNavigate();
    const [otp, setOtp] = useState(['', '', '', '']);
    const correctOtp = '1234';
    const handleOtpChange = (index, value) => {
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);
        if (index < 3 && value !== '') {
            document.getElementById(`otpInput-${index + 1}`).focus();
        }
    };
    const handleSubmit = () => {
        const enteredOtp = otp.join('');
        if (enteredOtp === correctOtp) {
            onClose();
            navigate('/rs2');
        } else {
            alert('Incorrect OTP. Please try again.');
        }
    };
    return ReactDOM.createPortal(
        <>
            <div
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    backdropFilter: 'blur(5px)',
                    zIndex: '99',
                }}
            ></div>

            <div
                style={{
                    position: 'fixed',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    zIndex: '100',
                    background: 'white',
                    padding: '20px',
                    width: '200px',
                    height: '200px',
                    color: '#340072',
                    borderRadius: '10px',
                }}
            >
                <h6 style={{ textAlign: 'center' }}>Enter OTP</h6>
                <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
                    {otp.map((digit, index) => (
                        <input
                            key={index}
                            id={`otpInput-${index}`}
                            type="text"
                            maxLength="1"
                            style={{ width: '30px', height: '30px', fontSize: '20px', textAlign: 'center', border: '1px solid #ccc', backgroundColor: '#340072', color: 'white' }}
                            value={digit}
                            onChange={(e) => handleOtpChange(index, e.target.value)}
                        />
                    ))}
                </div>
                <p style={{ fontSize: '16px', fontWeight: '600', textDecoration: 'underline', textAlign: 'right', marginRight: '2px', marginTop: '4px', cursor: 'pointer' }}>Resend OTP</p>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '10px' }}>
                    <button
                        style={{ padding: '12px 32px',  backgroundColor: '#e7b464', color: '#340073', fontWeight: '700', borderRadius: '10px', cursor: 'pointer' }}
                        onClick={handleSubmit}
                    >
                        SUBMIT
                    </button>
                </div>
            </div>
        </>,
        otpRoot
    );
}

export default Otp;
