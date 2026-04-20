import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  getBlogPostByDateSegment,
  getBlogPostDateSegments,
} from "../../../lib/contentful";
import RichTextRenderer from "../../components/RichTextRenderer";

interface PageProps {
  params: Promise<{ date: string }>;
}

export async function generateStaticParams() {
  const segments = await getBlogPostDateSegments();
  return segments.map((date) => ({ date }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { date } = await params;
  try {
    const entry = await getBlogPostByDateSegment(date);
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
  const { date } = await params;

  let entry: Awaited<ReturnType<typeof getBlogPostByDateSegment>> | null = null;
  try {
    entry = await getBlogPostByDateSegment(date);
  } catch {
    notFound();
  }

  if (!entry) notFound();

  const fields = entry.fields as Record<string, any>;
  const title = fields.title || "Untitled";
  const postDate = fields.date || "";
  const rawUrl = fields.image?.fields?.file?.url || "";
  const imageUrl = rawUrl.startsWith("//") ? `https:${rawUrl}` : rawUrl;
  const imageAlt = fields.image?.fields?.title || title || "Blog image";
  const richContent = fields.content;

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
          {postDate && (
            <p className="text-sm text-gray-600 mb-4">
              {new Date(postDate as string).toLocaleDateString(undefined, {
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
