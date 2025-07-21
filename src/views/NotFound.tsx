import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  const [counter, setCounter] = useState(0);
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(prevCounter => prevCounter + 1);
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);
  
  const handleSecretClick = () => {
    setShowEasterEgg(!showEasterEgg);
  };
  
  // ASCII art for our 404 page
  const asciiArt = `
  +-+-+-+-+ +-+-+-+-+-+-+-+-+
  |P|A|G|E| |N|O|T|F|O|U|N|D|
  +-+-+-+-+ +-+-+-+-+-+-+-+-+
  `;
  
  // Funny console messages
  useEffect(() => {
    console.log("%c 🐛 You found a bug! Just kidding, this 404 page is intentional.", 
      "color: #00ffaa; font-size: 14px; font-weight: bold;");
    console.log("%c Try clicking on the ASCII art for an easter egg!", 
      "color: #ff00aa; font-size: 12px;");
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black to-gray-900 p-4">
      <div className="bg-panel rounded-lg shadow-lg p-8 max-w-2xl w-full text-center border-2 border-azure">
        <h1 className="text-lime text-6xl font-bungee mb-4">404</h1>

        <pre 
          className="font-mono text-white bg-black p-4 rounded-md cursor-pointer text-xs sm:text-sm my-4 overflow-x-auto"
          onClick={handleSecretClick}
        >
          {asciiArt}
        </pre>
      
        
        {showEasterEgg && (
          <div className="bg-black/50 p-4 rounded-md text-lime mb-6 font-mono text-sm animate-pulse">
            <p>// Easter egg activated!</p>
            <p>// You've been staring at this error for {counter} seconds.</p>
            <p>// Life is too short to debug 404s.</p>
          </div>
        )}
        
        <Link 
          to="/" 
          className="bg-azure text-white font-bold py-2 px-6 rounded-md inline-block hover:bg-azure/80 transition-colors"
        >
          return home
        </Link>
      </div>
    </div>
  );
};

export default NotFound; 