import Link from 'next/link';
import Image from 'next/image';

interface ProductSplitScreenProps {
  bannerImage: string;
  price: string;
  bodyText: string;
  ctaText: string;
  ctaHref: string;
  rightImage: string;
  reversed?: boolean;
  className?: string;
}

export default function ProductSplitScreen({
  bannerImage,
  price,
  bodyText,
  ctaText,
  ctaHref,
  rightImage,
  reversed = false,
  className = '',
}: ProductSplitScreenProps) {
  const bannerSection = (
    <div className="w-full rounded-lg overflow-hidden order-1">
      <Image
        src={bannerImage}
        alt="Product Banner"
        width={800}
        height={400}
        className="w-full h-auto block"
        priority
      />
    </div>
  );

  const imageSection = (
    <div className="flex w-full items-center justify-center order-2 md:w-[55%] md:items-center md:justify-center">
      <div className="w-full max-w-full text-center">
        <Image
          src={rightImage}
          alt="Product"
          width={600}
          height={500}
          className="w-full h-auto max-h-[500px] object-contain rounded-lg"
        />
      </div>
    </div>
  );

  const contentSection = (
    <div className="flex flex-col gap-4 py-4 w-full order-3">
      <div className="text-3xl font-numbers border-b-2 border-gray-400 pb-2">
        {price}
      </div>
      <div className="text-lg leading-relaxed text-gray-300">{bodyText}</div>
      <div className="mt-4">
        <Link
          href={ctaHref}
          className="inline-block px-8 py-3 text-lg border-2 border-white text-white hover:bg-white hover:text-black rounded transition-colors duration-200"
        >
          {ctaText}
        </Link>
      </div>
    </div>
  );

  return (
    <div id="product-split-screen" className={`min-h-[60vh] ${className}`}>
      {/* Mobile: Banner -> Image -> Content */}
      <div className="md:hidden flex flex-col gap-6">
        {bannerSection}
        {imageSection}
        {contentSection}
      </div>

      {/* Desktop: Grouped layout with reverse option */}
      <div
        className={`hidden md:flex gap-12 w-full ${reversed ? 'flex-row-reverse' : 'flex-row'}`}
      >
        <div className="flex flex-col gap-10 w-[45%]">
          {bannerSection}
          {contentSection}
        </div>
        {imageSection}
      </div>
    </div>
  );
}
