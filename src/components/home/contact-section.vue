<template>
  <section id="contact" class="relative py-24 px-6 bg-white">
    <!-- Background Pattern -->
    <div class="absolute inset-0 bg-zinc-50/70">
      <div class="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
    </div>

    <div class="relative max-w-5xl mx-auto">
      <!-- Content Container -->
      <div class="bg-white rounded-3xl p-8 md:p-12 border border-zinc-200">
        <div class="grid md:grid-cols-2 gap-12">
          <!-- Left Column: Contact Info -->
          <div>
            <h2 class="text-4xl font-bold bg-gradient-to-r from-zinc-800 to-zinc-500 inline-block text-transparent bg-clip-text mb-6">
              Discutons de votre projet
            </h2>
            <p class="text-zinc-600 mb-8">
              Vous avez un projet innovant ? Je suis là pour vous aider à le concrétiser. Contactez-moi pour en discuter.
            </p>
            
            <!-- Contact Methods -->
            <div class="space-y-6">
              <!-- Email -->
              <a href="mailto:mbote@justany.cg" class="flex items-center group">
                <div class="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center group-hover:bg-orange-100 transition-colors">
                  <svg class="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div class="ml-4">
                  <p class="text-sm font-medium text-zinc-900">Email</p>
                  <p class="text-sm text-zinc-600 group-hover:text-orange-600">mbote@justany.cg</p>
                </div>
              </a>

              <!-- Phone -->
              <a href="tel:+242053518256" class="flex items-center group">
                <div class="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center group-hover:bg-orange-100 transition-colors">
                  <svg class="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div class="ml-4">
                  <p class="text-sm font-medium text-zinc-900">Téléphone</p>
                  <p class="text-sm text-zinc-600 group-hover:text-orange-600">(+242) 05 351 82 56</p>
                </div>
              </a>

              <!-- Location -->
              <div class="flex items-center">
                <div class="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center">
                  <svg class="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div class="ml-4">
                  <p class="text-sm font-medium text-zinc-900">Adresse</p>
                  <p class="text-sm text-zinc-600">116 Av Almicar Cabral, B/ville - Congo</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Column: Contact Form -->
          <form class="space-y-6">
            <div>
              <label for="name" class="block text-sm font-medium text-zinc-700">Nom complet</label>
              <input id="name" type="text" name="name" class="mt-1 block w-full rounded-md border-zinc-300 shadow-sm focus:border-orange-500 focus:ring-orange-500">
            </div>

            <div>
              <label for="email" class="block text-sm font-medium text-zinc-700">Email</label>
              <input id="email" type="email" name="email" class="mt-1 block w-full rounded-md border-zinc-300 shadow-sm focus:border-orange-500 focus:ring-orange-500">
            </div>

            <div>
              <label for="project_type" class="block text-sm font-medium text-zinc-700">Type de projet</label>
              <select 
                id="project_type"
                v-model="projectType" 
                name="project_type" 
                class="mt-1 block w-full rounded-md border-zinc-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
              >
                <option value="">Sélectionnez un type</option>
                <option value="web">Application Web</option>
                <option value="mobile">Application Mobile</option>
                <option value="design">Design UI/UX</option>
                <option value="consulting">Conseil & Formation</option>
                <option value="other">Autre</option>
              </select>
            </div>

            <div v-if="projectType === 'other'">
              <label for="subject" class="block text-sm font-medium text-zinc-700">Objet</label>
              <input 
                id="subject" 
                type="text" 
                name="subject" 
                class="mt-1 block w-full rounded-md border-zinc-300 shadow-sm focus:border-orange-500 focus:ring-orange-500" 
                placeholder="Ex: Développement d'une application e-commerce"
              >
            </div>

            <div>
              <label for="message" class="block text-sm font-medium text-zinc-700">Message</label>
              <textarea id="message" name="message" rows="4" class="mt-1 block w-full rounded-md border-zinc-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"></textarea>
            </div>

            <button type="submit" class="w-full inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
              Envoyer le message
              <svg class="ml-2 -mr-1 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const projectType = ref('')
</script>
