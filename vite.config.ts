import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  root: './', // your project root
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: './index.html',          // your main React entry
        chemicalreaction: './public/chapter1/chemicalreaction.html', // optional if you want to build it separately
      }
    }
  }
})