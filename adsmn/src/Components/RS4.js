import React, { useState } from 'react';
import Progressbar from './Progressbar';
import Progressbar3 from '../Images/progress bar3.png';
import message from '../Images/Message.png';
import asset from '../Images/Asset 1.png';
import balloon from '../Images/Balloon.png';
import './RS4.css'
import {useNavigate} from 'react-router-dom'
function RS4() {
  const [showMore, setShowMore] = useState(false);
  const [petName, setPetName] = useState('');
  const [makesAngry, setMakesAngry] = useState('');
  const [funniestThing, setFunniestThing] = useState('');
  const [makesSmile, setMakesSmile] = useState('');
  const [favoriteMovie, setFavoriteMovie] = useState('');
  const [favoriteSports, setFavoriteSports] = useState('');
  const navigate = useNavigate();
  const handleProceed = () => {
    if (showMore) {

      if (!petName || !makesAngry || !funniestThing || !makesSmile || !favoriteMovie || !favoriteSports) {
        
        alert('All fields are required. Please fill in all fields.');
      } else {
        console.log('with more states');
        setPetName('');
        setMakesAngry('');
        setFunniestThing('');
        setMakesSmile('');
        setFavoriteMovie('');
        setFavoriteSports('');
        navigate('/rs5')
      }
    } else {

      if (!petName || !makesAngry || !funniestThing) {
       
        alert('All fields are required. Please fill in all fields.');
      } else {
        console.log('with no more states');
        setPetName('');
        setMakesAngry('');
        setFunniestThing('');
        navigate('/rs5')
      }
    }
  };
  const handleAnswerMore = () => {
    setShowMore(true);
  };

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '100%', overflowX: 'hidden' }}>
        <Progressbar image={Progressbar3} />
        <p style={{ color: 'white', marginTop: '10px', alignItems: 'center', padding: '0 30px', textAlign: 'center', fontWeight: '600' }}>Tell us a little more about them...</p>
        <div style={{ display: 'flex' }}>
          <img src={asset} style={{ width: '70px', height: '60px', paddingLeft: '40px', marginTop: '160px' }} alt='music tone' />
          <img src={message} className='purpletonemusic' alt='headphone tone' style={{ width: '300px', marginTop: '-20px' }} />
          <img src={balloon} style={{ width: '100px', height: '80px', paddingRight: '50px', marginTop: '30px' }} alt='balloon' />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '90%' }}>
          <div className='outerdiv'>
            <p style={{ color: 'white', marginTop: '-35px', alignItems: 'center', padding: '0 30px', textAlign: 'center', fontWeight: '600', fontSize: '16px' }}>What's your pet name for them</p>
            <input type="text" placeholder="xxxxxxxxxxx" style={{ width: '100%', marginBottom: '0' }} className='input input1' value={petName} onChange={(e) => setPetName(e.target.value)} />
            <p style={{ color: 'white', marginTop: '10px', alignItems: 'center', padding: '0 30px', textAlign: 'center', fontWeight: '600', fontSize: '16px' }}>What makes them angry?</p>
            <input type="text" placeholder="xxxxxxxxxxx" style={{ width: '100%', marginBottom: '0' }} className='input input2' value={makesAngry} onChange={(e) => setMakesAngry(e.target.value)} />
            <p style={{ color: 'white', marginTop: '10px', alignItems: 'center', padding: '0 30px', textAlign: 'center', fontWeight: '600', fontSize: '16px' }}>What's the funniest thing they do?</p>
            <input type="text" placeholder="xxxxxxxxxxx" style={{ width: '100%', marginBottom: '0' }} className='input input3' value={funniestThing} onChange={(e) => setFunniestThing(e.target.value)} />
            {showMore && (
              <>
                <p style={{ color: 'white', marginTop: '10px', alignItems: 'center', padding: '0 30px', textAlign: 'center', fontWeight: '600', fontSize: '16px' }}>What makes them smile?</p>
                <input type="text" placeholder="xxxxxxxxxxx" style={{ width: '100%', marginBottom: '0' }} className='input input4' value={makesSmile} onChange={(e) => setMakesSmile(e.target.value)} />
                <p style={{ color: 'white', marginTop: '10px', alignItems: 'center', padding: '0 30px', textAlign: 'center', fontWeight: '600', fontSize: '16px' }}>What's their favourite movie?</p>
                <input type="text" placeholder="xxxxxxxxxxx" style={{ width: '100%', marginBottom: '0' }} className='input input5' value={favoriteMovie} onChange={(e) => setFavoriteMovie(e.target.value)} />
                <p style={{ color: 'white', marginTop: '10px', alignItems: 'center', padding: '0 30px', textAlign: 'center', fontWeight: '600', fontSize: '16px' }}>Their favourite sports? </p>
                <input type="text" placeholder="xxxxxxxxxxx" style={{ width: '100%', marginBottom: '0' }} className='input input6' value={favoriteSports} onChange={(e) => setFavoriteSports(e.target.value)} />
              </>
            )}
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>

          <button onClick={!showMore ? handleAnswerMore : null}
            disabled={showMore} style={{
              padding: '12px 24px',
              backgroundColor: showMore ? '#d8dad8' : '#ab89e4',
              color: showMore ? '#929696' : 'white',
              fontWeight: '700',
              borderRadius: '10px',
              marginTop: '1rem',
              cursor: showMore ? 'not-allowed' : 'pointer',
              marginRight: '15px'
            }}>
            Answer more
          </button>
          <button style={{
            padding: '12px 32px',
            backgroundColor: '#e7b464',
            color: '#340073',
            fontWeight: '700',
            borderRadius: '10px',
            marginTop: '1rem',
            cursor: 'pointer'
          }} onClick={handleProceed}>
            Proceed
          </button>
        </div>
      </div>
    </>
  );
}

export default RS4;
