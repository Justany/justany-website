<script setup lang="ts">
import { ref } from 'vue'

interface Skill {
  name: string
  icon: string[]
  color: string
  gradientClass: string
  items: {
    name: string
    icon: string[]
    iconColor: string
  }[]
}

const skills = ref<Skill[]>([
  {
    name: 'Frontend',
    icon: ['fab', 'vuejs'],
    color: 'blue',
    gradientClass: 'from-blue-500/5',
    items: [
      { name: 'Vue/Nuxt', icon: ['fab', 'vuejs'], iconColor: '#41B883' },
      { name: 'React/Next', icon: ['fab', 'react'], iconColor: '#61DAFB' },
      { name: 'Flutter', icon: ['fas', 'mobile'], iconColor: '#54C5F8' },
      { name: 'SwiftUI', icon: ['fab', 'swift'], iconColor: '#FF6A33' },
      { name: 'TypeScript', icon: ['fab', 'js'], iconColor: '#3178C6' },
      { name: 'TailwindCSS', icon: ['fab', 'css3'], iconColor: '#38B2AC' }
    ]
  },
  {
    name: 'Backend',
    icon: ['fab', 'node'],
    color: 'green',
    gradientClass: 'from-green-500/5',
    items: [
      { name: 'Node/Express', icon: ['fab', 'node'], iconColor: '#339933' },
      { name: 'PHP/Laravel', icon: ['fab', 'php'], iconColor: '#777BB4' },
      { name: 'PostgreSQL', icon: ['fas', 'database'], iconColor: '#336791' },
      { name: 'GraphQL', icon: ['fas', 'project-diagram'], iconColor: '#E535AB' },
      { name: 'REST API', icon: ['fas', 'network-wired'], iconColor: '#FF6C37' }
    ]
  },
  {
    name: 'DevOps & Cloud',
    icon: ['fas', 'server'],
    color: 'orange',
    gradientClass: 'from-orange-500/5',
    items: [
      { name: 'Docker', icon: ['fab', 'docker'], iconColor: '#2496ED' },
      { name: 'AWS', icon: ['fab', 'aws'], iconColor: '#FF9900' },
      { name: 'GCP', icon: ['fab', 'google'], iconColor: '#4285F4' },
      { name: 'CI/CD', icon: ['fas', 'infinity'], iconColor: '#16A34A' },
      { name: 'Linux/Nginx', icon: ['fab', 'linux'], iconColor: '#FCC624' }
    ]
  },
  {
    name: 'Plateformes',
    icon: ['fas', 'cloud'],
    color: 'purple',
    gradientClass: 'from-purple-500/5',
    items: [
      { name: 'Firebase', icon: ['fas', 'fire'], iconColor: '#FFCA28' },
      { name: 'Vercel', icon: ['fas', 'server'], iconColor: '#000000' },
      { name: 'Supabase', icon: ['fas', 'database'], iconColor: '#3ECF8E' },
      { name: 'Heroku', icon: ['fas', 'cloud-upload'], iconColor: '#430098' },
      { name: 'DigitalOcean', icon: ['fas', 'water'], iconColor: '#0080FF' }
    ]
  },
  {
    name: 'Marketing Digital',
    icon: ['fas', 'bullhorn'],
    color: 'rose',
    gradientClass: 'from-rose-500/5',
    items: [
      { name: 'Google Ads', icon: ['fab', 'google'], iconColor: '#4285F4' },
      { name: 'Meta Ads', icon: ['fab', 'facebook'], iconColor: '#1877F2' },
      { name: 'TikTok Ads', icon: ['fab', 'tiktok'], iconColor: '#000000' },
      { name: 'Analytics', icon: ['fas', 'chart-line'], iconColor: '#E37400' },
      { name: 'SEO', icon: ['fas', 'search'], iconColor: '#47A248' }
    ]
  },
  {
    name: 'Design & IA',
    icon: ['fas', 'wand-magic-sparkles'],
    color: 'indigo',
    gradientClass: 'from-indigo-500/5',
    items: [
      { name: 'Figma', icon: ['fab', 'figma'], iconColor: '#F24E1E' },
      { name: 'Adobe Suite', icon: ['fab', 'adobe'], iconColor: '#FF0000' },
      { name: 'ChatGPT', icon: ['fas', 'robot'], iconColor: '#19C37D' },
      { name: 'Copilot', icon: ['fab', 'github'], iconColor: '#000000' },
      { name: 'Kaggle', icon: ['fas', 'chart-simple'], iconColor: '#20BEFF' }
    ]
  }
])
</script>

<template>
  <section id="tools" class="py-24 px-6 bg-gradient-to-br from-zinc-50/70 to-white relative overflow-hidden">
    <!-- Background decoration -->
    <div class="absolute inset-0 bg-grid-zinc-900/[0.04] -z-10"></div>
    <div class="absolute inset-0 flex items-center justify-center -z-10">
      <div class="w-[40rem] h-[40rem] bg-orange-50 rounded-full opacity-20 blur-3xl"></div>
    </div>

    <div class="max-w-7xl mx-auto">
      <div class="text-left mb-16">
        <h2 class="text-4xl font-bold bg-gradient-to-r from-zinc-800 to-zinc-500 inline-block text-transparent bg-clip-text">
          Outils & Technologies</h2>
        <p class="mt-4 text-zinc-600">Une stack technique complète pour des solutions innovantes</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Skill Card -->
        <div v-for="skill in skills" :key="skill.name" class="group">
          <div class="relative bg-white rounded-2xl p-8 border border-zinc-200 hover:shadow-xl transition-all duration-300">
            <div class="absolute inset-0 bg-gradient-to-b opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"
                 :class="skill.gradientClass">
            </div>
            <div class="relative">
              <div class="flex items-center space-x-4 mb-8">
                <div class="w-12 h-12 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform"
                     :class="{
                       'bg-gradient-to-br': true,
                       'from-blue-400 to-blue-600': skill.color === 'blue',
                       'from-green-400 to-green-600': skill.color === 'green',
                       'from-orange-400 to-orange-600': skill.color === 'orange',
                       'from-indigo-400 to-indigo-600': skill.color === 'indigo',
                       'from-purple-400 to-purple-600': skill.color === 'purple',
                       'from-rose-400 to-rose-600': skill.color === 'rose',
                     }">
                  <font-icon :icon="skill.icon" class="w-6 h-6 text-white" />
                </div>
                <h3 class="text-xl font-semibold text-zinc-900">{{ skill.name }}</h3>
              </div>

              <div class="space-y-4">
                <div class="grid grid-cols-2 gap-3">
                  <div v-for="item in skill.items" 
                       :key="item.name"
                       class="flex items-center space-x-3 p-3 rounded-xl bg-zinc-50 hover:bg-zinc-100 transition-colors">
                    <font-icon :icon="item.icon" class="w-5 h-5" :style="{ color: item.iconColor }" />
                    <span class="text-sm text-zinc-700">{{ item.name }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.bg-grid-zinc-900\/\[0\.04\] {
  mask-image: linear-gradient(to bottom, transparent, 20%, white, 80%, transparent);
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(24 24 27 / 0.04)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
}

.group:hover .transform {
  animation: bounce 0.5s;
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.group {
  perspective: 1000px;
}

.group:hover .relative {
  transform: translateZ(20px);
  transition: transform 0.3s ease-out;
}
</style>
