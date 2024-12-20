<script setup lang="ts">
import { ref, onMounted } from 'vue'
import QuoteForm from '@/components/quote/quote-form.vue'
import CalBooking from '@/components/common/cal-booking.vue'

const bookingType = ref('free')

onMounted(() => {
  // Initialize Cal.com
  const script = document.createElement('script')
  script.src = 'https://app.cal.com/embed/embed.js'
  script.onload = () => {
    // @ts-ignore
    window.Cal('init', '60min', { origin: 'https://cal.com' })
    // @ts-ignore
    window.Cal.ns['60min']('inline', {
      elementOrSelector: '#my-cal-inline',
      config: { layout: 'month_view' }
    })
  }
  document.head.appendChild(script)
})
</script>

<template>
  <div class="min-h-screen bg-gradient-to-b from-zinc-50 to-white">
    <!-- Hero Section -->
    <section class="relative px-6 lg:px-8 py-32 overflow-hidden bg-gradient-to-br from-orange-50/50 via-white to-zinc-50/50">
      <div class="absolute inset-0">
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#f97316_5%,_transparent_35%)]"></div>
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_#f1f5f9_10%,_transparent_45%)]"></div>
      </div>
      <div class="max-w-5xl mx-auto relative">
        <div class="text-center">
          <span class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/10 to-orange-500/5 text-orange-600 mb-8 backdrop-blur-sm border border-orange-100">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span class="font-medium">Réponse rapide garantie</span>
          </span>
          <h1 class="text-5xl md:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-br from-zinc-900 via-orange-950 to-orange-800">
            Concrétisez votre Vision
          </h1>
          <p class="text-xl md:text-2xl text-zinc-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Transformez vos idées en réalité. Obtenez un devis personnalisé pour votre projet digital en quelques étapes simples.
          </p>
          <div class="flex flex-wrap justify-center gap-6 mb-16">
            <div class="group flex items-center gap-3 px-6 py-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-zinc-100 hover:border-orange-200 transition-all duration-300 hover:shadow-md">
              <div class="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-orange-50 to-orange-100 group-hover:from-orange-100 group-hover:to-orange-200 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div class="text-left">
                <div class="font-medium text-zinc-900">Réponse sous 48h</div>
                <div class="text-sm text-zinc-500">Devis détaillé et personnalisé</div>
              </div>
            </div>
            <div class="group flex items-center gap-3 px-6 py-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-zinc-100 hover:border-orange-200 transition-all duration-300 hover:shadow-md">
              <div class="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-orange-50 to-orange-100 group-hover:from-orange-100 group-hover:to-orange-200 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div class="text-left">
                <div class="font-medium text-zinc-900">Sans engagement</div>
                <div class="text-sm text-zinc-500">Devis 100% gratuit</div>
              </div>
            </div>
            <div class="group flex items-center gap-3 px-6 py-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-zinc-100 hover:border-orange-200 transition-all duration-300 hover:shadow-md">
              <div class="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-orange-50 to-orange-100 group-hover:from-orange-100 group-hover:to-orange-200 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <div class="text-left">
                <div class="font-medium text-zinc-900">Support dédié</div>
                <div class="text-sm text-zinc-500">Accompagnement personnalisé</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Form Section -->
    <section class="px-6 lg:px-8 py-24 bg-gradient-to-br from-white via-zinc-50/50 to-orange-50/20">
      <div class="max-w-5xl mx-auto">
        <div class="grid lg:grid-cols-[1fr,2fr] gap-12 lg:gap-16 items-start">
          <!-- Left Content -->
          <div class="lg:sticky lg:top-28">
            <h2 class="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-br from-zinc-900 via-orange-950 to-orange-800">
              Votre Projet
            </h2>
            <p class="text-lg text-zinc-600 mb-8 leading-relaxed">
              Décrivez votre projet et vos besoins. Plus vous nous en dites, plus notre proposition sera précise.
            </p>
            <div class="space-y-6 bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-zinc-100">
              <div class="flex items-center gap-3 text-zinc-700">
                <div class="w-8 h-8 flex items-center justify-center rounded-lg bg-gradient-to-br from-orange-50 to-orange-100">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>Devis détaillé sous 48h</span>
              </div>
              <div class="flex items-center gap-3 text-zinc-700">
                <div class="w-8 h-8 flex items-center justify-center rounded-lg bg-gradient-to-br from-orange-50 to-orange-100">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>Proposition sur mesure</span>
              </div>
              <div class="flex items-center gap-3 text-zinc-700">
                <div class="w-8 h-8 flex items-center justify-center rounded-lg bg-gradient-to-br from-orange-50 to-orange-100">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>Confidentialité garantie</span>
              </div>
            </div>
          </div>

          <!-- Right Form -->
          <div class="bg-white/80 backdrop-blur-sm rounded-2xl border border-zinc-100 overflow-hidden hover:border-orange-200 transition-all duration-300 hover:shadow-md">
            <div class="p-8 md:p-12">
              <QuoteForm />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Booking Section -->
    <section class="px-6 lg:px-8 py-24 bg-gradient-to-b from-zinc-50 to-white border-t border-zinc-200/50">
      <div class="max-w-5xl mx-auto">
        <div class="text-left mb-16">
          <h2 class="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 to-zinc-600">
            Vous préférez un Échange Direct ?
          </h2>
          <p class="text-xl text-zinc-600 max-w-3xl">
            Choisissez le type de consultation qui vous convient le mieux.
          </p>
        </div>

        <!-- Booking Type Switcher -->
        <div class="flex justify-center mb-12">
          <div class="inline-flex p-1.5 bg-zinc-100 rounded-full">
            <button 
              @click="bookingType = 'free'"
              :class="[
                'flex items-center gap-2 px-6 py-2.5 rounded-full font-medium transition-colors',
                bookingType === 'free' 
                  ? 'bg-white text-zinc-900 shadow-sm' 
                  : 'text-zinc-600 hover:text-zinc-900'
              ]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Consultation Gratuite</span>
              <span class="ml-1.5 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-orange-100 text-orange-800">
                15 min
              </span>
            </button>
            <button 
              @click="bookingType = 'paid'"
              :class="[
                'flex items-center gap-2 px-6 py-2.5 rounded-full font-medium transition-colors',
                bookingType === 'paid' 
                  ? 'bg-white text-zinc-900 shadow-sm' 
                  : 'text-zinc-600 hover:text-zinc-900'
              ]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
              <span>Consultation Approfondie</span>
              <span class="ml-1.5 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-orange-100 text-orange-800">
                60 min
              </span>
            </button>
          </div>
        </div>

        <!-- Free Consultation -->
        <div v-if="bookingType === 'free'" class="max-w-4xl mx-auto">
          <div class="bg-white rounded-2xl shadow-sm border border-zinc-100 hover:border-orange-200 transition-all p-8">
            <div class="flex items-center gap-4 mb-8">
              <div class="w-12 h-12 flex items-center justify-center rounded-xl bg-orange-50">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
        </div>

        <!-- Paid Consultation -->
        <div v-if="bookingType === 'paid'" class="max-w-4xl mx-auto">
          <div class="bg-white rounded-2xl shadow-sm border border-zinc-100 hover:border-orange-200 transition-all p-8">
            <div class="flex items-center gap-4 mb-8">
              <div class="w-12 h-12 flex items-center justify-center rounded-xl bg-orange-50">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
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
      </div>
    </section>

    <!-- CTA Section -->
    <section class="px-6 lg:px-8 py-24 bg-zinc-900 border-t border-zinc-200/50">
      <div class="max-w-5xl mx-auto text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-6 text-white">
          Prêt à Transformer votre Vision en Réalité ?
        </h2>
        <p class="text-xl text-zinc-300 mb-12 max-w-2xl mx-auto">
          Que vous choisissiez de remplir le formulaire ou de réserver un appel, nous sommes là pour vous accompagner dans la réalisation de votre projet.
        </p>
        <div class="flex flex-wrap justify-center gap-6">
          <a href="/portfolio" class="inline-flex items-center gap-2 px-8 py-4 bg-white text-zinc-900 rounded-full font-medium hover:bg-orange-50 transition-colors">
            <span>Voir nos réalisations</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </a>
          <a href="/services" class="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-600 to-orange-400 text-white rounded-full font-medium hover:from-orange-700 hover:to-orange-500 transition-colors">
            <span>Découvrir nos services</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>
