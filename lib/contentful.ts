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
