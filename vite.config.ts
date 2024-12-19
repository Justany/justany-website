import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
import VitePluginBrowserSync from 'vite-plugin-browser-sync';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePluginBrowserSync({
      dev: {
        bs: {
          ui: {
            port: 8080,
          },
          notify: true,
        },
      },
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
