const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS, POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    res.status(405).end('Method Not Allowed');
    return;
  }

  try {
    // Fetch active products from Stripe
    const products = await stripe.products.list({
      active: true,
      expand: ['data.default_price'],
    });

    // Transform Stripe products to our Product interface
    const formattedProducts = products.data.map(product => {
      const price = product.default_price;
      
      return {
        id: product.id,
        name: product.name,
        description: product.description,
        price: price ? price.unit_amount : 0, // Price in cents
        currency: price ? price.currency : 'usd',
        image: product.images && product.images.length > 0 ? product.images[0] : undefined,
        stock: product.metadata?.stock ? parseInt(product.metadata.stock) : undefined,
        metadata: product.metadata,
      };
    });

    res.status(200).json({
      success: true,
      products: formattedProducts,
    });

  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch products',
      details: error.message,
    });
  }
} 