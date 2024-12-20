/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_CAL_LIVE_KEY: string
  // Ajoutez d'autres variables d'environnement ici
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

export {};
