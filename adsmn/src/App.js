import { useEffect, useState } from 'react';
import './App.css';
import Landing from './Components/Landing';
import MainPage from './Components/MainPage';

function App() {
  const [showImage, setShowImage] = useState(false);
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowImage(false);
    }, 2000);

    return () => clearTimeout(timeout); // Cleanup on unmount or component re-render

  }, []);
  return (
    <>
    {showImage?<Landing />:<MainPage />}
    </>
  );
}

export default App;
