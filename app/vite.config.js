import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

export default defineConfig({
/*  build:{
    rollupOptions:{
      external:[
          /^bespoke.*!/,
          /^theme-change.*!/,
          /^.*daisyui.*!/

      ]
    }
  },*/
  plugins: [svelte()],
  server: {
    proxy: {
      // string shorthand
      '/api': 'http://localhost:9000',
    }
  }
})
