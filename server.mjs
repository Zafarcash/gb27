import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('.', import.meta.url));
const port = Number(process.env.PORT || 3000);
const mime = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.json': 'application/json; charset=utf-8', '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.webp': 'image/webp' };

const resolveFile = async (pathname) => {
  const normalized = normalize(pathname).replace(/^([.][.][/\\])+/, '');
  const relative = normalized === '/' ? 'index.html' : normalized.replace(/^[/\\]/, '');
  const rootCandidate = join(root, relative);
  try {
    const fileStat = await stat(rootCandidate);
    if (fileStat.isFile()) return rootCandidate;
  } catch {}
  if (!relative.includes('/') && !relative.startsWith('public')) {
    const publicCandidate = join(root, 'public', relative);
    const fileStat = await stat(publicCandidate);
    if (fileStat.isFile()) return publicCandidate;
  }
  throw new Error('not found');
};

const server = createServer(async (request, response) => {
  const pathname = decodeURIComponent(new URL(request.url, `http://${request.headers.host}`).pathname);
  try {
    const filePath = await resolveFile(pathname);
    const body = await readFile(filePath);
    response.writeHead(200, { 'Content-Type': mime[extname(filePath)] || 'application/octet-stream', 'Cache-Control': pathname === '/' ? 'no-cache' : 'public, max-age=3600' });
    response.end(body);
  } catch {
    response.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    response.end('Not found');
  }
});

server.listen(port, '0.0.0.0', () => console.log(`GoreBox27 preview listening on http://0.0.0.0:${port}`));
