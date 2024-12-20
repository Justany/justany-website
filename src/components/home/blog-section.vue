<template>
  <section id="blog" class="py-24 px-6 bg-zinc-50/70 border-y border-zinc-200">
    <div class="max-w-7xl mx-auto">
      <div class="text-left mb-16">
        <h2 class="text-4xl font-bold bg-gradient-to-r from-zinc-800 to-zinc-500 inline-block text-transparent bg-clip-text">Blog & Actualités</h2>
        <p class="mt-4 text-lg text-zinc-600">Découvrez mes derniers articles sur le développement et l'entrepreneuriat</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <article v-for="article in articles" :key="article.id" 
          class="group relative p-6 rounded-2xl bg-white border border-zinc-200 transition-all duration-300 overflow-hidden">
          <!-- Image/Gradient Area -->
          <div class="h-48 -mx-6 -mt-6 mb-6 relative overflow-hidden">
            <div :class="['absolute inset-0 bg-gradient-to-br', article.gradient]">
              <!-- Image would go here -->
              <div class="absolute inset-0 flex items-center justify-center text-white/80">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" v-html="article.icon"></svg>
              </div>
            </div>
          </div>

          <!-- Gradient Background -->
          <div class="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            :class="getGradientStyle(article.color)"></div>

          <!-- Content -->
          <div class="relative z-10">
            <!-- Category -->
            <div class="w-auto h-8 inline-flex items-center justify-center px-3 rounded-lg mb-4"
              :class="getIconBgColor(article.color)">
              <span class="text-sm font-medium">{{ article.category }}</span>
            </div>

            <!-- Title & Description -->
            <h3 class="text-xl font-semibold text-zinc-900 mb-3 line-clamp-1" 
              :class="'group-hover:text-' + article.color + '-600'">
              {{ article.title }}
            </h3>
            <p class="text-zinc-600 text-sm mb-6 line-clamp-3">
              {{ article.description }}
            </p>

            <!-- Footer -->
            <div class="flex items-center justify-between pt-4 border-t border-zinc-100">
              <time class="text-sm text-zinc-500">{{ article.date }}</time>
              <a href="#" class="inline-flex items-center text-sm font-medium" 
                :class="'text-' + article.color + '-600 group-hover:text-' + article.color + '-700'">
                Lire l'article
                <svg class="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
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
const getGradientStyle = (color: string) => {
  const colors = {
    orange: 'from-orange-500/20 to-orange-500/5',
    zinc: 'from-zinc-500/20 to-zinc-500/5',
    blue: 'from-blue-500/20 to-blue-500/5'
  }
  return colors[color as keyof typeof colors] || 'from-zinc-500/20 to-zinc-500/5'
}

const getIconBgColor = (color: string) => {
  const colors = {
    orange: 'bg-orange-500/10 text-orange-500',
    zinc: 'bg-zinc-500/10 text-zinc-500',
    blue: 'bg-blue-500/10 text-blue-500'
  }
  return colors[color as keyof typeof colors] || 'bg-zinc-500/10 text-zinc-500'
}

const articles = [
  {
    id: 1,
    title: 'Créer des applications mobiles performantes avec Flutter et optimiser l\'expérience utilisateur',
    description: 'Découvrez comment Flutter permet de développer des applications mobiles natives performantes pour Android et iOS. Nous explorerons les meilleures pratiques, les widgets essentiels et les techniques d\'optimisation pour créer des applications fluides et réactives.',
    date: '20 Dec 2023',
    category: 'Mobile',
    color: 'orange',
    gradient: 'from-orange-400 to-orange-600',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />'
  },
  {
    id: 2,
    title: 'Laravel + Vue.js : Le duo gagnant pour des applications web modernes et évolutives',
    description: 'Comment combiner Laravel et Vue.js pour créer des applications web modernes et réactives. Découvrez les meilleures pratiques d\'architecture, l\'intégration avec Inertia.js et les techniques pour optimiser les performances de votre application.',
    date: '15 Dec 2023',
    category: 'Web',
    color: 'zinc',
    gradient: 'from-zinc-700 to-zinc-900',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />'
  },
  {
    id: 3,
    title: 'L\'entrepreneuriat tech en Afrique : Opportunités et défis dans un marché en pleine croissance',
    description: 'Les opportunités et défis du développement technologique sur le marché africain. Analyse des tendances, des obstacles à surmonter et des stratégies pour réussir dans l\'écosystème tech africain en pleine expansion.',
    date: '10 Dec 2023',
    category: 'Business',
    color: 'blue',
    gradient: 'from-blue-500 to-blue-700',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />'
  }
]
</script>
