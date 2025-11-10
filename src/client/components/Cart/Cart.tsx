import React, { useEffect, useMemo, useState } from 'react';
import { useCart } from '../../context/CartContext';
import Button from '../Button/Button';

const Cart: React.FC = () => {
  const { items, removeItem, updateQuantity, clearCart, getItemCount } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [stripeMap, setStripeMap] = useState<Record<string, { id: string; price: number; currency: string }>>({});
  const [loadingPrices, setLoadingPrices] = useState(false);

  const formatPrice = (price: number, currency: string = 'usd') => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency.toUpperCase(),
    }).format(price / 100);
  };

  useEffect(() => {
    const fetchStripeProducts = async () => {
      setLoadingPrices(true);
      try {
        const resp = await fetch(`${process.env.API_DOMAIN}/api/products`);
        const data = await resp.json();
        if (data.success && Array.isArray(data.products)) {
          const map: Record<string, { id: string; price: number; currency: string }> = {};
          data.products.forEach((p: any) => {
            if (p.id && typeof p.price === 'number') {
              map[p.id] = { id: p.id, price: p.price, currency: p.currency || 'usd' };
            }
          });
          setStripeMap(map);
        }
      } catch (e) {
        console.error('Failed to fetch Stripe products', e);
      } finally {
        setLoadingPrices(false);
      }
    };
    fetchStripeProducts();
  }, []);

  const cartTotal = useMemo(() => {
    return items.reduce((sum, item) => {
      const stripe = item.stripeId ? stripeMap[item.stripeId] : undefined;
      if (!stripe) return sum;
      return sum + stripe.price * item.quantity;
    }, 0);
  }, [items, stripeMap]);

  const handleQuantityChange = (itemId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeItem(itemId);
    } else {
      updateQuantity(itemId, newQuantity);
    }
  };

  const handleCheckout = async () => {
    if (items.length === 0) return;

    const payloadItems = items.map((ci) => {
      const stripe = ci.stripeId ? stripeMap[ci.stripeId] : undefined;
      return {
        name: ci.name,
        image: ci.thumbnailUrl,
        price: stripe?.price,
        quantity: ci.quantity,
        productId: stripe?.id,
      };
    }).filter((i) => typeof i.price === 'number' && i.productId);

    if (payloadItems.length !== items.length) {
      alert('Some items are not available for checkout. Please update your cart.');
      return;
    }

    setIsCheckingOut(true);
    try {
      const response = await fetch(`${process.env.API_DOMAIN}/api/create-checkout-session`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ items: payloadItems }),
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
          <Button onClick={() => window.location.href = '/modules'}>
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
                {item.thumbnailUrl ? (
                  <img
                    src={item.thumbnailUrl}
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
                <p className="text-gray-300">
                  {item.stripeId && stripeMap[item.stripeId]
                    ? formatPrice(stripeMap[item.stripeId].price, stripeMap[item.stripeId].currency)
                    : loadingPrices ? 'Fetching price...' : 'Unavailable'}
                </p>
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
                  {item.stripeId && stripeMap[item.stripeId]
                    ? formatPrice(stripeMap[item.stripeId].price * item.quantity, stripeMap[item.stripeId].currency)
                    : loadingPrices ? '...' : '—'}
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
              {formatPrice(cartTotal)}
            </span>
          </div>

          {/* Actions */}
          <div className="flex space-x-4">
            <Button onClick={clearCart}>
              Clear Cart
            </Button>
            <Button onClick={handleCheckout} disabled={isCheckingOut || loadingPrices}>
              {isCheckingOut ? 'Processing...' : `Checkout ${formatPrice(cartTotal)}`}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart; 