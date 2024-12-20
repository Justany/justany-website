<script setup lang="ts">
import { ref, computed } from 'vue'
import type { Project } from '@/types/project'
import type { MainCategory, SubCategories } from '@/types/categories'
import { mainCategories, subCategories } from '@/types/categories'
import { categoryIcons, subCategoryIcons } from '@/data/icons.datas'
import WebProjectCard from '../portfolio/WebProjectCard.vue'
import DesignProjectCard from '../portfolio/DesignProjectCard.vue'
import AdsProjectCard from '../portfolio/AdsProjectCard.vue'
import { allProjects } from '@/data/projets.datas'

const selectedMainCategory = ref<MainCategory>('Tous')
const selectedSubCategory = ref<string>('Tous')

const projects = ref<Project[]>(allProjects)

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

</script>

<template>

  <section id="portfolio" class="relative px-6 py-24 bg-zinc-950 border-t border-zinc-800">

    <div class="max-w-7xl mx-auto relative z-10">
      <div class="text-center md:text-left mb-16">
        <h2 class="text-3xl font-bold text-zinc-100">Réalisations & Projets</h2>
        <p class="mt-4 text-zinc-400 max-w-2xl">Découvrez une sélection de mes projets et réalisations dans le développement, le design et le marketing digital</p>
      </div>
      <!-- Category Filters -->
      <div class="mb-12">
        <!-- Main Categories -->
        <div class="flex flex-wrap justify-center md:justify-start gap-4 sm:gap-6 mb-8">
          <button v-for="category in mainCategories" :key="category"
            class="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full transition-all group relative"
            :class="[selectedMainCategory === category ? 'bg-orange-500 text-white' : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700']"
            @click="selectedMainCategory = category; selectedSubCategory = 'Tous'">
            <span v-html="categoryIcons[category]"></span>
            <span class="absolute -bottom-5 sm:-bottom-6 text-xs sm:text-sm whitespace-nowrap"
              :class="[selectedMainCategory === category ? 'text-orange-500' : 'text-zinc-500']">
              {{ category }}
            </span>
          </button>
        </div>

        <!-- Sub Categories -->
        <div v-if="selectedMainCategory !== 'Tous'"
          class="flex flex-wrap justify-center md:justify-start gap-2 sm:gap-3 transition-all duration-300">
          <button v-for="subCat in availableSubCategories" :key="subCat" class="mt-6 flex items-center gap-2 px-3 py-1.5 rounded-full text-xs sm:text-sm transition-all"
            :class="[selectedSubCategory === subCat ? 'bg-orange-500/20 text-orange-500' : 'bg-zinc-800/50 text-zinc-500 hover:bg-zinc-700/50']"
            @click="selectedSubCategory = subCat">
            <span v-html="subCategoryIcons[subCat]"></span>
            <span>{{ subCat }}</span>
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

</style>
