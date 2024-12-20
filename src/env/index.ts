/**
 * Validation et chargement des variables d'environnement
 */

export const ENV = {
  CAL_LIVE_KEY: import.meta.env.VITE_CAL_LIVE_KEY,
} as const

/**
 * Valide que toutes les variables d'environnement requises sont définies
 */
export function validateEnv() {
  const requiredEnvVars = ['CAL_LIVE_KEY'] as const
  const missingEnvVars = requiredEnvVars.filter(key => !ENV[key])

  if (missingEnvVars.length > 0) {
    throw new Error(
      `Variables d'environnement manquantes : ${missingEnvVars.join(', ')}\n` +
      `Veuillez vérifier votre fichier .env`
    )
  }

  return ENV
}

// Exporter une instance validée des variables d'environnement
export const env = validateEnv()

// Type pour les variables d'environnement
export type Env = typeof ENV
