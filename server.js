const express = require('express');
const cors = require('cors');
const path = require('path');
const morgan = require('morgan');

// Load environment variables
require('dotenv').config();

// Import your API functions (we'll need to convert them to CommonJS)
const newsletterSignup = require('./api/newsletter-signup.js');
const newsletterUnsubscribe = require('./api/newsletter-unsubscribe.js');
const contact = require('./api/contact.js');
const products = require('./api/products.js');
const verifySession = require('./api/verify-session.js');
const createCheckoutSession = require('./api/create-checkout-session.js');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Request logging middleware
app.use(morgan('dev'));

// Wrapper function to make Vercel functions work with Express
function wrapVercelFunction(vercelHandler) {
  return async (req, res) => {
    try {
      // Vercel functions expect the handler to manage the response completely
      await vercelHandler(req, res);
    } catch (error) {
      if (!res.headersSent) {
        res.status(500).json({ error: 'Internal server error' });
      }
    }
  };
}

// API routes - these match your Vercel function structure
app.use('/api/newsletter-signup', wrapVercelFunction(newsletterSignup.default));
app.use('/api/newsletter-unsubscribe', wrapVercelFunction(newsletterUnsubscribe.default));
app.use('/api/contact', wrapVercelFunction(contact.default));
app.use('/api/products', wrapVercelFunction(products.default));
app.use('/api/verify-session', wrapVercelFunction(verifySession.default));
app.use('/api/create-checkout-session', wrapVercelFunction(createCheckoutSession.default));

// Serve your frontend (if you want to serve the built frontend too)
app.use(express.static('dist'));

// Catch-all handler for frontend routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📡 API endpoints available at http://localhost:${PORT}/api/*`);
}); 