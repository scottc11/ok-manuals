import React from 'react';
import { BlogPost } from '../types';

interface BlogPostCardProps {
    post: BlogPost;
    index?: number;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ post, index }) => {
    const title = post?.fields?.title || 'Untitled';
    const date = post?.fields?.date || '';
    const assetUrl = post?.fields?.image?.fields?.file?.url || '';
    const imageUrl = assetUrl?.startsWith('//') ? `https:${assetUrl}` : assetUrl;
    const imageAlt = post?.fields?.image?.fields?.title || title || 'Blog image';
    const idBase = post?.sys?.id || index || 0;

    return (
        <article
            key={post?.sys?.id || index}
            className="rounded-lg border border-gray-200 bg-white shadow-sm overflow-hidden"
            aria-labelledby={`post-title-${idBase}`}
        >
            {imageUrl ? (
                <div className="w-full">
                    <img
                        src={imageUrl}
                        alt={imageAlt}
                        className="w-full h-48 object-cover"
                        loading="lazy"
                    />
                </div>
            ) : null}
            <div className="p-4">
                <h2
                    id={`post-title-${idBase}`}
                    className="text-xl font-semibold mb-1"
                >
                    {title}
                </h2>
                {date && (
                    <p className="text-sm text-gray-600">
                        {new Date(date).toLocaleDateString(undefined, {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric'
                        })}
                    </p>
                )}
            </div>
        </article>
    );
};

export default BlogPostCard;


