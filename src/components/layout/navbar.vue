<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { 
  Bars3Icon, 
  XMarkIcon,
  PlusIcon,
  MapPinIcon
} from '@heroicons/vue/24/outline'

const isOpen = ref(false)
const currentTime = ref('')

function updateTime() {
  const now = new Date()
  const hours = now.getHours().toString().padStart(2, '0')
  const minutes = now.getMinutes().toString().padStart(2, '0')
  const seconds = now.getSeconds().toString().padStart(2, '0')
  currentTime.value = `${hours}:${minutes}:${seconds}`
}

onMounted(() => {
  updateTime()
  setInterval(updateTime, 1000)
})

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <header class="fixed w-full bg-white/80 backdrop-blur-sm z-50 py-4 px-6 border-b border-zinc-200 shadow-xs">
    <div class="max-w-7xl mx-auto flex justify-between items-center">
      <!-- Left side - Logo and Navigation -->
      <div class="flex items-center space-x-4 lg:space-x-12">
        <a href="/" class="text-black">
          <div class="w-8 h-8 bg-black rounded-xl flex items-center justify-center">
            <span class="text-white text-sm font-medium">JI</span>
          </div>
        </a>
        <!-- Desktop Navigation -->
        <nav class="hidden lg:flex items-center space-x-8">
          <a href="#services" class="text-zinc-600 hover:text-black transition-colors">Services</a>
          <a href="#pricing" class="text-zinc-600 hover:text-black transition-colors">Pricing</a>
          <a href="#contact" class="text-zinc-600 hover:text-black transition-colors">Contact</a>
          <a href="#about" class="text-zinc-600 hover:text-black transition-colors">About</a>
        </nav>
      </div>

      <!-- Right side - Time, Status and Social -->
      <div class="hidden lg:flex items-center space-x-6">
        <div class="text-sm text-zinc-600 text-right">
          <div class="flex items-center justify-end space-x-1">
            <MapPinIcon class="w-4 h-4" />
            <span>Brazzaville, Congo</span>
          </div>
          <div>{{ currentTime }}</div>
        </div>
        <div class="hidden xl:flex space-x-2">
          <span class="px-3 py-1 text-sm bg-zinc-100 rounded-full">Available</span>
          <span class="px-3 py-1 text-sm bg-zinc-100 rounded-full">Open to work</span>
        </div>
        <button
          class="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center hover:bg-zinc-900 transition-colors">
          <PlusIcon class="w-5 h-5" />
        </button>
        <div class="flex items-center space-x-3">
          <a href="https://instagram.com" target="_blank" class="text-zinc-600 hover:text-black transition-colors">
            <font-icon :icon="['fab', 'instagram']" class="w-5 h-5" />
          </a>
          <a href="https://dribbble.com" target="_blank" class="text-zinc-600 hover:text-black transition-colors">
            <font-icon :icon="['fab', 'dribbble']" class="w-5 h-5" />
          </a>
          <a href="https://twitter.com" target="_blank" class="text-zinc-600 hover:text-black transition-colors">
            <font-icon :icon="['fab', 'x-twitter']" class="w-5 h-5" />
          </a>
        </div>
      </div>

      <!-- Mobile menu button -->
      <button 
        @click="toggleMenu"
        class="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-zinc-600 hover:text-black hover:bg-zinc-100"
      >
        <span class="sr-only">Open menu</span>
        <Bars3Icon v-if="!isOpen" class="w-6 h-6" />
        <XMarkIcon v-else class="w-6 h-6" />
      </button>
    </div>

    <!-- Mobile menu -->
    <div 
      v-show="isOpen" 
      class="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-zinc-200 shadow-lg"
    >
      <div class="px-4 py-3 space-y-4">
        <!-- Mobile Navigation -->
        <nav class="space-y-2">
          <a href="#services" class="block px-3 py-2 text-zinc-600 hover:text-black hover:bg-zinc-50 rounded-lg transition-colors">
            Services
          </a>
          <a href="#pricing" class="block px-3 py-2 text-zinc-600 hover:text-black hover:bg-zinc-50 rounded-lg transition-colors">
            Pricing
          </a>
          <a href="#contact" class="block px-3 py-2 text-zinc-600 hover:text-black hover:bg-zinc-50 rounded-lg transition-colors">
            Contact
          </a>
          <a href="#about" class="block px-3 py-2 text-zinc-600 hover:text-black hover:bg-zinc-50 rounded-lg transition-colors">
            About
          </a>
        </nav>

        <!-- Mobile Time and Status -->
        <div class="px-3 py-2">
          <div class="text-sm text-zinc-600">
            <div class="flex items-center space-x-1">
              <MapPinIcon class="w-4 h-4" />
              <span>Brazzaville, Congo</span>
            </div>
            <div>{{ currentTime }}</div>
          </div>
          <div class="flex space-x-2 mt-2">
            <span class="px-3 py-1 text-sm bg-zinc-100 rounded-full">Available</span>
            <span class="px-3 py-1 text-sm bg-zinc-100 rounded-full">Open to work</span>
          </div>
        </div>

        <!-- Mobile Social Links -->
        <div class="flex items-center space-x-4 px-3 py-2">
          <a href="https://instagram.com" target="_blank" class="text-zinc-600 hover:text-black transition-colors">
            <font-icon :icon="['fab', 'instagram']" class="w-5 h-5" />
          </a>
          <a href="https://dribbble.com" target="_blank" class="text-zinc-600 hover:text-black transition-colors">
            <font-icon :icon="['fab', 'dribbble']" class="w-5 h-5" />
          </a>
          <a href="https://twitter.com" target="_blank" class="text-zinc-600 hover:text-black transition-colors">
            <font-icon :icon="['fab', 'x-twitter']" class="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  </header>

  <!-- Spacer to prevent content from hiding under fixed navbar -->
  <div class="h-20"></div>
</template>

<style scoped>
.backdrop-blur-sm {
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}
</style>
