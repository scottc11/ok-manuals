import React from 'react';
import { Product } from '../../types';
import { useCart } from '../../context/CartContext';
import Button from '../Button/Button';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addItem } = useCart();

  const formatPrice = (price: number, currency: string) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency.toUpperCase(),
    }).format(price / 100); // Convert from cents to dollars
  };

  const handleAddToCart = () => {
    addItem(product, 1);
  };

  const isOutOfStock = product.stock !== undefined && product.stock <= 0;

  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
      {/* Product Image */}
      <div className="aspect-square bg-gray-700 flex items-center justify-center">
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="text-gray-400 text-4xl">📦</div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-white mb-2 truncate">
          {product.name}
        </h3>
        
        {product.description && (
          <p className="text-gray-300 text-sm mb-3 line-clamp-2">
            {product.description}
          </p>
        )}

        <div className="flex items-center justify-between mb-4">
          <span className="text-2xl font-bold text-green-400">
            {formatPrice(product.price, product.currency)}
          </span>
          
          {product.stock !== undefined && (
            <span className={`text-sm ${isOutOfStock ? 'text-red-400' : 'text-gray-400'}`}>
              {isOutOfStock ? 'Out of Stock' : `${product.stock} in stock`}
            </span>
          )}
        </div>

        <div className="w-full">
          <Button
            onClick={handleAddToCart}
            disabled={isOutOfStock}
          >
            {isOutOfStock ? 'Out of Stock' : 'Add to Cart'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard; 