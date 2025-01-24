import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  build:{
    sourcemap:true,
  },
  plugins: [react()],
  server:{
    port:3000,
    proxy:{
      "/api":{
        target:"https://chat-app-fullstack-2dow.onrender.com",
        changeOrigin:true,
        secure:false,
      }
    }
  }
})
