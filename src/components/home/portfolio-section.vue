<script setup lang="ts">
import { ref, computed } from 'vue'

const categories = ['Tous', 'Site Web', 'App Mobile', 'Entreprise']
const selectedCategory = ref('Tous')
const activeProject = ref(0)

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

const projects = [
  {
    id: 1,
    name: 'Karriere',
    description: 'Plateforme de recherche d\'emploi avec gestion intuitive des candidatures et profils.',
    image: './img/projects/karriere.jpg',
    category: 'Site Web',
    link: 'https://karriere.cg',
    tags: ['Vue.js', 'Laravel', 'PostgreSQL'],
    features: [
      'Gestion des profils candidats',
      'Système de matching avancé',
      'Tableau de bord analytique'
    ]
  },
  {
    id: 2,
    name: 'Fournisseur Web',
    description: 'Marketplace numérique facilitant l\'achat et la vente de produits en ligne.',
    image: './img/projects/fournisseur.jpg',
    category: 'Site Web',
    link: 'https://fournisseur.cg',
    tags: ['Vue.js', 'Node.js', 'MongoDB'],
    features: [
      'Système de paiement sécurisé',
      'Gestion des commandes en temps réel',
      'Interface vendeur complète'
    ]
  },
  {
    id: 3,
    name: 'Fournisseur Mobile',
    description: 'Application mobile pour accéder à la marketplace Fournisseur sur iOS et Android.',
    image: './img/projects/fournisseur-mobile.jpg',
    category: 'App Mobile',
    link: 'https://fournisseur.cg/mobile',
    tags: ['React Native', 'Redux', 'Firebase'],
    features: [
      'Notifications push',
      'Scanner de code-barres',
      'Mode hors ligne'
    ]
  },
  {
    id: 4,
    name: 'EXP Copilot',
    description: 'Assistant intelligent pour l\'optimisation des processus d\'exportation.',
    image: './img/projects/exp-copilot.jpg',
    category: 'Entreprise',
    link: 'https://exp-copilot.cg',
    tags: ['Vue.js', 'Python', 'OpenAI'],
    features: [
      'IA pour l\'analyse documentaire',
      'Automatisation des processus',
      'Tableau de bord en temps réel'
    ]
  },
  {
    id: 5,
    name: 'Leaya',
    description: 'Application de rencontre entre professionnels, facilitant le networking et les opportunités professionnelles.',
    image: './img/projects/leaya.jpg',
    category: 'App Mobile',
    link: 'https://leaya.app',
    tags: ['Flutter', 'Firebase', 'Node.js'],
    features: [
      'Matching basé sur les intérêts',
      'Chat en temps réel',
      'Partage de profil professionnel'
    ]
  },
  {
    id: 6,
    name: 'La Marine',
    description: 'Site web officiel de la Marine Nationale Congolaise, présentant ses activités et services.',
    image: './img/projects/marine.jpg',
    category: 'Site Web',
    link: 'https://marine.gouv.cg',
    tags: ['Vue.js', 'Tailwind CSS', 'Laravel'],
    features: [
      'Présentation des activités',
      'Actualités et événements',
      'Portail de recrutement'
    ]
  },
  {
    id: 7,
    name: 'Zool Taxe Forex LS',
    description: 'Plateforme de contrôle et de suivi des opérations d\'une agence de transfert d\'argent avec intégration de Western Union, Ria et autres services.',
    image: './img/projects/zool.jpg',
    category: 'Entreprise',
    link: 'https://zool.ls',
    tags: ['Vue.js', 'Node.js', 'PostgreSQL'],
    features: [
      'Intégration multi-services',
      'Suivi des transactions en temps réel',
      'Rapports analytiques détaillés'
    ]
  }
]

const filteredProjects = computed(() => {
  if (selectedCategory.value === 'Tous') {
    return projects
  }
  return projects.filter(project => project.category === selectedCategory.value)
})

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
      <!-- Section Header -->
      <div class="mb-16 flex flex-col md:flex-row items-center justify-between">
        <div>
          <h2
            class="text-4xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 inline-block text-transparent bg-clip-text">
            Mes Réalisations
          </h2>
          <p class="mt-4 text-lg text-zinc-400">
            Découvrez quelques-uns des projets que j'ai réalisés.
          </p>
        </div>

        <!-- Category Filter -->
        <div class="mt-6 md:mt-0 flex justify-center md:justify-end">
          <div
            class="flex flex-wrap justify-center bg-zinc-800/50 backdrop-blur-sm rounded-full p-1.5 max-w-full overflow-x-auto whitespace-nowrap scrollbar-hide">
            <button v-for="(category, index) in categories" :key="index" @click="selectedCategory = category" :class="[
              'flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 flex-shrink-0',
              selectedCategory === category
                ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-500/20'
                : 'text-zinc-400 hover:text-white'
            ]">
              <!-- Icônes pour chaque catégorie -->
              <svg v-if="category === 'Tous'" class="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
              <svg v-else-if="category === 'Site Web'" class="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
              <svg v-else-if="category === 'App Mobile'" class="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              <svg v-else-if="category === 'Entreprise'" class="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <span class="hidden md:inline-block flex-shrink-0">{{ category }}</span>
            </button>
          </div>
        </div>
      </div>

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="project in filteredProjects" :key="project.id" class="group cursor-pointer"
          @mouseenter="activeProject = project.id" @mouseleave="activeProject = 0">
          <div
            class="relative rounded-2xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 p-6 overflow-hidden transition-all duration-300 hover:border-orange-500/50">
            <!-- Background Glow -->
            <div
              class="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300"
              :class="generateGradient(project.name)"></div>

            <!-- Content -->
            <div class="relative">
              <!-- Image/Fallback -->
              <div
                class="relative w-full rounded-xl overflow-hidden mb-6 aspect-video group-hover:scale-105 transition-transform duration-500">
                <template v-if="checkImage(project.image)">
                  <img :src="project.image" :alt="project.name" class="w-full h-full object-cover">
                </template>
                <div v-else class="w-full h-full flex items-center justify-center text-white text-2xl font-bold"
                  :class="['bg-gradient-to-br', ...generateGradient(project.name)]">
                  {{ project.name }}
                </div>
              </div>

              <!-- Project Info -->
              <div>
                <div class="flex items-start justify-between gap-4">
                  <div class="flex-1">
                    <h3 class="text-xl font-semibold text-white group-hover:text-orange-400 transition-colors">
                      {{ project.name }}
                    </h3>
                    <p class="mt-2 text-zinc-400 line-clamp-2">
                      {{ project.description }}
                    </p>
                  </div>
                  <a :href="project.link" target="_blank"
                    class="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-700/50 flex items-center justify-center text-orange-400 hover:text-orange-300 hover:bg-zinc-600/50 transition-all group/link">
                    <svg class="w-5 h-5 transform transition-all duration-300 group-hover/link:scale-110"
                      viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clip-rule="evenodd" />
                    </svg>
                  </a>
                </div>

                <!-- Features -->
                <ul class="mt-4 space-y-2">
                  <li v-for="feature in project.features" :key="feature"
                    class="flex items-center text-sm text-zinc-500">
                    <svg class="w-4 h-4 mr-2 text-orange-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd" />
                    </svg>
                    {{ feature }}
                  </li>
                </ul>

                <div class="mt-4 flex flex-wrap gap-2">
                  <span v-for="tag in project.tags" :key="tag"
                    class="px-3 py-1 text-sm bg-zinc-700/50 text-zinc-400 rounded-full border border-zinc-700">
                    {{ tag }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
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
