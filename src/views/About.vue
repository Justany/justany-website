<template>
  <div class="min-h-screen bg-zinc-50">
    <!-- Hero Section -->
    <section class="relative bg-zinc-900 text-white">
      <div class="absolute inset-0">
        <div
          class="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-800 via-zinc-900 to-black opacity-90">
        </div>
      </div>

      <div class="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        <div class="max-w-3xl text-center sm:text-left mt-16 sm:mt-16">
          <div class="mb-8 sm:mb-10 flex justify-center sm:justify-start">
            <div class="w-32 h-32 sm:w-40 sm:h-40 relative">
              <div class="absolute inset-0 bg-gradient-to-tr from-zinc-500 to-zinc-300 rounded-full animate-pulse">
              </div>
              <img src="https://avatars.githubusercontent.com/u/32221808?v=4" alt="Justany Itoua"
                class="relative w-full h-full object-cover rounded-full ring-4 ring-white/10" />
            </div>
          </div>

          <h1 class="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 sm:mb-8">
            À propos de moi
          </h1>
          <p class="text-lg sm:text-xl lg:text-2xl text-zinc-300 max-w-2xl">
            Entrepreneur, Vendeur & Développeur Full Stack basé au Congo-Brazzaville
          </p>
        </div>
      </div>
    </section>

    <!-- Navigation -->
    <nav id="about-navigation"
      class="sticky top-[73px] z-10 w-full bg-white/80 backdrop-blur-sm py-2 px-4 sm:px-6 border-b border-zinc-200 shadow-xs">
      <div class="max-w-7xl mx-auto py-2 sm:py-4 px-4 sm:px-6">
        <ul class="flex items-center justify-around sm:justify-start sm:space-x-8">
          <li v-for="item in navItems" :key="item.href" class="flex-shrink-0">
            <!-- <a :href="item.href" @click="activeSection = item.href.replace('#', '')" -->
            <a href="#"
              class="flex flex-col sm:flex-row items-center sm:space-x-2 text-zinc-600 hover:text-orange-600 transition-colors relative p-2"
              :class="{ 'text-orange-600': activeSection === item.href.replace('#', '') }">
              <div class="relative">
                <component :is="item.icon" class="w-6 h-6 sm:w-5 sm:h-5" />
                <div v-if="activeSection === item.href.replace('#', '')"
                  class="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-orange-600 rounded-full">
                </div>
              </div>
              <span class="hidden sm:inline text-base">{{ item.name }}</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>

    <!-- Contenu Principal -->
    <div class="relative pt-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <!-- Compétences -->
        <section id="competences" class="mb-16 sm:mb-24 lg:mb-32">
          <div class="max-w-3xl">
            <h2
              class="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-zinc-800 to-zinc-500 inline-block text-transparent bg-clip-text mb-4 sm:mb-6">
              Compétences techniques</h2>
            <p class="text-lg text-zinc-600 mb-8">
              Découvrez mes compétences techniques détaillées sur la page d'accueil
            </p>
            <button
              class="inline-flex items-center px-6 py-3 rounded-xl bg-zinc-900 text-white hover:bg-zinc-800 transition-colors"
              @click="goToSkills">
              <ChartBarIcon class="w-5 h-5 mr-2" />
              Voir mes compétences
            </button>
          </div>
        </section>

        <!-- Parcours -->
        <section id="parcours" class="mb-16 sm:mb-24 lg:mb-32">
          <h2
            class="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-zinc-800 to-zinc-500 inline-block text-transparent bg-clip-text mb-8 sm:mb-12">
            Formations & Certifcations
          </h2>

          <div class="space-y-6">
            <div v-for="(item, index) in timeline" :key="index"
              class="group relative bg-white rounded-2xl border border-zinc-100 p-6 sm:p-8 hover:border-orange-100 transition-all duration-300">
              <div class="absolute top-0 right-0 mt-6 mr-6">
                <span v-if="item.status" class="px-3 py-1 text-xs font-medium rounded-full shadow-sm" :class="item.status === 'Terminé' ? 'bg-emerald-100 text-emerald-700 ring-1 ring-emerald-600/10' :
                  item.status === 'En cours' ? 'bg-orange-100 text-orange-700 ring-1 ring-orange-600/10' :
                    'bg-blue-100 text-blue-700 ring-1 ring-blue-600/10'">
                  {{ item.status }}
                </span>
              </div>

              <div class="flex flex-col sm:flex-row gap-6">
                <div class="sm:w-32 flex-shrink-0">
                  <div class="flex items-center gap-3 sm:flex-col sm:items-start">
                    <span class="text-sm font-medium text-zinc-400">{{ item.year }}</span>
                    <div
                      class="w-10 h-10 rounded-xl bg-zinc-100 flex items-center justify-center group-hover:bg-orange-100 transition-colors">
                      <component :is="item.icon || AcademicCapIcon"
                        class="w-5 h-5 text-zinc-600 group-hover:text-orange-600" />
                    </div>
                  </div>
                </div>

                <div class="flex-1">
                  <div class="flex flex-col gap-2">
                    <h3 class="text-lg sm:text-xl font-semibold text-zinc-900">{{ item.title }}</h3>
                    <p class="text-sm font-medium text-orange-600">{{ item.institution }}</p>
                    <p class="text-base text-zinc-600">{{ item.description }}</p>

                    <div class="flex flex-wrap gap-2 mt-4">
                      <span v-for="(tag, tagIndex) in item.tags" :key="tagIndex"
                        class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-zinc-100 text-zinc-800 hover:bg-zinc-200 transition-colors">
                        {{ tag }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Setup -->
        <section id="setup" class="mb-16 sm:mb-24 lg:mb-32">
          <h2
            class="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-zinc-800 to-zinc-500 inline-block text-transparent bg-clip-text mb-12">
            Mon environnement de travail</h2>

          <div class="space-y-16">
            <div v-for="(yearSetup, index) in setup" :key="index">
              <h3 class="text-xl font-semibold text-zinc-900 mb-8">{{ yearSetup.year }}</h3>

              <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div v-for="(item, itemIndex) in yearSetup.items" :key="itemIndex"
                  class="group bg-white rounded-2xl border border-zinc-200 p-6 hover:border-zinc-300 transition-all">
                  <div class="flex items-start gap-4">
                    <div
                      class="w-12 h-12 rounded-xl bg-zinc-100 flex items-center justify-center flex-shrink-0 group-hover:bg-zinc-900 group-hover:text-white transition-colors">
                      <component :is="item.icon || ComputerDesktopIcon" class="w-6 h-6" />
                    </div>
                    <div>
                      <h4 class="font-medium text-zinc-900 mb-1">{{ item.title }}</h4>
                      <p class="text-sm text-zinc-600">{{ item.description }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Projets -->
        <section id="projets" class="mb-16 sm:mb-24 lg:mb-32">
          <h2
            class="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-orange-500 to-orange-400 inline-block text-transparent bg-clip-text mb-12">
            Projets en cours</h2>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            <div v-for="(project, index) in projects" :key="index"
              class="group bg-white rounded-2xl border border-zinc-200 p-8 hover:border-zinc-300 transition-all">
              <div class="flex items-start gap-5">
                <div
                  class="w-14 h-14 rounded-xl bg-zinc-100 flex items-center justify-center flex-shrink-0 group-hover:bg-zinc-900 group-hover:text-white transition-colors">
                  <component :is="project.icon || RocketLaunchIcon" class="w-7 h-7" />
                </div>
                <div>
                  <div class="flex items-center gap-3 mb-2">
                    <h3 class="font-medium text-zinc-900">{{ project.name }}</h3>
                    <span class="px-2 py-1 text-xs rounded-full"
                      :class="project.status === 'En cours' ? 'bg-orange-100 text-orange-700' : 'bg-emerald-100 text-emerald-700'">
                      {{ project.status }}
                    </span>
                  </div>
                  <p class="text-sm text-zinc-600">{{ project.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Formations -->
        <section id="formations" class="mb-16 sm:mb-24 lg:mb-32">
          <h2
            class="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-zinc-800 to-zinc-500 inline-block text-transparent bg-clip-text mb-12">
            Formations Gratuites</h2>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            <div v-for="(channel, index) in formations[0].channels" :key="index"
              class="group bg-white rounded-2xl border border-zinc-200 p-8 hover:border-zinc-300 transition-all">
              <div class="flex items-start gap-5">
                <div
                  class="w-14 h-14 rounded-xl bg-zinc-100 flex items-center justify-center flex-shrink-0 group-hover:bg-red-600 group-hover:text-white transition-colors">
                  <VideoCameraIcon class="w-7 h-7" />
                </div>
                <div>
                  <h3 class="font-medium text-zinc-900 mb-2">{{ channel.name }}</h3>
                  <p class="text-sm text-zinc-600">{{ channel.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import {
  AcademicCapIcon,
  ComputerDesktopIcon,
  RocketLaunchIcon,
  CommandLineIcon,
  ChartBarIcon,
  BeakerIcon,
  CubeIcon,
  VideoCameraIcon
} from '@heroicons/vue/24/outline'

const router = useRouter()

const activeSection = ref('competences')

const goToSkills = () => {
  router.push('/')
}

const navItems = [
  { name: 'Compétences techniques', href: '#competences', icon: ChartBarIcon },
  { name: 'Formations & Certifcations', href: '#parcours', icon: AcademicCapIcon },
  { name: 'Mon environnement de travail', href: '#setup', icon: ComputerDesktopIcon },
  { name: 'Projets', href: '#projets', icon: RocketLaunchIcon },
  { name: 'Formations', href: '#formations', icon: VideoCameraIcon }
]

const timeline = ref([
  {
    year: '2023',
    title: 'AWS Certified Developer Associate',
    institution: 'Amazon Web Services',
    description: 'Certification professionnelle validant l\'expertise en développement sur AWS.',
    icon: BeakerIcon,
    status: 'En cours',
    type: 'certification',
    tags: ['AWS', 'Développement']
  },
  {
    year: '2020',
    title: 'Master en Informatique',
    institution: 'Université Marien Ngouabi',
    description: 'Spécialisation en développement logiciel et gestion de projets informatiques.',
    icon: AcademicCapIcon,
    status: 'Terminé',
    type: 'education',
    tags: ['Master', 'Informatique']
  },
  {
    year: '2018',
    title: 'Licence en Informatique',
    institution: 'Université Marien Ngouabi',
    description: 'Formation approfondie en programmation, algorithmique et bases de données.',
    icon: AcademicCapIcon,
    status: 'Terminé',
    type: 'education',
    tags: ['Licence', 'Informatique']
  },
  {
    year: '2024',
    title: 'Google Cloud Professional Developer',
    institution: 'Google Cloud Platform',
    description: 'Certification avancée sur le développement d\'applications cloud natives.',
    icon: BeakerIcon,
    status: 'Planifié',
    type: 'certification',
    tags: ['Google Cloud', 'Développement']
  }
])

const setup = ref([
  {
    year: '2022',
    items: [
      {
        title: 'HP Pro EliteBook Folio 1040G3',
        description: 'Mon compagnon de développement principal',
        icon: ComputerDesktopIcon
      },
      {
        title: 'VS Code & Vim',
        description: 'Mes éditeurs de code préférés',
        icon: CommandLineIcon
      },
      {
        title: 'Docker & Kubernetes',
        description: 'Pour la conteneurisation et l\'orchestration',
        icon: CubeIcon
      }
    ]
  }
])

const projects = ref([
  {
    name: 'API REST',
    status: 'En cours',
    description: 'Développement d\'une API REST pour la gestion de projets',
    icon: BeakerIcon
  },
  {
    name: 'Application Mobile',
    status: 'En cours',
    description: 'Application mobile de suivi de projets',
    icon: RocketLaunchIcon
  },
  {
    name: 'Dashboard Analytics',
    status: 'Planifié',
    description: 'Dashboard pour le suivi des métriques',
    icon: ChartBarIcon
  }
])

const formations = ref([
  {
    title: 'Chaînes YouTube',
    channels: [
      {
        name: 'Fireship',
        description: 'Tutoriels rapides et efficaces sur les dernières technologies web',
        icon: VideoCameraIcon
      },
      {
        name: 'Traversy Media',
        description: 'Cours complets sur le développement web moderne',
        icon: VideoCameraIcon
      }
    ]
  }
])

// Fonction pour détecter la section active lors du défilement
const updateActiveSection = () => {
  const sections = ['competences', 'parcours', 'setup', 'projets', 'formations']
  const scrollPosition = window.scrollY + window.innerHeight / 3

  for (const section of sections) {
    const element = document.getElementById(section)
    if (element) {
      const { top, bottom } = element.getBoundingClientRect()
      if (top <= scrollPosition && bottom > scrollPosition) {
        activeSection.value = section
        break
      }
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', updateActiveSection)
  updateActiveSection() // Initial check
})
</script>

<style scoped>
.bg-gradient-radial {
  background-image: radial-gradient(circle at center, var(--tw-gradient-stops));
}
</style>
