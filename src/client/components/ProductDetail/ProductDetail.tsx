import React, { useState, useEffect } from 'react';
import { useParams, useHistory, Link } from 'react-router-dom';
import { Product } from '../../types';
import { useCart } from '../../context/CartContext';
import Button from '../Button/Button';
import ImageLightbox from './ImageLightbox';

interface ProductDetailParams {
  slug: string;
}

interface ProductDetailProps {
  images?: string[];
  description?: string;
  discontinued?: boolean;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ images = [], description = '', discontinued = false }) => {
  const { slug } = useParams<ProductDetailParams>();
  const history = useHistory();
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
  }, [slug, images]);

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

  const handleBackToProducts = () => {
    history.push('/modules');
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center items-center min-h-96">
          <div className="text-white text-lg">Loading product...</div>
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-center min-h-96">
          <div className="text-red-400 text-lg mb-4">{error || 'Product not found'}</div>
          <Button onClick={handleBackToProducts}>
            Back to Products
          </Button>
        </div>
      </div>
    );
  }

  const isOutOfStock = product.stock !== undefined && product.stock <= 0;
  const isDisabled = discontinued || isOutOfStock;
  const displayImages = images.length > 0 ? images : (product.image ? [product.image] : []);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Product Images - Left Side */}
        <div className="lg:w-2/3">
          <ImageLightbox 
            images={displayImages}
            productName={product.name}
            className="w-full"
          />
        </div>

        {/* Product Details - Right Side */}
        <div className="lg:w-1/2">
          <h1 className="text-6xl font-unica font-bold text-white mb-4">{product.name}</h1>
          
          {discontinued && (
            <div className="mb-4">
              <span className="inline-block bg-red-600 text-white text-sm font-medium px-3 py-1 rounded-full">
                Discontinued
              </span>
            </div>
          )}
          
          {description && (
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              {description}
            </p>
          )}

          <div className="mb-6">
            <span className="text-4xl font-sans text-white">
              {formatPrice(product.price, product.currency)}
            </span>
          </div>

          {product.stock !== undefined && (
            <div className="mb-6">
              <span className={`text-lg ${isOutOfStock ? 'text-red-400' : 'text-gray-400'}`}>
                {isOutOfStock ? 'Out of Stock' : `${product.stock} in stock`}
              </span>
            </div>
          )}

          {/* Quantity Selector */}
          <div className="mb-6">
            <label htmlFor="quantity" className="block text-white text-sm font-medium mb-2">
              Quantity
            </label>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                disabled={quantity <= 1 || isDisabled}
                className="bg-gray-700 text-white px-3 py-1 rounded disabled:opacity-50"
              >
                -
              </button>
              <span className="text-white text-lg min-w-[3rem] text-center">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                disabled={isDisabled}
                className="bg-gray-700 text-white px-3 py-1 rounded disabled:opacity-50"
              >
                +
              </button>
            </div>
          </div>

          {/* Add to Cart Button */}
          <div className="mb-6 w-full">
            <Button onClick={handleAddToCart} disabled={isDisabled} className="w-full">
              {discontinued ? 'Discontinued' : isOutOfStock ? 'Out of Stock' : `Add to Cart`}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail; 