import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
    plugins: [vue()],
    base: '/vue-data-chart/',
    build: {
        cssCodeSplit: false,
        rollupOptions: {
            output: {
                assetFileNames: 'assets/styles/[name].[ext]'
            }
        },
        minify: 'esbuild',
        cssMinify: true
    },
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    }
})
