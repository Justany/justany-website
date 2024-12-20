<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import {
  Bars3Icon,
  XMarkIcon,
  PhoneIcon,
  MapPinIcon,
  HomeIcon,
  WrenchScrewdriverIcon,
  CurrencyDollarIcon,
  NewspaperIcon,
  EnvelopeIcon,
  UserIcon
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

const navLinks = [
  { name: 'Accueil', to: '/', icon: HomeIcon },
  { name: 'Services', to: '/#services', icon: WrenchScrewdriverIcon },
  { name: 'Tarifs', to: '/#pricing', icon: CurrencyDollarIcon },
  { name: 'Blog', to: '/blog', icon: NewspaperIcon },
  { name: 'Contact', to: '/#contact', icon: EnvelopeIcon },
  { name: 'À propos', to: '/about', icon: UserIcon }
]
</script>

<template>
  <header class="fixed w-full bg-white/80 backdrop-blur-sm z-50 py-4 px-6 border-b border-zinc-200 shadow-xs">
    <div class="max-w-7xl mx-auto flex justify-between items-center">
      <!-- Left side - Logo and Navigation -->
      <div class="flex items-center space-x-4 lg:space-x-12">
        <RouterLink to="/" class="text-black">
          <div class="w-8 h-8 bg-black rounded-xl flex items-center justify-center">
            <span class="text-white text-sm font-medium">JI</span>
          </div>
        </RouterLink>
        <!-- Desktop Navigation -->
        <nav class="hidden lg:flex items-center space-x-8">
          <RouterLink to="/" class="text-zinc-600 hover:text-black transition-colors">Accueil</RouterLink>
          <RouterLink to="/#services" class="text-zinc-600 hover:text-black transition-colors">Services</RouterLink>
          <RouterLink to="/#pricing" class="text-zinc-600 hover:text-black transition-colors">Tarifs</RouterLink>
          <RouterLink to="/blog" class="text-zinc-600 hover:text-black transition-colors">Blog</RouterLink>
          <RouterLink to="/#contact" class="text-zinc-600 hover:text-black transition-colors">Contact</RouterLink>
          <RouterLink to="/about" class="text-zinc-600 hover:text-black transition-colors">À propos</RouterLink>
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
        <RouterLink to="/devis"
          class="inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-full text-white bg-zinc-900 hover:bg-zinc-800 transition-colors duration-200">
          Demander un devis
        </RouterLink>
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
      <button class="lg:hidden p-2 text-zinc-600 hover:text-black transition-colors" @click="toggleMenu">
        <span class="sr-only">Open menu</span>
        <Bars3Icon v-if="!isOpen" class="w-6 h-6" />
        <XMarkIcon v-else class="w-6 h-6" />
      </button>
    </div>

    <!-- Mobile menu -->
    <Transition enter-from-class="opacity-0" enter-to-class="opacity-100" enter-active-class="transition duration-300"
      leave-from-class="opacity-100" leave-to-class="opacity-0" leave-active-class="transition duration-200">
      <div v-show="isOpen" class="relative z-[100]">
        <!-- Backdrop -->
        <div class="fixed inset-0 bg-black/20 backdrop-blur-sm"></div>

        <!-- Menu panel -->
        <Transition enter-active-class="transition duration-300 ease-out" enter-from-class="transform translate-x-full"
          enter-to-class="transform translate-x-0" leave-active-class="transition duration-200 ease-in"
          leave-from-class="transform translate-x-0" leave-to-class="transform translate-x-full">
          <div v-show="isOpen" class="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-lg z-[100]">
            <!-- Header -->
            <div class="px-6 py-4 border-b border-zinc-200 bg-white">
              <div class="flex items-center justify-between">
                <RouterLink to="/" class="text-black" @click="isOpen = false">
                  <div class="w-8 h-8 bg-black rounded-xl flex items-center justify-center">
                    <span class="text-white text-sm font-medium">JI</span>
                  </div>
                </RouterLink>
                <button class="p-2 text-zinc-600 hover:text-black transition-colors" @click="toggleMenu">
                  <span class="sr-only">Close menu</span>
                  <XMarkIcon class="w-6 h-6" />
                </button>
              </div>
            </div>

            <!-- Navigation Links -->
            <div class="h-[calc(100vh-73px)] overflow-y-auto px-6 py-8 bg-white">
              <nav class="space-y-6">
                <RouterLink v-for="link in navLinks" :key="link.to" :to="link.to"
                  class="flex items-center space-x-3 text-lg font-medium text-zinc-600 hover:text-black transition-colors"
                  @click="isOpen = false">
                  <component :is="link.icon" class="w-5 h-5" />
                  <span>{{ link.name }}</span>
                </RouterLink>
              </nav>

              <!-- Status & Actions -->
              <div class="mt-8 space-y-6">
                <div class="flex items-center space-x-2 px-4 py-1.5 text-sm bg-zinc-100 rounded-full w-fit">
                  <div class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                  <span>Disponible</span>
                </div>

                <RouterLink to="/devis"
                  class="block w-full text-center px-4 py-2 text-sm font-medium rounded-full text-white bg-zinc-900 hover:bg-zinc-800 transition-colors duration-200"
                  @click="isOpen = false">
                  Demander un devis
                </RouterLink>

                <!-- Location & Time -->
                <div class="text-sm text-zinc-600">
                  <div class="flex items-center space-x-1">
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
