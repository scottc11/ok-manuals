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
