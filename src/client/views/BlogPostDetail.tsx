import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { BlogPost } from '../types';

interface RouteParams {
    id: string;
}

const BlogPostDetail: React.FC = () => {
    const { id } = useParams<RouteParams>();
    const [post, setPost] = useState<BlogPost | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const controller = new AbortController();
        (async () => {
            try {
                const response = await fetch(`${process.env.API_DOMAIN}/api/content/blog-posts/${id}`, {
                    signal: controller.signal
                });
                if (!response.ok) throw new Error(`Request failed: ${response.status}`);
                const data = await response.json();
                if (!controller.signal.aborted) {
                    setPost(data);
                }
            } catch (err: unknown) {
                if ((err as any)?.name === 'AbortError') return;
                if (!controller.signal.aborted) {
                    setError(err instanceof Error ? err.message : 'Failed to load blog post');
                }
            } finally {
                if (!controller.signal.aborted) {
                    setLoading(false);
                }
            }
        })();
        return () => controller.abort();
    }, [id]);

    const title = post?.fields?.title || 'Untitled';
    const date = post?.fields?.date || '';
    const assetUrl = post?.fields?.image?.fields?.file?.url || '';
    const imageUrl = assetUrl;
    const imageAlt = post?.fields?.image?.fields?.title || title || 'Blog image';
    const richContent = (post as any)?.fields?.content;
    const contentHtml = richContent ? documentToHtmlString(richContent as any) : '';

    return (
        <div className="bg-white text-black">
            <div className="container mx-auto px-4 py-8 max-w-3xl">
                <div className="mb-6">
                    <Link to="/news" className="text-blue-600 hover:underline">← Back to News</Link>
                </div>
                {loading && <p className="text-base text-gray-600">Loading…</p>}
                {!loading && error && <p className="text-base text-red-600">Error: {error}</p>}
                {!loading && !error && post && (
                    <article>
                        <h1 className="text-3xl font-bold mb-2">{title}</h1>
                        {date && (
                            <p className="text-sm text-gray-600 mb-4">
                                {new Date(date).toLocaleDateString(undefined, {
                                    year: 'numeric',
                                    month: 'short',
                                    day: 'numeric'
                                })}
                            </p>
                        )}
                        {imageUrl ? (
                            <img
                                src={imageUrl as string}
                                alt={imageAlt as string}
                                className="w-full h-64 object-cover rounded mb-6"
                                loading="lazy"
                            />
                        ) : null}
                        <div
                            className="leading-relaxed space-y-4 [&_ul]:list-outside [&_ol]:list-outside"
                            dangerouslySetInnerHTML={{ __html: contentHtml }}
                        />
                    </article>
                )}
            </div>
        </div>
    );
};

export default BlogPostDetail;


