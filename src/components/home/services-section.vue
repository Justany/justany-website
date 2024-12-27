<script setup lang="ts">
import { services } from '@/data/services.datas'
import { useRouter } from 'vue-router'

const router = useRouter()

const getGradientStyle = (color: string) => {
  const colors = {
    blue: 'from-blue-500/20 to-blue-500/5',
    green: 'from-green-500/20 to-green-500/5',
    purple: 'from-purple-500/20 to-purple-500/5',
    orange: 'from-orange-500/20 to-orange-500/5',
    yellow: 'from-yellow-500/20 to-yellow-500/5',
    pink: 'from-pink-500/20 to-pink-500/5'
  }
  return colors[color as keyof typeof colors] || 'from-zinc-500/20 to-zinc-500/5'
}

const getIconBgColor = (color: string) => {
  const colors = {
    blue: 'bg-blue-500/10 text-blue-500',
    green: 'bg-green-500/10 text-green-500',
    purple: 'bg-purple-500/10 text-purple-500',
    orange: 'bg-orange-500/10 text-orange-500',
    yellow: 'bg-yellow-500/10 text-yellow-500',
    pink: 'bg-pink-500/10 text-pink-500'
  }
  return colors[color as keyof typeof colors] || 'bg-zinc-500/10 text-zinc-500'
}

const scrollToPricing = () => {
  const pricingSection = document.getElementById('pricing')
  if (pricingSection) {
    pricingSection.scrollIntoView({ behavior: 'smooth' })
  }
}

const navigateToProject = (id: number) => {
  router.push({ name: 'project-content', params: { id: id.toString() } })
}
</script>

<template>
  <section id="services" class="relative px-6 py-24 bg-zinc-950">
    <div class="max-w-7xl mx-auto">
      <!-- Section Header -->
      <div class="text-center md:text-left mb-16">
        <h2
          class="text-4xl font-bold bg-gradient-to-r from-orange-600 to-orange-200 inline-block text-transparent bg-clip-text">
          Expertise & Services
        </h2>
        <p class="mt-4 text-zinc-400 max-w-2xl">Des solutions innovantes et sur mesure pour tous vos projets digitaux
        </p>
      </div>

      <!-- Services Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        <div v-for="service in services" :id="service.title.toLowerCase().replace(/ /g, '-')" :key="service.id"
          class="group relative p-6 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-opacity-50 transition-all duration-300 overflow-hidden cursor-pointer"
          @click="navigateToProject(service.id)">
          <!-- Gradient Background -->
          <div
            class="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            :class="getGradientStyle(service.color)"></div>

          <!-- Content -->
          <div class="relative z-10">
            <!-- Icon -->
            <div class="w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-colors duration-300"
              :class="getIconBgColor(service.color)" v-html="service.icon">
            </div>

            <!-- Title & Description -->
            <h3 class="text-xl font-semibold text-zinc-100 mb-2">{{ service.title }}</h3>
            <p class="text-zinc-400 mb-6">{{ service.description }}</p>

            <!-- Features List -->
            <ul class="space-y-2">
              <li v-for="(feature, index) in service.features" :key="index"
                class="flex items-center text-sm text-zinc-300">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 mr-2" :class="'text-' + service.color + '-500'"
                  viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                {{ feature }}
              </li>
            </ul>

            <!-- CTA Button -->
            <button
              class="mt-6 w-full py-2 px-4 rounded-lg bg-zinc-800 text-zinc-300 hover:bg-opacity-80 transition-colors flex items-center justify-center group-hover:bg-opacity-100"
              :class="'group-hover:bg-' + service.color + '-500 group-hover:text-white'">
              Voir les tarifs
              <svg xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
