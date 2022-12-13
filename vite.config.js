import { defineConfig } from 'vite'

export default defineConfig({
    plugins: [netlify-plugin-cloudinary],
      inputs: {
        cloudName: "dphelzfrb",
        deliveryType: "upload",
        uploadPreset: "ojcpkqqc",
      },
    build: {
      rollupOptions: {
        input: {
          main: 'index.html',
          configurator: 'configurator.html',
          confirm: 'confirm.html',
          donutjs: 'donut.js',
          uploadwidget: "upload_widget.js"
        }
      }
    }
  })