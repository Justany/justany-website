<template>
  <footer class="bg-zinc-900 text-zinc-400">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- About -->
        <div class="space-y-4">
          <h3 class="text-lg font-semibold text-white">À propos</h3>
          <p class="text-sm">
            Développeur Full-Stack passionné par la création de solutions innovantes et d'expériences utilisateur exceptionnelles.
          </p>
          <div class="flex space-x-4">
            <a href="https://github.com/yourusername" class="hover:text-white transition-colors">
              <font-icon :icon="['fab', 'github']" class="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/in/yourusername" class="hover:text-white transition-colors">
              <font-icon :icon="['fab', 'linkedin']" class="w-5 h-5" />
            </a>
            <a href="https://twitter.com/yourusername" class="hover:text-white transition-colors">
              <font-icon :icon="['fab', 'twitter']" class="w-5 h-5" />
            </a>
          </div>
        </div>

        <!-- Services -->
        <div class="space-y-4">
          <h3 class="text-lg font-semibold text-white">Services</h3>
          <ul class="space-y-2 text-sm">
            <li><a href="#" class="hover:text-white transition-colors">Développement Web</a></li>
            <li><a href="#" class="hover:text-white transition-colors">Applications Mobiles</a></li>
            <li><a href="#" class="hover:text-white transition-colors">UI/UX Design</a></li>
            <li><a href="#" class="hover:text-white transition-colors">Marketing Digital</a></li>
          </ul>
        </div>

        <!-- Contact -->
        <div class="space-y-4">
          <h3 class="text-lg font-semibold text-white">Contact</h3>
          <ul class="space-y-2 text-sm">
            <li class="flex items-center space-x-2">
              <font-icon :icon="['fas', 'envelope']" class="w-4 h-4" />
              <span>contact@example.com</span>
            </li>
            <li class="flex items-center space-x-2">
              <font-icon :icon="['fas', 'phone']" class="w-4 h-4" />
              <span>+33 6 12 34 56 78</span>
            </li>
            <li class="flex items-center space-x-2">
              <font-icon :icon="['fas', 'location-dot']" class="w-4 h-4" />
              <span>Paris, France</span>
            </li>
          </ul>
        </div>

        <!-- Newsletter -->
        <div class="space-y-4">
          <h3 class="text-lg font-semibold text-white">Newsletter</h3>
          <p class="text-sm">Restez informé de mes derniers projets et articles.</p>
          <form class="flex flex-col space-y-2">
            <input 
              type="email" 
              placeholder="Votre email" 
              class="px-4 py-2 bg-zinc-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-white text-sm"
            >
            <button 
              type="submit"
              class="px-4 py-2 bg-orange-500 text-white rounded-lg text-sm hover:bg-orange-600 transition-colors"
            >
              S'abonner
            </button>
          </form>
        </div>
      </div>

      <!-- Bottom -->
      <div class="mt-12 pt-8 border-t border-zinc-800 text-sm text-center">
        <p>&copy; {{ new Date().getFullYear() }} Tous droits réservés.</p>
      </div>
    </div>
  </footer>
</template>
