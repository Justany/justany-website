<template>
  <div class="min-h-screen flex flex-col bg-white">
    <!-- Header -->
    <header class="fixed w-full bg-white z-50 py-4 px-6 border-b border-zinc-200 shadow-xs">
      <div class="max-w-7xl mx-auto flex justify-between items-center">
        <!-- Left side - Logo and Navigation -->
        <div class="flex items-center space-x-12">
          <a href="/" class="text-black">
            <div class="w-8 h-8 bg-black rounded-xl flex items-center justify-center">
              <span class="text-white text-sm font-medium">JI</span>
            </div>
          </a>
          <nav class="flex items-center space-x-8">
            <a href="/playground" class="text-gray-600 hover:text-black transition-colors">Playground</a>
            <a href="/services" class="text-gray-600 hover:text-black transition-colors">Services</a>
            <a href="/case-studies" class="text-gray-600 hover:text-black transition-colors">Case studies</a>
            <a href="/about" class="text-gray-600 hover:text-black transition-colors">About me</a>
          </nav>
        </div>

        <!-- Right side - Time, Status and Social -->
        <div class="flex items-center space-x-6">
          <div class="text-sm text-gray-600 text-right">
            <div>Jakarta, Indonesia</div>
            <div>{{ currentTime }}</div>
          </div>
          <div class="flex space-x-2">
            <span class="px-3 py-1 text-sm bg-gray-100 rounded-full">Slot Booked</span>
            <span class="px-3 py-1 text-sm bg-gray-100 rounded-full">Slot Booked</span>
          </div>
          <button
            class="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-900 transition-colors">
            <span class="text-lg">+</span>
          </button>
          <div class="flex items-center space-x-3">
            <a href="https://instagram.com" target="_blank" class="text-gray-600 hover:text-black transition-colors">
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a href="https://dribbble.com" target="_blank" class="text-gray-600 hover:text-black transition-colors">
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M12 0c-6.628 0-12 5.373-12 12s5.372 12 12 12 12-5.373 12-12-5.372-12-12-12zm9.885 11.441c-2.575-.422-4.943-.445-7.103-.073-.244-.563-.497-1.125-.767-1.68 2.31-1 4.165-2.358 5.548-4.082 1.35 1.594 2.197 3.619 2.322 5.835zm-3.842-7.282c-1.205 1.554-2.868 2.783-4.986 3.68-1.016-1.861-2.178-3.676-3.488-5.438.779-.197 1.591-.314 2.431-.314 2.275 0 4.368.779 6.043 2.072zm-10.516-.993c1.331 1.742 2.511 3.538 3.537 5.381-2.43.715-5.331 1.082-8.684 1.105.692-2.835 2.601-5.193 5.147-6.486zm-5.44 8.834l.013-.256c3.849-.005 7.169-.448 9.95-1.322.233.475.456.952.67 1.432-3.38 1.057-6.165 3.222-8.337 6.48-1.432-1.719-2.296-3.927-2.296-6.334zm3.829 7.81c1.969-3.088 4.482-5.098 7.598-6.027.928 2.42 1.609 4.91 2.043 7.46-3.349 1.291-6.953.666-9.641-1.433zm11.586.43c-.438-2.353-1.08-4.653-1.92-6.897 1.876-.265 3.94-.196 6.199.196-.437 2.786-2.028 5.192-4.279 6.701z" />
              </svg>
            </a>
            <a href="https://twitter.com" target="_blank" class="text-gray-600 hover:text-black transition-colors">
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </header>

    <!-- Main content -->
    <main class="flex-grow">
      <router-view></router-view>
    </main>

    <!-- Footer -->
    <footer class="py-8 px-6 border-t border-gray-100">
      <div class="max-w-7xl mx-auto flex justify-between items-center">
        <div class="text-sm text-gray-600">
          {{ new Date().getFullYear() }} Justany ITOUA. All rights reserved.
        </div>
        <div class="flex items-center space-x-6">
          <a href="https://linkedin.com" target="_blank"
            class="text-gray-600 hover:text-black transition-colors">LinkedIn</a>
          <a href="https://dribbble.com" target="_blank"
            class="text-gray-600 hover:text-black transition-colors">Dribbble</a>
          <a href="https://instagram.com" target="_blank"
            class="text-gray-600 hover:text-black transition-colors">Instagram</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'MainLayout',
  data() {
    return {
      currentTime: ''
    }
  },
  mounted() {
    this.updateTime()
    setInterval(this.updateTime, 1000)
  },
  methods: {
    updateTime() {
      const now = new Date()
      const hours = now.getHours().toString().padStart(2, '0')
      const minutes = now.getMinutes().toString().padStart(2, '0')
      this.currentTime = `${hours}:${minutes} pm`
    }
  }
}
</script>

<style>
</style>