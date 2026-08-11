import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // Caminhos relativos funcionam tanto no domínio raiz quanto no GitHub Pages.
  base: './',
  plugins: [react(), tailwindcss()],
})
