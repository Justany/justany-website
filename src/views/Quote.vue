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
  <div class="min-h-screen bg-white">
    <!-- Hero Section -->
    <section class="min-h-[70vh] flex items-center relative hero-section border-b border-zinc-100">
      <div class="animated-lines">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </div>
      <div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <div class="flex flex-col items-center">
            <span class="w-content px-4 py-1.5 text-sm font-medium text-zinc-600 bg-zinc-100 rounded-full mb-8">
            Réponse rapide garantie
          </span>
          <h1 class="text-5xl font-bold bg-gradient-to-r from-zinc-800 to-zinc-500 inline-block text-transparent bg-clip-text mb-6">
            Concrétisez votre Vision
          </h1>
          <p class="text-lg text-zinc-600 mb-12 max-w-2xl mx-auto">
            Transformez vos idées en réalité. Obtenez un devis personnalisé pour votre projet digital.
          </p>
          </div>
          
          <div class="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
            <div class="group bg-white p-8 rounded-2xl border border-zinc-100 hover:border-zinc-200 transition-all duration-200">
              <div class="w-12 h-12 flex items-center justify-center rounded-xl bg-zinc-100 mb-4 group-hover:bg-zinc-200 transition-colors duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-zinc-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 class="font-semibold text-zinc-900 mb-2 text-lg">Réponse sous 48h</h3>
              <p class="text-zinc-600">Devis détaillé et personnalisé adapté à vos besoins spécifiques</p>
            </div>
            
            <div class="group bg-white p-8 rounded-2xl border border-zinc-100 hover:border-zinc-200 transition-all duration-200">
              <div class="w-12 h-12 flex items-center justify-center rounded-xl bg-zinc-100 mb-4 group-hover:bg-zinc-200 transition-colors duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-zinc-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 class="font-semibold text-zinc-900 mb-2 text-lg">Sans engagement</h3>
              <p class="text-zinc-600">Devis 100% gratuit et sans aucune obligation</p>
            </div>
            
            <div class="group bg-white p-8 rounded-2xl border border-zinc-100 hover:border-zinc-200 transition-all duration-200">
              <div class="w-12 h-12 flex items-center justify-center rounded-xl bg-zinc-100 mb-4 group-hover:bg-zinc-200 transition-colors duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-zinc-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h3 class="font-semibold text-zinc-900 mb-2 text-lg">Support dédié</h3>
              <p class="text-zinc-600">Accompagnement personnalisé tout au long de votre projet</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Form Section -->
    <section class="py-24 relative">
      <div class="animated-lines">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </div>
      <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative">
        <div class="grid lg:grid-cols-[1fr,2fr] gap-12 lg:gap-16 items-start">
          <!-- Left Content -->
          <div class="lg:sticky lg:top-28">
            <div class="bg-white p-8 rounded-2xl border border-zinc-100">
              <h2 class="text-2xl font-bold mb-8 bg-gradient-to-r from-zinc-800 to-zinc-500 inline-block text-transparent bg-clip-text">Comment ça marche ?</h2>
              <ul class="space-y-8">
                <li class="flex gap-4">
                  <div class="flex-none">
                    <div class="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-600 font-semibold">1</div>
                  </div>
                  <div>
                    <h3 class="font-medium text-zinc-900 mb-1">Remplissez le formulaire</h3>
                    <p class="text-zinc-600">Décrivez votre projet en détail</p>
                  </div>
                </li>
                <li class="flex gap-4">
                  <div class="flex-none">
                    <div class="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-600 font-semibold">2</div>
                  </div>
                  <div>
                    <h3 class="font-medium text-zinc-900 mb-1">Nous étudions votre projet</h3>
                    <p class="text-zinc-600">Analyse détaillée de vos besoins</p>
                  </div>
                </li>
                <li class="flex gap-4">
                  <div class="flex-none">
                    <div class="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-600 font-semibold">3</div>
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
          <div class="bg-white p-8 rounded-2xl border border-zinc-100">
            <QuoteForm />
          </div>
        </div>
      </div>
    </section>

    <!-- Booking Section -->
    <section class="px-6 lg:px-8 py-24 bg-white border-t border-zinc-100">
      <div class="max-w-5xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold mb-4 text-zinc-900">
            Vous préférez un Échange Direct ?
          </h2>
          <p class="text-xl text-zinc-600 mx-auto max-w-3xl">
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
