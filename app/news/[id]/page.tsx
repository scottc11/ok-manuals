import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getBlogPost } from "../../../lib/contentful";
import RichTextRenderer from "../../components/RichTextRenderer";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  try {
    const entry = await getBlogPost(id);
    const title = (entry?.fields?.title as string) || "Blog Post";
    return {
      title,
      description: `Read "${title}" on the OK200 blog.`,
    };
  } catch {
    return { title: "Blog Post" };
  }
}

export default async function BlogPostDetailPage({ params }: PageProps) {
  const { id } = await params;

  let entry: any;
  try {
    entry = await getBlogPost(id);
  } catch {
    notFound();
  }

  if (!entry) notFound();

  const title = entry?.fields?.title || "Untitled";
  const date = entry?.fields?.date || "";
  const rawUrl = (entry?.fields?.image as any)?.fields?.file?.url || "";
  const imageUrl = rawUrl.startsWith("//") ? `https:${rawUrl}` : rawUrl;
  const imageAlt =
    (entry?.fields?.image as any)?.fields?.title || title || "Blog image";
  const richContent = entry?.fields?.content;

  return (
    <div className="bg-white text-black">
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <div className="mb-6">
          <Link href="/news" className="text-blue-600 hover:underline">
            ← Back to News
          </Link>
        </div>

        <article>
          {imageUrl && (
            <div className="relative w-full h-64 mb-6">
              <Image
                src={imageUrl}
                alt={imageAlt as string}
                fill
                className="object-cover rounded"
                sizes="(max-width: 768px) 100vw, 768px"
              />
            </div>
          )}
          <h1 className="text-3xl font-bold mb-2">{title as string}</h1>
          {date && (
            <p className="text-sm text-gray-600 mb-4">
              {new Date(date as string).toLocaleDateString(undefined, {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </p>
          )}
          <RichTextRenderer document={richContent as any} />
        </article>
      </div>
    </div>
  );
}
