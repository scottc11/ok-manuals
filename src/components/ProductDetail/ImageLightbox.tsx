import React, { useState, useEffect, useCallback, useRef } from 'react';

interface ImageLightboxProps {
  images: string[];
  productName: string;
  className?: string;
}

const ImageLightbox: React.FC<ImageLightboxProps> = ({ 
  images, 
  productName, 
  className = "" 
}) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxImageIndex, setLightboxImageIndex] = useState(0);
  
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const displayImages = images.length > 0 ? images : [];
  const mainImage = displayImages[selectedImageIndex];
  const additionalImages = displayImages.slice(1);

  // Handle keyboard navigation
  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (!isLightboxOpen) return;

    switch (event.key) {
      case 'Escape':
        setIsLightboxOpen(false);
        break;
      case 'ArrowLeft':
        event.preventDefault();
        navigatePrevious();
        break;
      case 'ArrowRight':
        event.preventDefault();
        navigateNext();
        break;
    }
  }, [isLightboxOpen]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (isLightboxOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isLightboxOpen]);

  const openLightbox = (imageIndex: number) => {
    setLightboxImageIndex(imageIndex);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  const navigateNext = () => {
    setLightboxImageIndex((prevIndex) => 
      prevIndex === displayImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const navigatePrevious = () => {
    setLightboxImageIndex((prevIndex) => 
      prevIndex === 0 ? displayImages.length - 1 : prevIndex - 1
    );
  };

  const handleBackdropClick = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) {
      closeLightbox();
    }
  };

  // Touch/Swipe handlers for mobile navigation
  const handleTouchStart = (event: React.TouchEvent) => {
    if (!isLightboxOpen) return;
    
    const touch = event.touches[0];
    touchStartX.current = touch.clientX;
    touchStartY.current = touch.clientY;
  };

  const handleTouchEnd = (event: React.TouchEvent) => {
    if (!isLightboxOpen || !touchStartX.current || !touchStartY.current) return;
    
    const touch = event.changedTouches[0];
    const touchEndX = touch.clientX;
    const touchEndY = touch.clientY;
    
    const deltaX = touchStartX.current - touchEndX;
    const deltaY = touchStartY.current - touchEndY;
    
    // Only trigger swipe if horizontal movement is greater than vertical
    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      const minSwipeDistance = 50;
      
      if (deltaX > minSwipeDistance) {
        // Swiped left - go to next image
        navigateNext();
      } else if (deltaX < -minSwipeDistance) {
        // Swiped right - go to previous image
        navigatePrevious();
      }
    }
    
    touchStartX.current = null;
    touchStartY.current = null;
  };

  if (displayImages.length === 0) {
    return (
      <div className={`flex items-center justify-center aspect-square rounded-lg bg-gray-800 ${className}`}>
        <div className="text-gray-400 text-6xl">📦</div>
      </div>
    );
  }

  return (
    <>
      <div className={className}>
        {/* Main Image */}
        <div className="aspect-square rounded-lg overflow-hidden flex items-center justify-center mb-4">
          <img
            src={mainImage}
            alt={productName}
            className="w-full h-full object-contain cursor-pointer hover:scale-105 transition-transform duration-200"
            onClick={() => openLightbox(selectedImageIndex)}
          />
        </div>

        {/* Additional Images Grid */}
        {additionalImages.length > 0 && (
          <div className="grid grid-cols-2 gap-2 sm:gap-4">
            {additionalImages.map((image, index) => {
              const actualIndex = index + 1; // Since we sliced off the first image
              return (
                <div
                  key={index}
                  className="aspect-square rounded-lg overflow-hidden flex items-center justify-center bg-gray-800 cursor-pointer hover:bg-gray-700 transition-colors"
                  onClick={() => {
                    setSelectedImageIndex(actualIndex);
                    openLightbox(actualIndex);
                  }}
                >
                  <img
                    src={image}
                    alt={`${productName} - Image ${index + 2}`}
                    className="w-full h-full object-contain"
                  />
                </div>
              );
            })}
          </div>
        )}

        {/* Thumbnail indicators for main image selection */}
        {displayImages.length > 1 && (
          <div className="flex justify-center mt-4 gap-2">
            {displayImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setSelectedImageIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  selectedImageIndex === index 
                    ? 'bg-white' 
                    : 'bg-gray-600 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
          onClick={handleBackdropClick}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-10 text-white hover:text-gray-300 transition-colors p-2"
            aria-label="Close lightbox"
          >
            <svg 
              className="w-8 h-8" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M6 18L18 6M6 6l12 12" 
              />
            </svg>
          </button>

          {/* Image Counter */}
          <div className="absolute top-4 left-4 z-10 text-white bg-black bg-opacity-50 px-3 py-1 rounded-lg">
            {lightboxImageIndex + 1} / {displayImages.length}
          </div>

          {/* Previous Button */}
          {displayImages.length > 1 && (
            <button
              onClick={navigatePrevious}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 text-white hover:text-gray-300 transition-colors p-2 bg-black bg-opacity-30 rounded-full hover:bg-opacity-50"
              aria-label="Previous image"
            >
              <svg 
                className="w-8 h-8" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M15 19l-7-7 7-7" 
                />
              </svg>
            </button>
          )}

          {/* Next Button */}
          {displayImages.length > 1 && (
            <button
              onClick={navigateNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 text-white hover:text-gray-300 transition-colors p-2 bg-black bg-opacity-30 rounded-full hover:bg-opacity-50"
              aria-label="Next image"
            >
              <svg 
                className="w-8 h-8" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M9 5l7 7-7 7" 
                />
              </svg>
            </button>
          )}

          {/* Main Lightbox Image */}
          <div className="max-w-[90vw] max-h-[90vh] flex items-center justify-center p-4">
            <img
              src={displayImages[lightboxImageIndex]}
              alt={`${productName} - Image ${lightboxImageIndex + 1}`}
              className="max-w-full max-h-full object-contain"
            />
          </div>

          {/* Thumbnail Strip - Desktop Only */}
          {displayImages.length > 1 && (
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 hidden sm:flex gap-2 bg-black bg-opacity-50 p-3 rounded-lg max-w-[90vw] overflow-x-auto">
              {displayImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setLightboxImageIndex(index)}
                  className={`w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 border-2 transition-colors ${
                    lightboxImageIndex === index 
                      ? 'border-white' 
                      : 'border-transparent hover:border-gray-400'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${productName} thumbnail ${index + 1}`}
                    className="w-full h-full object-contain"
                  />
                </button>
              ))}
            </div>
          )}

          {/* Mobile Touch Instructions */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 sm:hidden text-white text-sm bg-black bg-opacity-50 px-3 py-1 rounded-lg">
            Swipe or use arrows to navigate
          </div>
        </div>
      )}
    </>
  );
};

export default ImageLightbox; 