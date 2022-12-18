import { defineConfig } from 'vite'

export default defineConfig({
    build: {
      rollupOptions: {
        input: {
          main: 'index.html',
          configurator: 'configurator.html',
          confirm: 'confirm.html',
          donutjs: 'donut.js',
          uploadwidget: "./upload_widget.js"
        }
      }
    }
  })