import React, { useEffect, useState } from 'react';
import { useCart } from '../context/CartContext';
import Button from '../components/Button/Button';

const Success: React.FC = () => {
  const { clearCart } = useCart();
  const [sessionData, setSessionData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const verifySession = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const sessionId = urlParams.get('session_id');

      if (!sessionId) {
        setError('No session ID found');
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(`${process.env.API_DOMAIN}/api/verify-session?session_id=${sessionId}`);
        const data = await response.json();

        if (data.success) {
          setSessionData(data.session);
          // Clear the cart since payment was successful
          clearCart();
        } else {
          setError(data.error || 'Failed to verify payment');
        }
      } catch (err) {
        setError('Network error occurred while verifying payment');
        console.error('Error verifying session:', err);
      } finally {
        setLoading(false);
      }
    };

    verifySession();
  }, [clearCart]);

  const formatPrice = (amount: number, currency: string) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency.toUpperCase(),
    }).format(amount / 100);
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center py-16">
          <div className="text-white text-lg">Verifying your payment...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center py-16">
          <div className="text-red-400 text-6xl mb-4">❌</div>
          <h1 className="text-2xl font-bold text-white mb-4">Payment Verification Failed</h1>
          <p className="text-gray-400 mb-8">{error}</p>
          <Button onClick={() => window.location.href = '/#/'}>
            Return Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center py-16">
        <div className="text-green-400 text-6xl mb-4">✅</div>
        <h1 className="text-3xl font-bold text-white mb-4">Payment Successful!</h1>
        <p className="text-gray-400 mb-8">Thank you for your purchase.</p>

        {sessionData && (
          <div className="bg-gray-800 rounded-lg p-6 max-w-md mx-auto mb-8">
            <h2 className="text-lg font-semibold text-white mb-4">Order Details</h2>
            
            <div className="space-y-2 text-left">
              <div className="flex justify-between">
                <span className="text-gray-400">Payment Status:</span>
                <span className="text-green-400 capitalize">{sessionData.payment_status}</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-gray-400">Total Amount:</span>
                <span className="text-white font-semibold">
                  {formatPrice(sessionData.amount_total, sessionData.currency)}
                </span>
              </div>
              
              {sessionData.customer_email && (
                <div className="flex justify-between">
                  <span className="text-gray-400">Email:</span>
                  <span className="text-white">{sessionData.customer_email}</span>
                </div>
              )}
              
              <div className="flex justify-between">
                <span className="text-gray-400">Session ID:</span>
                <span className="text-gray-300 text-sm font-mono">{sessionData.id}</span>
              </div>
            </div>
          </div>
        )}

        <div className="space-x-4">
          <Button onClick={() => window.location.href = '/#/'}>
            Return Home
          </Button>
          <Button onClick={() => window.location.href = '/#/shop'}>
            Continue Shopping
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Success; 