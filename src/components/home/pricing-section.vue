<script setup lang="ts">
import { pricingPlans, serviceRates, consultationOptions } from '@/datas/pricing.datas'
</script>

<template>
  <section class="relative px-6 py-24 bg-white border-t border-zinc-200">
    <div class="max-w-7xl mx-auto">
      <!-- Section Header -->
      <div class="text-center md:text-left mb-16">
        <h2 class="text-4xl font-bold bg-gradient-to-r from-orange-600 to-orange-200 inline-block text-transparent bg-clip-text">
          Tarifs & Forfaits
        </h2>
        <p class="mt-4 text-zinc-600 max-w-2xl">Des solutions adaptées à tous les budgets pour concrétiser vos projets digitaux</p>
      </div>

      <!-- Consultation Options -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <!-- Discovery Call -->
        <div class="p-8 rounded-xl bg-orange-50 border border-orange-200">
          <div class="flex items-start justify-between">
            <div>
              <h3 class="text-xl font-semibold text-zinc-900">Appel Découverte</h3>
              <p class="mt-2 text-zinc-600">{{ consultationOptions.discovery.description }}</p>
            </div>
            <span class="px-4 py-1 rounded-full bg-orange-100 text-orange-700 font-medium">
              {{ consultationOptions.discovery.duration }}
            </span>
          </div>
          <div class="mt-4">
            <span class="text-2xl font-bold text-zinc-900">{{ consultationOptions.discovery.price }}</span>
          </div>
          <button class="mt-6 w-full py-3 px-4 rounded-lg bg-orange-600 text-white font-medium hover:bg-orange-700 transition-colors">
            Réserver un appel
          </button>
        </div>

        <!-- Consultation -->
        <div class="p-8 rounded-xl bg-zinc-900 border border-zinc-800 text-white">
          <div class="flex items-start justify-between">
            <div>
              <h3 class="text-xl font-semibold">Consultation Projet</h3>
              <p class="mt-2 text-zinc-400">{{ consultationOptions.consultation.description }}</p>
            </div>
            <span class="px-4 py-1 rounded-full bg-orange-500/20 text-orange-300 font-medium">
              {{ consultationOptions.consultation.duration }}
            </span>
          </div>
          <div class="mt-4">
            <span class="text-2xl font-bold">{{ consultationOptions.consultation.price }}</span>
            <span class="ml-2 text-orange-400"> + (-{{ consultationOptions.consultation.discount }})</span>
          </div>
          <button class="mt-6 w-full py-3 px-4 rounded-lg bg-gradient-to-r from-orange-600 to-orange-400 text-white font-medium hover:from-orange-700 hover:to-orange-500 transition-colors">
            Réserver une consultation
          </button>
        </div>
      </div>

      <!-- Service Rates -->
      <div class="mb-16">
        <h3 class="text-2xl font-bold text-zinc-900 mb-8">Tarifs par Service</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="rate in serviceRates" :key="rate.id"
            class="p-6 rounded-xl bg-zinc-50 border border-zinc-200">
            <h4 class="text-lg font-semibold text-zinc-900">{{ rate.service }}</h4>
            <p class="mt-2 text-zinc-600">{{ rate.description }}</p>
            <div class="mt-4 flex items-baseline">
              <span class="text-2xl font-bold text-zinc-900">{{ rate.startingPrice }}</span>
              <span class="ml-2 text-zinc-500">{{ rate.unit }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Pricing Plans -->
      <div>
        <h3 class="text-2xl font-bold text-zinc-900 mb-8">Packs Solutions Complètes</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="plan in pricingPlans" :key="plan.id"
            class="relative p-8 rounded-xl bg-white border border-zinc-200 transition-all duration-300 hover:border-orange-500/50 hover:shadow-xl"
            :class="{ 'ring-2 ring-orange-500 shadow-lg': plan.popular }">
            <!-- Popular Badge -->
            <div v-if="plan.popular"
              class="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-orange-600 to-orange-400 text-white px-4 py-1 rounded-full text-sm font-medium">
              Populaire
            </div>

            <!-- Plan Header -->
            <div class="text-center mb-8">
              <h3 class="text-2xl font-bold text-zinc-900">{{ plan.name }}</h3>
              <div class="mt-4 text-4xl font-bold text-zinc-900">{{ plan.price }}</div>
              <p class="mt-2 text-zinc-600">{{ plan.description }}</p>
            </div>

            <!-- Features List -->
            <ul class="space-y-6">
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
              <button class="w-full py-3 px-4 rounded-lg font-medium transition-all duration-300"
                :class="plan.popular ? 
                  'bg-gradient-to-r from-orange-600 to-orange-400 text-white hover:from-orange-700 hover:to-orange-500' : 
                  'bg-zinc-900 text-white hover:bg-zinc-800'">
                Commencer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
