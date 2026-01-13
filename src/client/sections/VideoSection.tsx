import React from "react";
import Section from "../components/Section/Section";
import SectionHeading from "../components/SectionHeading/SectionHeading";
import SectionSubheading from "../components/SectionSubHeading/SectionSubHeading";
import YouTubeVideo from "../components/YouTubeVideo/YouTubeVideo";

interface VideoSectionProps {
    videoId: string;
    title?: string;
    backgroundColor?: string; // Tailwind color class
}

const VideoSection = ({ videoId, title, backgroundColor }: VideoSectionProps) => {
    return (
        <div className={`${backgroundColor}`}>
            <Section>
                {title && <SectionHeading title={title} />}
                <YouTubeVideo videoId={videoId} title={title} controls={false} />
            </Section>
        </div>
    )
}

export default VideoSection;