import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';

const root = new URL('../', import.meta.url);
const port = Number(process.env.PORT || 3000);
// Server lokal hanya menyajikan aset aplikasi, bukan seluruh isi repository.
const assets = new Map([
  ['/', ['index.html', 'text/html; charset=utf-8']],
  ['/index.html', ['index.html', 'text/html; charset=utf-8']],
  ['/style.css', ['style.css', 'text/css; charset=utf-8']],
  ['/app.js', ['app.js', 'text/javascript; charset=utf-8']],
  ['/core.js', ['core.js', 'text/javascript; charset=utf-8']],
]);
const server = createServer(async (req, res) => {
  if (!['GET', 'HEAD'].includes(req.method)) {
    res.writeHead(405, { Allow: 'GET, HEAD' });
    res.end('Method not allowed');
    return;
  }
  try {
    const path = new URL(req.url, 'http://localhost').pathname;
    const asset = assets.get(path);
    if (!asset) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('Not found');
      return;
    }
    const body = await readFile(new URL(asset[0], root));
    res.writeHead(200, {
      'Content-Type': asset[1],
      'Content-Length': body.length,
      'Cache-Control': 'no-store',
    });
    res.end(req.method === 'HEAD' ? undefined : body);
  } catch {
    res.writeHead(500);
    res.end('Tidak dapat membaca aset aplikasi.');
  }
});
server.listen(port, '127.0.0.1', () => {
  console.log(`SKOM tersedia di http://localhost:${port}`);
});
server.on('error', error => {
  console.error(error.message);
  process.exitCode = 1;
});
