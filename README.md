# Justany Website 🚀

> Portfolio personnel et blog professionnel construit avec Vue 3, Vite, et TypeScript.

[![Vercel Production Deployment](https://img.shields.io/github/deployments/Justany/justany-website/Production?label=vercel&logo=vercel&logoColor=white)](https://justany.cg)
[![GitHub release (latest by date)](https://img.shields.io/github/v/release/Justany/justany-website)](https://github.com/Justany/justany-website/releases)

## 🌟 À propos

Site web personnel présentant mon portfolio, mon blog et mes services de développement web. Construit avec les dernières technologies web pour une expérience utilisateur optimale.

## ✨ Fonctionnalités

- Vue 3 avec Composition API
- TypeScript pour un code robuste
- Vite pour un développement rapide
- Tailwind CSS pour un design moderne
- Déploiement automatisé sur Vercel
- Optimisation des images
- Analytics et Speed Insights
- Déploiements de preview automatiques
- Déploiements de production avec notes de version

## 🚀 Développement

```bash
# Installation des dépendances
pnpm install

# Démarrage du serveur de développement
pnpm dev

# Build pour la production
pnpm build

# Preview du build de production
pnpm preview
```

## 📦 Déploiement

Le site est automatiquement déployé sur Vercel via GitHub Actions :
- Déploiements de production sur push vers `master` et tags
- Déploiements de preview pour les autres branches et pull requests
- Releases GitHub automatiques pour les versions taggées

## 🔑 Variables d'Environnement

Variables d'environnement requises :
- `VERCEL_TOKEN` - Token API Vercel
- `VERCEL_ORG_ID` - ID de l'organisation Vercel
- `VERCEL_PROJECT_ID` - ID du projet Vercel

## 🔄 CI/CD

Ce projet utilise GitHub Actions pour l'intégration et le déploiement continus :
- Tests et linting automatisés
- Déploiements de preview pour les pull requests
- Déploiements de production pour la branche master
- Releases automatiques pour les tags

## 📚 Documentation

- [Guide de Déploiement](./DEPLOYMENT.md)
- [Notes de Version](./RELEASE_NOTES.md)

## 🤝 Contribution

Les contributions sont les bienvenues ! Consultez notre [guide de contribution](./CONTRIBUTING.md) pour commencer.

## 📝 Licence

MIT © [Justany]
