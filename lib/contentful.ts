import { createClient } from 'contentful';

export const contentfulClient = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});

export async function getProduct(slug: string, selectFields?: string[]) {
  const params: Record<string, any> = {
    content_type: 'product',
    'fields.slug': slug,
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
  });
  return entries.items;
}

export async function getBlogPosts() {
  const entries = await contentfulClient.getEntries({
    content_type: 'blogPost',
    'fields.published[in]': 'true',
    select: ['fields.title', 'fields.date', 'fields.image', 'fields.published'],
    order: ['-fields.date'],
  });
  return entries.items;
}

export async function getBlogPost(id: string) {
  const entry = await contentfulClient.getEntry(id);
  return entry;
}

export interface MessageBannerEntry {
  id: string;
  message: string;
  dismissible?: boolean;
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
