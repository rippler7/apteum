import { defineConfig, loadEnv } from 'vite'
import { VitePluginRadar } from 'vite-plugin-radar'
import reactRefresh from "eslint-plugin-react-refresh";

import react from '@vitejs/plugin-react-swc'

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
      }),
      {"react-refresh": reactRefresh}
    ],
    rules: {
      "react-refresh/only-export-components": "warn"
    }
  }
})
