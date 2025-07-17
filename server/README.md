# Express Backend Server

This Express server provides the API endpoints for the e-commerce functionality, serving as a development alternative to serverless functions.

## Setup

### 1. Environment Variables

Create a `.env` file in the project root with your Stripe keys:

```env
# Stripe Configuration (Required)
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key_here
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret_here

# Server Configuration (Optional)
PORT=3001
NODE_ENV=development
```

**Important**: Never commit your `.env` file to version control!

### 2. Get Stripe Keys

1. Go to [Stripe Dashboard](https://dashboard.stripe.com)
2. Navigate to **Developers > API keys**
3. Copy your **Secret key** (starts with `sk_test_`)
4. For webhooks (optional): Go to **Developers > Webhooks** and get the signing secret

### 3. Create Test Products

1. Go to **Products** in your Stripe Dashboard
2. Click **Add product**
3. Add products with:
   - Name (e.g., "DEGREE Module")
   - Description
   - Images
   - Price (in cents, e.g., 29999 for $299.99)
   - Metadata: `stock: "10"` for inventory tracking

## Available Scripts

### Development (Recommended)
```bash
npm run dev
```
Runs both frontend (port 3000) and backend (port 3001) concurrently with auto-restart.

### Individual Scripts
```bash
# Backend only
npm run server            # Development with nodemon
npm run dev:backend       # Same as above

# Frontend only  
npm run start             # Webpack dev server
npm run dev:frontend      # Same as above

# Production
npm run server:build      # Build TypeScript
npm run server:prod       # Build and run production server
```

## API Endpoints

The server provides these endpoints:

- `GET /health` - Health check
- `GET /api/products` - Fetch products from Stripe
- `POST /api/create-checkout-session` - Create checkout session
- `GET /api/verify-session?session_id=xxx` - Verify payment

## Testing the Server

### 1. Health Check
```bash
curl http://localhost:3001/health
```

### 2. Fetch Products
```bash
curl http://localhost:3001/api/products
```

### 3. Test Checkout (with cart items)
```bash
curl -X POST http://localhost:3001/api/create-checkout-session \
  -H "Content-Type: application/json" \
  -d '{
    "items": [
      {
        "id": "item_1",
        "productId": "prod_xxx",
        "name": "Test Product",
        "price": 2999,
        "quantity": 1,
        "image": "https://example.com/image.jpg"
      }
    ]
  }'
```

## CORS Configuration

The server is configured to accept requests from:
- `http://localhost:3000` (React dev server)
- `http://localhost:8080` (Alternative dev server)
- `http://127.0.0.1:3000`
- `http://127.0.0.1:8080`

## File Structure

```
server/
├── index.ts              # Main server file
├── tsconfig.json         # TypeScript config
├── routes/
│   ├── products.ts       # Product endpoints
│   ├── checkout.ts       # Checkout endpoints
│   └── verify.ts         # Payment verification
└── README.md            # This file
```

## Common Issues

### "Products not loading"
- Check if `STRIPE_SECRET_KEY` is set correctly
- Ensure products are marked as "Active" in Stripe Dashboard
- Check server logs for error messages

### "CORS errors"
- Ensure your frontend is running on an allowed origin
- Check the CORS configuration in `server/index.ts`

### "Server won't start"
- Check if port 3001 is already in use
- Verify all dependencies are installed: `npm install`
- Check for TypeScript compilation errors

### "Stripe errors"
- Verify your Stripe keys are correct and not expired
- Make sure you're using test keys for development
- Check Stripe Dashboard for any account issues

## Production Deployment

For production, you can:

1. **Build and run**: `npm run server:prod`
2. **Deploy to cloud**: Upload the built files to your preferred hosting
3. **Environment**: Set production environment variables
4. **Replace with serverless**: Migrate back to Vercel/Netlify functions

## Migrating Back to Serverless

When ready for production, you can easily switch back to the Vercel API functions in the `/api` folder. The frontend will work with either backend approach without changes. 