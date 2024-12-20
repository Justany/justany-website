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
  <section id="blog" class="py-24 px-6 bg-zinc-50/70 border-y border-zinc-200">
    <div class="max-w-7xl mx-auto">
      <div class="text-left mb-16">
        <h2
          class="text-4xl font-bold bg-gradient-to-r from-zinc-800 to-zinc-500 inline-block text-transparent bg-clip-text">
          Blog & Actualités</h2>
        <p class="mt-4 text-lg text-zinc-600">Découvrez mes derniers articles sur le développement et l'entrepreneuriat
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <article v-for="article in articles" :key="article.id"
          class="group relative p-6 rounded-2xl bg-white border border-zinc-200 transition-all duration-300 overflow-hidden"
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
              <router-link :to="{ name: 'blog-content', params: { slug: article.id.toString() } }"
                class="inline-flex items-center text-sm font-medium"
                :class="'text-' + article.color + '-600 group-hover:text-' + article.color + '-700'">
                Lire l'article
                <svg class="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                  fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </router-link>
            </div>
          </div>
        </article>
      </div>

      <!-- View All Button -->
      <div class="text-center mt-12">
        <transition name="slide-fade">
          <router-link :to="{ name: 'blog' }"
            class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
            Voir tous les articles
            <svg class="ml-2 -mr-1 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </router-link>
        </transition>
      </div>
    </div>
  </section>
</template>