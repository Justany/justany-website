<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isVisible = ref(true)
const COOKIE_CONSENT_KEY = 'cookie_consent'

const acceptCookies = () => {
  // Sauvegarder le consentement dans les cookies
  document.cookie = `${COOKIE_CONSENT_KEY}=accepted; max-age=31536000; path=/` // expire dans 1 an
  isVisible.value = false
}

const declineCookies = () => {
  // Sauvegarder le refus dans les cookies
  document.cookie = `${COOKIE_CONSENT_KEY}=declined; max-age=31536000; path=/`
  isVisible.value = false
}

onMounted(() => {
  // Vérifier si l'utilisateur a déjà fait son choix
  const cookies = document.cookie.split(';')
  const consentCookie = cookies.find(cookie => cookie.trim().startsWith(COOKIE_CONSENT_KEY + '='))
  if (consentCookie) {
    isVisible.value = false
  }
})
</script>

<template>
  <Transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="transform translate-y-full opacity-0"
    enter-to-class="transform translate-y-0 opacity-100"
    leave-active-class="transition duration-200 ease-in"
    leave-from-class="transform translate-y-0 opacity-100"
    leave-to-class="transform translate-y-full opacity-0"
  >
    <div v-if="isVisible" class="fixed bottom-0 left-0 right-0 cookie-banner-overlay p-4">
      <div class="max-w-7xl mx-auto">
        <div class="bg-white rounded-xl shadow-xl border border-zinc-200 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div class="flex-1">
            <h3 class="text-lg font-semibold text-zinc-900 mb-2">🍪 Nous utilisons des cookies</h3>
            <p class="text-zinc-600">
              Nous utilisons des cookies pour améliorer votre expérience sur notre site. Ces cookies nous permettent d'analyser l'utilisation du site et de personnaliser votre expérience.
            </p>
          </div>
          <div class="flex flex-col sm:flex-row gap-3 sm:items-center">
            <button
              @click="declineCookies"
              class="px-6 py-2 text-zinc-700 bg-zinc-100 hover:bg-zinc-200 rounded-full transition-colors"
            >
              Refuser
            </button>
            <button
              @click="acceptCookies"
              class="px-6 py-2 text-white bg-black hover:bg-zinc-800 rounded-full transition-colors"
            >
              Accepter
            </button>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.cookie-banner-overlay {
  z-index: 9999;
}
</style>
