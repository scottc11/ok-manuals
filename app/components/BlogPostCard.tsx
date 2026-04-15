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
      className="rounded-lg border border-gray-200 bg-white shadow-sm overflow-hidden"
      aria-labelledby={`post-title-${idBase}`}
    >
      {imageUrl && (
        <div className="w-full relative h-48">
          <Image
            src={imageUrl}
            alt={imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 768px"
          />
        </div>
      )}
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
