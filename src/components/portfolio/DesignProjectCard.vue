<script setup lang="ts">
import type { Project } from '@/types/project'
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps<{
  project: Project
}>()

const currentImageIndex = ref(0)
const sliderInterval = ref<number | null>(null)

const startSlider = () => {
  if (!props.project.gallery || props.project.gallery.length <= 1) return

  sliderInterval.value = window.setInterval(() => {
    currentImageIndex.value = (currentImageIndex.value + 1) % props.project.gallery!.length
  }, 5000) // Change image every 5 seconds
}

const stopSlider = () => {
  if (sliderInterval.value) {
    clearInterval(sliderInterval.value)
    sliderInterval.value = null
  }
}

onMounted(() => {
  startSlider()
})

onUnmounted(() => {
  stopSlider()
})
</script>

<template>
  <div class="group cursor-pointer" @mouseenter="stopSlider" @mouseleave="startSlider">
    <div
      class="relative rounded-2xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 p-6 overflow-hidden transition-all duration-300 hover:border-orange-500/50">
      <div class="relative">
        <!-- Image avec fond blanc -->
        <div
          class="relative w-full rounded-xl overflow-hidden mb-6 aspect-video flex items-center justify-center bg-white"
          :class="{
            'p-4': project.subCategory === 'Logos',
            'p-0': project.subCategory === 'Affiches'
          }">
          <template v-if="project.gallery && project.gallery.length > 1">
            <div class="relative w-full h-full">
              <!-- Images -->
              <template v-for="(image, index) in project.gallery" :key="index">
                <img v-show="currentImageIndex === index" 
                     :src="image" 
                     :alt="project.name + ' ' + (index + 1)"
                     class="absolute inset-0 w-full h-full opacity-0 transition-opacity duration-700" 
                     :class="[
                       currentImageIndex === index ? 'opacity-100' : 'opacity-0',
                       {
                         'object-contain': project.subCategory === 'Logos',
                         'object-cover object-top': project.subCategory === 'Affiches'
                       }
                     ]"
                     :style="project.subCategory === 'Logo' ? 'max-height: 100%; width: auto;' : ''" />
              </template>

              <!-- Image counter -->
              <div class="absolute bottom-2 font-bold right-2 bg-zinc-950 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                <span class="text-zinc-100">{{ currentImageIndex + 1 }}</span>
                <span class="text-zinc-400">/{{ project.gallery.length }}</span>
              </div>
            </div>
          </template>
          <template v-else>
            <img :src="project.image" :alt="project.name" class="h-full transition-all duration-300" :class="{
              'object-contain w-auto': project.subCategory === 'Logos',
              'object-cover object-top w-full': project.subCategory === 'Affiches'
            }" />
          </template>
        </div>

        <!-- Info -->
        <div>
          <h3 class="text-xl font-semibold text-white group-hover:text-orange-400 transition-colors">
            {{ props.project.name }}
          </h3>

          <!-- Outils -->
          <div class="flex flex-wrap gap-2 mt-4">
            <span v-for="tool in props.project.tools" :key="tool"
              class="px-2 py-1 text-xs rounded-md bg-zinc-700/50 text-zinc-300">
              {{ tool }}
            </span>
          </div>

          <!-- Livrables -->
          <ul class="mt-4 space-y-2">
            <li v-for="item in props.project.deliverables" :key="item" class="flex items-center text-sm text-zinc-500">
              <svg class="w-4 h-4 mr-2 text-orange-500" viewBox="0 0 20 20" fill="currentColor">
                <path
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
              </svg>
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>