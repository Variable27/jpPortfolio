import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // The site uses johnpaulbantillo.site via GitHub Pages, so assets belong at the domain root.
  base: '/',
})
