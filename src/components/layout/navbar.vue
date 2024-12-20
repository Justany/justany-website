<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { 
  Bars3Icon, 
  XMarkIcon,
  PhoneIcon,
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
          <a href="/" class="text-zinc-600 hover:text-black transition-colors">Accueil</a>
          <a href="#services" class="text-zinc-600 hover:text-black transition-colors">Services</a>
          <a href="#pricing" class="text-zinc-600 hover:text-black transition-colors">Tarifs</a>
          <a href="/blog" class="text-zinc-600 hover:text-black transition-colors">Blog</a>
          <a href="#contact" class="text-zinc-600 hover:text-black transition-colors">Contact</a>
          <a href="/about" class="text-zinc-600 hover:text-black transition-colors">À propos</a>
        </nav>
      </div>

      <!-- Right side - Time, Status and Social -->
      <div class="hidden lg:flex items-center space-x-6">
        <div class="hidden xl:flex space-x-2">
          <div class="flex items-center space-x-2 px-3 py-1 text-sm bg-zinc-100 rounded-full">
            <div class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span>Disponible</span>
          </div>
        </div>
        <a href="/devis" class="inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-full text-white bg-zinc-900 hover:bg-zinc-800 transition-colors duration-200">
          Demander un devis
        </a>
        <a href="tel:+242053518256"
          class="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center hover:bg-zinc-900 transition-colors">
          <PhoneIcon class="w-4 h-4" />
        </a>
        <div class="text-sm text-zinc-600 text-right">
          <div class="flex items-center justify-end space-x-1">
            <MapPinIcon class="w-4 h-4" />
            <span>Brazzaville, Congo</span>
          </div>
          <div>{{ currentTime }}</div>
        </div>
      </div>

      <!-- Mobile menu button -->
      <button 
        @click="toggleMenu"
        class="lg:hidden p-2 text-zinc-600 hover:text-black transition-colors"
      >
        <span class="sr-only">Open menu</span>
        <Bars3Icon v-if="!isOpen" class="w-6 h-6" />
        <XMarkIcon v-else class="w-6 h-6" />
      </button>
    </div>

    <!-- Mobile menu -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-show="isOpen"
        class="lg:hidden fixed inset-0 z-50"
      >
        <!-- Background overlay -->
        <div class="fixed inset-0 bg-black/20 backdrop-blur-sm"></div>

        <!-- Menu panel -->
        <Transition
          enter-active-class="transition duration-300 ease-out"
          enter-from-class="transform -translate-y-full"
          enter-to-class="transform translate-y-0"
          leave-active-class="transition duration-200 ease-in"
          leave-from-class="transform translate-y-0"
          leave-to-class="transform -translate-y-full"
        >
          <div v-show="isOpen" class="fixed top-0 bottom-0 w-full bg-white">
            <div class="flex items-center justify-between px-6 py-4 border-b border-zinc-200">
              <div class="w-8 h-8 bg-black rounded-xl flex items-center justify-center">
                <span class="text-white text-sm font-medium">JI</span>
              </div>
              <button
                @click="toggleMenu"
                class="p-2 text-zinc-600 hover:text-black transition-colors"
              >
                <span class="sr-only">Close menu</span>
                <XMarkIcon class="w-6 h-6" />
              </button>
            </div>

            <div class="bg-white px-6 py-8 space-y-8 shadow-lg border-b border-zinc-200">
              <!-- Mobile Navigation -->
              <nav class="flex flex-col space-y-8">
                <a href="/" class="text-zinc-600 hover:text-black transition-colors text-lg">Accueil</a>
                <a href="#services" class="text-zinc-600 hover:text-black transition-colors text-lg">Services</a>
                <a href="#pricing" class="text-zinc-600 hover:text-black transition-colors text-lg">Tarifs</a>
                <a href="/blog" class="text-zinc-600 hover:text-black transition-colors text-lg">Blog</a>
                <a href="#contact" class="text-zinc-600 hover:text-black transition-colors text-lg">Contact</a>
                <a href="/about" class="text-zinc-600 hover:text-black transition-colors text-lg">À propos</a>
              </nav>

              <!-- Mobile Status -->
              <div class="space-y-6">
                <div class="flex items-center space-x-2 px-4 py-1.5 text-sm bg-zinc-100 rounded-full w-fit mx-auto">
                  <div class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                  <span>Disponible</span>
                </div>

                <a href="/devis" class="block text-center px-5 py-2.5 text-sm font-medium rounded-full text-white bg-zinc-900 hover:bg-zinc-800 transition-colors duration-200">
                  Demander un devis
                </a>

                <a href="tel:+242053518256"
                  class="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-zinc-900 transition-colors mx-auto">
                  <PhoneIcon class="w-4 h-4" />
                </a>

                <div class="text-sm text-zinc-600 text-center">
                  <div class="flex items-center justify-center space-x-1.5">
                    <MapPinIcon class="w-4 h-4" />
                    <span>Brazzaville, Congo</span>
                  </div>
                  <div class="mt-1">{{ currentTime }}</div>
                </div>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </Transition>

  </header>
  
</template>
