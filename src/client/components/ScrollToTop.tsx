import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

type ScrollToTopProps = {
  containerId?: string;
};

/**
 * ScrollToTop
 * Listens for route changes and resets scroll position to the top.
 * It targets a specific scroll container by id (default: 'app-scroll-container').
 * If that container is not present or not scrollable, it falls back to the window.
 */
const ScrollToTop: React.FC<ScrollToTopProps> = ({ containerId = 'app-scroll-container' }) => {
  const location = useLocation();

  useEffect(() => {
    // On every route change, reset scroll position of the primary scroll container.
    // If the container does not exist or cannot be scrolled, fall back to window.
    const container = document.getElementById(containerId);
    if (container && typeof container.scrollTo === 'function') {
      container.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }
    // Depend on pathname and search to run when the route actually changes.
  }, [location.pathname, location.search, containerId]);

  return null;
};

export default ScrollToTop;


