# Guide de Déploiement et CI/CD

Ce document détaille le processus de déploiement continu et d'intégration continue (CI/CD) mis en place pour le projet.

## Table des matières
- [Architecture générale](#architecture-générale)
- [Workflows GitHub Actions](#workflows-github-actions)
- [Processus de déploiement](#processus-de-déploiement)
- [Gestion des versions](#gestion-des-versions)
- [Guide pas à pas](#guide-pas-à-pas)
- [Dépannage](#dépannage)

## Architecture générale

Le projet utilise une architecture de déploiement moderne basée sur :
- GitHub Actions pour l'automatisation
- Vercel pour l'hébergement
- pnpm pour la gestion des dépendances
- GitHub pour le versioning et les releases

### Structure des environnements
- **Preview** : Pour les branches de développement et les PRs
- **Production** : Pour la branche master et les tags

## Workflows GitHub Actions

### 1. Workflow de Preview (`vercel-preview.yml`)
Déclenché sur :
- Push sur toute branche sauf master
- Création/mise à jour de Pull Request

```yaml
on:
  push:
    branches-ignore:
      - master
  pull_request:
    branches:
      - master
```

Actions principales :
- Build du projet
- Déploiement sur URL unique
- Commentaire automatique sur la PR

### 2. Workflow de Production (`vercel-deploy.yml`)
Déclenché sur :
- Push sur master
- Création de tag

```yaml
on:
  push:
    branches:
      - master
    tags:
      - 'v*'
```

Actions principales :
- Build en mode production
- Déploiement sur l'URL principale
- Création de release (pour les tags)

## Processus de déploiement

### Déploiement de Preview
1. **Déclenchement**
   ```bash
   git checkout -b feature/nouvelle-fonctionnalite
   git add .
   git commit -m "feat: description"
   git push origin feature/nouvelle-fonctionnalite
   ```

2. **Actions automatiques**
   - Build du projet
   - Tests
   - Déploiement sur URL unique
   - Commentaire sur PR avec l'URL

3. **Vérification**
   - Tests sur l'URL de preview
   - Revue de code
   - Validation des changements

### Déploiement de Production
1. **Merge dans master**
   ```bash
   git checkout master
   git merge feature/nouvelle-fonctionnalite
   git push origin master
   ```

2. **Actions automatiques**
   - Build production
   - Tests
   - Déploiement sur URL principale
   - Mise à jour des domaines

3. **Création de release**
   ```bash
   git tag -a v1.1.0 -m "Release v1.1.0"
   git push origin v1.1.0
   ```

## Gestion des versions

### Convention de versioning
- **Major** (x.0.0) : Changements majeurs/breaking changes
- **Minor** (0.x.0) : Nouvelles fonctionnalités
- **Patch** (0.0.x) : Corrections de bugs

### Processus de release
1. Mise à jour de `RELEASE_NOTES.md`
2. Création du tag
3. Push du tag
4. Release automatique

## Guide pas à pas

### 1. Développement d'une nouvelle fonctionnalité
```bash
# Créer une nouvelle branche
git checkout -b feature/ma-fonctionnalite

# Développer et commiter
git add .
git commit -m "feat: description"

# Pousser et créer une PR
git push origin feature/ma-fonctionnalite
```

### 2. Review et merge
1. Créer la Pull Request sur GitHub
2. Attendre les checks automatiques
3. Vérifier le déploiement de preview
4. Review du code
5. Merge dans master

### 3. Release
```bash
# Sur master
git checkout master
git pull origin master

# Créer et pousser le tag
git tag -a v1.1.0 -m "Release v1.1.0"
git push origin v1.1.0
```

## Dépannage

### Erreurs communes

1. **Échec du build**
   - Vérifier les logs dans GitHub Actions
   - Vérifier les dépendances
   - Tester en local : `pnpm build`

2. **Échec du déploiement**
   - Vérifier les variables d'environnement
   - Vérifier les tokens Vercel
   - Consulter les logs Vercel

3. **Échec de création de release**
   - Vérifier les permissions GitHub
   - Vérifier le format du tag
   - Vérifier les secrets GitHub

### Variables d'environnement requises

Dans GitHub Secrets :
```
VERCEL_TOKEN=xxx
VERCEL_ORG_ID=xxx
VERCEL_PROJECT_ID=xxx
```

Dans Vercel :
- Toutes les variables de `.env.local`

### Commandes utiles

```bash
# Vérifier les déploiements
vercel ls

# Inspecter un déploiement
vercel inspect [url-deployment]

# Lister les variables d'environnement
vercel env ls

# Voir les logs
vercel logs [url-deployment]
```

## Bonnes pratiques

1. **Commits**
   - Utiliser des messages conventionnels
   - Préfixer avec le type (feat:, fix:, docs:, etc.)
   - Être descriptif mais concis

2. **Branches**
   - Une branche par fonctionnalité
   - Nommer clairement (feature/, fix/, hotfix/)
   - Garder à jour avec master

3. **Pull Requests**
   - Description claire des changements
   - Lier les issues concernées
   - Ajouter des captures d'écran si UI

4. **Déploiements**
   - Toujours tester sur preview
   - Vérifier les variables d'environnement
   - Valider sur plusieurs navigateurs
