import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Product } from '../../types';
import { getImagesUrls } from '../../utils';
import { useCart } from '../../context/CartContext';
import Button from '../Button/Button';
import ImageLightbox from './ImageLightbox';

interface ProductDetailProps {
  product: Product;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  const history = useHistory();
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);

  const getThumbnailUrl = () => {
    const raw =
      (product.thumbnail as unknown as any)?.fields?.file?.url ||
      (product.thumbnail as unknown as any)?.url ||
      undefined;
    if (!raw) return undefined;
    if (typeof raw === 'string' && raw.startsWith('//')) {
      return `https:${raw}`;
    }
    return raw as string | undefined;
  };

  const handleAddToCart = () => {
    addItem(
      {
        slug: product.slug as unknown as string,
        name: product.name as unknown as string,
        thumbnailUrl: getThumbnailUrl(),
        stripeId: product.stripeId as unknown as string | undefined,
      },
      quantity
    );
  };

  const handleBackToProducts = () => {
    history.push('/modules');
  };

  const isDisabled = product.discontinued === true;

  
  const displayImages = getImagesUrls(product.images);

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
          <h1 className="text-6xl font-unica font-bold text-white mb-4">{product.name as unknown as string}</h1>
          
          {product.subtitle && (
            <h2 className="text-gray-300 text-2xl font-unica font-bold mb-6 leading-relaxed">
              {product.subtitle as unknown as string}
            </h2>
          )}
          
          {product.discontinued && (
            <div className="mb-4">
              <span className="inline-block bg-red-600 text-white text-sm font-medium px-3 py-1 rounded-full">
                Discontinued
              </span>
            </div>
          )}
          


          {product.shortDescription && (
            <p className="text-white text-lg mb-6 leading-relaxed">
              {product.shortDescription as unknown as string}
            </p>
          )}

          <div className="text-3xl font-numbers border-b-2 border-gray-400 pb-2">{product.price}</div>

          <div className="my-6">
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

          <div className="mb-6 w-full">
            <Button onClick={handleAddToCart} disabled={isDisabled} className="w-full">
              {product.discontinued ? 'Discontinued' : `Add to Cart`}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail; 