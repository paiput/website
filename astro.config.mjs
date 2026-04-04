// @ts-check
import { defineConfig, fontProviders } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'

// https://astro.build/config
export default defineConfig({
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: 'Bree Serif',
      cssVariable: '--font-bree-serif',
    },
    {
      provider: fontProviders.fontsource(),
      name: 'Nunito Sans',
      cssVariable: '--font-nunito-sans',
    },
  ],
  vite: {
    plugins: [tailwindcss()],
  },
})
