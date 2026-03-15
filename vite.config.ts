import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  root: './',

  server: {
    host: true,
    port: 10000,
    allowedHosts: true
  },

  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: './index.html',
        chemicalreaction: './public/chapter1/chemicalreaction.html'
      }
    }
  }
})