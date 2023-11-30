import React, { useEffect, useState } from 'react';
import Progressbar from './Progressbar';
import Progressbar3 from '../Images/progress bar2.png';
import Headphone from '../Images/Headphone.png';
import balloon from '../Images/Balloon2.png';
import musicTone from '../Images/Purple Music Tone.png';
import calm from '../Images/Calm.png';
import romantic from '../Images/Romantic.png';
import funny from '../Images/Funny.png';
import happy from '../Images/Happy.png';
import motivationa from '../Images/Motivational.png';
import edm from '../Images/EDM.png';
import desi from '../Images/Desi.png';
import pop from '../Images/Pop.png';
import rock from '../Images/Rock.png';
import rap from '../Images/Rap.png';
import male from '../Images/MAle.png';
import female from '../Images/Female.png';
import { useNavigate } from 'react-router-dom';
function RS3() {
    const containerStyle = {
        marginTop: '-30px',
        fontSize: '16px',
        border: '1px solid #e7b464', // Border color
        borderRadius: '10px', // Border radius for top corners
    };
    const containerStyle2 = {
        marginTop: '30px',
        fontSize: '16px',
        border: '1px solid #e7b464',
        borderRadius: '10px',
    };

    const headingStyle = {
        color: '#340073',
        textAlign: 'center',
        backgroundColor: '#e7b464',
        borderTopLeftRadius: '10px',
        borderTopRightRadius: '10px',
        padding: '0.5rem',
        margin: '0',
    };
    const iconContainerStyle = {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
    };

    const iconWrapperStyle = {
        textAlign: 'center',
        cursor: 'pointer',
        marginBottom: '8px',
    };

    const iconStyle = {
        width: '40px',
        height: '40px',
        margin: '2px 0.5rem',
    };

    const iconStyle2 = {
        width: '125px',
        height: '60px',
        margin: '2px 0.5rem',
    };

    const iconText = {
        color: 'white',
        fontSize: '10px',
        marginBottom: '4px',
    };

    const [selectedMood, setSelectedMood] = useState(null);
    const [selectedGenre, setSelectedGenre] = useState(null);
    const [selectedSinger, setSelectedSinger] = useState(null);
    const [isProceedEnabled, setProceedEnabled] = useState(false);
    const navigate = useNavigate()
    const handleProceed = () => {
        console.log('Proceeding with selected values');
        setSelectedMood(null);
        setSelectedGenre(null);
        setSelectedSinger(null);
        setProceedEnabled(false);
        navigate('/rs4')
    };
    const selectedBorderStyle = {
        border: '2px solid #fff',
    };
    useEffect(() => {
        if (selectedMood && selectedGenre && selectedSinger) {
            setProceedEnabled(true);
        } else {
            setProceedEnabled(false);
        }
    }, [selectedMood, selectedGenre, selectedSinger]);
    
    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '100%', overflowX: 'hidden' }}>
                <Progressbar image={Progressbar3} />
                <p style={{ color: 'white', marginTop: '10px', alignItems: 'center', padding: '0 30px', textAlign: 'center', fontWeight: '600' }}>What would you like their song's vibe to be?</p>
                <div style={{ display: 'flex' }}>
                    <img src={musicTone} style={{ width: '70px', height: '60px', paddingLeft: '40px', marginTop: '180px' }} alt='music tone' />
                    <img src={Headphone} className='purpletonemusic' alt='headphone tone' style={{ width: '300px', marginTop: '-20px' }} />
                    <img src={balloon} style={{ width: '100px', height: '80px', paddingRight: '50px', marginTop: '40px' }} alt='balloon' />
                </div>

                <div style={containerStyle}>
                    <h5 style={headingStyle}>Mood</h5>
                    <div style={iconContainerStyle} className='moodContainer'>
                        <div style={{ ...iconWrapperStyle, ...(selectedMood === 'Happy' && selectedBorderStyle) }} onClick={() => setSelectedMood('Happy')}>
                            <img style={iconStyle} src={happy} alt="Happy" />
                            <div style={iconText}>Happy</div>
                        </div>
                        <div style={{ ...iconWrapperStyle, ...(selectedMood === 'Romantic' && selectedBorderStyle) }} onClick={() => setSelectedMood('Romantic')}>
                            <img style={iconStyle} src={romantic} alt="Romantic" />
                            <div style={iconText}>Romantic</div>
                        </div>
                        <div style={{ ...iconWrapperStyle, ...(selectedMood === 'Funny' && selectedBorderStyle) }} onClick={() => setSelectedMood('Funny')}>
                            <img style={iconStyle} src={funny} alt="Funny" />
                            <div style={iconText}>Funny</div>
                        </div>
                        <div style={{ ...iconWrapperStyle, ...(selectedMood === 'Motivational' && selectedBorderStyle) }} onClick={() => setSelectedMood('Motivational')}>
                            <img style={iconStyle} src={motivationa} alt="Motivational" />
                            <div style={iconText}>Motivational</div>
                        </div>
                        <div style={{ ...iconWrapperStyle, ...(selectedMood === 'Calm' && selectedBorderStyle) }} onClick={() => setSelectedMood('Calm')}>
                            <img style={iconStyle} src={calm} alt="Calm" />
                            <div style={iconText}>Calm</div>
                        </div>
                    </div>
                </div>

                <div style={containerStyle2}>
                    <h5 style={headingStyle}>Genre</h5>
                    <div style={iconContainerStyle} className='moodContainer'>
                        <div style={{ ...iconWrapperStyle, ...(selectedGenre === 'Rap' && selectedBorderStyle) }} onClick={() => setSelectedGenre('Rap')}>
                            <img style={iconStyle} src={rap} alt="Rap" />
                            <div style={iconText}>Rap</div>
                        </div>
                        <div style={{ ...iconWrapperStyle, ...(selectedGenre === 'Rock' && selectedBorderStyle) }} onClick={() => setSelectedGenre('Rock')}>
                            <img style={iconStyle} src={rock} alt="Rock" />
                            <div style={iconText}>Rock</div>
                        </div>
                        <div style={{ ...iconWrapperStyle, ...(selectedGenre === 'Pop' && selectedBorderStyle) }} onClick={() => setSelectedGenre('Pop')}>
                            <img style={iconStyle} src={pop} alt="Pop" />
                            <div style={iconText}>Pop</div>
                        </div>
                        <div style={{ ...iconWrapperStyle, ...(selectedGenre === 'Desi' && selectedBorderStyle) }} onClick={() => setSelectedGenre('Desi')}>
                            <img style={iconStyle} src={desi} alt="Desi" />
                            <div style={iconText}>Desi</div>
                        </div>
                        <div style={{ ...iconWrapperStyle, ...(selectedGenre === 'EDM' && selectedBorderStyle) }} onClick={() => setSelectedGenre('EDM')}>
                            <img style={iconStyle} src={edm} alt="EDM" />
                            <div style={iconText}>EDM</div>
                        </div>
                    </div>
                </div>

                <div style={containerStyle2}>
                    <h5 style={headingStyle}>Singer's voice</h5>
                    <div style={iconContainerStyle} className='moodContainer'>
                        <div style={{ ...iconWrapperStyle, ...(selectedSinger === 'Male' && selectedBorderStyle) }} onClick={() => setSelectedSinger('Male')}>
                            <img style={iconStyle2} src={male} alt="Male" />
                            <div style={iconText}>Male</div>
                        </div>
                        <div style={{ ...iconWrapperStyle, ...(selectedSinger === 'Female' && selectedBorderStyle) }} onClick={() => setSelectedSinger('Female')}>
                            <img style={iconStyle2} src={female} alt="Female" />
                            <div style={iconText}>Female</div>
                        </div>
                    </div>
                </div>

                <button
                style={{ padding: '12px 32px', backgroundColor: isProceedEnabled ? '#e7b464' : 'gray', color: '#340073', fontWeight: '700', borderRadius: '10px', marginTop: '1rem', cursor: isProceedEnabled ? 'pointer' : 'not-allowed', marginBottom: '10px' }}
                onClick={isProceedEnabled ? handleProceed : null}
                disabled={!isProceedEnabled}
            >
                Proceed
            </button>
            {!isProceedEnabled && (
                <p style={{ color: 'red' ,fontSize:'12px',marginBottom:'20px'}}>Please select all fields to proceed.</p>
            )}
            </div>
        </>
    );
}

export default RS3;
