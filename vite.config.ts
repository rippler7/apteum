import { resolve } from 'path'
import { defineConfig, loadEnv } from 'vite'
import { VitePluginRadar } from 'vite-plugin-radar'

import react from '@vitejs/plugin-react-swc'

const outDir = resolve(__dirname, 'dist')

// https://vitejs.dev/config/
export default defineConfig(({mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [
      react(),
      VitePluginRadar({
        enableDev: true,
        analytics: [
          {
            id: env.VITE_GOOGLE_ANALYTICS_ID
          }
        ],
        gtm: [
          {
            id: env.VITE_GOOGLE_TAG_MANAGER_ID,
            environment: {
              auth: env.VITE_GOOGLE_TAG_MANAGER_AUTH,
              preview: env.VITE_GOOGLE_TAG_MANAGER_PREVIEW
            }
          }
        ]
      })
    ],
    build:{
      outDir,
      emptyOutDir: true
    }
  }
})
