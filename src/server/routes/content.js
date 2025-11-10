const express = require('express');
const contentful = require('contentful');

// Load environment variables
require('dotenv').config();

const client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
})

const router = express.Router();

router.get('/blog-posts', async (req, res) => {
    try {
        const entries = await client.getEntries({ content_type: 'blogPost' });
        res.json(entries.items);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch blog posts' });
    }
});

router.get('/blog-posts/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const entry = await client.getEntry(id);
        res.json(entry);
    } catch (error) {
        if (error?.status === 404) {
            return res.status(404).json({ error: 'Blog post not found' });
        }
        res.status(500).json({ error: 'Failed to fetch blog post' });
    }
});

module.exports = router;