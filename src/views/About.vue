<template>
  <div class="min-h-screen bg-zinc-50">
    <!-- Hero Section -->
    <section class="relative bg-zinc-900 text-white">
      <div class="absolute inset-0">
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-800 via-zinc-900 to-black opacity-90"></div>
      </div>
      
      <div class="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div class="max-w-3xl text-left mt-16">
          <div class="mb-10">
            <div class="w-40 h-40 relative">
              <div class="absolute inset-0 bg-gradient-to-tr from-zinc-500 to-zinc-300 rounded-full animate-pulse"></div>
              <img 
                src="https://avatars.githubusercontent.com/u/32221808?v=4" 
                alt="Justany Itoua"
                class="relative w-full h-full object-cover rounded-full ring-4 ring-white/10" 
              />
            </div>
          </div>
          
          <h1 class="text-left text-5xl md:text-7xl font-bold mb-8">
            À propos de moi
          </h1>
          <p class="text-left text-xl md:text-2xl text-zinc-300 max-w-2xl">
            Entrepreneur, Vendeur & Développeur Full Stack basé au Congo-Brazzaville
          </p>
        </div>
      </div>
    </section>

    <!-- Navigation -->
    <nav class="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-sm py-2 px-6 border-b border-zinc-200 shadow-xs">
      <div class="max-w-7xl mx-auto py-4 px-6">
        <ul class="flex items-center justify-center lg:justify-start space-x-8">
          <li v-for="item in navItems" :key="item.href">
            <a :href="item.href" class="flex items-center space-x-2 text-zinc-600 hover:text-black transition-colors">
              <component :is="item.icon" class="w-5 h-5" />
              <span>{{ item.name }}</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>

    <!-- Contenu Principal -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <!-- Compétences -->
      <section id="competences" class="mb-32">
        <div class="max-w-3xl">
          <h2 class="text-4xl font-bold bg-gradient-to-r from-zinc-800 to-zinc-500 inline-block text-transparent bg-clip-text mb-6">Compétences techniques</h2>
          <p class="text-lg text-zinc-600 mb-8">
            Découvrez mes compétences techniques détaillées sur la page d'accueil
          </p>
          <button @click="goToSkills" 
            class="inline-flex items-center px-6 py-3 rounded-xl bg-zinc-900 text-white hover:bg-zinc-800 transition-colors">
            <ChartBarIcon class="w-5 h-5 mr-2" />
            Voir mes compétences
          </button>
        </div>
      </section>

      <!-- Parcours -->
      <section id="parcours" class="mb-32">
        <h2 class="text-4xl font-bold bg-gradient-to-r from-zinc-800 to-zinc-500 inline-block text-transparent bg-clip-text mb-12">
          Formations & Certifcations
        </h2>
        
        <div class="space-y-12">
          <div v-for="(item, index) in timeline" :key="index" 
               class="relative pl-12 before:absolute before:left-[15px] before:top-[60px] before:bottom-0 before:w-[2px] before:bg-zinc-200 last:before:hidden">
            <div class="absolute left-0 top-[48px] w-8 h-8 rounded-full bg-zinc-900 border-4 border-white"></div>
            
            <div class="relative bg-white rounded-2xl border border-zinc-200 p-8 hover:border-zinc-300 transition-all">
              <!-- Ruban de certification -->
              <div v-if="item.type === 'certification'" class="absolute top-0 right-8">
                <div class="bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs font-medium px-3 py-1 rounded-b-lg shadow-md">
                  Certification
                </div>
              </div>

              <div class="flex items-start gap-6">
                <div class="w-16 h-16 rounded-xl bg-zinc-100 flex items-center justify-center flex-shrink-0">
                  <component :is="item.icon || AcademicCapIcon" class="w-8 h-8 text-zinc-700" />
                </div>
                <div>
                  <div class="flex items-center gap-4 mb-1">
                    <h3 class="font-semibold text-lg">{{ item.title }}</h3>
                    <span class="text-sm text-zinc-500">{{ item.year }}</span>
                    <span v-if="item.status" class="px-2 py-1 text-xs rounded-full" 
                          :class="item.status === 'Terminé' ? 'bg-emerald-100 text-emerald-700' : item.status === 'En cours' ? 'bg-orange-100 text-orange-700' : 'bg-blue-100 text-blue-700'">
                      {{ item.status }}
                    </span>
                  </div>
                  <p class="text-zinc-600 mb-2">{{ item.institution }}</p>
                  <p class="text-zinc-600">{{ item.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Setup -->
      <section id="setup" class="mb-32">
        <h2 class="text-4xl font-bold bg-gradient-to-r from-zinc-800 to-zinc-500 inline-block text-transparent bg-clip-text mb-12">Mon environnement de travail</h2>
        
        <div class="space-y-16">
          <div v-for="(yearSetup, index) in setup" :key="index">
            <h3 class="text-xl font-semibold text-zinc-900 mb-8">{{ yearSetup.year }}</h3>
            
            <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div v-for="(item, itemIndex) in yearSetup.items" :key="itemIndex" 
                   class="group bg-white rounded-2xl border border-zinc-200 p-6 hover:border-zinc-300 transition-all">
                <div class="flex items-start gap-4">
                  <div class="w-12 h-12 rounded-xl bg-zinc-100 flex items-center justify-center flex-shrink-0 group-hover:bg-zinc-900 group-hover:text-white transition-colors">
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
      <section id="projets" class="mb-32">
        <h2 class="text-4xl font-bold bg-gradient-to-r from-orange-500 to-orange-400 inline-block text-transparent bg-clip-text mb-12">Projets en cours</h2>
        
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="(project, index) in projects" :key="index" 
               class="group bg-white rounded-2xl border border-zinc-200 p-8 hover:border-zinc-300 transition-all">
            <div class="flex items-start gap-5">
              <div class="w-14 h-14 rounded-xl bg-zinc-100 flex items-center justify-center flex-shrink-0 group-hover:bg-zinc-900 group-hover:text-white transition-colors">
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
      <section id="formations" class="mb-32">
        <h2 class="text-4xl font-bold bg-gradient-to-r from-zinc-800 to-zinc-500 inline-block text-transparent bg-clip-text mb-12">Formations Gratuites</h2>
        
        <div class="grid sm:grid-cols-2 gap-8">
          <div v-for="(channel, index) in formations[0].channels" :key="index"
               class="group bg-white rounded-2xl border border-zinc-200 p-8 hover:border-zinc-300 transition-all">
            <div class="flex items-start gap-5">
              <div class="w-14 h-14 rounded-xl bg-zinc-100 flex items-center justify-center flex-shrink-0 group-hover:bg-red-600 group-hover:text-white transition-colors">
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
</template>

<script setup lang="ts">
import { ref } from 'vue'
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
    type: 'certification'
  },
  {
    year: '2020',
    title: 'Master en Informatique',
    institution: 'Université Marien Ngouabi',
    description: 'Spécialisation en développement logiciel et gestion de projets informatiques.',
    icon: AcademicCapIcon,
    status: 'Terminé',
    type: 'education'
  },
  {
    year: '2018',
    title: 'Licence en Informatique',
    institution: 'Université Marien Ngouabi',
    description: 'Formation approfondie en programmation, algorithmique et bases de données.',
    icon: AcademicCapIcon,
    status: 'Terminé',
    type: 'education'
  },
  {
    year: '2024',
    title: 'Google Cloud Professional Developer',
    institution: 'Google Cloud Platform',
    description: 'Certification avancée sur le développement d\'applications cloud natives.',
    icon: BeakerIcon,
    status: 'Planifié',
    type: 'certification'
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
</script>

<style scoped>
.bg-gradient-radial {
  background-image: radial-gradient(circle at center, var(--tw-gradient-stops));
}
</style>
