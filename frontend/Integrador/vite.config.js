import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    // Actualiza la configuración de resolución para incluir index.jsx
    alias: [
      { find: '/src/main.jsx', replacement: '/src/index.jsx' }
    ]
  }
});
