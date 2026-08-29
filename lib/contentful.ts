import { createClient } from 'contentful';
import type { NavItem, MessageBannerEntry, PageFields } from './types';

/** Static App Router folders that take precedence over `app/[slug]`. */
const RESERVED_PAGE_SLUGS = new Set([
  'about',
  'api',
  'cart',
  'manuals',
  'modules',
  'news',
  'success',
  'unsubscribe',
]);

export const contentfulClient = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});

export async function getSiteNavigation(): Promise<NavItem[]> {
  const entries = await contentfulClient.getEntries({
    content_type: 'siteNavigation',
    select: ['fields.navigation'],
    limit: 1,
  });
  const nav = (entries.items[0]?.fields as Record<string, any>)?.navigation;
  return Array.isArray(nav) ? (nav as NavItem[]) : [];
}

export async function getProduct(slug: string, selectFields?: string[]) {
  const params: Record<string, any> = {
    content_type: 'product',
    'fields.slug': slug,
    include: 4,
  };

  if (selectFields && selectFields.length > 0) {
    params.select = selectFields.map((f) => `fields.${f}`).join(',');
  }

  const entries = await contentfulClient.getEntries(params);
  return entries.items[0]?.fields ?? null;
}

export async function getProducts() {
  const entries = await contentfulClient.getEntries({
    content_type: 'product',
    select: [
      'fields.slug',
      'fields.name',
      'fields.thumbnail',
      'fields.shortDescription',
      'fields.subtitle',
    ],
  });
  return entries.items;
}

/** YYYY-MM-DD from a Contentful date field, for URLs (UTC calendar day). */
export function blogPostDateToPathSegment(
  dateValue: string | undefined,
): string | null {
  if (!dateValue || typeof dateValue !== "string") return null;
  const d = new Date(dateValue);
  if (Number.isNaN(d.getTime())) return null;
  return d.toISOString().slice(0, 10);
}

export async function getBlogPosts() {
  const entries = await contentfulClient.getEntries({
    content_type: 'blogPost',
    'fields.published[in]': 'true',
    select: [
      'fields.title',
      'fields.date',
      'fields.image',
      'fields.published',
    ],
    order: ['-fields.date'],
  });
  return entries.items;
}

/** Fetch a single post by URL segment YYYY-MM-DD (one post per day). */
export async function getBlogPostByDateSegment(dateSegment: string) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(dateSegment)) return null;
  const start = `${dateSegment}T00:00:00.000Z`;
  const end = `${dateSegment}T23:59:59.999Z`;
  const entries = await contentfulClient.getEntries({
    content_type: 'blogPost',
    'fields.date[gte]': start,
    'fields.date[lte]': end,
    'fields.published[in]': 'true',
    limit: 1,
  });
  return entries.items[0] ?? null;
}

export async function getBlogPostDateSegments(): Promise<string[]> {
  const entries = await contentfulClient.getEntries({
    content_type: 'blogPost',
    'fields.published[in]': 'true',
    select: ['fields.date'],
  });
  const segments = entries.items
    .map((item) =>
      blogPostDateToPathSegment((item.fields as Record<string, any>).date),
    )
    .filter((s): s is string => s != null);
  return [...new Set(segments)];
}

export async function getPage(slug: string): Promise<PageFields | null> {
  if (!slug || RESERVED_PAGE_SLUGS.has(slug)) return null;

  try {
    const entries = await contentfulClient.getEntries({
      content_type: 'page',
      'fields.slug': slug,
      include: 4,
      limit: 1,
    });
    return (entries.items[0]?.fields as unknown as PageFields) ?? null;
  } catch (error) {
    if (process.env.NODE_ENV !== 'production') {
      console.warn('getPage: unable to fetch page', error);
    }
    return null;
  }
}

export async function getPages(): Promise<Array<{ slug: string }>> {
  try {
    const entries = await contentfulClient.getEntries({
      content_type: 'page',
      select: ['fields.slug'],
    });
    return entries.items
      .map((item) => (item.fields as Record<string, unknown>).slug)
      .filter((slug): slug is string => typeof slug === 'string' && slug.length > 0)
      .filter((slug) => !RESERVED_PAGE_SLUGS.has(slug))
      .map((slug) => ({ slug }));
  } catch (error) {
    if (process.env.NODE_ENV !== 'production') {
      console.warn('getPages: unable to fetch pages', error);
    }
    return [];
  }
}

export async function getMessageBanner(): Promise<MessageBannerEntry | null> {
  try {
    const entries = await contentfulClient.getEntries({
      content_type: "bannerMessage",
      order: ["-sys.updatedAt"],
      limit: 1,
    });

    const item = entries.items[0];
    if (!item) return null;

    const fields = item.fields as Record<string, any>;
    const message = typeof fields.message === "string" ? fields.message.trim() : "";
    if (!message) return null;

    return {
      id: item.sys.id,
      message,
      dismissible: Boolean(fields.dismissible),
    };
  } catch (error) {
    // Content type may not exist yet, or network failure — fail silently so the
    // rest of the site renders normally.
    if (process.env.NODE_ENV !== "production") {
      console.warn("getBannerMessage: unable to fetch banner", error);
    }
    return null;
  }
}
