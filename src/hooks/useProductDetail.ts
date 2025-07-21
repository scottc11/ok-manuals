import { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { Product } from '../types';

export const useProductDetail = (slug: string) => {
  const { addItem } = useCart();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${process.env.API_DOMAIN}/api/products`);
        const data = await response.json();

        if (data.success) {
          const foundProduct = data.products.find((p: Product) => p.metadata?.slug === slug);
          if (foundProduct) {
            setProduct(foundProduct);
          } else {
            setError('Product not found');
          }
        } else {
          setError(data.error || 'Failed to fetch product');
        }
      } catch (err) {
        setError('Network error occurred while fetching product');
        console.error('Error fetching product:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [slug]);

  const formatPrice = (price: number, currency: string) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency.toUpperCase(),
    }).format(price / 100);
  };

  const handleAddToCart = () => {
    if (product) {
      addItem(product, quantity);
    }
  };

  const isOutOfStock = product?.stock !== undefined && product.stock <= 0;

  return {
    product,
    loading,
    error,
    quantity,
    setQuantity,
    handleAddToCart,
    formatPrice,
    isOutOfStock
  };
}; 