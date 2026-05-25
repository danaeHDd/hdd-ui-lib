import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { writeFile, readFile, rmSync, existsSync } from 'fs'

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: resolve(__dirname, 'packages/index.ts'),
      name: 'HddUiLib',
      fileName: (format) => `hdd-ui-lib.${format}.js`
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') {
            return 'hdd-ui-lib.css'
          }
          return assetInfo.name as string
        }
      }
    }
  },
  plugins: [
    vue(),
    {
      name: 'post-build-cleanup',
      closeBundle() {
        const distPath = resolve(__dirname, 'dist')
        const filesToRemove = ['favicon.svg', 'icons.svg']
        filesToRemove.forEach(file => {
          const filePath = resolve(distPath, file)
          if (existsSync(filePath)) {
            rmSync(filePath)
            console.log(`Removed: ${file}`)
          }
        })
      }
    }
  ]
})
