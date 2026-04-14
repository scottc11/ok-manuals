import Image from "next/image";

interface HeroBannerProps {
  backgroundColor?: string;
  backgroundImage?: string;
  heading: string;
  className?: string;
  overlayColor?: string;
  overlayOpacity?: number;
}

export default function HeroBanner({
  backgroundColor = "bg-gray-900",
  backgroundImage,
  heading,
  className = "",
  overlayColor = "black",
  overlayOpacity = 0.2,
}: HeroBannerProps) {
  return (
    <>
      <style>{`
        @keyframes heroBackgroundFloat {
          0%, 100% { background-position: 50% 50%; }
          25% { background-position: 51% 49%; }
          50% { background-position: 49% 51%; }
          75% { background-position: 51% 51%; }
        }
        @media (min-width: 768px) {
          @keyframes heroBackgroundFloat {
            0%, 100% { background-position: 50% 50%; }
            25% { background-position: 52% 48%; }
            50% { background-position: 48% 52%; }
            75% { background-position: 52% 52%; }
          }
        }
      `}</style>

      <div
        className={`w-full min-h-[60vh] flex items-center relative overflow-hidden ${backgroundColor} ${className}`}
      >
        {backgroundImage && (
          <Image
            src={backgroundImage}
            alt=""
            fill
            priority
            className="object-cover"
            style={{ animation: "heroBackgroundFloat 15s ease-in-out infinite" }}
            sizes="100vw"
          />
        )}

        {backgroundImage && (
          <div
            className="absolute inset-0"
            style={{ backgroundColor: overlayColor, opacity: overlayOpacity }}
          />
        )}

        <div className="container relative z-10">
          <div className="w-3/5 pl-4 md:pl-8 lg:pl-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white text-left leading-tight">
              {heading}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
