import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static assets
app.use(express.static(__dirname));

// Fallback to index.html for root or html routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get(['/play', '/play.html', '/play-*'], (req, res) => {
  res.sendFile(path.join(__dirname, 'play-260605.html'));
});

app.get(['/portal', '/portal.html', '/portal-*'], (req, res) => {
  res.sendFile(path.join(__dirname, 'portal-260605.html'));
});

// Any unmatched GET request falls back to index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`CloudMoon server running on http://0.0.0.0:${PORT}`);
});
