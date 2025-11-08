const express = require('express');
const cors = require('cors');
const path = require('path');
const morgan = require('morgan');

// Load environment variables
require('dotenv').config();

// Mount native Express API routes
const apiRoutes = require('./server/routes');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Request logging middleware
app.use(morgan('dev'));

// API routes
app.use('/api', apiRoutes);

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