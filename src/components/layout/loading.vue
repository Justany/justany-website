<template>
  <div 
    class="fixed inset-0 bg-white z-50 flex items-center justify-center transition-opacity duration-300"
    :class="{ 'opacity-0 pointer-events-none': !loading }"
  >
    <div class="flex flex-col items-center">
      <div class="w-16 h-16 border-4 border-zinc-200 border-t-zinc-800 rounded-full animate-spin"></div>
      <p class="mt-4 text-zinc-600">Chargement...</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const loading = ref(true)

onMounted(() => {
  // Attendre que le contenu principal soit chargé
  window.addEventListener('load', () => {
    loading.value = false
  })
})
</script>
