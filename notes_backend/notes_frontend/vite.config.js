import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://django-react-notes-app-production-0e6b.up.railway.app/',
        changeOrigin: true,
      }
    }
  }
})