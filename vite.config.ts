import {defineConfig} from 'vite';
import {VitePWA} from 'vite-plugin-pwa';
import react from '@vitejs/plugin-react';
// import mkcert from "vite-plugin-mkcert";

const isProduction = process.env.NODE_ENV === "production";

const profiling = isProduction && {
  "react-dom/client": "react-dom/profiling",
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // mkcert(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
      },
    }),
  ],
  resolve: {
    alias: {
      ...profiling,
      // 'react-dom': path.resolve(
      //   __dirname,
      //   'node_modules/react-dom/profiling'
      // ),
      // 'scheduler/tracing': path.resolve(
      //     __dirname,
      //     'node_modules/scheduler/tracing-profiling'
      // ),
    },
    
  },
  server: {
    host: '0.0.0.0',
    // https: true
  }
});
