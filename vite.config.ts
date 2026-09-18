import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // "assets" is already used by public/assets (images, css, plugin js),
    // so bundled JS/CSS goes into its own directory to avoid clobbering it.
    assetsDir: 'bundled',
  },
})
