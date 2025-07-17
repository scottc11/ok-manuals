import express from 'express';
import Stripe from 'stripe';

const router = express.Router();

// Initialize Stripe (only if API key is provided)
const stripe = process.env.STRIPE_SECRET_KEY 
  ? new Stripe(process.env.STRIPE_SECRET_KEY)
  : null;

// GET /api/products - Fetch products from Stripe
router.get('/', async (req, res) => {
  if (!stripe) {
    return res.status(500).json({
      success: false,
      error: 'Stripe not configured',
      details: 'STRIPE_SECRET_KEY environment variable is missing. Please add it to your .env file.',
    });
  }

  try {
    // Fetch active products from Stripe
    const products = await stripe.products.list({
      active: true,
      expand: ['data.default_price'],
    });

    // Transform Stripe products to our Product interface
    const formattedProducts = products.data.map(product => {
      const price = product.default_price as Stripe.Price;
      
      return {
        id: product.id,
        name: product.name,
        description: product.description,
        price: price ? price.unit_amount || 0 : 0, // Price in cents
        currency: price ? price.currency : 'usd',
        image: product.images && product.images.length > 0 ? product.images[0] : undefined,
        stock: product.metadata?.stock ? parseInt(product.metadata.stock) : undefined,
        metadata: product.metadata,
      };
    });

    return res.json({
      success: true,
      products: formattedProducts,
    });

  } catch (error: any) {
    console.error('Error fetching products:', error);
    return res.status(500).json({
      success: false,
      error: 'Failed to fetch products',
      details: error.message,
    });
  }
});

export default router; 