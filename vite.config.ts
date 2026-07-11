import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // The site uses johnpaulbantillo.site via GitHub Pages, so assets belong at the domain root.
  base: '/',
  build: {
    rollupOptions: {
      input: {
        home: 'index.html',
        about: 'about/index.html',
        services: 'services/index.html',
        skills: 'skills/index.html',
        experience: 'experience/index.html',
        projects: 'projects/index.html',
        contact: 'contact/index.html',
      },
    },
  },
})
