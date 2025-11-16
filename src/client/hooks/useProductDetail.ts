import { useState, useEffect } from 'react';
import { Product } from '../types';

export const useProductDetail = (slug: string, selectFields?: string[]) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const baseUrl = `${process.env.API_DOMAIN}/api/content/products/${slug}`;
        const url =
          selectFields && selectFields.length > 0
            ? `${baseUrl}?${new URLSearchParams({ select: selectFields.join(',') }).toString()}`
            : baseUrl;
        const response = await fetch(url);
        if (!response.ok) {
          if (response.status === 404) {
            setError('Product not found');
          } else {
            setError('Failed to fetch product');
          }
          return;
        }
        const data = await response.json();
        setProduct(data?.fields ?? null);
      } catch (err) {
        setError('Network error occurred while fetching product');
        console.error('Error fetching product:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [slug, selectFields?.join(',')]);

  return {
    product,
    loading,
    error,
  };
}; 