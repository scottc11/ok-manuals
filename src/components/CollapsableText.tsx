import React, { useState, useRef, useEffect } from 'react';

interface CollapsableTextProps {
  children: React.ReactNode;
  height?: number;
  className?: string;
}

const CollapsableText: React.FC<CollapsableTextProps> = ({
  children,
  height = 100,
  className = '',
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkOverflow = () => {
      if (contentRef.current) {
        setIsOverflowing(contentRef.current.scrollHeight > height);
      }
    };

    checkOverflow();
    window.addEventListener('resize', checkOverflow);
    return () => window.removeEventListener('resize', checkOverflow);
  }, [height, children]);

  return (
    <div className={`relative ${className}`}>
      {isOverflowing && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="absolute top-0 right-0 text-blue-600 hover:text-blue-800 text-sm font-medium px-2 py-1 rounded-bl"
        >
          {isExpanded ? 'Show less' : 'Show more'}
        </button>
      )}
      <div
        ref={contentRef}
        style={{
          maxHeight: isExpanded ? 'none' : `${height}px`,
          overflow: 'hidden',
          transition: 'max-height 0.3s ease-out',
        }}
      >
        {children}
        {!isExpanded && isOverflowing && (
          <div
            className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
            style={{
              background: 'linear-gradient(to bottom, transparent, white)',
            }}
          />
        )}
      </div>
    </div>
  );
};

export default CollapsableText; 