# E-commerce Setup Guide

This guide will help you set up the Stripe e-commerce functionality for your OK Manuals website.

## Prerequisites

1. **Stripe Account**: Create a free account at [stripe.com](https://stripe.com)
2. **Vercel Account** (recommended): For deploying the API endpoints
3. **Node.js Dependencies**: Already installed via npm

## Step 1: Stripe Configuration

### 1.1 Get Your Stripe Keys
1. Go to your [Stripe Dashboard](https://dashboard.stripe.com)
2. Navigate to **Developers > API keys**
3. Copy your **Publishable key** and **Secret key**

### 1.2 Create Products in Stripe
1. Go to **Products** in your Stripe Dashboard
2. Click **Add product**
3. Add your eurorack modules with:
   - Name
   - Description
   - Images
   - Pricing
   - Stock quantity (in metadata as `stock: "10"`)

## Step 2: Environment Variables

Create a `.env` file in your project root:

```env
# Stripe Configuration
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key_here
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret_here

# For frontend (optional during development)
REACT_APP_STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_publishable_key_here
```

**Important**: Never commit your `.env` file to version control!

## Step 3: Deploy API Endpoints

### Option A: Vercel (Recommended)

1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in your project directory
3. Follow the prompts to deploy
4. Add environment variables in Vercel Dashboard:
   - Go to your project settings
   - Add `STRIPE_SECRET_KEY` and `STRIPE_WEBHOOK_SECRET`

### Option B: Netlify Functions

1. Create `netlify.toml`:
```toml
[build]
  functions = "netlify/functions"

[[redirects]]
  from = "/api/*"
  to = "/.netlify/functions/:splat"
  status = 200
```

2. Move API files to `netlify/functions/`
3. Deploy and add environment variables in Netlify Dashboard

## Step 4: Webhook Configuration (Optional)

For order processing and inventory management:

1. Go to **Developers > Webhooks** in Stripe Dashboard
2. Add endpoint: `https://your-domain.com/api/webhooks/stripe`
3. Select events: `checkout.session.completed`
4. Copy the webhook secret to your environment variables

## Step 5: Testing

### Test Mode
- Use Stripe test cards: `4242 4242 4242 4242`
- All transactions are simulated
- No real money is charged

### Going Live
1. Activate your Stripe account
2. Replace test keys with live keys
3. Test thoroughly before launch

## Troubleshooting

### Common Issues

**Products not loading**
- Check if `STRIPE_SECRET_KEY` is set correctly
- Ensure products are marked as "Active" in Stripe
- Check browser console for API errors

**Checkout not working**
- Verify the checkout session endpoint is accessible
- Check CORS settings if testing locally
- Ensure all required fields are provided

**Payment verification fails**
- Check webhook configuration
- Verify webhook secret matches environment variable

## File Structure

Your project now includes:
```
├── api/
│   ├── products.js              # Fetch products from Stripe
│   ├── create-checkout-session.js  # Create checkout sessions
│   └── verify-session.js        # Verify payments
├── src/
│   ├── components/
│   │   ├── ProductList/         # Display products
│   │   ├── ProductCard/         # Individual product cards
│   │   └── Cart/               # Shopping cart
│   ├── context/
│   │   └── CartContext.tsx     # Cart state management
│   └── views/
│       └── Success.tsx         # Payment success page
└── .env                        # Environment variables (don't commit!)
```

## Security Notes

1. **Never expose secret keys** in frontend code
2. **Always validate payments** server-side
3. **Use HTTPS** in production
4. **Implement rate limiting** on API endpoints
5. **Sanitize user inputs** to prevent XSS

## Next Steps

1. Customize product display and styling
2. Add inventory management
3. Implement order fulfillment
4. Add customer email notifications
5. Set up analytics and reporting

For more information, see the [Stripe Documentation](https://stripe.com/docs). 