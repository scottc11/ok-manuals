import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BlogPostCard from '../components/BlogPostCard';
import { BlogPost, BlogPostFields } from '../types';

const News: React.FC = () => {

    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const controller = new AbortController();

        (async () => {
            try {
                const response = await fetch(`${process.env.API_DOMAIN}/api/content/blog-posts`, {
                    signal: controller.signal
                });
                if (!response.ok) throw new Error(`Request failed: ${response.status}`);
                const data = await response.json();
                if (!controller.signal.aborted) {
                    setPosts(Array.isArray(data) ? data : []);
                }
            } catch (err: unknown) {
                if ((err as any)?.name === 'AbortError') return;
                if (!controller.signal.aborted) {
                    setError(err instanceof Error ? err.message : 'Failed to load blog posts');
                }
            } finally {
                if (!controller.signal.aborted) {
                    setLoading(false);
                }
            }
        })();

        return () => controller.abort();
    }, []);

    return (
        <div className="bg-white text-black">
            <div className="container mx-auto px-4 py-8 max-w-3xl">
                <h1 className="text-4xl font-bungee mb-8 text-left">News</h1>
                {loading && (
                    <p className="text-base text-gray-600">Loading blog posts…</p>
                )}
                {!loading && error && (
                    <p className="text-base text-red-600">Error: {error}</p>
                )}
                {!loading && !error && (
                    <div className="grid grid-cols-1 gap-6">
                        {posts.map((post, idx) => (
                            <Link
                                key={post?.sys?.id || idx}
                                to={`/news/${post?.sys?.id}`}
                                className="block focus:outline-none"
                            >
                                <BlogPostCard post={post} index={idx} />
                            </Link>
                        ))}
                        {posts.length === 0 && (
                            <p className="text-base text-gray-600">No blog posts found.</p>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default News;