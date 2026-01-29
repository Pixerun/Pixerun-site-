import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './',
  root: './', // Define que a raiz é onde está o index.html
  build: {
    outDir: 'dist',
  }
})
