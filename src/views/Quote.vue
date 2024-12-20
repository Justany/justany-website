<script setup lang="ts">
import { ref } from 'vue'
import QuoteForm from '@/components/quote/quote-form.vue'
import CalBooking from '@/components/common/cal-booking.vue'

const bookingType = ref('free')
</script>

<template>
  <div class="bg-white">
    <!-- Hero Section -->
    <section class="relative border-b border-zinc-200 px-4 sm:px-6">
      <div class="animated-lines">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </div>
      <div class="mx-auto max-w-5xl mb-4 pt-32">
        <div class="flex flex-col">
          <span class="w-fit px-4 py-1.5 text-sm font-medium text-zinc-600 bg-zinc-100 rounded-full mb-6 sm:mb-8">
            Devis en 24h chrono
          </span>
          <h1
            class="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-zinc-800 to-zinc-500 inline-block text-transparent bg-clip-text mb-4 sm:mb-6">
            Donnez Vie à Vos Projets
          </h1>
          <p class="text-base sm:text-lg max-w-3xl text-zinc-600 mb-8 sm:mb-12">
            De l'idée à la réalisation, nous vous accompagnons dans la création de votre solution numérique sur mesure.
          </p>
        </div>
      </div>
    </section>

    <!-- Form Section -->
    <section class="py-6 md:py-12 relative px-4 sm:px-6">
      <div class="mx-auto max-w-6xl relative">
        <div class="grid grid-cols-1 lg:grid-cols-[1fr,2fr] gap-8 lg:gap-12 xl:gap-16 items-start">
          <!-- Left Content -->
          <div class="lg:sticky lg:top-28 order-2 lg:order-1">
            <div class="bg-white p-6 sm:p-8 rounded-2xl border border-zinc-100">
              <h2
                class="text-2xl font-bold mb-8 bg-gradient-to-r from-zinc-800 to-zinc-500 inline-block text-transparent bg-clip-text">
                Comment ça marche ?</h2>
              <ul class="space-y-8">
                <li class="flex gap-4">
                  <div class="flex-none">
                    <div
                      class="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-600 font-semibold">
                      1</div>
                  </div>
                  <div>
                    <h3 class="font-medium text-zinc-900 mb-1">Remplissez le formulaire</h3>
                    <p class="text-zinc-600">Décrivez votre projet en détail</p>
                  </div>
                </li>
                <li class="flex gap-4">
                  <div class="flex-none">
                    <div
                      class="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-600 font-semibold">
                      2</div>
                  </div>
                  <div>
                    <h3 class="font-medium text-zinc-900 mb-1">Nous étudions votre projet</h3>
                    <p class="text-zinc-600">Analyse détaillée de vos besoins</p>
                  </div>
                </li>
                <li class="flex gap-4">
                  <div class="flex-none">
                    <div
                      class="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-600 font-semibold">
                      3</div>
                  </div>
                  <div>
                    <h3 class="font-medium text-zinc-900 mb-1">Nous vous proposons une solution</h3>
                    <p class="text-zinc-600">Devis personnalisé adapté à vos besoins</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <!-- Right Form -->
          <div class="bg-white p-6 sm:p-8 rounded-2xl border border-zinc-100 order-1 lg:order-2">
            <QuoteForm />
          </div>
        </div>
      </div>
    </section>

    <!-- Booking Section -->
    <section class="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 bg-white border-t border-zinc-200">
      <div class="max-w-5xl mx-auto">
        <div class="text-center mb-12 sm:mb-16">
          <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-zinc-900">
            Parlons de vive voix
          </h2>
          <p class="text-lg sm:text-xl text-zinc-600 mx-auto max-w-3xl px-4">
            Choisissez le type de consultation qui vous convient le mieux.
          </p>
        </div>

        <!-- Booking Type Switcher -->
        <div class="flex justify-center mb-8 sm:mb-12 overflow-x-auto px-4">
          <div class="inline-flex p-1.5 bg-zinc-100 rounded-full">
            <button :class="[
              'flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-full font-medium transition-colors whitespace-nowrap',
              bookingType === 'free'
                ? 'bg-white text-zinc-900 shadow-sm'
                : 'text-zinc-600 hover:text-zinc-900'
            ]" @click="bookingType = 'free'">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span class="hidden sm:inline">Consultation Gratuite</span>
              <span class="inline sm:hidden">15 min</span>
              <span
                class="ml-1.5 items-center px-2 py-0.5 rounded text-xs font-medium bg-orange-100 text-orange-800 sm:inline hidden">
                15 min
              </span>
            </button>
            <button :class="[
              'flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-full font-medium transition-colors whitespace-nowrap',
              bookingType === 'paid'
                ? 'bg-white text-zinc-900 shadow-sm'
                : 'text-zinc-600 hover:text-zinc-900'
            ]" @click="bookingType = 'paid'">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
              <span class="hidden sm:inline">Consultation Approfondie</span>
              <span class="inline sm:hidden">60 min</span>
              <span
                class="ml-1.5 items-center px-2 py-0.5 rounded text-xs font-medium bg-orange-100 text-orange-800 sm:inline hidden">
                60 min
              </span>
            </button>
          </div>
        </div>

        <!-- Free Consultation -->
        <div v-if="bookingType === 'free'" class="max-w-4xl mx-auto px-4">
          <div class="flex items-center gap-4 mb-8">
            <div class="w-12 h-12 flex items-center justify-center rounded-xl bg-orange-50">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-semibold text-zinc-900">Consultation Gratuite</h3>
              <p class="text-zinc-600">Choisissez un créneau qui vous convient</p>
            </div>
          </div>
          <CalBooking bookingType="free" />
        </div>

        <!-- Paid Consultation -->
        <div v-if="bookingType === 'paid'" class="max-w-4xl mx-auto px-4">
          <div class="flex items-center gap-4 mb-8">
            <div class="w-12 h-12 flex items-center justify-center rounded-xl bg-orange-50">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-semibold text-zinc-900">Consultation Approfondie</h3>
              <p class="text-zinc-600">Session détaillée de 60 minutes</p>
            </div>
          </div>
          <CalBooking bookingType="paid" />
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 bg-zinc-900 border-t border-zinc-200/50">
      <div class="max-w-5xl mx-auto text-center">
        <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-white">
          Prêt à Transformer votre Vision en Réalité ?
        </h2>
        <p class="text-lg sm:text-xl text-zinc-300 mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
          Que vous choisissiez de remplir le formulaire ou de réserver un appel, nous sommes là pour vous accompagner
          dans la réalisation de votre projet.
        </p>
        <div class="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 px-4">
          <a href="/portfolio"
            class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white text-zinc-900 rounded-full font-medium hover:bg-orange-50 transition-colors">
            <span>Voir nos réalisations</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clip-rule="evenodd" />
            </svg>
          </a>
          <a href="/services"
            class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-zinc-800 text-white rounded-full font-medium hover:bg-zinc-700 transition-colors">
            <span>Découvrir nos services</span>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>
