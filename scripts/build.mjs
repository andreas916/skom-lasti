import { copyFile, mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

// Hanya aset aplikasi yang disalin ke folder publik hasil build.
const root = new URL('../', import.meta.url);
const output = new URL('dist/', root);
await mkdir(output, { recursive: true });
for (const name of ['index.html', 'style.css', 'app.js', 'core.js']) {
  await copyFile(new URL(name, root), new URL(name, output));
}
console.log(`Build selesai: ${fileURLToPath(output)}`);
