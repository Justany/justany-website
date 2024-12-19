<template>
  <div class="group cursor-pointer">
    <div class="relative rounded-2xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 p-6 overflow-hidden transition-all duration-300 hover:border-orange-500/50">
      <!-- Background Glow -->
      <div class="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300"
           :class="generateGradient(project.name)"></div>
      
      <div class="relative">
        <!-- Header -->
        <div class="flex items-start justify-between gap-4 mb-6">
          <div class="flex-1">
            <h3 class="text-xl font-semibold text-white group-hover:text-orange-400 transition-colors">
              {{ project.name }}
            </h3>
            <p class="mt-2 text-zinc-400">{{ project.description }}</p>
            <div class="flex items-center gap-2 mt-2">
              <span class="px-3 py-1 text-sm bg-orange-500/10 text-orange-400 rounded-full">
                {{ project.platform }}
              </span>
            </div>
          </div>
        </div>

        <!-- Metrics Grid -->
        <div class="grid grid-cols-2 gap-4">
          <div class="relative overflow-hidden rounded-xl bg-zinc-700/30 p-4 group-hover:bg-zinc-700/40 transition-colors">
            <div class="relative z-10">
              <p class="text-zinc-400 text-sm">Budget</p>
              <p class="text-2xl font-semibold text-white mt-1">{{ project.metrics?.budget }}</p>
              <p class="text-zinc-500 text-sm mt-1">{{ project.metrics?.duration }}</p>
            </div>
            <div class="absolute right-1 top-1 opacity-10">
              <svg class="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z"/>
              </svg>
            </div>
          </div>

          <div class="relative overflow-hidden rounded-xl bg-zinc-700/30 p-4 group-hover:bg-zinc-700/40 transition-colors">
            <div class="relative z-10">
              <p class="text-zinc-400 text-sm">Ventes</p>
              <p class="text-2xl font-semibold text-white mt-1">{{ project.metrics?.results?.sales }}</p>
              <p class="text-emerald-400 text-sm mt-1">+{{ project.metrics?.results?.engagement }}%</p>
            </div>
            <div class="absolute right-1 top-1 opacity-10">
              <svg class="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z"/>
              </svg>
            </div>
          </div>

          <div class="relative overflow-hidden rounded-xl bg-zinc-700/30 p-4 group-hover:bg-zinc-700/40 transition-colors">
            <div class="relative z-10">
              <p class="text-zinc-400 text-sm">Portée</p>
              <p class="text-2xl font-semibold text-white mt-1">{{ project.metrics?.results?.reach }}</p>
              <p class="text-zinc-500 text-sm mt-1">Personnes touchées</p>
            </div>
            <div class="absolute right-1 top-1 opacity-10">
              <svg class="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
              </svg>
            </div>
          </div>

          <div class="relative overflow-hidden rounded-xl bg-zinc-700/30 p-4 group-hover:bg-zinc-700/40 transition-colors">
            <div class="relative z-10">
              <p class="text-zinc-400 text-sm">ROI</p>
              <p class="text-2xl font-semibold text-white mt-1">{{ calculateROI }}%</p>
              <p class="text-emerald-400 text-sm mt-1">Retour sur investissement</p>
            </div>
            <div class="absolute right-1 top-1 opacity-10">
              <svg class="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { Project } from '@/types/project'

const props = defineProps<{
  project: Project
}>()

const generateGradient = (name: string) => {
  const colors = ['from-blue-500 to-purple-500', 'from-orange-500 to-pink-500', 'from-green-500 to-teal-500']
  const hash = name.split('').reduce((acc, char) => char.charCodeAt(0) + acc, 0)
  return colors[hash % colors.length].split(' ')
}

const calculateROI = computed(() => {
  if (!props.project.metrics?.results?.sales || !props.project.metrics?.budget) return 0
  const sales = parseInt(props.project.metrics.results.sales.replace(/[^0-9]/g, ''))
  const budget = parseInt(props.project.metrics.budget.replace(/[^0-9]/g, ''))
  return ((sales / budget) * 100).toFixed(0)
})
</script>
