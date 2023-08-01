import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'

// https://vitejs.dev/config/
module.exports = {
  css: {
    postcss: {
      plugins: [ require('tailwindcss'), require('autoprefixer') ]
    }
  },
  plugins: [ vue() ],
  base: './',
  // 设置路径别名
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve('./src')
      }
    ]
  }
}
