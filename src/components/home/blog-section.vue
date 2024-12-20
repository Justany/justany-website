<template>
  <section id="blog" class="py-24 px-6 bg-zinc-50/70 border-y border-zinc-200">
    <div class="max-w-7xl mx-auto">
      <div class="text-left mb-16">
        <h2 class="text-4xl font-bold bg-gradient-to-r from-zinc-800 to-zinc-500 inline-block text-transparent bg-clip-text">Blog & Actualités</h2>
        <p class="mt-4 text-lg text-zinc-600">Découvrez mes derniers articles sur le développement et l'entrepreneuriat</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Article 1 -->
        <article class="group">
          <div class="bg-white rounded-2xl border border-zinc-200 overflow-hidden hover:border-orange-500 transition-all duration-300">
            <div class="relative">
              <!-- Image Container -->
              <div class="h-48 bg-gradient-to-br from-orange-400 to-orange-600">
                <div class="absolute inset-0 flex items-center justify-center p-6">
                  <svg class="w-12 h-12 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
                  </svg>
                </div>
              </div>
              <!-- Category Badge -->
              <div class="absolute top-4 right-4">
                <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/90 text-orange-600">
                  Mobile
                </span>
              </div>
            </div>
            
            <div class="p-6">
              <div class="flex items-center text-sm text-zinc-500 mb-3">
                <time>20 Dec 2023</time>
              </div>
              <h3 class="font-semibold text-lg text-zinc-900 mb-3 group-hover:text-orange-600 transition-colors">
                Créer des applications mobiles performantes avec Flutter
              </h3>
              <p class="text-zinc-600 text-sm mb-4 line-clamp-2">
                Découvrez comment Flutter permet de développer des applications mobiles natives performantes pour Android et iOS.
              </p>
              <div class="pt-4 border-t border-zinc-100">
                <a href="#" class="inline-flex items-center text-sm font-medium text-orange-600 hover:text-orange-700">
                  Lire plus
                  <svg class="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </article>

        <!-- Article 2 -->
        <article class="group">
          <div class="bg-white rounded-2xl border border-zinc-200 overflow-hidden hover:border-orange-500 transition-all duration-300">
            <div class="relative">
              <!-- Image Container -->
              <div class="h-48 bg-gradient-to-br from-zinc-700 to-zinc-900">
                <div class="absolute inset-0 flex items-center justify-center p-6">
                  <svg class="w-12 h-12 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                  </svg>
                </div>
              </div>
              <!-- Category Badge -->
              <div class="absolute top-4 right-4">
                <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/90 text-zinc-700">
                  Web
                </span>
              </div>
            </div>
            
            <div class="p-6">
              <div class="flex items-center text-sm text-zinc-500 mb-3">
                <time>15 Dec 2023</time>
              </div>
              <h3 class="font-semibold text-lg text-zinc-900 mb-3 group-hover:text-orange-600 transition-colors">
                Laravel + Vue.js : Le duo gagnant
              </h3>
              <p class="text-zinc-600 text-sm mb-4 line-clamp-2">
                Comment combiner Laravel et Vue.js pour créer des applications web modernes et réactives.
              </p>
              <div class="pt-4 border-t border-zinc-100">
                <a href="#" class="inline-flex items-center text-sm font-medium text-orange-600 hover:text-orange-700">
                  Lire plus
                  <svg class="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </article>

        <!-- Article 3 -->
        <article class="group">
          <div class="bg-white rounded-2xl border border-zinc-200 overflow-hidden hover:border-orange-500 transition-all duration-300">
            <div class="relative">
              <!-- Image Container -->
              <div class="h-48 bg-gradient-to-br from-orange-600 to-zinc-800">
                <div class="absolute inset-0 flex items-center justify-center p-6">
                  <svg class="w-12 h-12 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
                  </svg>
                </div>
              </div>
              <!-- Category Badge -->
              <div class="absolute top-4 right-4">
                <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/90 text-orange-600">
                  Business
                </span>
              </div>
            </div>
            
            <div class="p-6">
              <div class="flex items-center text-sm text-zinc-500 mb-3">
                <time>10 Dec 2023</time>
              </div>
              <h3 class="font-semibold text-lg text-zinc-900 mb-3 group-hover:text-orange-600 transition-colors">
                L'entrepreneuriat tech en Afrique
              </h3>
              <p class="text-zinc-600 text-sm mb-4 line-clamp-2">
                Les opportunités et défis du développement technologique sur le marché africain.
              </p>
              <div class="pt-4 border-t border-zinc-100">
                <a href="#" class="inline-flex items-center text-sm font-medium text-orange-600 hover:text-orange-700">
                  Lire plus
                  <svg class="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </article>
      </div>

      <!-- View All Button -->
      <div class="text-center mt-12">
        <a href="/blog" class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
          Voir tous les articles
          <svg class="ml-2 -mr-1 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Blog data and logic will be added here
</script>
