<script setup lang="ts">
import HeroSection from '@/components/home/hero-section.vue'
import ExperienceSection from '@/components/home/experience-section.vue'
import CompetenceSection from '../components/home/competence-section.vue'
import ServicesSection from '@/components/home/services-section.vue'
import PortfolioSection from '@/components/home/portfolio-section.vue'
import PricingSection from '@/components/home/pricing-section.vue'
import BlogSection from '@/components/home/blog-section.vue'
import ContactSection from '@/components/home/contact-section.vue'
</script>

<template>
  <main>
    <!-- Hero Section -->
    <HeroSection />

    <!-- Experience Section -->
    <ExperienceSection />

    <!-- Competence Section -->
    <CompetenceSection />

    <!-- Services Section -->
    <ServicesSection />

    <!-- Portfolio Section -->
    <PortfolioSection />

    <!-- Pricing Section -->
    <PricingSection />

    <!-- Blog Section -->
    <BlogSection />

    <!-- Contact Section -->
    <ContactSection />
  </main>
</template>

<style scoped>
</style>