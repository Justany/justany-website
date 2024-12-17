<script setup="ts">
</script>

<template>
  <!-- Hero Section -->
  <section class="py-48 px-6 border-b bg-gradient-to-bl from-gray-100 to-white">
    <div class="max-w-7xl mx-auto pt-24">
      <div class="flex flex-row justify-between items-center">
        <!-- Name and Description -->
        <div class="max-w-2xl space-y-6">
          <div class="space-y-3">
            <h1 class="mt-4 text-6xl font-medium tracking-tight text-zinc-900 mb-5">
              <span class="font-bold text-gray-800">Justany ITOUA</span>
            </h1>
            <h2 class="text-4xl font-semibold text-gray-800">Développeur Full Stack basé au Congo-Brazzaville</h2>
            <p class="text-gray-600 text-lg">
              Passionné par la création de solutions numériques innovantes pour le marché
              africain
            </p>
          </div>

          <div class="flex space-x-4">
            <a href="#contact"
              class="px-6 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all duration-300 flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2v-2a2 2 0 01-2-2m-2-4h.01M17 16h.01" />
              </svg>
              <span>Me contacter</span>
            </a>
            <a href="#work"
              class="px-6 py-3 bg-white rounded-full border border-zinc-200 hover:border-zinc-500 transition-all duration-300 flex items-center space-x-2 text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path
                  d="M7 3a1 1 0 011-1h10a1 1 0 110 2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
              </svg>
              <span>Voir mes projets</span>
            </a>
          </div>
        </div>

        <!-- Profile image -->
        <div class="text-center justify-center">
          <div class="w-64 h-64 rounded-full overflow-hidden ring-2 ring-gray-200 transition-all duration-300">
            <img src="https://avatars.githubusercontent.com/u/32221808?v=4" alt="Justany Itoua"
              class="w-full h-full object-cover" />
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- Experience Section -->
  <section class="py-24 px-6 bg-gray-50/40 border-b border-zinc-200">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-2 gap-24">
        <!-- Working Experience -->
        <div>
          <h2 class="text-4xl mb-12 text-gray-800 font-bold">Expérience professionnelle</h2>
          <div class="space-y-12">
            <!-- Karriere -->
            <div class="flex items-start space-x-4 group hover:bg-white rounded-xl transition-all duration-300">
              <div
                class="w-12 h-12 bg-white rounded-xl flex items-center justify-center border border-gray-200 group-hover:border-gray-300 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-600" viewBox="0 0 20 20"
                  fill="currentColor">
                  <path fill-rule="evenodd"
                    d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-medium group-hover:text-gray-900 transition-colors">Karriere - Plateforme de
                  recherche d'emploi</h3>
                <p class="text-gray-500">Fondateur & Développeur Full Stack</p>
              </div>
            </div>

            <!-- Fournisseur -->
            <div class="flex items-start space-x-4 group hover:bg-white rounded-xl transition-all duration-300">
              <div
                class="w-12 h-12 bg-white rounded-xl flex items-center justify-center border border-gray-200 group-hover:border-gray-300 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-600" viewBox="0 0 20 20"
                  fill="currentColor">
                  <path
                    d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-medium group-hover:text-gray-900 transition-colors">Fournisseur - Application
                  d'e-commerce</h3>
                <p class="text-gray-500">Lead Developer</p>
              </div>
            </div>

            <!-- La Marine -->
            <div class="flex items-start space-x-4 group hover:bg-white rounded-xl transition-all duration-300">
              <div
                class="w-12 h-12 bg-white rounded-xl flex items-center justify-center border border-gray-200 group-hover:border-gray-300 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-600" viewBox="0 0 20 20"
                  fill="currentColor">
                  <path
                    d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-medium group-hover:text-gray-900 transition-colors">La Marine - Gestion
                  d'appartements</h3>
                <p class="text-gray-500">Développeur Full Stack</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Technologies & Compétences -->
        <div>
          <h2 class="text-4xl mb-12 text-gray-800 font-bold">Technologies & Compétences</h2>
          <div class="space-y-12">
            <!-- Backend -->
            <div class="flex items-start justify-between group">
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-white rounded-xl flex items-center justify-center border border-gray-200">
                  <span class="font-medium">BE</span>
                </div>
                <div>
                  <h3 class="text-lg font-medium">Backend Development</h3>
                  <p class="text-gray-500">Laravel, Node.js, MySQL, PostgreSQL</p>
                </div>
              </div>
            </div>

            <!-- Frontend -->
            <div class="flex items-start justify-between group">
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-white rounded-xl flex items-center justify-center border border-gray-200">
                  <span class="font-medium">FE</span>
                </div>
                <div>
                  <h3 class="text-lg font-medium">Frontend Development</h3>
                  <p class="text-gray-500">Vue.js, React.js, Inertia.js</p>
                </div>
              </div>
            </div>

            <!-- Mobile -->
            <div class="flex items-start justify-between group">
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-white rounded-xl flex items-center justify-center border border-gray-200">
                  <span class="font-medium">M</span>
                </div>
                <div>
                  <h3 class="text-lg font-medium">Mobile & Intégrations</h3>
                  <p class="text-gray-500">Solutions de paiement mobile, API REST, MTN Mobile Money, Airtel Money</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Tools Section -->
  <section id="tools" class="py-24 px-6 bg-gradient-to-br from-gray-50 to-white">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-4xl mb-12 text-gray-800 font-bold">Technologies & Compétences</h2>
      <div class="space-y-16">
        <!-- Frontend -->
        <div class="">
          <div class="flex items-center space-x-4 mb-6">
            <div class="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
              <font-icon :icon="['fab', 'vuejs']" class="w-8 h-8 text-blue-500" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900">Frontend Development</h3>
          </div>
          <div class="bg-white rounded-2xl p-6 border border-gray-200 transition-all duration-300">
            <div class="space-y-6">
              <div>
                <h4 class="text-sm font-medium text-gray-500 mb-3">Frameworks</h4>
                <div class="grid grid-cols-2 gap-3">
                  <div
                    class="flex items-center space-x-2 p-2 rounded-lg bg-white border border-gray-200 transition-colors">
                    <font-icon :icon="['fab', 'vuejs']" class="w-6 h-6 text-[#41B883]" />
                    <span class="text-sm text-gray-700">Vue.js</span>
                  </div>
                  <div
                    class="flex items-center space-x-2 p-2 rounded-lg bg-white border border-gray-200 transition-colors">
                    <font-icon :icon="['fab', 'react']" class="w-6 h-6 text-[#61DAFB]" />
                    <span class="text-sm text-gray-700">React</span>
                  </div>
                  <div
                    class="flex items-center space-x-2 p-2 rounded-lg bg-white border border-gray-200 transition-colors">
                    <font-icon :icon="['fab', 'js']" class="w-6 h-6 text-[#F7DF1E]" />
                    <span class="text-sm text-gray-700">Next.js</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 class="text-sm font-medium text-gray-500 mb-3">Styling</h4>
                <div class="grid grid-cols-2 gap-3">
                  <div
                    class="flex items-center space-x-2 p-2 rounded-lg bg-white border border-gray-200 transition-colors">
                    <font-icon :icon="['fab', 'css3-alt']" class="w-6 h-6 text-[#38B2AC]" />
                    <span class="text-sm text-gray-700">Tailwind</span>
                  </div>
                  <div
                    class="flex items-center space-x-2 p-2 rounded-lg bg-white border border-gray-200 transition-colors">
                    <font-icon :icon="['fab', 'sass']" class="w-6 h-6 text-[#CC6699]" />
                    <span class="text-sm text-gray-700">SCSS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Backend -->
        <div class="bg-white rounded-2xl p-6 border border-gray-200 transition-all duration-300">
          <div class="flex items-center space-x-4 mb-6">
            <div class="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center">
              <font-icon :icon="['fab', 'node']" class="w-8 h-8 text-green-500" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900">Backend Development</h3>
          </div>
          <div class="space-y-6">
            <div>
              <h4 class="text-sm font-medium text-gray-500 mb-3">Technologies</h4>
              <div class="grid grid-cols-2 gap-3">
                <div
                  class="flex items-center space-x-2 p-2 rounded-lg bg-white border border-gray-200 transition-colors">
                  <font-icon :icon="['fab', 'node']" class="w-6 h-6 text-[#339933]" />
                  <span class="text-sm text-gray-700">Node.js</span>
                </div>
                <div
                  class="flex items-center space-x-2 p-2 rounded-lg bg-white border border-gray-200 transition-colors">
                  <font-icon :icon="['fab', 'php']" class="w-6 h-6 text-[#777BB4]" />
                  <span class="text-sm text-gray-700">PHP</span>
                </div>
              </div>
            </div>
            <div>
              <h4 class="text-sm font-medium text-gray-500 mb-3">Bases de données</h4>
              <div class="grid grid-cols-2 gap-3">
                <div
                  class="flex items-center space-x-2 p-2 rounded-lg bg-white border border-gray-200 transition-colors">
                  <font-icon :icon="['fa', 'database']" class="w-6 h-6 text-[#4479A1]" />
                  <span class="text-sm text-gray-700">MySQL</span>
                </div>
                <div
                  class="flex items-center space-x-2 p-2 rounded-lg bg-white border border-gray-200 transition-colors">
                  <font-icon :icon="['fa', 'database']" class="w-6 h-6 text-[#47A248]" />
                  <span class="text-sm text-gray-700">MongoDB</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- DevOps -->
        <div class="bg-white rounded-2xl p-6 border border-gray-200 transition-all duration-300">
          <div class="flex items-center space-x-4 mb-6">
            <div class="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center">
              <font-icon :icon="['fa', 'tools']" class="w-8 h-8 text-orange-500" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900">DevOps & Tools</h3>
          </div>
          <div class="space-y-6">
            <div>
              <h4 class="text-sm font-medium text-gray-500 mb-3">Conteneurisation</h4>
              <div class="grid grid-cols-2 gap-3">
                <div
                  class="flex items-center space-x-2 p-2 rounded-lg bg-white border border-gray-200 transition-colors">
                  <font-icon :icon="['fab', 'docker']" class="w-6 h-6 text-[#2496ED]" />
                  <span class="text-sm text-gray-700">Docker</span>
                </div>
              </div>
            </div>
            <div>
              <h4 class="text-sm font-medium text-gray-500 mb-3">CI/CD</h4>
              <div class="grid grid-cols-2 gap-3">
                <div
                  class="flex items-center space-x-2 p-2 rounded-lg bg-white border border-gray-200 transition-colors">
                  <font-icon :icon="['fab', 'github']" class="w-6 h-6 text-[#181717]" />
                  <span class="text-sm text-gray-700">GitHub</span>
                </div>
                <div
                  class="flex items-center space-x-2 p-2 rounded-lg bg-white border border-gray-200 transition-colors">
                  <font-icon :icon="['fab', 'gitlab']" class="w-6 h-6 text-[#FCA121]" />
                  <span class="text-sm text-gray-700">GitLab</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Design -->
        <div class="bg-white rounded-2xl p-6 border border-gray-200 transition-all duration-300">
          <div class="flex items-center space-x-4 mb-6">
            <div class="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center">
              <font-icon :icon="['fas', 'paint-brush']" class="w-8 h-8 text-purple-500" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900">Design & Creative</h3>
          </div>
          <div class="space-y-6">
            <div>
              <h4 class="text-sm font-medium text-gray-500 mb-3">UI/UX</h4>
              <div class="grid grid-cols-2 gap-3">
                <div
                  class="flex items-center space-x-2 p-2 rounded-lg bg-white border border-gray-200 transition-colors">
                  <font-icon :icon="['fab', 'figma']" class="w-6 h-6 text-[#F24E1E]" />
                  <span class="text-sm text-gray-700">Figma</span>
                </div>
                <div
                  class="flex items-center space-x-2 p-2 rounded-lg bg-white border border-gray-200 transition-colors">
                  <font-icon :icon="['fab', 'sketch']" class="w-6 h-6 text-[#F7B500]" />
                  <span class="text-sm text-gray-700">Sketch</span>
                </div>
              </div>
            </div>
            <div>
              <h4 class="text-sm font-medium text-gray-500 mb-3">Graphics</h4>
              <div class="grid grid-cols-2 gap-3">
                <div
                  class="flex items-center space-x-2 p-2 rounded-lg bg-white border border-gray-200 transition-colors">
                  <font-icon :icon="['far', 'image']" class="w-6 h-6 text-[#31A8FF]" />
                  <span class="text-sm text-gray-700">Photoshop</span>
                </div>
                <div
                  class="flex items-center space-x-2 p-2 rounded-lg bg-white border border-gray-200 transition-colors">
                  <font-icon :icon="['far', 'object-group']" class="w-6 h-6 text-[#FF9A00]" />
                  <span class="text-sm text-gray-700">Illustrator</span>
                </div>
                <div
                  class="flex items-center space-x-2 p-2 rounded-lg bg-white border border-gray-200 transition-colors">
                  <font-icon :icon="['far', 'play-circle']" class="w-6 h-6 text-[#999999]" />
                  <span class="text-sm text-gray-700">After Effects</span>
                </div>
              </div>
            </div>
            <div>
              <h4 class="text-sm font-medium text-gray-500 mb-3">Prototyping</h4>
              <div class="grid grid-cols-2 gap-3">
                <div
                  class="flex items-center space-x-2 p-2 rounded-lg bg-white border border-gray-200 transition-colors">
                  <font-icon :icon="['fab', 'invision']" class="w-6 h-6 text-[#FF3366]" />
                  <span class="text-sm text-gray-700">InVision</span>
                </div>
                <div
                  class="flex items-center space-x-2 p-2 rounded-lg bg-white border border-gray-200 transition-colors">
                  <font-icon :icon="['fa', 'cube']" class="w-6 h-6 text-[#007ACC]" />
                  <span class="text-sm text-gray-700">Framer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Services Section -->
  <section class="py-24 px-6 bg-white border-b border-zinc-200">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-gray-800">Mes services</h2>
        <p class="text-gray-600 mt-4">Solutions numériques sur mesure pour vos projets</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Développement Full Stack -->
        <div
          class="group relative bg-white rounded-xl border border-gray-200 p-6 hover:border-gray-300 transition-all duration-300">
          <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-blue-500 rounded-t-xl"></div>
          <div class="pt-4">
            <div class="flex items-center space-x-4 mb-6">
              <div class="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center">
                <font-icon :icon="['fab', 'vuejs']" class="w-6 h-6 text-green-500" />
              </div>
              <h3 class="text-xl font-semibold text-gray-800">Développement Full Stack</h3>
            </div>
            <p class="text-gray-600">Création d'applications web complètes, du backend au frontend, avec une expertise
              particulière dans les solutions adaptées au marché africain.</p>
          </div>
        </div>

        <!-- Solutions de Paiement Mobile -->
        <div
          class="group relative bg-white rounded-xl border border-gray-200 p-6 hover:border-gray-300 transition-all duration-300">
          <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-t-xl"></div>
          <div class="pt-4">
            <div class="flex items-center space-x-4 mb-6">
              <div class="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                <font-icon :icon="['fas', 'mobile-alt']" class="w-6 h-6 text-blue-500" />
              </div>
              <h3 class="text-xl font-semibold text-gray-800">Paiements Mobiles</h3>
            </div>
            <p class="text-gray-600">Intégration de solutions de paiement mobile pour les applications web et mobiles,
              adaptées au contexte africain.</p>
          </div>
        </div>

        <!-- Services Cloud -->
        <div
          class="group relative bg-white rounded-xl border border-gray-200 p-6 hover:border-gray-300 transition-all duration-300">
          <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-pink-500 rounded-t-xl"></div>
          <div class="pt-4">
            <div class="flex items-center space-x-4 mb-6">
              <div class="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center">
                <font-icon :icon="['fas', 'cloud']" class="w-6 h-6 text-purple-500" />
              </div>
              <h3 class="text-xl font-semibold text-gray-800">Services Cloud</h3>
            </div>
            <div class="space-y-3">
              <div class="flex items-center space-x-3 text-gray-600">
                <font-icon :icon="['fa', 'database']" class="w-5 h-5 text-purple-400" />
                <span>Bases de données distribuées</span>
              </div>
              <div class="flex items-center space-x-3 text-gray-600">
                <font-icon :icon="['fa', 'server']" class="w-5 h-5 text-purple-400" />
                <span>Architecture microservices</span>
              </div>
              <div class="flex items-center space-x-3 text-gray-600">
                <font-icon :icon="['fa', 'cloud-upload-alt']" class="w-5 h-5 text-purple-400" />
                <span>Déploiement continu</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>