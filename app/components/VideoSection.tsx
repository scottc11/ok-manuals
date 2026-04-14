import Section from "./Section";
import YouTubeVideo from "./YouTubeVideo";

interface VideoSectionProps {
  videoId: string;
  title?: string;
  backgroundColor?: string;
}

export default function VideoSection({
  videoId,
  title,
  backgroundColor,
}: VideoSectionProps) {
  return (
    <div className={backgroundColor}>
      <Section>
        {title && (
          <h2 className="text-3xl font-bold mb-6 text-center">{title}</h2>
        )}
        <YouTubeVideo videoId={videoId} title={title} controls={false} />
      </Section>
    </div>
  );
}
