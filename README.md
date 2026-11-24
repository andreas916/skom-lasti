# SKOM Kelompok 13

Source code prototype Smart Kitchen Order Management untuk Deliv 2 II3120. Aplikasi menggunakan HTML, CSS, dan JavaScript native tanpa dependency npm tambahan.

## Berkas

| Berkas | Fungsi |
| --- | --- |
| `index.html` | Struktur halaman dan navigasi |
| `style.css` | Tampilan dan layout responsif |
| `app.js` | Layar, input pengguna, dan penyimpanan browser |
| `core.js` | Logika sembilan layanan S01–S09 dan pemetaan 36 action |
| `test.mjs` | 14 skenario uji logika dan integrasi |
| `scripts/build.mjs` | Menyalin empat aset aplikasi ke `dist/` |
| `scripts/dev.mjs` | Server HTTP lokal untuk pengembangan |
| `vercel.json` | Konfigurasi build dan folder hasil untuk Vercel |

## Perintah lokal

Memerlukan Node.js 20 atau lebih baru. Tidak perlu memasang dependency.

```sh
npm run dev
npm test
npm run build
```

`npm run dev` membuka server di `http://localhost:3000`. `npm test` menghasilkan `test-results.json`. `npm run build` menghasilkan empat aset statis di `dist/`. Buka aplikasi melalui HTTP, karena JavaScript menggunakan ES modules.

## Ruang lingkup

Fungsi aplikasi sama dengan prototype yang disiapkan sebelumnya: penerimaan dan normalisasi pesanan, deduplikasi, antrean dan estimasi, kesiapan bahan, reservasi kapasitas, QC, pengemasan, pickup, notifikasi simulasi, riwayat, serta ekspor JSON.

Integrasi Hangry dan GoFood, menu, kapasitas, dan jam merupakan simulasi. Data disimpan di localStorage browser, sehingga setiap browser atau perangkat memiliki state sendiri. Hosting pada URL yang sama tidak membuat data menjadi basis data bersama. Tidak ada login aplikasi, API key, atau database server dalam source ini.

Referensi konfigurasi: https://vercel.com/docs/project-configuration/vercel-json
