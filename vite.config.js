// https://vitejs.dev/config/
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
export default defineConfig({
  plugins: [vue()],
  publicDir: './public',
  root: './',
  base:'./',
  publicPath:"./",
  resolve: {
    alias:{
      '@': path.resolve(__dirname,'./src')
    }
  },
  server: {
    watch: {
      ignored: ['!**/node_modules/your-package-name/**','*.css']
    }
  },
  build: {
      outDir: './docs',
      minify: 'esbuild',
      chunkSizeWarningLimit :1000 ,
  },
})


