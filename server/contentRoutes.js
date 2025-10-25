const fs = require('fs');
const path = require('path');
const express = require('express');

const router = express.Router();

// Editing guard: allow writes only when running locally and not in production
const DEV_MODE = process.env.NODE_ENV !== 'production' && process.env.ALLOW_LOCAL_EDIT !== 'false';
function isLocalRequest(req) {
  try {
    const hostHeader = (req.headers.host || '').toString();
    const hostname = (req.hostname || '').toString();
    const ip = (req.ip || '').toString();
    const forwarded = (req.headers['x-forwarded-for'] || '').toString();
    const localTokens = ['localhost', '127.0.0.1', '::1'];
    const forwardedIps = forwarded
      .split(',')
      .map(s => s.trim())
      .filter(Boolean);
    const isLocalHost = localTokens.some(t => hostHeader.includes(t) || hostname.includes(t));
    const isLocalIp = localTokens.some(t => ip.includes(t)) || forwardedIps.some(ipVal => localTokens.includes(ipVal));
    return isLocalHost || isLocalIp;
  } catch {
    return false;
  }
}

// Preflight handler
router.options('/content', (req, res) => res.sendStatus(200));

// Read content JSON for a given type/slug
router.get('/content', (req, res) => {
  const { type = 'news', slug } = req.query || {};
  if (!slug) return res.status(400).json({ error: 'Missing slug' });

  const filePath = path.join(process.cwd(), 'server', 'content', 'data', String(type), `${slug}.json`);
  try {
    const data = fs.existsSync(filePath)
      ? JSON.parse(fs.readFileSync(filePath, 'utf-8'))
      : {};
    return res.status(200).json({ content: data });
  } catch (e) {
    return res.status(500).json({ error: 'Read failed' });
  }
});

// Write content JSON for a given type/slug
router.put('/content', (req, res) => {
  if (!DEV_MODE || !isLocalRequest(req)) {
    return res.status(403).json({ error: 'Editing disabled: local development only' });
  }
  const { type = 'news', slug } = req.query || {};
  if (!slug) return res.status(400).json({ error: 'Missing slug' });

  const filePath = path.join(process.cwd(), 'server', 'content', 'data', String(type), `${slug}.json`);
  try {
    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    fs.writeFileSync(
      filePath,
      JSON.stringify(req.body?.content || {}, null, 2),
      'utf-8'
    );
    return res.status(200).json({ ok: true });
  } catch (e) {
    return res.status(500).json({ error: 'Write failed' });
  }
});

module.exports = router;


