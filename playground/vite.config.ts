import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  server: {
    port: 5178,
    open: true
  },
  resolve: {
    alias: {
      'hdd-ui-lib': resolve(__dirname, '../packages/index.ts')
    }
  }
})
