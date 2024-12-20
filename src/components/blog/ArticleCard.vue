<!-- ArticleCard.vue -->
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import type { Article } from '@/types/blog.types'
import { useImageGradient } from '@/composables/useImageGradient'
import { useBlogStore } from '@/stores/blog'

const props = defineProps<{
  article: Article
  featured?: boolean
}>()

const router = useRouter()
const blogStore = useBlogStore()
const { generateGradient } = useImageGradient()

const hasImage = ref(false)

onMounted(async () => {
  hasImage.value = await blogStore.preloadImage(props.article.image)
})

const navigateToArticle = () => {
  router.push({ 
    name: 'blog-content', 
    params: { slug: props.article.id.toString() }
  })
}
</script>

<template>
  <article 
    class="group relative p-6 rounded-2xl bg-white border border-zinc-200 transition-all duration-300 overflow-hidden hover:shadow-lg"
    :class="{ 'cursor-pointer': !featured }"
    @click="!featured && navigateToArticle()"
  >
    <!-- Image/Fallback avec lazy loading -->
    <div
      class="relative w-full rounded-xl overflow-hidden mb-6 aspect-video group-hover:scale-105 transition-transform duration-500"
    >
      <template v-if="hasImage">
        <img 
          :src="article.image" 
          :alt="article.title" 
          width="800"
          height="450"
          class="w-full h-full object-cover"
          loading="lazy"
          decoding="async"
        >
      </template>
      <div 
        v-else
        class="w-full h-full flex items-center justify-center text-center line-clamp-2 text-white text-2xl font-bold bg-gradient-to-br"
        :class="generateGradient(article.title)"
      >
        {{ article.category }}
      </div>
    </div>

    <!-- Content -->
    <div class="relative z-10">
      <!-- Title & Description -->
      <h3 
        class="text-xl font-semibold text-zinc-900 mb-3 line-clamp-2"
        :class="'group-hover:text-' + article.color + '-600'"
      >
        {{ article.title }}
      </h3>
      <p class="text-zinc-600 line-clamp-2 mb-4">{{ article.description }}</p>

      <!-- Footer -->
      <div class="flex items-center justify-between pt-4 border-t border-zinc-100">
        <time class="text-sm text-zinc-500">{{ article.date }}</time>
        <router-link
          v-if="featured"
          :to="{ name: 'blog-content', params: { slug: article.id.toString() } }"
          class="inline-flex items-center text-sm font-medium"
          :class="'text-' + article.color + '-600 group-hover:text-' + article.color + '-700'"
        >
          Lire l'article
          <svg
            class="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </router-link>
      </div>
    </div>
  </article>
</template>
