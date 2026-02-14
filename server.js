import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Serve static files from dist directory
app.use(express.static(join(__dirname, 'project', 'dist')));

// Route all requests to index.html (SPA fallback)
app.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'project', 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
