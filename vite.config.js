import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        // ✅ Use a function instead of an object (cross-platform safe)
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router-dom')) {
              return 'vendor'
            }
            if (id.includes('framer-motion')) {
              return 'motion'
            }
            // fallback for other libs
            return id.toString().split('node_modules/')[1].split('/')[0].toString()
          }
        },
      },
    },
    // ✅ Optimize for production
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // remove console logs
      },
    },
  },
  // ✅ Add base URL for production builds
  base: '/',
})
