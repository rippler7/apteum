interface ImportMetaEnv {
  readonly VITE_GOOGLE_ANALYTICS_ID: string
  readonly VITE_GOOGLE_TAG_MANAGER_ID: string
  readonly VITE_GOOGLE_TAG_MANAGER_AUTH: string
  readonly VITE_GOOGLE_TAG_MANAGER_PREVIEW: string
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}