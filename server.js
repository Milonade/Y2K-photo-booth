import fs from 'fs';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distPath = path.join(__dirname, 'dist');
const indexPath = path.join(distPath, 'index.html');

const app = express();
const PORT = process.env.PORT || 3000;

if (!fs.existsSync(indexPath)) {
  console.warn('Warning: Build output not found. Run "npm run build" before starting the server.');
}

app.use(express.static(distPath));

app.get('/', (req, res) => {
  if (!fs.existsSync(indexPath)) {
    return res.status(500).send('Build output not found. Run "npm run build" before starting the server.');
  }
  res.sendFile(indexPath);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
