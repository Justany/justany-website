<script setup lang="ts">
import type { Project } from '@/types/project'
import { useImageGradient } from '@/composables/useImageGradient'

const props = defineProps<{
  project: Project
}>()

const { generateGradient, checkImage } = useImageGradient()
</script>


<template>
  <div class="group cursor-pointer">
    <div class="relative rounded-2xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 p-6 overflow-hidden transition-all duration-300 hover:border-orange-500/50">
      <!-- Background Glow -->
      <div class="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300"
           :class="generateGradient(props.project.name)"></div>
      
      <div class="relative">
        <!-- Image/Fallback -->
        <div class="relative w-full rounded-xl overflow-hidden mb-6 aspect-video group-hover:scale-105 transition-transform duration-500">
          <template v-if="checkImage(props.project.image)">
            <img :src="project.image" :alt="project.name" class="w-full h-full object-cover">
          </template>
          <div v-else 
               class="w-full h-full flex items-center justify-center text-white text-2xl font-bold bg-gradient-to-br"
               :class="generateGradient(props.project.name)">
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
            <a v-if="project.link"
               :href="project.link" 
               target="_blank"
               class="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-700/50 flex items-center justify-center text-orange-400 hover:text-orange-300 hover:bg-zinc-600/50 transition-all group/link">
              <svg class="w-5 h-5 transform transition-all duration-300 group-hover/link:scale-110"
                   viewBox="0 0 20 20" 
                   fill="currentColor">
                <path fill-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-rule="evenodd" />
              </svg>
            </a>
          </div>

          <!-- Features -->
          <ul v-if="project.features" class="mt-4 space-y-2">
            <li v-for="feature in project.features" 
                :key="feature"
                class="flex items-center text-sm text-zinc-500">
              <svg class="w-4 h-4 mr-2 text-orange-500" 
                   viewBox="0 0 20 20" 
                   fill="currentColor">
                <path fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd" />
              </svg>
              {{ feature }}
            </li>
          </ul>

          <div v-if="project.tags" class="mt-4 flex flex-wrap gap-2">
            <span v-for="tag in project.tags" 
                  :key="tag"
                  class="px-3 py-1 text-sm bg-zinc-700/50 text-zinc-400 rounded-full border border-zinc-700">
              {{ tag }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
