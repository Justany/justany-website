<template>
  <div class="group cursor-pointer">
    <div class="relative rounded-2xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 p-6 overflow-hidden transition-all duration-300 hover:border-orange-500/50">
      <div class="relative">
        <!-- Image avec fond blanc -->
        <div class="relative w-full rounded-xl overflow-hidden mb-6 aspect-video bg-white flex items-center justify-center p-4">
          <img :src="project.image" :alt="project.name" class="h-full w-auto object-contain">
        </div>

        <!-- Info -->
        <div>
          <h3 class="text-xl font-semibold text-white group-hover:text-orange-400 transition-colors">
            {{ project.name }}
          </h3>

          <!-- Outils -->
          <div class="flex flex-wrap gap-2 mt-4">
            <span v-for="tool in project.tools"
                  :key="tool"
                  class="px-2 py-1 text-xs rounded-md bg-zinc-700/50 text-zinc-300">
              {{ tool }}
            </span>
          </div>

          <!-- Livrables -->
          <ul class="mt-4 space-y-2">
            <li v-for="item in project.deliverables" 
                :key="item"
                class="flex items-center text-sm text-zinc-500">
              <svg class="w-4 h-4 mr-2 text-orange-500" viewBox="0 0 20 20" fill="currentColor">
                <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
              </svg>
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Project } from '@/types/project'

const props = defineProps<{
  project: Project
}>()
</script>