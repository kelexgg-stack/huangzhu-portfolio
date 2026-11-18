import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // Relative paths allow GitHub Pages to serve the app from /<repository>/.
  base: './',
  plugins: [react()],
  // Keep the large portfolio videos out of duplicate build copies. They remain
  // available from public/videos during local preview and can be deployed as a
  // separate media directory alongside the generated app.
  build: { copyPublicDir: false }
});
