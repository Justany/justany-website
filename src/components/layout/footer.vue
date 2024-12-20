<template>
  <footer class="min-h-screen bg-zinc-950 text-zinc-400 flex flex-col">
    <!-- Main Content -->
    <div class="flex-grow grid place-items-center w-full py-24">
      <div class="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <!-- Left Column -->
          <div class="space-y-16">
            <!-- Logo & Description -->
            <div class="space-y-8">
              <h2 class="text-4xl font-bold bg-gradient-to-r from-white to-zinc-400 inline-block text-transparent bg-clip-text">
                Justany.cg
              </h2>
              <p class="text-lg text-zinc-400 max-w-lg">
                Développeur Full-Stack passionné par la création de solutions innovantes et d'expériences utilisateur exceptionnelles.
              </p>
            </div>

            <!-- Contact Info -->
            <div class="space-y-8">
              <h3 class="text-xl font-semibold text-white">Contact</h3>
              <ul class="space-y-6">
                <li class="flex items-center space-x-4 group">
                  <div class="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center group-hover:bg-orange-600/10 transition-colors">
                    <svg class="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p class="text-sm text-zinc-500">Email</p>
                    <a href="mailto:mbote@justany.cg" class="text-white hover:text-orange-500 transition-colors">mbote@justany.cg</a>
                  </div>
                </li>
                <li class="flex items-center space-x-4 group">
                  <div class="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center group-hover:bg-orange-600/10 transition-colors">
                    <svg class="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p class="text-sm text-zinc-500">Téléphone</p>
                    <a href="tel:+242053518256" class="text-white hover:text-orange-500 transition-colors">(+242) 05 351 82 56</a>
                  </div>
                </li>
                <li class="flex items-center space-x-4 group">
                  <div class="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center group-hover:bg-orange-600/10 transition-colors">
                    <svg class="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p class="text-sm text-zinc-500">Localisation</p>
                    <p class="text-white">116 Av Almicar Cabral, B/ville - Congo</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <!-- Right Column -->
          <div class="space-y-16">
            <!-- Newsletter -->
            <div class="space-y-8">
              <h3 class="text-xl font-semibold text-white">Newsletter</h3>
              <p class="text-zinc-400">Restez informé de mes derniers projets et articles.</p>
              <form class="space-y-4">
                <div class="relative">
                  <input 
                    type="email" 
                    placeholder="Votre email" 
                    class="w-full px-6 py-4 bg-zinc-800/50 rounded-xl border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 text-white placeholder:text-zinc-500"
                  >
                  <button 
                    type="submit"
                    class="absolute right-2 top-1/2 -translate-y-1/2 px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
                  >
                    S'abonner
                  </button>
                </div>
              </form>
            </div>

            <!-- Quick Links -->
            <div class="grid grid-cols-2 gap-8">
              <!-- Services -->
              <div class="space-y-6">
                <h3 class="text-xl font-semibold text-white">Services</h3>
                <ul class="space-y-4">
                  <li><a href="#services" class="text-zinc-400 hover:text-white transition-colors">Design Graphique</a></li>
                  <li><a href="#services" class="text-zinc-400 hover:text-white transition-colors">Développement Web</a></li>
                  <li><a href="#services" class="text-zinc-400 hover:text-white transition-colors">Applications Mobile</a></li>
                  <li><a href="#services" class="text-zinc-400 hover:text-white transition-colors">Marketing Digital</a></li>
                  <li><a href="#services" class="text-zinc-400 hover:text-white transition-colors">Solutions IA</a></li>
                  <li><a href="#services" class="text-zinc-400 hover:text-white transition-colors">Formation</a></li>
                </ul>
              </div>

              <!-- Social Links -->
              <div class="space-y-6">
                <h3 class="text-xl font-semibold text-white">Social</h3>
                <ul class="space-y-4">
                  <li>
                    <a href="https://github.com/justany-cg" target="_blank" rel="noopener noreferrer" class="flex items-center space-x-2 text-zinc-400 hover:text-white transition-colors">
                      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
                      </svg>
                      <span>Github</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://linkedin.com/in/justany-cg" target="_blank" rel="noopener noreferrer" class="flex items-center space-x-2 text-zinc-400 hover:text-white transition-colors">
                      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                      <span>LinkedIn</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/justany_cg" target="_blank" rel="noopener noreferrer" class="flex items-center space-x-2 text-zinc-400 hover:text-white transition-colors">
                      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                      <span>Twitter</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="w-full border-t border-zinc-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p class="text-sm text-zinc-500">&copy; {{ new Date().getFullYear() }} Justany.cg. Tous droits réservés.</p>
          <div class="flex space-x-6">
            <a href="#" class="text-sm text-zinc-500 hover:text-white transition-colors">Mentions légales</a>
            <a href="#" class="text-sm text-zinc-500 hover:text-white transition-colors">Politique de confidentialité</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
