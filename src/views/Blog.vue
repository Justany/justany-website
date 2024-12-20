<script setup lang="ts">
import { useRouter } from 'vue-router'
import { articles } from '@/data/blog.data'
import { useImageGradient } from '@/composables/useImageGradient'

const router = useRouter()
const { generateGradient, checkImage } = useImageGradient()

const navigateToArticle = (id: number) => {
  router.push({ name: 'blog-content', params: { slug: id.toString() } })
}

</script>

<template>
  <div class="min-h-screen bg-zinc-50/80">
    <!-- Hero Section -->
    <section class="relative bg-white border-b border-zinc-100 text-white mb-14">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-8">
        <!-- En-tête -->
        <div class="text-left mt-6 mb-4">
          <h1
            class="text-4xl font-bold bg-gradient-to-r from-zinc-800 to-zinc-500 inline-block text-transparent bg-clip-text">
            Blog & Actualités
          </h1>
          <p class="mt-4 text-lg text-zinc-600">
            Découvrez mes articles sur le développement, l'entrepreneuriat et l'innovation tech en Afrique
          </p>
        </div>
      </div>
    </section>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 pb-28">
      <!-- Liste des articles -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <article v-for="article in articles" :key="article.id"
          class="group relative p-6 rounded-2xl bg-white border border-zinc-200 transition-all duration-300 overflow-hidden cursor-pointer"
          @click="navigateToArticle(article.id)">
          <!-- Image/Fallback -->
          <div
            class="relative w-full rounded-xl overflow-hidden mb-6 aspect-video group-hover:scale-105 transition-transform duration-500">
            <template v-if="checkImage(article.image)">
              <img :src="article.image" :alt="article.title" class="w-full h-full object-cover">
            </template>
            <div v-else
              class="w-full h-full flex items-center justify-center text-center line-clamp-2 text-white text-2xl font-bold bg-gradient-to-br"
              :class="generateGradient(article.title)">
              {{ article.category }}
            </div>
          </div>

          <!-- Content -->
          <div class="relative z-10">

            <!-- Title & Description -->
            <h3 class="text-xl font-semibold text-zinc-900 mb-3 line-clamp-2"
              :class="'group-hover:text-' + article.color + '-600'">
              {{ article.title }}
            </h3>
            <p class="text-zinc-600 text-sm mb-6 line-clamp-3">
              {{ article.description }}
            </p>

            <!-- Footer -->
            <div class="flex items-center justify-between pt-4 border-t border-zinc-100">
              <time class="text-sm text-zinc-500">{{ article.date }}</time>
              <span class="inline-flex items-center text-sm font-medium"
                :class="'text-' + article.color + '-600 group-hover:text-' + article.color + '-700'">
                Lire l'article
                <svg class="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                  fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>