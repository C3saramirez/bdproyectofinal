import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/thesis': {
        target: 'https://j37l0nkr-8080.use2.devtunnels.ms',
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
