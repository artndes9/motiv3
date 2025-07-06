import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Update this to your production domain
const SITE_URL = 'https://www.motiinfraheights.com';

// Manually list static routes here. In a larger app you could automate this.
const staticRoutes = [
  '/',
  // add additional routes here as you create them, e.g. '/projects', '/about', '/contact'
];

function buildUrl(loc) {
  return `  <url>\n    <loc>${loc}</loc>\n  </url>`;
}

function generate() {
  const urls = staticRoutes.map(route => buildUrl(`${SITE_URL}${route}`)).join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;

  const publicDir = path.join(__dirname, '..', 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir);
  }

  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), xml);
  console.log('✅ sitemap.xml has been generated in public/');
}

generate(); 