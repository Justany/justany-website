<script setup lang="ts">
import MainLayout from './layouts/MainLayout.vue'
import CookieBanner from '@/components/common/cookie-banner.vue'
import Loading from '@/components/layout/loading.vue'
import { Analytics } from '@vercel/analytics/vue'
import { SpeedInsights } from "@vercel/speed-insights/vue"

</script>

<template>
  <Analytics />
  <SpeedInsights />
  <Loading />
  <MainLayout />
  <CookieBanner />
</template>

<style scoped></style>