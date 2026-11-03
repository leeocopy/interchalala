import { defineConfig } from 'vite';
import { resolve } from 'path';
import fs from 'fs';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        hu: resolve(__dirname, 'hu/index.html'),
      },
    },
  },
  plugins: [
    {
      name: 'copy-static-dirs',
      closeBundle() {
        const dirs = ['img', 'font', 'videopromo', 'videoreels', 'sit'];
        dirs.forEach(dir => {
          if (fs.existsSync(dir)) {
            const dest = resolve(__dirname, 'dist', dir);
            fs.cpSync(dir, dest, { recursive: true });
            console.log(`[copy-static] Copied ${dir} to dist/${dir}`);
          }
        });
        // Also ensure robots.txt and sitemap.xml are in dist
        ['robots.txt', 'sitemap.xml', 'og-image.jpg'].forEach(file => {
          if (fs.existsSync(file)) {
            fs.copyFileSync(file, resolve(__dirname, 'dist', file));
          }
        });
      }
    }
  ]
});
