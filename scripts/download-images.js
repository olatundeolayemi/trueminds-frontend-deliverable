const fs = require('fs');
const path = require('path');
const https = require('https');

// Map of remote blob URLs -> local human-readable filenames
const imageMap = {
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imp1-poja6qTzADTqvPc3ejwn4Qltha1kyV.png': 'hero-background.png',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Jollof%20Delight-ZIYUEEIVy2UIc6VVLAoj9VK87xwBLJ.png': 'jollof-delight.png',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Swallows%20%26%20Soups-tmqSR4Xo6qHVOTxSqoe6yjyMU3qWQT.png': 'swallows-and-soups.png',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Grills%20%26%20BBQ-bQhwe4VIOPEwCFmMt1efQ7ebRXikdW.png': 'grills-and-bbq.png',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sweet%20treats-TEzaqN9nkyHmpPQ2lK1XVEt3kcDO0f.png': 'sweet-treats.png',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Jollof%20Delights-fdV7Ka1XJwbMUWc2yualWlW0hqjCa0.png': 'jollof-delights.png',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Jollof%20Delightss-KjMcGPBzDCaTIere5btMcyfSZ8Mw5P.png': 'jollof-delights-alt.png',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Home%20screen-lsx4pH3GWfjgAHiF9IvUta5MMogbuJ.png': 'home-banner.png',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Footer%20Background%20picture-fqT8kRIVOpZk0NFYyLw2aJ6LQWYckk.png': 'footer-background.png',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Jollof%20Rice%20%26%20Fried%20Chicken%201-9X2rxM3NEcmzFPblVZnCQy1ZqZJzxk.png': 'jollof-rice-fried-chicken-1.png',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Jollof%20Rice%20%26%20Fried%20Chicken%202-jPTVHSZSUdfC8EDOZv2fnigF042Gkc.png': 'jollof-rice-fried-chicken-2.png',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Grilled%20Tilapia%20Fish-h8gyl1dzhgG4a9zipA0CbnzioGMsPo.png': 'grilled-tilapia-fish.png',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Eba%20%26%20Egusi%20Soup%20%28Goat%20Meat%29-YtzcPXbGm7qopSirbZLEnCm3O3wtbZ.png': 'eba-egusi-soup-goat-meat.png',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pounded%20Yam%20%26%20Edikaikong-8wazqTXFpl5qea0nnBIka8ay7Mxu1q.png': 'pounded-yam-edikaikong.png',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Peppered%20Snail-0JcheasFrF1cPnFnkwnwybKMvstsel.png': 'peppered-snail.png',
};

const imagesDir = path.join(process.cwd(), 'public', 'images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

function downloadFile(url, destPath) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
        https.get(response.headers.location, (res2) => {
          const file = fs.createWriteStream(destPath);
          res2.pipe(file);
          file.on('finish', () => { file.close(); resolve(); });
        }).on('error', reject);
      } else {
        const file = fs.createWriteStream(destPath);
        response.pipe(file);
        file.on('finish', () => { file.close(); resolve(); });
      }
    }).on('error', reject);
  });
}

async function main() {
  const entries = Object.entries(imageMap);
  console.log('Downloading ' + entries.length + ' images...');
  
  for (const [url, filename] of entries) {
    const destPath = path.join(imagesDir, filename);
    if (fs.existsSync(destPath)) {
      console.log('Already exists: ' + filename);
      continue;
    }
    try {
      await downloadFile(url, destPath);
      console.log('Downloaded: ' + filename);
    } catch (err) {
      console.error('Failed to download ' + filename + ': ' + err.message);
    }
  }
  
  console.log('All downloads complete!');
  console.log('Files in public/images:');
  const files = fs.readdirSync(imagesDir);
  files.forEach(function(f) { console.log('  - ' + f); });
}

main();
