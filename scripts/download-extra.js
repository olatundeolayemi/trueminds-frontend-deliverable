import fs from 'fs';
import path from 'path';
import https from 'https';

const dir = '/vercel/share/v0-project/public/images';
if (!fs.existsSync(dir)) { fs.mkdirSync(dir, { recursive: true }); }

const extra = [
  {
    url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/explore-m4o9tYddc7Q7o6eytVuPD3VbUxA5Db.png',
    name: 'explore-header.png',
  },
  {
    url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Menu-vDh9hQW1itvCg7NalbXAGJEmt2WNDP.png',
    name: 'menu-background.png',
  },
];

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        https.get(res.headers.location, (res2) => {
          res2.pipe(file);
          file.on('finish', () => { file.close(); resolve(); });
        }).on('error', reject);
      } else {
        res.pipe(file);
        file.on('finish', () => { file.close(); resolve(); });
      }
    }).on('error', reject);
  });
}

async function main() {
  for (const img of extra) {
    const dest = path.join(dir, img.name);
    await download(img.url, dest);
    console.log('Downloaded:', img.name);
  }
  console.log('Done!');
}

main();
