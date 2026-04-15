import type { Metadata } from "next";
import Link from "next/link";
import { getBlogPosts } from "../../lib/contentful";
import BlogPostCard from "../components/BlogPostCard";

export const metadata: Metadata = {
  title: "News",
  description:
    "Latest news, updates, and announcements from OK200 — Eurorack module design and manufacturing.",
};

export default async function NewsPage() {
  const posts = await getBlogPosts();

  return (
    <div className="bg-white text-black">
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <h1 className="text-4xl font-bungee mb-8 text-left">News</h1>
        <div className="grid grid-cols-1 gap-6">
          {posts.map((post, idx) => (
            <Link
              key={post?.sys?.id || idx}
              href={`/news/${post?.sys?.id}`}
              className="block focus:outline-none"
            >
              <BlogPostCard post={post} index={idx} />
            </Link>
          ))}
          {posts.length === 0 && (
            <p className="text-base text-gray-600">No blog posts found.</p>
          )}
        </div>
      </div>
    </div>
  );
}
