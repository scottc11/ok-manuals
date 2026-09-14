import type { Metadata } from "next";
import Link from "next/link";
import { getProduct, getProducts } from "../../../lib/contentful";
import { notFound } from "next/navigation";
import ProductDetail from "../../components/ProductDetail";
import YouTubeVideo from "../../components/YouTubeVideo";
import ContentSection from "../../components/ContentSection";
import SectionRenderer from "../../components/SectionRenderer";
import { FaBook } from "react-icons/fa";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((product) => ({ slug: product.fields.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProduct(slug);
  if (!product) return { title: "Module Not Found" };

  const name = String(product.name ?? slug);
  const description = String(
    product.shortDescription ?? product.description ?? "",
  );
  const thumbnailUrl = (product.thumbnail as any)?.fields?.file?.url;
  const ogImage = thumbnailUrl?.startsWith("//")
    ? `https:${thumbnailUrl}`
    : thumbnailUrl;

  return {
    title: name,
    description: description || `${name} — OK200 Eurorack module.`,
    openGraph: {
      title: name,
      description: description || `${name} — OK200 Eurorack module.`,
      ...(ogImage ? { images: [ogImage] } : {}),
    },
  };
}

function getImageUrls(images: any): string[] {
  if (!images || !Array.isArray(images)) return [];
  return images
    .map((img: any) => {
      const url = img?.fields?.file?.url;
      if (!url) return null;
      return url.startsWith("//") ? `https:${url}` : url;
    })
    .filter(Boolean) as string[];
}

export default async function ProductViewPage({ params }: PageProps) {
  const { slug } = await params;
  const product = await getProduct(slug);

  if (!product) notFound();

  const imageUrls = getImageUrls(product.images);
  const specifications = product.specifications as
    | Array<{ label: string; value?: string }>
    | undefined;
  const videos = product.videos as
    | Array<{ fields: { videoId: string; title: string } }>
    | undefined;
  const manualUrl = product.manualUrl
    ? String(product.manualUrl)
    : null;
  const sections = product.sections as any[] | undefined;

  return (
    <>
      <ContentSection>
        <ProductDetail product={product} imageUrls={imageUrls} />
      </ContentSection>

      {sections && sections.length > 0 && sections.map((section: any, index: number) => (
        <SectionRenderer entry={section} key={section?.sys?.id ?? index} />
      ))}

      {manualUrl && (
        <ContentSection>
          <div className="flex flex-col gap-4 p-8 border-2 border-gray-800 rounded-sm hover:border-lime transition-colors duration-300 bg-gray-950 [background-image:radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:10px_10px] [background-position:0_0]">
            <Link href={manualUrl} className="block">
              <div className="flex items-center flex-col justify-center gap-4 hover:text-lime transition-colors duration-300">
                <span className="text-4xl font-bungee font-bold">Manual</span>
                <FaBook
                  className="hover:text-lime transition-colors duration-300"
                  size={172}
                />
              </div>
            </Link>
          </div>
        </ContentSection>
      )}

      {specifications && specifications.length > 0 && (
        <section className="border-t border-white/5 py-12 px-6 md:py-24 md:px-12">
          <div className="max-w-7xl mx-auto grid gap-10 lg:grid-cols-2 lg:gap-20 items-start">
            <div>
              <p className="text-[10px] tracking-[0.3em] uppercase text-gold mb-4 flex items-center gap-3">
                <span className="inline-block w-8 h-px bg-gold" />
                Technical Specs
              </p>
              <h2 className="font-quantico text-[clamp(2rem,4vw,3rem)] leading-tight text-offwhite mb-4">
                For those who want to know.
              </h2>
              {product.shortDescription && (
                <p className="text-offwhite/30 text-sm leading-relaxed max-w-sm">
                  {String(product.shortDescription)}
                </p>
              )}
            </div>

            <div className="border border-white/5">
              {specifications.map((spec, i) => (
                <div
                  key={spec.label}
                  className={`flex items-start justify-between px-6 py-4 ${
                    i < specifications.length - 1
                      ? "border-b border-white/5"
                      : ""
                  } hover:bg-white/5 transition-colors`}
                >
                  <span className="text-[11px] tracking-[0.12em] uppercase text-offwhite/25">
                    {spec.label}
                  </span>
                  <span className="text-[13px] text-offwhite text-right max-w-[60%] font-quantico font-bold">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {videos && videos.length > 0 && (
        <ContentSection>
          <div className="flex flex-col gap-8">
            {videos.map((video) => (
              <YouTubeVideo
                key={video.fields.videoId}
                videoId={video.fields.videoId}
                title={video.fields.title}
              />
            ))}
          </div>
        </ContentSection>
      )}
    </>
  );
}
