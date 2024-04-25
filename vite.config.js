import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import cleanPlugin from 'vite-plugin-clean'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    cleanPlugin({
      targetFiles: ['dist']
    }),
  ]
})
