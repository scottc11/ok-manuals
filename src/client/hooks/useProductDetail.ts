import { useState, useEffect } from 'react';
import { Product } from '../types';

export const useProductDetail = (slug: string) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${process.env.API_DOMAIN}/api/content/products/${slug}`);
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
  }, [slug]);

  return {
    product,
    loading,
    error,
  };
}; 