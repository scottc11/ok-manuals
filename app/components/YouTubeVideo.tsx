interface YouTubeVideoProps {
  videoId: string;
  title?: string;
  aspectRatio?: "16:9" | "4:3" | "1:1";
  autoplay?: boolean;
  muted?: boolean;
  controls?: boolean;
  className?: string;
  width?: string;
  height?: string;
}

export default function YouTubeVideo({
  videoId,
  title = "YouTube Video",
  aspectRatio = "16:9",
  autoplay = false,
  muted = false,
  controls = true,
  className = "",
  width = "w-full",
  height,
}: YouTubeVideoProps) {
  const params = new URLSearchParams();
  if (autoplay) params.append("autoplay", "1");
  if (muted) params.append("mute", "1");
  if (!controls) params.append("controls", "0");
  params.append("rel", "0");
  params.append("iv_load_policy", "3");
  params.append("playsinline", "1");

  const queryString = params.toString();
  const embedUrl = queryString
    ? `https://www.youtube.com/embed/${videoId}?${queryString}`
    : `https://www.youtube.com/embed/${videoId}`;

  const aspectClass = height
    ? ""
    : aspectRatio === "4:3"
      ? "aspect-[4/3]"
      : aspectRatio === "1:1"
        ? "aspect-square"
        : "aspect-video";

  const containerClasses =
    `${width} ${aspectClass} rounded-lg overflow-hidden shadow-lg ${className}`
      .trim()
      .replace(/\s+/g, " ");

  const iframeStyle = height ? { height, width: "100%" } : {};

  return (
    <div className={containerClasses}>
      <iframe
        src={embedUrl}
        title={title}
        style={iframeStyle}
        className={`w-full ${height ? "" : "h-full"}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        loading="lazy"
      />
    </div>
  );
}
