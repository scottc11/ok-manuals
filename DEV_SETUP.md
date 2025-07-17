# Development Setup

Quick guide to get your full-stack e-commerce development environment running.

## Prerequisites

1. Node.js (v16 or higher)
2. Stripe account with test API keys
3. All dependencies installed: `npm install`

## Setup Steps

### 1. Environment Configuration

Create a `.env` file in the project root:

```env
# Required: Your Stripe test keys
STRIPE_SECRET_KEY=sk_test_your_actual_stripe_secret_key_here
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret_here

# Optional: Server configuration
PORT=3001
NODE_ENV=development
```

**Get your Stripe keys**:
1. Go to [Stripe Dashboard](https://dashboard.stripe.com/test/apikeys)
2. Copy your **Secret key** (starts with `sk_test_`)

### 2. Create Test Products in Stripe

1. Go to [Stripe Products](https://dashboard.stripe.com/test/products)
2. Click **"Add product"**
3. Example product:
   - Name: "DEGREE Module"
   - Description: "Quantizing Sequencer Module"
   - Price: $299.99 (enter as 29999 cents)
   - Add metadata: `stock: "10"`

### 3. Start Development Environment

**Option A: Full Stack (Recommended)**
```bash
npm run dev
```
This starts:
- Express backend on http://localhost:3001
- React frontend on http://localhost:3000
- Auto-reload for both on file changes

**Option B: Individual Services**
```bash
# Terminal 1: Backend only
npm run server

# Terminal 2: Frontend only  
npm run start
```

## Testing the Setup

### 1. Health Check
Open http://localhost:3001/health - should show server status

### 2. Products API
Open http://localhost:3001/api/products - should show your Stripe products

### 3. Frontend
Open http://localhost:3000 - should show your app with Shop navigation

### 4. Full E-commerce Flow
1. Go to http://localhost:3000/#/shop
2. Add products to cart
3. Go to cart and click checkout
4. Use Stripe test card: `4242 4242 4242 4242`
5. Complete payment and verify success page

## Development Workflow

### Frontend Changes
- React components automatically reload on file save
- API calls are proxied to Express server automatically

### Backend Changes  
- Express server automatically restarts via nodemon
- TypeScript compilation happens automatically

### API Testing
```bash
# Test products endpoint
curl http://localhost:3001/api/products

# Test health endpoint
curl http://localhost:3001/health
```

## Troubleshooting

### "Cannot fetch products"
- Check if `.env` file exists with correct `STRIPE_SECRET_KEY`
- Verify products are "Active" in Stripe Dashboard
- Check Express server logs in terminal

### "CORS errors"
- Ensure Express server is running on port 3001
- Check webpack proxy configuration in `webpack.config.js`

### "Server won't start"
- Check if port 3001 is already in use: `lsof -i :3001`
- Verify all dependencies installed: `npm install`
- Check for TypeScript errors in server files

### "Checkout not working"
- Verify Stripe keys are correct
- Check browser network tab for API errors
- Ensure using test card numbers: `4242 4242 4242 4242`

## Architecture

```
Frontend (React)     Backend (Express)     External
http://localhost:3000 ← → http://localhost:3001 ← → Stripe API

Webpack Dev Server       Node.js/TypeScript     stripe.com
- Proxy /api/* to 3001   - Products endpoint
- Hot reload enabled     - Checkout sessions
- Serves React app       - Payment verification
```

## Production Deployment

When ready for production:
1. Use `npm run server:build` to build Express server
2. Deploy frontend and backend separately, or
3. Switch to serverless functions (Vercel/Netlify)

The Vercel API functions in `/api` folder are ready to use as drop-in replacements. 