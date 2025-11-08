import React, { useEffect, useState } from 'react';

const FontLoadingSpinner: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Check if the browser supports the Font Loading API
    if ('fonts' in document) {
      // Load all the fonts we're using
      Promise.all([
        document.fonts.load('1em Bungee'),
        document.fonts.load('1em "Bungee Shade"'),
        document.fonts.load('300 1em Quicksand'),
        document.fonts.load('400 1em Quicksand'),
        document.fonts.load('700 1em Quicksand'),
        document.fonts.load('200 1em Inconsolata'),
        document.fonts.load('400 1em Inconsolata'),
        document.fonts.load('700 1em Inconsolata'),
        document.fonts.load('100 1em "Roboto Mono"'),
        document.fonts.load('400 1em "Roboto Mono"'),
        document.fonts.load('700 1em "Roboto Mono"'),
        document.fonts.load('1em "Unica One"')
      ]).then(() => {
        setFontsLoaded(true);
        // Add a small delay before showing content for a smoother transition
        setTimeout(() => {
          setShowContent(true);
        }, 300);
      }).catch(() => {
        // If there's an error, still show content after a timeout
        setTimeout(() => {
          setFontsLoaded(true);
          setShowContent(true);
        }, 3000);
      });
    } else {
      // If Font Loading API is not supported, just show content
      setFontsLoaded(true);
      setShowContent(true);
    }
  }, []);

  return (
    <>
      {!fontsLoaded && (
        <div className="flex justify-center items-center h-screen">
          <div className="w-12 h-12 border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin"></div>
        </div>
      )}
      <div
        className={`transition-opacity duration-1000 ${showContent ? 'opacity-100' : 'opacity-0'}`}
        style={{ visibility: showContent ? 'visible' : 'hidden' }}
      >
        {children}
      </div>
    </>
  );
};

export default FontLoadingSpinner; 