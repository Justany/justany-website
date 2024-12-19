<script setup lang="ts">
import { ref, computed } from 'vue'
import type { Project } from '@/types/project'
import WebProjectCard from '../portfolio/WebProjectCard.vue'
import DesignProjectCard from '../portfolio/DesignProjectCard.vue'
import AdsProjectCard from '../portfolio/AdsProjectCard.vue'

type MainCategory = 'Tous' | 'Web' | 'Design' | 'Ads'
type SubCategories = {
  Web: string[];
  Design: string[];
  Ads: string[];
}

const mainCategories: MainCategory[] = ['Tous', 'Web', 'Design', 'Ads']
const subCategories: SubCategories = {
  Web: ['Applications', 'Plateformes', 'Sites'],
  Design: ['Logos', 'Affiches', 'Maquettes'],
  Ads: ['Réseaux Sociaux', 'Google Ads', 'Performance']
}

const selectedMainCategory = ref<MainCategory>('Tous')
const selectedSubCategory = ref<string>('Tous')

const projects = ref<Project[]>([
  // Web Projects
  {
    id: 1,
    name: 'Karriere',
    description: 'Plateforme de recherche d\'emploi avec gestion intuitive des candidatures.',
    image: './img/projects/karriere.jpg',
    mainCategory: 'Web',
    subCategory: 'Plateformes',
    link: 'https://karriere.cg',
    tags: ['Vue.js', 'Laravel', 'PostgreSQL'],
    features: [
      'Gestion des profils candidats',
      'Système de matching avancé',
      'Tableau de bord analytique'
    ]
  },
  // Design Projects - Logos
  {
    id: 8,
    name: 'Logo Fournisseur',
    description: 'Design du logo et de l\'identité visuelle de Fournisseur',
    image: './img/logos/F logo 512 x 512 px.png',
    mainCategory: 'Design',
    subCategory: 'Logos',
    tools: ['Illustrator', 'Photoshop'],
    deliverables: [
      'Logo principal',
      'Variantes du logo',
      'Guide d\'utilisation',
      'Fichiers sources'
    ]
  },
  // Ads Projects
  {
    id: 15,
    name: 'Campagne E-commerce',
    description: 'Campagne publicitaire pour une boutique en ligne',
    mainCategory: 'Ads',
    subCategory: 'Performance',
    platform: 'Google Ads',
    metrics: {
      budget: '5000 €',
      duration: '3 mois',
      results: {
        sales: '25000',
        reach: '50000',
        engagement: 15
      }
    }
  }
])

// Computed property for filtered projects
const filteredProjects = computed(() => {
  let filtered = projects.value
  if (selectedMainCategory.value !== 'Tous') {
    filtered = filtered.filter((p: { mainCategory: string }) => p.mainCategory === selectedMainCategory.value)
    if (selectedSubCategory.value !== 'Tous') {
      filtered = filtered.filter((p: { subCategory: string }) => p.subCategory === selectedSubCategory.value)
    }
  }
  return filtered
})

// Computed property for available subcategories
const availableSubCategories = computed(() => {
  if (selectedMainCategory.value === 'Tous' || !subCategories[selectedMainCategory.value as keyof SubCategories]) {
    return []
  }
  return ['Tous', ...subCategories[selectedMainCategory.value as keyof SubCategories]]
})

// Fonction pour générer un dégradé aléatoire
const generateGradient = (name: string) => {
  const colors = [
    ['from-orange-400', 'via-rose-400', 'to-purple-500'],
    ['from-blue-400', 'via-cyan-400', 'to-teal-500'],
    ['from-green-400', 'via-emerald-400', 'to-teal-500'],
    ['from-indigo-400', 'via-purple-400', 'to-pink-500'],
    ['from-rose-400', 'via-orange-400', 'to-yellow-500']
  ]
  const hash = name.split('').reduce((acc, char) => char.charCodeAt(0) + acc, 0)
  return colors[hash % colors.length]
}

// Vérifier si une image existe
const imageExists = ref(new Set())

const checkImage = (src: string) => {
  if (imageExists.value.has(src)) return true
  const img = new Image()
  img.onload = () => imageExists.value.add(src)
  img.src = src
  return imageExists.value.has(src)
}
</script>

<template>
  <section id="portfolio" class="relative px-6 py-24 bg-zinc-900">
    <!-- Gradient de transition haut -->
    <div class="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white to-zinc-900 opacity-5"></div>

    <!-- Gradient de transition bas -->
    <div class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-zinc-900 opacity-5"></div>

    <!-- Background Pattern -->
    <div class="absolute inset-0"
      :style="{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(63 63 70 / 0.2) 1px, transparent 0)' }"
      style="background-size: 40px 40px;"></div>

    <div class="max-w-7xl mx-auto relative z-10">
      <!-- Category Filters -->
      <div class="mb-12">
        <!-- Main Categories -->
        <div class="flex flex-wrap gap-4 mb-6">
          <button v-for="category in mainCategories" 
                  :key="category"
                  @click="selectedMainCategory = category; selectedSubCategory = 'Tous'"
                  :class="['px-4 py-2 rounded-lg transition-all',
                           selectedMainCategory === category 
                             ? 'bg-orange-500 text-white' 
                             : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700']">
            {{ category }}
          </button>
        </div>
        
        <!-- Sub Categories (shown only when main category is selected) -->
        <div v-if="selectedMainCategory !== 'Tous'" class="flex flex-wrap gap-3">
          <button v-for="subCat in availableSubCategories" :key="subCat"
                  @click="selectedSubCategory = subCat"
                  :class="['px-3 py-1 rounded-md text-sm transition-all',
                           selectedSubCategory === subCat
                             ? 'bg-orange-500/20 text-orange-500'
                             : 'bg-zinc-800/50 text-zinc-500 hover:bg-zinc-700/50']">
            {{ subCat }}
          </button>
        </div>
      </div>

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <template v-for="project in filteredProjects" :key="project.id">
          <WebProjectCard v-if="project.mainCategory === 'Web'" :project="project" />
          <DesignProjectCard v-else-if="project.mainCategory === 'Design'" :project="project" />
          <AdsProjectCard v-else-if="project.mainCategory === 'Ads'" :project="project" />
        </template>
      </div>
    </div>
  </section>
</template>

<style scoped>
.bg-grid-white\/\[0\.02\] {
  -webkit-mask-image: linear-gradient(to top, transparent, 50%, black);
  mask-image: linear-gradient(to top, transparent, 50%, black);
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(255 255 255 / 0.02)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
}
</style>
