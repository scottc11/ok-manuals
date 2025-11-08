import React from 'react';

interface YouTubeVideoProps {
    videoId: string; // YouTube video ID (e.g., "dQw4w9WgXcQ")
    title?: string; // Accessible title for the video
    aspectRatio?: '16:9' | '4:3' | '1:1'; // Different aspect ratios
    autoplay?: boolean; // Enable autoplay
    muted?: boolean; // Mute the video
    controls?: boolean; // Show/hide player controls
    className?: string; // Additional CSS classes
    width?: string; // Custom width (defaults to full width)
    height?: string; // Custom height (overrides aspect ratio)
}

const YouTubeVideo = ({
    videoId,
    title = "YouTube Video",
    aspectRatio = '16:9',
    autoplay = false,
    muted = false,
    controls = true,
    className = '',
    width = 'w-full',
    height
}: YouTubeVideoProps) => {
    
    // Build YouTube embed URL with parameters
    const getEmbedUrl = () => {
        const baseUrl = `https://www.youtube.com/embed/${videoId}`;
        const params = new URLSearchParams();
        
        if (autoplay) params.append('autoplay', '1');
        if (muted) params.append('mute', '1');
        if (!controls) params.append('controls', '0');
        
        const queryString = params.toString();
        return queryString ? `${baseUrl}?${queryString}` : baseUrl;
    };
    
    // Get aspect ratio classes
    const getAspectRatioClass = () => {
        if (height) return ''; // Custom height overrides aspect ratio
        
        switch (aspectRatio) {
            case '4:3':
                return 'aspect-[4/3]';
            case '1:1':
                return 'aspect-square';
            case '16:9':
            default:
                return 'aspect-video'; // Tailwind's 16:9 aspect ratio
        }
    };
    
    const containerClasses = `
        ${width} 
        ${getAspectRatioClass()} 
        rounded-lg 
        overflow-hidden 
        shadow-lg 
        ${className}
    `.trim().replace(/\s+/g, ' ');
    
    const iframeStyle = height ? { height, width: '100%' } : {};
    
    return (
        <div className={containerClasses}>
            <iframe
                src={getEmbedUrl()}
                title={title}
                style={iframeStyle}
                className={`w-full ${height ? '' : 'h-full'}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
            />
        </div>
    );
};

export default YouTubeVideo; 