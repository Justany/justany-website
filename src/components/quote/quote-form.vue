<script setup lang="ts">
import { ref } from 'vue'
import { serviceRates, pricingPlans } from '@/data/pricing.datas'

const formData = ref({
  fullName: '',
  email: '',
  phone: '',
  company: '',
  serviceType: '',
  planType: '',
  budget: '',
  projectDescription: '',
  startDate: '',
  additionalInfo: ''
})

const budgetRanges = [
  '100k - 500k FCFA',
  '500k - 1M FCFA',
  '1M - 2M FCFA',
  '2M - 5M FCFA',
  '5M+ FCFA'
]

const submitForm = async () => {
  // TODO: Implement form submission
  console.log('Form submitted:', formData.value)
}
</script>

<template>
  <form class="space-y-8" @submit.prevent="submitForm">
    <!-- Services Selection -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="space-y-4">
        <label class="block">
          <span class="text-zinc-700 font-medium">Type de Service</span>
          <select 
            v-model="formData.serviceType"
            class="mt-1 block w-full px-4 py-2 rounded-full bg-white border border-zinc-300 focus:border-black focus:ring-black"
            required
          >
            <option value="" disabled>Sélectionnez un service</option>
            <option 
              v-for="service in serviceRates" 
              :key="service.id"
              :value="service.service"
            >
              {{ service.service }} (à partir de {{ service.startingPrice }})
            </option>
          </select>
        </label>

        <label class="block">
          <span class="text-zinc-700 font-medium">Pack</span>
          <select 
            v-model="formData.planType"
            class="mt-1 block w-full px-4 py-2 rounded-full bg-white border border-zinc-300 focus:border-black focus:ring-black"
          >
            <option value="" disabled>Sélectionnez un pack (optionnel)</option>
            <option 
              v-for="plan in pricingPlans" 
              :key="plan.id"
              :value="plan.name"
            >
              {{ plan.name }} ({{ plan.price }})
            </option>
          </select>
        </label>

        <label class="block">
          <span class="text-zinc-700 font-medium">Budget Estimé</span>
          <select 
            v-model="formData.budget"
            class="mt-1 block w-full px-4 py-2 rounded-full bg-white border border-zinc-300 focus:border-black focus:ring-black"
            required
          >
            <option value="" disabled>Sélectionnez une fourchette</option>
            <option v-for="range in budgetRanges" :key="range" :value="range">
              {{ range }}
            </option>
          </select>
        </label>

        <label class="block">
          <span class="text-zinc-700 font-medium">Date de Démarrage Souhaitée</span>
          <input 
            v-model="formData.startDate" 
            type="date"
            class="mt-1 block w-full px-4 py-2 rounded-full bg-white border border-zinc-300 focus:border-black focus:ring-black"
            required
          >
        </label>
      </div>

      <div class="space-y-4">
        <label class="block">
          <span class="text-zinc-700 font-medium">Nom Complet</span>
          <input 
            v-model="formData.fullName" 
            type="text"
            class="mt-1 block w-full px-4 py-2 rounded-full bg-white border border-zinc-300 focus:border-black focus:ring-black"
            required
          >
        </label>

        <label class="block">
          <span class="text-zinc-700 font-medium">Email</span>
          <input 
            v-model="formData.email" 
            type="email"
            class="mt-1 block w-full px-4 py-2 rounded-full bg-white border border-zinc-300 focus:border-black focus:ring-black"
            required
          >
        </label>

        <label class="block">
          <span class="text-zinc-700 font-medium">Téléphone</span>
          <input 
            v-model="formData.phone" 
            type="tel"
            class="mt-1 block w-full px-4 py-2 rounded-full bg-white border border-zinc-300 focus:border-black focus:ring-black"
            required
          >
        </label>

        <label class="block">
          <span class="text-zinc-700 font-medium">Entreprise</span>
          <input 
            v-model="formData.company" 
            type="text"
            class="mt-1 block w-full px-4 py-2 rounded-full bg-white border border-zinc-300 focus:border-black focus:ring-black"
          >
        </label>
      </div>
    </div>

    <!-- Project Description -->
    <div class="space-y-4">
      <label class="block">
        <span class="text-zinc-700 font-medium">Description du Projet</span>
        <textarea 
          v-model="formData.projectDescription"
          rows="4"
          class="mt-1 block w-full px-4 py-2 rounded-2xl bg-white border border-zinc-300 focus:border-black focus:ring-black"
          required
        ></textarea>
      </label>

      <label class="block">
        <span class="text-zinc-700 font-medium">Informations Supplémentaires</span>
        <textarea 
          v-model="formData.additionalInfo"
          rows="3"
          class="mt-1 block w-full px-4 py-2 rounded-2xl bg-white border border-zinc-300 focus:border-black focus:ring-black"
        ></textarea>
      </label>
    </div>

    <!-- Submit Button -->
    <div class="flex justify-center md:justify-end">
      <button
        type="submit"
        class="w-full md:w-fit justify-center px-8 py-3 bg-black text-white rounded-full hover:bg-zinc-800 transition-colors flex items-center space-x-2"
      >
        <span>Envoyer la demande</span>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
      </button>
    </div>
  </form>
</template>
