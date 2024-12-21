<!-- ArticleCard.vue -->
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import type { Article } from '@/types/blog.types'
import { useImageGradient } from '@/composables/useImageGradient'
import { useBlogStore } from '@/stores/blog'

const props = defineProps<{
  article: Article
  featured?: boolean
}>()

const blogStore = useBlogStore()
const { generateGradient } = useImageGradient()
const hasImage = ref(false)

const getBackgroundStyle = (image?: string) => {
  if (image) {
    return { backgroundImage: `url(${image})` }
  }
  const gradient = generateGradient(image || props.article.title)
  return { background: gradient.join(',') }
}

onMounted(async () => {
  hasImage.value = await blogStore.preloadImage(props.article.image)
})
</script>

<template>
  <RouterLink :to="{ name: 'article', params: { slug: article.slug } }"
    class="group relative p-6 rounded-2xl bg-white border border-zinc-200 transition-all duration-300 overflow-hidden hover:shadow-lg"
    :class="{ 'md:col-span-2': featured }">
    <div class="relative z-10">
      <!-- Category -->
      <div class="flex items-center gap-2 text-sm text-zinc-600 mb-4">
        <span class="px-2 py-1 bg-zinc-100 rounded-md">{{ article.category }}</span>
        <span>{{ article.readingTime }} min de lecture</span>
      </div>

      <!-- Title -->
      <h3 class="text-xl font-bold text-zinc-900 mb-2 group-hover:text-orange-500 transition-colors">
        {{ article.title }}
      </h3>

      <!-- Description -->
      <p class="text-zinc-600 mb-4">
        {{ article.description }}
      </p>

      <!-- Author and Date -->
      <div class="flex items-center gap-4">
        <div class="flex items-center gap-2">
          <img :src="article.author.avatar" :alt="article.author.name" class="w-8 h-8 rounded-full" />
          <span class="text-sm text-zinc-600">{{ article.author.name }}</span>
        </div>
        <span class="text-sm text-zinc-500">{{ article.date }}</span>
      </div>
    </div>

    <!-- Background Image -->
    <div v-if="hasImage" 
      class="absolute inset-0 z-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
      :style="getBackgroundStyle(article.image)"
    >
      <img v-if="article.image" :src="article.image" :alt="article.title" class="w-full h-full object-cover" />
    </div>
  </RouterLink>
</template>
