<script setup lang="ts">
import { services } from '@/datas/services.datas'
import type { Service } from '@/datas/services.datas'
</script>

<template>
  <section class="relative px-6 py-24 bg-zinc-950">
    <div class="max-w-7xl mx-auto">
      <!-- Section Header -->
      <div class="text-center md:text-left mb-16">
        <h2 class="text-3xl font-bold text-zinc-100">Services</h2>
        <p class="mt-4 text-zinc-400 max-w-2xl">Solutions sur mesure pour donner vie à vos projets digitaux</p>
      </div>

      <!-- Services Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="service in services" :key="service.id"
          class="group p-6 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-orange-500/50 transition-all duration-300">
          <!-- Icon -->
          <div class="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-500 mb-4"
            v-html="service.icon">
          </div>

          <!-- Title & Description -->
          <h3 class="text-xl font-semibold text-zinc-100 mb-2">{{ service.title }}</h3>
          <p class="text-zinc-400 mb-6">{{ service.description }}</p>

          <!-- Features List -->
          <ul class="space-y-2">
            <li v-for="(feature, index) in service.features" :key="index"
              class="flex items-center text-sm text-zinc-300">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 mr-2 text-orange-500" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              {{ feature }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
