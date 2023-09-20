import path from 'node:path'
import Vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import svgLoader from 'vite-svg-loader'

export default defineConfig({
  base: './',

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },


  plugins: [Vue(), svgLoader()],
})
