import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/20250707_RSH_codingtest_React/', // 🔥 반드시 리포지토리명과 일치
  build: {
    outDir: 'docs', // 🔥 GitHub Pages용 디렉토리
  },
  plugins: [react()],
  css: {
    devSourcemap: true
  }
})