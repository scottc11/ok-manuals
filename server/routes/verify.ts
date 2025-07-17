import express from 'express';
import Stripe from 'stripe';

const router = express.Router();

// Initialize Stripe (only if API key is provided)
const stripe = process.env.STRIPE_SECRET_KEY 
  ? new Stripe(process.env.STRIPE_SECRET_KEY)
  : null;

// GET /api/verify-session - Verify Stripe checkout session
router.get('/', async (req, res) => {
  if (!stripe) {
    return res.status(500).json({
      success: false,
      error: 'Stripe not configured',
      details: 'STRIPE_SECRET_KEY environment variable is missing. Please add it to your .env file.',
    });
  }

  try {
    const { session_id } = req.query;

    if (!session_id || typeof session_id !== 'string') {
      return res.status(400).json({
        success: false,
        error: 'Session ID is required',
      });
    }

    // Retrieve the checkout session from Stripe
    const session = await stripe.checkout.sessions.retrieve(session_id, {
      expand: ['line_items']
    });

    return res.json({
      success: true,
      session: {
        id: session.id,
        payment_status: session.payment_status,
        customer_email: session.customer_details?.email,
        amount_total: session.amount_total,
        currency: session.currency,
        line_items: session.line_items?.data || [],
        metadata: session.metadata,
      },
    });

  } catch (error: any) {
    console.error('Error verifying session:', error);
    return res.status(500).json({
      success: false,
      error: 'Failed to verify session',
      details: error.message,
    });
  }
});

export default router; 