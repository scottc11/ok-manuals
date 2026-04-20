import type { Metadata } from "next";
import Link from "next/link";
import {
  blogPostDateToPathSegment,
  getBlogPosts,
} from "../../lib/contentful";
import BlogPostCard from "../components/BlogPostCard";

export const metadata: Metadata = {
  title: "News",
  description:
    "Latest news, updates, and announcements from OK200 — Eurorack module design and manufacturing.",
};

export default async function NewsPage() {
  const posts = await getBlogPosts();

  return (
    <div className="bg-onyx text-white">
      <div className="container mx-auto px-4 py-12 md:py-16 max-w-4xl">
        <h1 className="text-4xl font-bungee mb-10 text-left">News</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {posts.map((post, idx) => {
            const dateSeg = blogPostDateToPathSegment(
              (post?.fields as Record<string, any>)?.date,
            );
            if (!dateSeg) return null;
            return (
              <Link
                key={post?.sys?.id || idx}
                href={`/news/${dateSeg}`}
                className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-lime rounded-xl"
              >
                <BlogPostCard post={post} index={idx} />
              </Link>
            );
          })}
          {posts.length === 0 && (
            <p className="text-base text-gray-400">No blog posts found.</p>
          )}
        </div>
      </div>
    </div>
  );
}
