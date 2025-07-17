import express from 'express';
import Stripe from 'stripe';

const router = express.Router();

// Initialize Stripe (only if API key is provided)
const stripe = process.env.STRIPE_SECRET_KEY 
  ? new Stripe(process.env.STRIPE_SECRET_KEY)
  : null;

// POST /api/create-checkout-session - Create Stripe checkout session
router.post('/', async (req, res) => {
  if (!stripe) {
    return res.status(500).json({
      success: false,
      error: 'Stripe not configured',
      details: 'STRIPE_SECRET_KEY environment variable is missing. Please add it to your .env file.',
    });
  }

  try {
    const { items } = req.body;

    if (!items || !Array.isArray(items) || items.length === 0) {
      return res.status(400).json({
        success: false,
        error: 'Cart items are required',
      });
    }

    // Convert cart items to Stripe line items
    const lineItems = items.map((item: any) => ({
      price_data: {
        currency: 'usd',
        product_data: {
          name: item.name,
          images: item.image ? [item.image] : [],
        },
        unit_amount: item.price, // Price should already be in cents
      },
      quantity: item.quantity,
    }));

    // Determine the origin for success/cancel URLs
    const origin = req.headers.origin || 'http://localhost:3000';

    // Create checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: `${origin}/#/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/#/cart`,
      metadata: {
        // Store cart items in metadata for webhook processing
        cart_items: JSON.stringify(items.map((item: any) => ({
          productId: item.productId,
          quantity: item.quantity
        }))),
      },
    });

    return res.json({
      success: true,
      session_id: session.id,
      url: session.url,
    });

  } catch (error: any) {
    console.error('Error creating checkout session:', error);
    return res.status(500).json({
      success: false,
      error: 'Failed to create checkout session',
      details: error.message,
    });
  }
});

export default router; 