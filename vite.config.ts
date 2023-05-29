import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  envPrefix: 'APP_',
  logLevel: 'info',
  clearScreen: true,
  envDir: 'env',
  server: {
    port: 3001,
  },
  plugins: [react()],
});
