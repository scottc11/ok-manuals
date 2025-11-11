import React, { useEffect, useMemo, useRef } from 'react';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import type { Options } from '@contentful/rich-text-html-renderer';
import { BLOCKS, INLINES, Document } from '@contentful/rich-text-types';
import YouTubeVideo from './YouTubeVideo/YouTubeVideo';
import { createRoot, Root } from 'react-dom/client';

interface RichTextRendererProps {
    document: Document | null | undefined;
    className?: string;
}

function extractYouTubeId(url: string): string | null {
    try {
        const u = new URL(url);
        if (u.hostname.includes('youtu.be')) {
            return u.pathname.split('/').filter(Boolean)[0] || null;
        }
        if (u.hostname.includes('youtube.com')) {
            if (u.pathname.startsWith('/embed/')) {
                return u.pathname.split('/')[2] || null;
            }
            return u.searchParams.get('v');
        }
        return null;
    } catch {
        // Fallback simple patterns
        if (url.includes('youtu.be/')) {
            const after = url.split('youtu.be/')[1];
            return after?.split(/[?&]/)[0] || null;
        }
        const match = url.match(/[?&]v=([^&]+)/);
        return match ? match[1] : null;
    }
}

const richTextOptions: Options = {
    renderNode: {
        // Headings
        [BLOCKS.HEADING_1]: (node: any, next: (nodes: any[]) => string) =>
            `<h1 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">${next(node.content)}</h1>`,
        [BLOCKS.HEADING_2]: (node: any, next: (nodes: any[]) => string) =>
            `<h2 class="text-2xl sm:text-3xl font-semibold mt-8 mb-3">${next(node.content)}</h2>`,
        [BLOCKS.HEADING_3]: (node: any, next: (nodes: any[]) => string) =>
            `<h3 class="text-xl sm:text-2xl font-semibold mt-6 mb-2">${next(node.content)}</h3>`,
        [BLOCKS.HEADING_4]: (node: any, next: (nodes: any[]) => string) =>
            `<h4 class="text-lg sm:text-xl font-semibold mt-4 mb-2">${next(node.content)}</h4>`,
        [BLOCKS.HEADING_5]: (node: any, next: (nodes: any[]) => string) =>
            `<h5 class="text-base sm:text-lg font-semibold mt-3 mb-1">${next(node.content)}</h5>`,
        [BLOCKS.HEADING_6]: (node: any, next: (nodes: any[]) => string) =>
            `<h6 class="text-sm sm:text-base uppercase tracking-wide text-gray-700 mt-3 mb-1">${next(node.content)}</h6>`,
        // Embedded assets (images, files)
        [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
            const file = node?.data?.target?.fields?.file;
            const title = node?.data?.target?.fields?.title || '';
            const rawUrl = file?.url || '';
            const src = rawUrl?.startsWith('//') ? `https:${rawUrl}` : rawUrl;
            if (!src) return '';
            return `<img src="${src}" alt="${title}" class="h-auto rounded my-4" loading="lazy" />`;
        },
        // Hyperlinks
        [INLINES.HYPERLINK]: (node: any, next: (nodes: any[]) => string) => {
            const href = node?.data?.uri || '#';
            const text = next(node.content);
            const safeHref = String(href);
            const isExternal = /^https?:\/\//i.test(safeHref);
            return `<a href="${safeHref}"${isExternal ? ' target="_blank" rel="noopener noreferrer"' : ''} class="text-blue-600 underline">${text}</a>`;
        },
        // Embedded entries (custom content models, e.g., youTubeVideo)
        [BLOCKS.EMBEDDED_ENTRY]: (node: any) => {
            const entryId = node?.data?.target?.sys?.id || '';
            const contentTypeId = node?.data?.target?.sys?.contentType?.sys?.id || 'unknown';
            const fields = node?.data?.target?.fields || {};
            // Handle specific content models
            if (contentTypeId === 'youTubeVideo') {
                const link: string = fields?.link || '';
                const title: string = fields?.title || 'YouTube Video';
                const videoId = fields.videoId || extractYouTubeId(link) || '';
                return `<div class="cf-embedded-entry my-6" data-entry-id="${entryId}" data-content-type="${contentTypeId}" data-video-id="${videoId}" data-title="${title}"></div>`;
            }
            // Generic placeholder
            return `<div class="cf-embedded-entry my-4 p-3 border border-gray-200 rounded bg-gray-50" data-entry-id="${entryId}" data-content-type="${contentTypeId}">Embedded entry: ${contentTypeId}</div>`;
        },
        // Inline embedded entries (if any appear)
        [INLINES.EMBEDDED_ENTRY]: (node: any) => {
            const entryId = node?.data?.target?.sys?.id || '';
            const contentTypeId = node?.data?.target?.sys?.contentType?.sys?.id || 'unknown';
            return `<span class="cf-embedded-entry-inline px-1 border border-gray-200 rounded" data-entry-id="${entryId}" data-content-type="${contentTypeId}">[${contentTypeId}]</span>`;
        }
    }
};

const RichTextRenderer: React.FC<RichTextRendererProps> = ({ document, className }) => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const mountedRootsRef = useRef<Root[]>([]);

    const contentHtml = useMemo(() => {
        if (!document) return '';
        return documentToHtmlString(document as any, richTextOptions as any);
    }, [document]);

    useEffect(() => {
        // Cleanup any previously mounted roots
        mountedRootsRef.current.forEach(root => root.unmount());
        mountedRootsRef.current = [];

        const container = containerRef.current;
        if (!container) return;

        const nodes = container.querySelectorAll<HTMLDivElement>('.cf-embedded-entry[data-content-type="youTubeVideo"]');
        nodes.forEach(node => {
            const videoId = node.getAttribute('data-video-id') || '';
            const title = node.getAttribute('data-title') || 'YouTube Video';
            if (!videoId) return;
            const root = createRoot(node);
            root.render(<YouTubeVideo videoId={videoId} title={title} />);
            mountedRootsRef.current.push(root);
        });

        return () => {
            mountedRootsRef.current.forEach(root => root.unmount());
            mountedRootsRef.current = [];
        };
    }, [contentHtml]);

    const wrapperClasses = [
        'leading-relaxed',
        'space-y-4',
        '[&_ul]:list-outside',
        '[&_ol]:list-outside',
        className || ''
    ].join(' ').trim().replace(/\s+/g, ' ');

    return (
        <div
            ref={containerRef}
            className={wrapperClasses}
            dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
    );
};

export default RichTextRenderer;


