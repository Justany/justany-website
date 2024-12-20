<script setup lang="ts">
import { computed } from 'vue'
import type { Project } from '@/types/project'

const props = defineProps<{
  project: Project
}>()

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

const calculateROI = computed(() => {
  if (!props.project.metrics?.results?.sales || !props.project.metrics?.budget) return 0
  const sales = parseInt(props.project.metrics.results.sales.replace(/[^0-9]/g, ''))
  const budget = parseInt(props.project.metrics.budget.replace(/[^0-9]/g, ''))
  return ((sales / budget) * 100).toFixed(0)
})
</script>

<template>
  <div class="group cursor-pointer">
    <div class="relative rounded-2xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 p-6 overflow-hidden transition-all duration-300 hover:border-orange-500/50">
      <!-- Background Glow -->
      <div class="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300"
           :class="generateGradient(props.project.name)"></div>
      
      <div class="relative">
        <!-- Header -->
        <div class="flex items-start justify-between gap-4 mb-6">
          <div class="flex-1">
            <h3 class="text-xl font-semibold text-white group-hover:text-orange-400 transition-colors">
              {{ props.project.name }}
            </h3>
            <p class="mt-2 text-zinc-400">{{ props.project.description }}</p>
            <div v-if="props.project.platform" class="flex items-center gap-2 mt-2">
              <span class="px-3 py-1 text-sm bg-orange-500/10 text-orange-400 rounded-full">
                {{ props.project.platform }}
              </span>
            </div>
          </div>
        </div>

        <!-- Metrics Grid -->
        <div v-if="props.project.metrics" class="grid grid-cols-2 gap-4">
          <!-- Budget -->
          <div class="relative overflow-hidden rounded-xl bg-zinc-700/30 p-4 group-hover:bg-zinc-700/40 transition-colors">
            <div class="relative z-10">
              <p class="text-zinc-400 text-sm">Budget</p>
              <p class="text-2xl font-semibold text-white mt-1">{{ props.project.metrics.budget }}</p>
              <p class="text-zinc-500 text-sm mt-1">{{ props.project.metrics.duration }}</p>
            </div>
            <div class="absolute right-2 top-2">
              <svg class="w-8 h-8 text-zinc-100/30" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z"/>
              </svg>
            </div>
          </div>

          <!-- Ventes -->
          <div class="relative overflow-hidden rounded-xl bg-zinc-700/30 p-4 group-hover:bg-zinc-700/40 transition-colors">
            <div class="relative z-10">
              <p class="text-zinc-400 text-sm">Ventes</p>
              <p class="text-2xl font-semibold text-white mt-1">{{ props.project.metrics.results?.sales }}</p>
              <p class="text-green-400 text-sm mt-1">ROI: {{ calculateROI }}%</p>
            </div>
            <div class="absolute right-2 top-2">
              <svg class="w-8 h-8 text-zinc-100/30" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z"/>
              </svg>
            </div>
          </div>

          <!-- Reach -->
          <div class="relative overflow-hidden rounded-xl bg-zinc-700/30 p-4 group-hover:bg-zinc-700/40 transition-colors">
            <div class="relative z-10">
              <p class="text-zinc-400 text-sm">Portée</p>
              <p class="text-2xl font-semibold text-white mt-1">{{ props.project.metrics.results?.reach }}</p>
            </div>
            <div class="absolute right-2 top-2">
              <svg class="w-8 h-8 text-zinc-100/30" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
              </svg>
            </div>
          </div>

          <!-- Engagement -->
          <div class="relative overflow-hidden rounded-xl bg-zinc-700/30 p-4 group-hover:bg-zinc-700/40 transition-colors">
            <div class="relative z-10">
              <p class="text-zinc-400 text-sm">Engagement</p>
              <p class="text-2xl font-semibold text-white mt-1">{{ props.project.metrics.results?.engagement }}%</p>
            </div>
            <div class="absolute right-2 top-2">
              <svg class="w-8 h-8 text-zinc-100/30" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


