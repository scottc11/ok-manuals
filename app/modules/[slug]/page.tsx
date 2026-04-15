import type { Metadata } from "next";
import Link from "next/link";
import { getProduct } from "../../../lib/contentful";
import { notFound } from "next/navigation";
import ProductDetail from "../../components/ProductDetail";
import YouTubeVideo from "../../components/YouTubeVideo";
import { FaBook } from "react-icons/fa";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return [{ slug: "counterpoint" }, { slug: "degree" }];
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

  return (
    <div className="container mx-auto py-8">
      <ProductDetail product={product} imageUrls={imageUrls} />

      {manualUrl && (
        <div className="flex flex-col gap-4 my-8 p-8 border-2 border-gray-800 rounded-sm hover:border-lime transition-colors duration-300 bg-gray-950 [background-image:radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:10px_10px] [background-position:0_0]">
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
      )}

      {specifications && specifications.length > 0 && (
        <div className="border-2 border-gray-800 bg-gray-950 p-8 rounded-sm">
          <div className="font-bungee bg-onyx/10 -mx-2 px-2 mt-12 mb-2 rounded-sm">
            <h3 className="text-xl py-2">Specifications</h3>
          </div>
          <table className="w-full my-4 border-collapse">
            <thead>
              <tr className="border-b-2 border-offwhite/20">
                <th className="text-left w-32">Label</th>
                <th className="text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              {specifications.map((spec) => (
                <tr
                  key={spec.label}
                  className="border-b-2 border-offwhite/20 border-dotted"
                >
                  <td className="font-bold pr-4">{spec.label}</td>
                  <td>{spec.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {videos && videos.length > 0 && (
        <div className="flex flex-col gap-8 mt-8">
          {videos.map((video) => (
            <YouTubeVideo
              key={video.fields.videoId}
              videoId={video.fields.videoId}
              title={video.fields.title}
            />
          ))}
        </div>
      )}
    </div>
  );
}
