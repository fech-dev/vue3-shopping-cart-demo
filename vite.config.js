import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { dirname } from 'desm';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(dirname(import.meta.url), './src'),
    },
  },
});
