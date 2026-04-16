import Image from "next/image";

interface BlogPostCardProps {
  post: any;
  index?: number;
}

export default function BlogPostCard({ post, index }: BlogPostCardProps) {
  const title = post?.fields?.title || "Untitled";
  const date = post?.fields?.date || "";
  const assetUrl = post?.fields?.image?.fields?.file?.url || "";
  const imageUrl = assetUrl?.startsWith("//") ? `https:${assetUrl}` : assetUrl;
  const imageAlt =
    post?.fields?.image?.fields?.title || title || "Blog image";
  const idBase = post?.sys?.id || index || 0;

  return (
    <article
      className="rounded-xl bg-neutral-900 border border-neutral-800 overflow-hidden transition-all duration-300 group-hover:border-lime/40 group-hover:shadow-lg group-hover:shadow-lime/5 group-hover:-translate-y-1"
      aria-labelledby={`post-title-${idBase}`}
    >
      {imageUrl && (
        <div className="w-full relative h-52 overflow-hidden">
          <Image
            src={imageUrl}
            alt={imageAlt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, 50vw"
          />
        </div>
      )}
      <div className="p-5">
        <h2
          id={`post-title-${idBase}`}
          className="text-lg font-semibold text-white leading-snug mb-2 line-clamp-2"
        >
          {title}
        </h2>
        {date && (
          <p className="text-xs font-mono text-gray-400 tracking-wide uppercase">
            {new Date(date).toLocaleDateString(undefined, {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </p>
        )}
      </div>
    </article>
  );
}
