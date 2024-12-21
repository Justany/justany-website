<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { articles } from '@/data/blog.data'
import type { Article } from '@/types/blog.types'
import Prism from 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'
// Import des langages supplémentaires
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-css'
import 'prismjs/components/prism-markup'
import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-json'
import 'prismjs/components/prism-yaml'
// Plugins
import 'prismjs/plugins/line-numbers/prism-line-numbers'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
import 'prismjs/plugins/toolbar/prism-toolbar'
import 'prismjs/plugins/toolbar/prism-toolbar.css'
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard'

const route = useRoute()
const router = useRouter()

const articleId = route.params.slug?.toString() || '1'
const article = ref<Article>(articles[articleId])
const copySuccess = ref<string | null>(null)

// Articles connexes
const relatedArticles = computed(() => {
  return article.value?.relatedArticles.map(id => articles[id.toString()]) || []
})

// Formater le code avec Prism
const formatCode = (code: string, language: string | undefined) => {
  if (!language) return code

  try {
    // Nettoyer le language (enlever le "language-" si présent)
    const lang = language.replace('language-', '')
    // S'assurer que Prism a le langage chargé
    if (Prism.languages[lang]) {
      return Prism.highlight(code, Prism.languages[lang], lang)
    }
    return code
  } catch (error) {
    console.warn(`Error highlighting code: ${error}`)
    return code
  }
}

// Copier le code dans le presse-papiers avec feedback
const copyCode = async (code: string) => {
  await navigator.clipboard.writeText(code)
  copySuccess.value = 'Copié !'
  setTimeout(() => {
    copySuccess.value = null
  }, 2000)
}

// Partage sur les réseaux sociaux
const shareArticle = async (platform: 'twitter' | 'linkedin' | 'facebook') => {
  const url = encodeURIComponent(window.location.href)
  const title = encodeURIComponent(article.value?.title || '')

  const shareUrls = {
    twitter: `https://twitter.com/intent/tweet?url=${url}&text=${title}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`
  }

  window.open(shareUrls[platform], '_blank')
}

// Calculer le temps de lecture estimé
const estimatedReadTime = computed(() => {
  if (!article.value?.content) return '0 min'

  const wordsPerMinute = 80
  const wordCount = article.value.content.reduce((count, block) => {
    if (block.type === 'paragraph' || block.type === 'heading') {
      return count + block.content.split(/\s+/).length
    }
    return count
  }, 0)

  return Math.ceil(wordCount / wordsPerMinute) + ' min'
})

const getIconBgColor = (color: string) => {
  const colors = {
    orange: 'bg-orange-500/10 text-orange-500',
    zinc: 'bg-zinc-500/10 text-zinc-500',
    blue: 'bg-blue-500/10 text-blue-500'
  }
  return colors[color as keyof typeof colors] || 'bg-zinc-500/10 text-zinc-500'
}

const getBorderColor = (color: string) => {
  const colors = {
    orange: 'border-orange-200',
    zinc: 'border-zinc-200',
    blue: 'border-blue-200'
  }
  return colors[color as keyof typeof colors] || 'border-zinc-200'
}

const navigateToArticle = (id: number) => {
  router.push(`/blog/${id}`)
}
</script>

<template>
  <article v-if="article" class="min-h-screen bg-white">
    <!-- En-tête avec image de fond -->
    <header class="relative pt-24 pb-16 px-4 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br opacity-5"
        :class="['from-' + article.color + '-500', 'to-' + article.color + '-100']"></div>

      <div class="max-w-3xl mx-auto relative z-10">
        <!-- Boutons de partage -->
        <div class="flex justify-end gap-4 mb-8">
          <button class="p-2 rounded-full hover:bg-zinc-100 transition-colors" @click="shareArticle('twitter')">
            <span class="sr-only">Partager sur Twitter</span>
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
            </svg>
          </button>
          <button class="p-2 rounded-full hover:bg-zinc-100 transition-colors" @click="shareArticle('linkedin')">
            <span class="sr-only">Partager sur LinkedIn</span>
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </button>
          <button class="p-2 rounded-full hover:bg-zinc-100 transition-colors" @click="shareArticle('facebook')">
            <span class="sr-only">Partager sur Facebook</span>
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </button>
        </div>

        <!-- Tags et Catégorie -->
        <div class="flex flex-wrap items-center gap-3 mb-6">
          <div class="inline-flex items-center justify-center px-3 py-1 rounded-lg"
            :class="getIconBgColor(article.color)">
            <span class="text-sm font-medium">{{ article.category }}</span>
          </div>
          <div v-for="tag in article.tags" :key="tag"
            class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-zinc-100 text-zinc-800 hover:bg-zinc-200 transition-colors cursor-pointer">
            {{ tag }}
          </div>
        </div>

        <!-- Titre -->
        <h1 class="text-4xl sm:text-5xl font-bold text-zinc-900 mb-6 leading-tight">
          {{ article.title }}
        </h1>

        <!-- Meta -->
        <div class="flex flex-wrap items-center gap-4 text-sm text-zinc-500">
          <div class="flex items-center gap-2">
            <span class="font-medium text-zinc-900">{{ article.author.name }}</span>
          </div>
          <span>•</span>
          <time>{{ article.date }}</time>
          <span>•</span>
          <span>{{ estimatedReadTime }}</span>
        </div>

        <!-- Description -->
        <p class="mt-6 text-xl text-zinc-600 leading-relaxed">
          {{ article.description }}
        </p>
      </div>
    </header>

    <!-- Contenu -->
    <div class="max-w-3xl mx-auto px-4 pb-16">
      <div class="prose prose-zinc prose-lg">
        <template v-for="(block, index) in article.content" :key="index">
          <!-- Paragraphe -->
          <p v-if="block.type === 'paragraph'" class="text-zinc-600 leading-relaxed">
            {{ block.content }}
          </p>

          <!-- Titre -->
          <h2 v-else-if="block.type === 'heading'" class="text-2xl font-bold text-zinc-900 mt-12 mb-6 scroll-mt-24">
            {{ block.content }}
          </h2>

          <!-- Liste -->
          <div v-else-if="block.type === 'list'" class="my-8">
            <h3 v-if="block.content" class="font-medium text-zinc-900 mb-4">
              {{ block.content }}
            </h3>
            <ul class="space-y-3">
              <li v-for="item in block.items" :key="item" class="flex items-start gap-3 text-zinc-600">
                <span class="select-none text-orange-500 mt-1">―</span>
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>

          <!-- Citation -->
          <blockquote v-else-if="block.type === 'quote'" class="my-8 pl-6 py-6 border-l-4"
            :class="getBorderColor(article.color)">
            <p class="text-xl text-zinc-700 italic">{{ block.content }}</p>
            <footer v-if="block.author" class="mt-3 text-sm text-zinc-500">
              — {{ block.author }}
            </footer>
          </blockquote>

          <!-- Code -->
          <div v-else-if="block.type === 'code'" class="my-8 rounded-lg overflow-hidden bg-zinc-900 group relative">
            <div class="flex items-center justify-between py-3 px-4 bg-zinc-800/50">
              <div class="flex items-center gap-2">
                <span class="flex items-center gap-1.5">
                  <span class="w-3 h-3 rounded-full bg-red-500"></span>
                  <span class="w-3 h-3 rounded-full bg-yellow-500"></span>
                  <span class="w-3 h-3 rounded-full bg-green-500"></span>
                </span>
                <span class="font-mono text-sm text-zinc-400 ml-2">{{ block.language }}</span>
              </div>
              <div class="relative">
                <button
                  class="flex items-center gap-1.5 px-3 py-1 text-sm text-zinc-400 hover:text-zinc-200 transition-colors rounded-md hover:bg-zinc-700/50"
                  @click="copyCode(block.content)">
                  <span v-if="!copySuccess">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    <span class="hidden sm:inline">Copier</span>
                  </span>
                  <span v-else class="flex items-center gap-1.5 text-emerald-400">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span class="hidden sm:inline">Copié !</span>
                  </span>
                </button>
              </div>
            </div>
            <div class="relative group">
              <pre
                class="!p-4 !m-0 !bg-transparent overflow-x-auto"><code :class="['language-' + block.language]" v-html="formatCode(block.content, block.language)"></code></pre>
              <div
                class="absolute inset-0 bg-zinc-800/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <button
                  class="flex items-center gap-2 bg-zinc-700 text-zinc-200 px-4 py-2 rounded-lg hover:bg-zinc-600 transition-colors"
                  @click="copyCode(block.content)">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  Copier le code
                </button>
              </div>
            </div>
          </div>

          <!-- Image -->
          <figure v-else-if="block.type === 'image'" class="my-8">
            <div class="relative group">
              <img :src="block.content" :alt="block.caption"
                class="rounded-lg w-full transition-transform duration-300 group-hover:scale-[1.02]">
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-lg">
              </div>
            </div>
            <figcaption v-if="block.caption" class="mt-3 text-sm text-center text-zinc-500">
              {{ block.caption }}
            </figcaption>
          </figure>
        </template>
      </div>

      <!-- Articles connexes -->
      <section class="mt-16 pt-16 border-t border-zinc-100">
        <h2 class="text-2xl font-bold text-zinc-900 mb-8">Articles connexes</h2>
        <div class="grid gap-8 sm:grid-cols-2">
          <article v-for="related in relatedArticles" :key="related.id"
            class="group cursor-pointer transform transition-all duration-300 hover:-translate-y-1"
            @click="navigateToArticle(related.id)">
            <div class="p-6 rounded-xl border border-zinc-200 hover:border-zinc-300 transition-colors">
              <div class="space-y-3">
                <div class="inline-flex items-center px-3 py-1 rounded-lg text-sm"
                  :class="getIconBgColor(related.color)">
                  {{ related.category }}
                </div>
                <h3 class="text-xl font-semibold text-zinc-900 group-hover:text-zinc-600 transition-colors">
                  {{ related.title }}
                </h3>
                <p class="text-zinc-600 line-clamp-2">
                  {{ related.description }}
                </p>
                <div class="flex items-center gap-4 text-sm text-zinc-500">
                  <time>{{ related.date }}</time>
                  <span>•</span>
                  <span>{{ related.readingTime }}</span>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>
    </div>
  </article>
</template>

<style>
.prose {
  max-width: 100%;
}

.prose pre {
  background-color: transparent;
  padding: 0;
  margin: 0;
}

.prose code {
  background-color: transparent;
  padding: 0;
  font-size: 0.875rem;
  line-height: 1.5;
}

/* Hover effect pour les images */
.hover-zoom {
  transition: transform 0.3s ease-out;
}

.hover-zoom:hover {
  transform: scale(1.02);
}

/* Animation pour le bouton de copie */
@keyframes fadeInOut {
  0% {
    opacity: 0;
    transform: translateY(10px);
  }

  10% {
    opacity: 1;
    transform: translateY(0);
  }

  90% {
    opacity: 1;
    transform: translateY(0);
  }

  100% {
    opacity: 0;
    transform: translateY(-10px);
  }
}

.copy-feedback {
  animation: fadeInOut 2s ease-out forwards;
}

/* Styles pour Prism */
:root {
  --prism-background: transparent;
  --prism-comment: #8b949e;
  --prism-keyword: #ff7b72;
  --prism-function: #d2a8ff;
  --prism-string: #a5d6ff;
  --prism-number: #79c0ff;
  --prism-class: #ffa657;
  --prism-operator: #c9d1d9;
}

pre[class*="language-"] {
  margin: 0;
  padding: 1rem;
  background: transparent;
  font-size: 0.875rem;
  line-height: 1.5;
  tab-size: 2;
}

code[class*="language-"] {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  direction: ltr;
  text-align: left;
  white-space: pre;
  word-spacing: normal;
  word-break: normal;
  line-height: 1.5;
  -moz-tab-size: 2;
  -o-tab-size: 2;
  tab-size: 2;
  -webkit-hyphens: none;
  -moz-hyphens: none;
  -ms-hyphens: none;
  hyphens: none;
}

.token.comment,
.token.prolog,
.token.doctype,
.token.cdata {
  color: var(--prism-comment);
  font-style: italic;
}

.token.namespace {
  opacity: 0.7;
}

.token.property,
.token.tag,
.token.boolean,
.token.number,
.token.constant,
.token.symbol {
  color: var(--prism-number);
}

.token.selector,
.token.attr-name,
.token.string,
.token.char,
.token.builtin {
  color: var(--prism-string);
}

.token.operator,
.token.entity,
.token.url,
.language-css .token.string,
.token.punctuation {
  color: var(--prism-operator);
}

.token.atrule,
.token.attr-value,
.token.keyword {
  color: var(--prism-keyword);
}

.token.function,
.token.class-name {
  color: var(--prism-function);
}

.token.regex,
.token.important,
.token.variable {
  color: var(--prism-class);
}

.token.important,
.token.bold {
  font-weight: bold;
}

.token.italic {
  font-style: italic;
}

/* Scrollbar personnalisée pour le code */
pre::-webkit-scrollbar {
  height: 8px;
  background-color: transparent;
}

pre::-webkit-scrollbar-thumb {
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
}

pre::-webkit-scrollbar-thumb:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

/* Animation du bouton de copie */
@keyframes copyFeedback {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.1);
  }

  100% {
    transform: scale(1);
  }
}

.copy-success {
  animation: copyFeedback 0.3s ease-in-out;
}
</style>
