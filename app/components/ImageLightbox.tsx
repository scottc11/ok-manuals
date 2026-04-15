"use client";

import { useState, useEffect, useCallback, useRef } from "react";

interface ImageLightboxProps {
  images: string[];
  productName: string;
  className?: string;
}

export default function ImageLightbox({
  images,
  productName,
  className = "",
}: ImageLightboxProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxImageIndex, setLightboxImageIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const displayImages = images.length > 0 ? images : [];
  const mainImage = displayImages[selectedImageIndex];

  const navigateNext = useCallback(() => {
    setLightboxImageIndex((prev) =>
      prev === displayImages.length - 1 ? 0 : prev + 1,
    );
  }, [displayImages.length]);

  const navigatePrevious = useCallback(() => {
    setLightboxImageIndex((prev) =>
      prev === 0 ? displayImages.length - 1 : prev - 1,
    );
  }, [displayImages.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isLightboxOpen) return;
      if (e.key === "Escape") setIsLightboxOpen(false);
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        navigatePrevious();
      }
      if (e.key === "ArrowRight") {
        e.preventDefault();
        navigateNext();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isLightboxOpen, navigateNext, navigatePrevious]);

  useEffect(() => {
    document.body.style.overflow = isLightboxOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isLightboxOpen]);

  const openLightbox = (idx: number) => {
    setLightboxImageIndex(idx);
    setIsLightboxOpen(true);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) setIsLightboxOpen(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!isLightboxOpen) return;
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!isLightboxOpen || !touchStartX.current || !touchStartY.current) return;
    const deltaX = touchStartX.current - e.changedTouches[0].clientX;
    const deltaY = touchStartY.current - e.changedTouches[0].clientY;
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
      deltaX > 0 ? navigateNext() : navigatePrevious();
    }
    touchStartX.current = null;
    touchStartY.current = null;
  };

  if (displayImages.length === 0) {
    return (
      <div
        className={`flex items-center justify-center aspect-square rounded-lg bg-gray-800 ${className}`}
      >
        <div className="text-gray-400 text-6xl">📦</div>
      </div>
    );
  }

  return (
    <>
      <div className={className}>
        <div className="aspect-square rounded-lg overflow-hidden flex items-center justify-center mb-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={mainImage}
            alt={productName}
            className="w-full h-full object-contain cursor-pointer hover:scale-105 transition-transform duration-200"
            onClick={() => openLightbox(selectedImageIndex)}
          />
        </div>

        {displayImages.length > 1 && (
          <div className="grid grid-cols-4 gap-2 sm:gap-4">
            {displayImages.map((image, index) => (
              <div
                key={index}
                className={`aspect-square rounded-lg overflow-hidden flex items-center justify-center cursor-pointer transition-colors border-2 ${
                  selectedImageIndex === index
                    ? "border-white bg-gray-700"
                    : "border-gray-800 bg-gray-800 hover:bg-gray-700 hover:border-gray-600"
                }`}
                onClick={() => setSelectedImageIndex(index)}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={image}
                  alt={`${productName} - Image ${index + 1}`}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        )}
      </div>

      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
          onClick={handleBackdropClick}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <button
            onClick={() => setIsLightboxOpen(false)}
            className="absolute top-4 right-4 z-10 text-white hover:text-gray-300 transition-colors p-2"
            aria-label="Close lightbox"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="absolute top-4 left-4 z-10 text-white bg-black bg-opacity-50 px-3 py-1 rounded-lg">
            {lightboxImageIndex + 1} / {displayImages.length}
          </div>

          {displayImages.length > 1 && (
            <button
              onClick={navigatePrevious}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 text-white hover:text-gray-300 transition-colors p-2 bg-black bg-opacity-30 rounded-full hover:bg-opacity-50"
              aria-label="Previous image"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {displayImages.length > 1 && (
            <button
              onClick={navigateNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 text-white hover:text-gray-300 transition-colors p-2 bg-black bg-opacity-30 rounded-full hover:bg-opacity-50"
              aria-label="Next image"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}

          <div
            className="absolute inset-0 flex items-center justify-center p-4 sm:p-8"
            style={{ width: "100vw", height: "100vh" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={displayImages[lightboxImageIndex]}
              alt={`${productName} - Image ${lightboxImageIndex + 1}`}
              className="object-contain"
              style={{ maxWidth: "calc(100vw - 2rem)", maxHeight: "calc(100vh - 2rem)" }}
            />
          </div>

          {displayImages.length > 1 && (
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 hidden sm:flex gap-2 bg-black bg-opacity-50 p-3 rounded-lg max-w-[90vw] overflow-x-auto">
              {displayImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setLightboxImageIndex(index)}
                  className={`w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 border-2 transition-colors ${
                    lightboxImageIndex === index
                      ? "border-white"
                      : "border-transparent hover:border-gray-400"
                  }`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={image}
                    alt={`${productName} thumbnail ${index + 1}`}
                    className="w-full h-full object-contain"
                  />
                </button>
              ))}
            </div>
          )}

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 sm:hidden text-white text-sm bg-black bg-opacity-50 px-3 py-1 rounded-lg">
            Swipe or use arrows to navigate
          </div>
        </div>
      )}
    </>
  );
}
