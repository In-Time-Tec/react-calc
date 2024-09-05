import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    cors: true,
    proxy: {
      '/api': {
        target: 'https://orange-rotary-phone-xg7g7j4wqg9hgr-3001.app.github.dev',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  } ,
  plugins: [react({
    jsxRuntime: 'classic' // Add this line
  })],
  test: {
    globals: true,
    environment: 'jsdom',
  },
})
