import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { Article, Articles } from '@/types/blog.types'
import { articles as initialArticles } from '@/data/blog.data'

export const useBlogStore = defineStore('blog', () => {
  const articles = ref<Articles>(initialArticles)
  const articlesArray = computed(() => Object.values(articles.value))
  const featuredArticles = computed(() => articlesArray.value.slice(0, 3))
  
  // Cache des images
  const imageCache = new Map<string, boolean>()
  
  // Vérification et préchargement des images
  const preloadImage = async (src?: string): Promise<boolean> => {
    if (!src) return false
    if (imageCache.has(src)) {
      const cachedResult = imageCache.get(src)
      return cachedResult !== undefined ? cachedResult : false
    }
    
    try {
      await new Promise((resolve, reject) => {
        const img = new Image()
        img.onload = resolve
        img.onerror = reject
        img.src = src
      })
      imageCache.set(src, true)
      return true
    } catch {
      imageCache.set(src, false)
      return false
    }
  }
  
  // Récupérer un article par son ID
  const getArticleById = computed(() => (id: string | number) => {
    return articles.value[id.toString()]
  })
  
  // Récupérer les articles liés
  const getRelatedArticles = computed(() => (articleId: number) => {
    const article = getArticleById.value(articleId)
    if (!article) return []
    return article.relatedArticles
      .map(id => getArticleById.value(id))
      .filter((a): a is Article => a !== undefined)
  })

  return {
    articles,
    articlesArray,
    featuredArticles,
    getArticleById,
    getRelatedArticles,
    preloadImage
  }
})
