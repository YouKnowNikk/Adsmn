import React from 'react'
import Progressbar from './Progressbar';
import Progressbar5 from '../Images/progress bar4.png';
import { useNavigate } from 'react-router-dom';
import './RS5.css'
function RS5() {
  const navigate = useNavigate()
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '100%', overflowX: 'hidden' }}>
        <Progressbar image={Progressbar5} />
        <p style={{ color: 'white', marginTop: '10px', alignItems: 'center', padding: '0 30px', textAlign: 'center', fontWeight: '600' }}>Your song lyrics are ready!</p>
        <div className="scrollable-div">
          <p>Happy Birthday, it's your special day,
            Time to celebrate, in a big, grand way.
            Another year older, but that's just fine,
            You're aging like fine wine.


            So blow out the candles, make a wish,
            Dance like no one's watching, dish by dish.
            Eat the cake, enjoy the cheer,
            It's your birthday, have no fear.


            You're the star, center stage,
            With each passing year, you engage.
            Candles flicker, the room's a glow,
            As we sing, let the joy flow.


            So blow out the candles, make a wish,
            Dance like no one's watching, dish by dish.
            Eat the cake, enjoy the cheer,
            It's your birthday, have no fear.


            Gifts and laughter, hugs so tight,
            Friends and family, in the soft moonlight.
            Memories made, for years to come,
            Happy Birthday, you're second to none.</p>
          A year wiser, a year bolder,
          Wrapped in joy, like a cozy shoulder.
          A toast to you, let the laughter ring,
          May your happiness take flight and sing.

          So blow out the candles, make a wish,
          Dance like no one's watching, dish by dish.
          Eat the cake, enjoy the cheer,
          It's your birthday, have no fear.


          Happy Birthday, in the spotlight's gleam,
          May your year ahead be a beautiful dream.
          With love and joy, and a song so sweet,
          Here's to you, in this birthday feat!
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>

          <button 
            style={{
              padding: '12px 24px',
              backgroundColor:  '#ab89e4',
              color:  'white',
              fontWeight: '700',
              borderRadius: '10px',
              marginTop: '1rem',
              cursor:  'pointer',
              marginRight: '15px'
            }}>
            Recreate Lyrics
          </button>
          <button style={{
            padding: '12px 32px',
            backgroundColor: '#e7b464',
            color: '#340073',
            fontWeight: '700',
            borderRadius: '10px',
            marginTop: '1rem',
            cursor: 'pointer'
          }} onClick={()=>{navigate('/rs6')}} >
            Create Song
          </button>
        </div>
      </div>
    </>
  )
}

export default RS5