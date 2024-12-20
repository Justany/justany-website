<script setup lang="ts">
import { pricingPlans, serviceRates, consultationOptions } from '@/datas/pricing.datas'
import { ref } from 'vue'

const activeTab = ref('services') // 'services' or 'packs'
</script>

<template>
  <section class="relative px-6 py-24 bg-white border-t border-zinc-200">
    <div class="max-w-7xl mx-auto">
      <!-- Section Header -->
      <div class="text-center md:text-left mb-16">
        <h2 class="text-4xl font-bold bg-gradient-to-r from-zinc-800 to-zinc-500 inline-block text-transparent bg-clip-text">
          Tarifs & Forfaits
        </h2>
        <p class="mt-4 text-zinc-600 max-w-2xl">Des solutions adaptées à tous les budgets pour concrétiser vos projets digitaux</p>
      </div>

      <!-- Consultation Options -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <!-- Discovery Call -->
        <div class="p-8 rounded-xl bg-orange-50 border border-orange-200">
          <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <h3 class="text-xl font-bold text-zinc-900">Appel Découverte</h3>
            <div class="mt-2 sm:mt-0 px-3 py-1 rounded-full w-content bg-orange-100 text-orange-700 text-sm whitespace-nowrap">
              {{ consultationOptions.discovery.duration }}
            </div>
          </div>
          <p class="mt-4 text-zinc-600">{{ consultationOptions.discovery.description }}</p>
          <div class="mt-4">
            <span class="text-2xl font-bold text-zinc-900">{{ consultationOptions.discovery.price }}</span>
          </div>
          <button class="mt-6 w-full py-3 px-6 rounded-full bg-orange-600 text-white font-medium hover:bg-orange-700 transition-colors">
            Réserver un appel
          </button>
        </div>

        <!-- Project Consultation -->
        <div class="p-8 rounded-xl bg-zinc-900 border border-zinc-800 text-white">
          <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <h3 class="text-xl font-bold">Consultation Projet</h3>
            <div class="mt-2 sm:mt-0 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-sm whitespace-nowrap">
              {{ consultationOptions.consultation.duration }}
            </div>
          </div>
          <p class="mt-4 text-zinc-400">{{ consultationOptions.consultation.description }}</p>
          <div class="mt-4 flex flex-wrap items-center gap-2">
            <span class="text-2xl font-bold">{{ consultationOptions.consultation.price }}</span>
            <span class="text-orange-400">(-{{ consultationOptions.consultation.discount }})</span>
          </div>
          <button class="mt-6 w-full py-3 px-6 rounded-full bg-gradient-to-r from-orange-600 to-orange-400 text-white font-medium hover:from-orange-700 hover:to-orange-500 transition-colors">
            Réserver une consultation
          </button>
        </div>
      </div>

      <!-- Pricing Tabs -->
      <div class="mb-8">
        <div class="flex justify-center space-x-4 border-b border-zinc-200">
          <button 
            @click="activeTab = 'services'"
            class="px-6 py-3 text-sm font-medium transition-colors relative"
            :class="activeTab === 'services' ? 'text-orange-600' : 'text-zinc-600 hover:text-zinc-900'">
            Prix par Service
            <div v-if="activeTab === 'services'" class="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-orange-600 to-orange-400"></div>
          </button>
          <button 
            @click="activeTab = 'packs'"
            class="px-6 py-3 text-sm font-medium transition-colors relative"
            :class="activeTab === 'packs' ? 'text-orange-600' : 'text-zinc-600 hover:text-zinc-900'">
            Packs Solutions
            <div v-if="activeTab === 'packs'" class="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-orange-600 to-orange-400"></div>
          </button>
        </div>
      </div>

      <!-- Service Rates -->
      <div v-show="activeTab === 'services'" class="grid grid-cols-1 gap-6">
        <div v-for="rate in serviceRates" :key="rate.id"
          class="p-6 rounded-xl bg-white border border-zinc-200 hover:border-orange-500/50 transition-colors flex items-center justify-between group">
          <div class="flex-1">
            <div class="flex items-center">
              <h4 class="text-xl font-semibold text-zinc-900">{{ rate.service }}</h4>
              <div class="ml-4 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-sm">
                {{ rate.unit }}
              </div>
            </div>
            <p class="mt-2 text-zinc-600">{{ rate.description }}</p>
          </div>
          <div class="text-right">
            <div class="text-2xl font-bold text-zinc-900">{{ rate.startingPrice }}</div>
            <div class="text-sm text-zinc-500">Prix de base</div>
          </div>
          <div class="ml-8 text-zinc-400 group-hover:text-orange-500 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>

      <!-- Pricing Plans -->
      <div v-show="activeTab === 'packs'" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <template v-for="plan in pricingPlans" :key="plan.id">
          <div
            class="relative p-8 rounded-xl bg-white border transition-all duration-300 hover:shadow-xl flex flex-col"
            :class="[
              plan.name === 'Enterprise' 
                ? 'border-zinc-950/50 hover:border-zinc-950 bg-gradient-to-b from-zinc-950/5 to-transparent' 
                : 'border-zinc-200 hover:border-orange-500/50',
              { 'ring-2 ring-orange-500 shadow-lg': plan.popular && plan.name !== 'Enterprise' }
            ]">
            <!-- Popular/Premium Badge -->
            <div v-if="plan.popular || plan.name === 'Enterprise'"
              class="absolute -top-4 left-1/2 transform -translate-x-1/2 px-6 py-1 rounded-full text-sm font-medium"
              :class="plan.name === 'Enterprise' 
                ? 'bg-zinc-950 text-white'
                : 'bg-gradient-to-r from-orange-600 to-orange-400 text-white'">
              {{ plan.name === 'Enterprise' ? 'Premium' : 'Populaire' }}
            </div>

            <!-- Plan Header -->
            <div class="text-center mb-8">
              <h3 class="text-2xl font-bold"
                :class="plan.name === 'Enterprise' ? 'text-zinc-950' : 'text-zinc-900'">
                {{ plan.name }}
              </h3>
              <div class="mt-4 text-4xl font-bold"
                :class="plan.name === 'Enterprise' ? 'text-zinc-950' : 'text-zinc-900'">
                {{ plan.price }}
              </div>
              <p class="mt-2 text-zinc-600">{{ plan.description }}</p>
            </div>

            <!-- Features List -->
            <ul class="space-y-6 flex-grow">
              <li v-for="(feature, index) in plan.features" :key="index"
                class="pb-6 border-b border-zinc-100 last:border-0">
                <div class="flex items-center text-zinc-900">
                  <svg v-if="feature.included" xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5 mr-3 text-orange-500" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <svg v-else xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5 mr-3 text-zinc-400" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                  <span :class="feature.included ? 'font-medium' : 'text-zinc-500'">{{ feature.name }}</span>
                </div>
                <!-- Feature Details -->
                <ul v-if="feature.included && feature.details" class="mt-2 ml-8 space-y-1">
                  <li v-for="(detail, detailIndex) in feature.details" :key="detailIndex"
                    class="text-sm text-zinc-600 flex items-center">
                    <span class="w-1 h-1 rounded-full bg-zinc-400 mr-2"></span>
                    {{ detail }}
                  </li>
                </ul>
              </li>
            </ul>

            <!-- CTA Button -->
            <div class="mt-8">
              <button class="w-full py-3 px-6 rounded-full font-medium transition-all duration-300"
                :class="plan.popular ? 
                  'bg-gradient-to-r from-orange-600 to-orange-400 text-white hover:from-orange-700 hover:to-orange-500' : 
                  plan.name === 'Enterprise' ? 
                    'bg-zinc-950 text-white hover:bg-zinc-900' : 
                    'bg-zinc-900 text-white hover:bg-zinc-800'">
                Commencer
              </button>
            </div>
          </div>
        </template>
      </div>
    </div>
  </section>
</template>
