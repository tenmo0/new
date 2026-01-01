import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Karinderya-App/', // <-- Important for GitHub Pages
  plugins: [react()]
})
