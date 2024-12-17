<template>
  <div class="bg-white">
  <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
    <div class="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
      <div>
        <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          À propos de moi
        </h2>
        <p class="mt-3 max-w-3xl text-lg text-gray-500">
          Passionné par la technologie et le développement web, je m'engage à créer des solutions numériques modernes et efficaces. 
          Avec une solide expérience en Vue.js, TypeScript et Tailwind CSS, je conçois des sites élégants, 
          performants et optimisés pour tous les appareils.
        </p>
        
        <div class="mt-8">
          <div class="flex items-center">
            <h3 class="text-lg font-medium text-gray-900">Compétences techniques</h3>
          </div>
          <div class="mt-5">
            <dl class="space-y-5">
              <div class="relative">
                <dt>
                  <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <p class="ml-16 text-lg leading-6 font-medium text-gray-900">Front-end Development</p>
                </dt>
                <dd class="mt-2 ml-16 text-base text-gray-500">
                  Vue.js, React, TypeScript, HTML5, CSS3, Tailwind CSS
                </dd>
              </div>

              <div class="relative">
                <dt>
                  <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                    </svg>
                  </div>
                  <p class="ml-16 text-lg leading-6 font-medium text-gray-900">Back-end Development</p>
                </dt>
                <dd class="mt-2 ml-16 text-base text-gray-500">
                  Node.js, Python, SQL, NoSQL
                </dd>
              </div>

              <div class="relative">
                <dt>
                  <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <p class="ml-16 text-lg leading-6 font-medium text-gray-900">DevOps & Security</p>
                </dt>
                <dd class="mt-2 ml-16 text-base text-gray-500">
                  Git, Docker, CI/CD, Web Security
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      <div class="mt-8 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-2">
        <div class="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
          <img class="max-h-12" src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg" alt="Transistor">
        </div>
        <div class="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
          <img class="max-h-12" src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg" alt="Mirage">
        </div>
        <div class="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
          <img class="max-h-12" src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg" alt="Tuple">
        </div>
        <div class="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
          <img class="max-h-12" src="https://tailwindui.com/img/logos/laravel-logo-gray-400.svg" alt="Laravel">
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script setup lang="ts">
// Component logic here
</script>

