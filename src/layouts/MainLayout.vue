<script setup lang="ts">
import Navbar from '../components/layout/navbar.vue'
import Footer from '../components/layout/footer.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <Navbar />
    <main class="flex-grow">
      <router-view></router-view>
    </main>
    <Footer />
  </div>
</template>