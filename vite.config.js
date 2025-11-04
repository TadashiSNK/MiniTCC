import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['.ngrok-free.app'],
    port: 5173,
    proxy: {
      '/user': 'http://localhost:3333', // forward /api requests to backend
    },
  },
})