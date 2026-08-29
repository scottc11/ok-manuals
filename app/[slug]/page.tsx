import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPage, getPages } from "../../lib/contentful";
import ContentBlockContainer from "../components/ContentBlockContainer";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const pages = await getPages();
  return pages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = await getPage(slug);
  if (!page) return { title: "Page Not Found" };

  const title = page.seoTitle || page.title || slug;
  const description = page.seoDescription || "";
  const rawOgUrl = page.ogImage?.fields?.file?.url;
  const ogImage = rawOgUrl?.startsWith("//")
    ? `https:${rawOgUrl}`
    : rawOgUrl;

  return {
    title,
    ...(description ? { description } : {}),
    openGraph: {
      title,
      ...(description ? { description } : {}),
      ...(ogImage ? { images: [ogImage] } : {}),
    },
  };
}

export default async function CmsPage({ params }: PageProps) {
  const { slug } = await params;
  const page = await getPage(slug);

  if (!page) notFound();

  const sections = page.sections as any[] | undefined;

  return (
    <>
      {sections?.map((section, index) => (
        <ContentBlockContainer
          entry={section}
          key={section?.sys?.id ?? index}
        />
      ))}
    </>
  );
}
