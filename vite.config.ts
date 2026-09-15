import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// Nombre del repo en GitHub Pages -> https://<usuario>.github.io/niki-casual-food/
const BASE = process.env.VITE_BASE ?? '/niki-casual-food/'

export default defineConfig({
  base: BASE,
  plugins: [react(), tailwindcss()],
})
