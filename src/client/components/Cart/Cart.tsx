import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import Button from '../Button/Button';

const Cart: React.FC = () => {
  const { items, removeItem, updateQuantity, clearCart, getTotal, getItemCount } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price / 100);
  };

  const handleQuantityChange = (itemId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeItem(itemId);
    } else {
      updateQuantity(itemId, newQuantity);
    }
  };

  const handleCheckout = async () => {
    if (items.length === 0) return;

    setIsCheckingOut(true);
    try {
      const response = await fetch(`${process.env.API_DOMAIN}/api/create-checkout-session`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ items }),
      });

      const data = await response.json();

      if (data.success && data.url) {
        // Redirect to Stripe Checkout
        window.location.href = data.url;
      } else {
        alert('Failed to create checkout session. Please try again.');
      }
    } catch (error) {
      console.error('Checkout error:', error);
      alert('An error occurred during checkout. Please try again.');
    } finally {
      setIsCheckingOut(false);
    }
  };

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-white mb-8">Shopping Cart</h1>
        <div className="text-center py-16">
          <div className="text-gray-400 text-6xl mb-4">🛒</div>
          <h2 className="text-xl text-white mb-2">Your cart is empty</h2>
          <p className="text-gray-400 mb-8">Add some products to get started!</p>
          <Button onClick={() => window.location.href = '/#/modules'}>
            Continue Shopping
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-white mb-8">Shopping Cart</h1>
      
      <div className="bg-gray-800 rounded-lg p-6">
        {/* Cart Items */}
        <div className="space-y-4 mb-6">
          {items.map((item) => (
            <div key={item.id} className="flex items-center space-x-4 p-4 bg-gray-700 rounded-lg">
              {/* Product Image */}
              <div className="w-16 h-16 bg-gray-600 rounded-lg flex items-center justify-center">
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover rounded-lg"
                  />
                ) : (
                  <div className="text-gray-400 text-xl">📦</div>
                )}
              </div>

              {/* Product Info */}
              <div className="flex-1">
                <h3 className="text-white font-semibold">{item.name}</h3>
                <p className="text-gray-300">{formatPrice(item.price)}</p>
              </div>

              {/* Quantity Controls */}
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                  className="w-8 h-8 bg-gray-600 text-white rounded-full hover:bg-gray-500"
                >
                  -
                </button>
                <span className="text-white font-semibold w-8 text-center">
                  {item.quantity}
                </span>
                <button
                  onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                  className="w-8 h-8 bg-gray-600 text-white rounded-full hover:bg-gray-500"
                >
                  +
                </button>
              </div>

              {/* Item Total */}
              <div className="text-right">
                <p className="text-white font-semibold">
                  {formatPrice(item.price * item.quantity)}
                </p>
              </div>

              {/* Remove Button */}
              <button
                onClick={() => removeItem(item.id)}
                className="text-red-400 hover:text-red-300 p-2"
                title="Remove item"
              >
                🗑️
              </button>
            </div>
          ))}
        </div>

        {/* Cart Summary */}
        <div className="border-t border-gray-600 pt-6">
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg text-white">
              Items ({getItemCount()})
            </span>
            <span className="text-xl font-bold text-green-400">
              {formatPrice(getTotal())}
            </span>
          </div>

          {/* Actions */}
          <div className="flex space-x-4">
            <Button onClick={clearCart}>
              Clear Cart
            </Button>
            <Button onClick={handleCheckout} disabled={isCheckingOut}>
              {isCheckingOut ? 'Processing...' : `Checkout ${formatPrice(getTotal())}`}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart; 