# Guide de Contribution 🤝

Merci de votre intérêt pour contribuer à justany.cg ! Ce document fournit les lignes directrices pour contribuer au projet.

## Table des matières
- [Code de Conduite](#code-de-conduite)
- [Comment Contribuer](#comment-contribuer)
- [Style de Code](#style-de-code)
- [Processus de Développement](#processus-de-développement)
- [Soumettre des Changes](#soumettre-des-changes)

## Code de Conduite

Ce projet adhère au [Code de Conduite Contributor Covenant](https://www.contributor-covenant.org/fr/version/2/0/code_of_conduct/). En participant, vous devez respecter ce code.

## Comment Contribuer

1. **Fork le Repository**
   ```bash
   # Cloner votre fork
   git clone https://github.com/votre-username/justany-website.git
   cd justany-website
   
   # Configurer le remote upstream
   git remote add upstream https://github.com/Justany/justany-website.git
   ```

2. **Créer une Branche**
   ```bash
   # Mettre à jour master
   git checkout master
   git pull upstream master
   
   # Créer une branche pour vos changements
   git checkout -b feature/ma-fonctionnalite
   ```

3. **Développer**
   ```bash
   # Installer les dépendances
   pnpm install
   
   # Démarrer le serveur de développement
   pnpm dev
   ```

## Style de Code

### TypeScript
- Utiliser TypeScript strict mode
- Définir des types explicites
- Éviter `any`

```typescript
// ✅ Bon
interface User {
  id: number;
  name: string;
}

// ❌ À éviter
const user: any = { id: 1 };
```

### Vue 3
- Utiliser la Composition API
- Un composant par fichier
- Props typées explicitement

```vue
<script setup lang="ts">
interface Props {
  title: string;
  count?: number;
}

const props = withDefaults(defineProps<Props>(), {
  count: 0
});
</script>
```

### CSS
- Utiliser Tailwind CSS
- BEM pour les classes personnalisées
- Mobile-first

```vue
<template>
  <div class="card md:flex">
    <div class="card__header">
      <!-- Contenu -->
    </div>
  </div>
</template>
```

## Processus de Développement

1. **Tests**
   ```bash
   # Lancer les tests
   pnpm test
   
   # Vérifier le linting
   pnpm lint
   ```

2. **Build**
   ```bash
   # Construire pour la production
   pnpm build
   
   # Prévisualiser le build
   pnpm preview
   ```

3. **Commits**
   Suivre la convention [Conventional Commits](https://www.conventionalcommits.org/):
   ```bash
   feat: ajouter la fonctionnalité X
   fix: corriger le bug Y
   docs: mettre à jour la documentation
   style: formatter le code
   refactor: restructurer la fonction Z
   test: ajouter des tests pour X
   chore: mettre à jour les dépendances
   ```

## Soumettre des Changes

1. **Préparer la Pull Request**
   - Mettre à jour votre branche avec master
   - Résoudre les conflits éventuels
   - S'assurer que tous les tests passent

   ```bash
   git fetch upstream
   git rebase upstream/master
   ```

2. **Créer la Pull Request**
   - Titre clair suivant Conventional Commits
   - Description détaillée des changements
   - Screenshots si changements visuels
   - Référencer les issues liées

3. **Template de Pull Request**
   ```markdown
   ## Description
   Décrivez clairement vos changements

   ## Type de changement
   - [ ] 🐛 Bug fix
   - [ ] ✨ Nouvelle fonctionnalité
   - [ ] 📝 Documentation
   - [ ] ♻️ Refactoring
   - [ ] 💄 Style
   - [ ] ✅ Tests

   ## Screenshots
   Si applicable, ajoutez des captures d'écran

   ## Tests
   Décrivez les tests effectués

   ## Checklist
   - [ ] Tests passés
   - [ ] Linting OK
   - [ ] Documentation mise à jour
   - [ ] Pas de vulnérabilités
   ```

4. **Review**
   - Répondre aux commentaires
   - Faire les modifications demandées
   - Re-request review après changements

## Déploiement

Les déploiements sont automatiques :
- Preview pour chaque PR
- Production pour master

## Questions

Pour toute question :
1. Vérifier les issues existantes
2. Créer une nouvelle issue
3. Utiliser les discussions GitHub

Merci de contribuer ! 🙏
