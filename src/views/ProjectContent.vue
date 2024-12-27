<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import { webProjectContent } from '@/data/projets.datas'
import WebsitePreview from '@/components/WebsitePreview.vue'

const router = useRouter()
const project = ref(webProjectContent)
const selectedImage = ref(null)

// Définition des icônes de sections
const sectionIcons = {
    overview: 'M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z',
    client: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
    context: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    impact: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
    features: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z',
    stack: 'M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z',
    performance: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
    resources: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10',
    security: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
    process: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2',
    maintenance: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z'
}

// État pour suivre la section active au scroll
const activeSection = ref('overview')

const openImage = (image: string) => {
    selectedImage.value = image
}

const closeImage = () => {
    selectedImage.value = null
}

// Fonction pour gérer le scroll smooth vers les sections
const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
        const yOffset = -100 // Offset pour tenir compte du header fixe
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
        window.scrollTo({ top: y, behavior: 'smooth' })
        activeSection.value = sectionId
    }
}

onMounted(() => {
    if (!project.value) {
        router.push('/404')
        return
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                activeSection.value = entry.target.id
            }
        })
    }, {
        rootMargin: '-20% 0px -80% 0px'
    })

    // Observer toutes les sections
    Object.keys(sectionIcons).forEach(sectionId => {
        const element = document.getElementById(sectionId)
        if (element) observer.observe(element)
    })
})

// Computed values for metrics formatting
const formattedMetrics = computed(() => ({
    mainMetrics: [
        { label: 'ROI', value: project.value.metrics?.roi, icon: 'chart-bar' },
        { label: 'Utilisateurs', value: project.value.metrics?.userBase, icon: 'users' },
        { label: 'Satisfaction', value: project.value.metrics?.customerSatisfaction, icon: 'star' },
        { label: 'Chiffre d\'affaires', value: project.value.metrics?.monthlyRevenue, icon: 'currency-euro' }
    ],
    performance: project.value.performance?.beforeAfter || [],
    stats: project.value.metrics?.performanceStats || {}
}))

const developmentPhases = computed(() => project.value.developmentProcess?.keyMilestones || [])

// Nouvelles fonctions utilitaires
const getFeatureIcon = (iconName) => {
    const icons = {
        'shopping-cart': 'M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z',
        'mobile-device': 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z',
        'analytics': 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
    }
    return icons[iconName] || icons['analytics']
}

const getScoreColor = (score) => {
    if (score >= 90) return 'text-green-600'
    if (score >= 50) return 'text-orange-600'
    return 'text-red-600'
}

const formatMetricName = (name) => {
    return name
        .replace(/([A-Z])/g, ' $1')
        .replace(/^./, str => str.toUpperCase())
}

// Fonction pour formater le statut
const formatStatus = (status: string) => {
    const statusMap = {
        done: 'Terminé',
        process: 'En cours',
        planned: 'Planifié',
        proposal: 'Proposé'
    }
    return statusMap[status] || status
}

// Ajout de la fonction pour les icônes des métriques
const getMetricIcon = (key: string) => {
    const icons = {
        roi: 'M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z',
        userBase: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
        monthlyRevenue: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
        conversionRate: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
        timeToMarket: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
        customerSatisfaction: 'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z'
    }
    return icons[key] || icons.analytics
}

// Simplification du système de couleurs
const getStatusColor = (status: string) => {
    return {
        done: 'bg-blue-50 text-blue-600',
        process: 'bg-blue-50 text-blue-600',
        planned: 'bg-gray-50 text-gray-600',
        proposal: 'bg-gray-50 text-gray-600'
    }[status] || 'bg-gray-50 text-gray-600'
}
</script>

<template>
    <div v-if="project" class="min-h-screen bg-gray-50">
        <!-- Navigation latérale modifiée -->
        <aside class="fixed left-8 top-1/2 transform -translate-y-1/2 hidden xl:block z-50">
            <nav class="bg-white rounded-2xl shadow-lg border border-gray-100 py-4 px-2">
                <button v-for="(icon, section) in sectionIcons" :key="section"
                    class="group relative flex items-center w-10 h-10 justify-center rounded-xl transition-all duration-200"
                    :class="activeSection === section
                        ? 'bg-orange-50 text-orange-600'
                        : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'" @click="scrollToSection(section)">
                    <!-- Icône -->
                    <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :d="icon" />
                    </svg>

                    <!-- Point indicateur de section active -->
                    <span v-if="activeSection === section"
                        class="absolute right-1.5 top-1.5 w-1.5 h-1.5 rounded-full bg-orange-600">
                    </span>

                    <!-- Tooltip au hover -->
                    <div class="absolute left-full ml-2 px-3 py-1.5 bg-white rounded-lg shadow-lg border border-gray-100 
                        invisible opacity-0 -translate-x-1 group-hover:visible group-hover:opacity-100 group-hover:translate-x-0 
                        transition-all duration-200 whitespace-nowrap">
                        <span class="text-sm font-medium text-gray-900">
                            {{ section.charAt(0).toUpperCase() + section.slice(1) }}
                        </span>
                        <!-- Flèche du tooltip -->
                        <span class="absolute left-0 top-1/2 -translate-x-1 -translate-y-1/2 border-4 border-transparent 
                            border-r-white"></span>
                    </div>
                </button>
            </nav>
        </aside>

        <!-- Main Content -->
        <main class="py-12">
            <div class="max-w-7xl mx-auto px-6 space-y-24">
                <!-- Hero Section -->
                <section id="overview" class="scroll-mt-32">
                    <div class="relative pt-24 pb-16 px-6 border-b border-gray-200">
                        <div class="max-w-7xl mx-auto">
                            <!-- Navigation -->
                            <div class="mb-8">
                                <button
                                    class="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
                                    @click="router.back()">
                                    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                    </svg>
                                    Retour aux projets
                                </button>
                            </div>

                            <!-- Header -->
                            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
                                <!-- Left Column -->
                                <div class="space-y-8">
                                    <!-- Category Badge -->
                                    <div class="flex items-center gap-3">
                                        <span class="inline-flex items-center px-4 py-2 rounded-xl text-sm font-medium"
                                            :class="{
                                                'bg-blue-50 text-blue-600 ring-1 ring-blue-500/10': project.mainCategory === 'Web',
                                                'bg-orange-50 text-orange-600 ring-1 ring-orange-500/10': project.mainCategory === 'Design',
                                                'bg-green-50 text-green-600 ring-1 ring-green-500/10': project.mainCategory === 'Ads'
                                            }">
                                            <svg class="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24"
                                                stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    :d="project.mainCategory === 'Web' ? 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9'
                                                        : project.mainCategory === 'Design' ? 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z'
                                                            : 'M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122'" />
                                            </svg>
                                            {{ project.mainCategory }}
                                        </span>
                                    </div>

                                    <!-- Project Title -->
                                    <h1 class="text-4xl font-bold text-gray-900 tracking-tight">{{ project.name }}</h1>

                                    <!-- Project Description -->
                                    <p class="text-xl leading-relaxed text-gray-600">{{ project.description }}</p>

                                    <!-- Tech Stack -->
                                    <div v-if="project.tools" class="space-y-4">
                                        <h3 class="text-lg font-semibold text-gray-900 flex items-center gap-2">
                                            <svg class="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24"
                                                stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                            </svg>
                                            Technologies utilisées
                                        </h3>
                                        <div class="flex flex-wrap gap-2">
                                            <span v-for="tool in project.tools" :key="tool"
                                                class="inline-flex items-center px-3 py-1 rounded-lg text-sm font-medium bg-gray-100 text-gray-800 hover:bg-gray-200 transition-colors duration-200">
                                                {{ tool }}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <!-- Right Column - Preview -->
                                <div class="relative overflow-hidden">
                                    <WebsitePreview v-if="project.liveUrl" :url="project.liveUrl" :alt="project.name"
                                        :show-details="true" :options="{
                                            insights: {
                                                lighthouse: {
                                                    preset: 'desktop',
                                                    onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo']
                                                },
                                                technologies: true
                                            },
                                            // ...autres options...
                                        }" />
                                    <img v-else-if="project.image" :src="project.image" :alt="project.name"
                                        class="w-full h-full object-cover">
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Client Section Redesigned -->
                <section id="client" class="scroll-mt-32">
                    <div class="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200">
                        <div class="flex flex-col md:flex-row gap-8 items-start">
                            <div class="w-full md:w-1/3">
                                <div class="aspect-square bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                                    <img v-if="project.client?.logo" :src="project.client.logo"
                                        :alt="project.client.name" class="w-full h-full object-contain">
                                </div>
                            </div>
                            <div class="w-full md:w-2/3 space-y-6">
                                <div>
                                    <h2 class="text-2xl font-bold text-gray-900">{{ project.client?.name }}</h2>
                                    <p class="text-lg text-gray-600">{{ project.client?.industry }}</p>
                                </div>
                                <div class="grid grid-cols-2 gap-4">
                                    <div class="space-y-1">
                                        <span class="text-sm text-gray-500">Taille de l'entreprise</span>
                                        <p class="font-medium text-gray-900">{{ project.client?.size }}</p>
                                    </div>
                                    <div class="space-y-1">
                                        <span class="text-sm text-gray-500">Localisation</span>
                                        <p class="font-medium text-gray-900">{{ project.client?.location }}</p>
                                    </div>
                                    <div class="space-y-1">
                                        <span class="text-sm text-gray-500">Création</span>
                                        <p class="font-medium text-gray-900">{{ project.client?.yearFounded }}</p>
                                    </div>
                                    <div class="space-y-1">
                                        <span class="text-sm text-gray-500">Site web</span>
                                        <a :href="project.client?.website" target="_blank"
                                            class="font-medium text-blue-600 hover:text-blue-700">
                                            Visiter le site
                                        </a>
                                    </div>
                                </div>
                                <div class="pt-4 border-t border-gray-100">
                                    <div class="flex items-center gap-4">
                                        <div class="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center">
                                            <span class="text-xl font-bold text-blue-600">
                                                {{ project.client?.contact.name[0] }}
                                            </span>
                                        </div>
                                        <div>
                                            <p class="font-medium text-gray-900">{{ project.client?.contact.name }}</p>
                                            <p class="text-sm text-gray-500">{{ project.client?.contact.role }}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Context et Solution Redesigned -->
                <section id="context" class="scroll-mt-32 space-y-8">
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <!-- Contexte et Problématique -->
                        <div class="space-y-6">
                            <div class="bg-white rounded-2xl p-8 border border-gray-200">
                                <div class="flex items-start gap-4 mb-6">
                                    <div
                                        class="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                                        <svg class="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24"
                                            stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h2 class="text-xl font-bold text-gray-900">Contexte</h2>
                                        <p class="mt-2 text-gray-600 leading-relaxed">{{ project.context }}</p>
                                    </div>
                                </div>
                                <div class="relative bg-red-50 rounded-xl p-6 mt-6">
                                    <div class="flex items-start gap-4">
                                        <div
                                            class="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center flex-shrink-0">
                                            <svg class="w-5 h-5 text-red-600" fill="none" viewBox="0 0 24 24"
                                                stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 class="text-lg font-semibold text-red-900">Problématique</h3>
                                            <p class="mt-2 text-red-700">{{ project.problem }}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Solution et Résultat -->
                        <div class="space-y-6">
                            <div class="bg-white rounded-2xl p-8 border border-gray-200">
                                <div class="flex items-start gap-4 mb-6">
                                    <div
                                        class="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center flex-shrink-0">
                                        <svg class="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24"
                                            stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h2 class="text-xl font-bold text-gray-900">Notre Solution</h2>
                                        <p class="mt-2 text-gray-600 leading-relaxed">{{ project.solution }}</p>
                                    </div>
                                </div>
                                <div class="bg-green-50 rounded-xl p-6 mt-6">
                                    <div class="relative">
                                        <div class="flex items-start gap-4">
                                            <img :src="project.testimonial?.avatar" :alt="project.testimonial?.author"
                                                class="w-12 h-12 rounded-full border-2 border-white shadow-sm">
                                            <div>
                                                <p class="text-green-800 italic">{{ project.testimonial?.content }}</p>
                                                <div class="mt-3">
                                                    <p class="font-medium text-green-900">{{ project.testimonial?.author
                                                        }}</p>
                                                    <p class="text-sm text-green-700">{{ project.testimonial?.role }}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Impact Business Redesigned -->
                <section id="impact" class="scroll-mt-32 space-y-12">
                    <div class="flex items-center justify-between mb-8">
                        <h2 class="text-2xl font-bold text-gray-900">Impact Business</h2>
                        <div class="text-sm text-gray-500">
                            Période: {{ project.startDate }} - {{ project.endDate }}
                        </div>
                    </div>

                    <!-- KPIs Cards -->
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <template v-for="(value, key) in project.metrics" :key="key">
                            <div v-if="!['performanceStats'].includes(key)"
                                class="relative group bg-white rounded-xl border border-gray-100 p-6 overflow-hidden hover:border-blue-200 transition-all">
                                <!-- Background Pattern -->
                                <div class="absolute inset-0 opacity-[0.03] bg-gradient-to-br" :class="{
                                    'from-green-600 to-green-300': ['roi', 'conversionRate'].includes(key),
                                    'from-blue-600 to-blue-300': ['userBase', 'monthlyRevenue'].includes(key),
                                    'from-purple-600 to-purple-300': ['timeToMarket', 'customerSatisfaction'].includes(key)
                                }">
                                </div>

                                <!-- Content -->
                                <div class="relative">
                                    <!-- Icon -->
                                    <div class="mb-3">
                                        <div class="w-8 h-8 rounded-lg flex items-center justify-center" :class="{
                                            'bg-green-50 text-green-500': ['roi', 'conversionRate'].includes(key),
                                            'bg-blue-50 text-blue-500': ['userBase', 'monthlyRevenue'].includes(key),
                                            'bg-purple-50 text-purple-500': ['timeToMarket', 'customerSatisfaction'].includes(key)
                                        }">
                                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    :d="getMetricIcon(key)" />
                                            </svg>
                                        </div>
                                    </div>

                                    <!-- Metric -->
                                    <div>
                                        <p class="text-sm font-medium text-gray-500 mb-1">{{ formatMetricName(key) }}
                                        </p>
                                        <p class="text-2xl font-bold" :class="{
                                            'text-green-600': ['roi', 'conversionRate'].includes(key),
                                            'text-blue-600': ['userBase', 'monthlyRevenue'].includes(key),
                                            'text-purple-600': ['timeToMarket', 'customerSatisfaction'].includes(key)
                                        }">
                                            {{ value }}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </template>
                    </div>

                    <!-- Business Impact Comparison -->
                    <div class="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div v-for="phase in ['beforeLaunch', 'afterLaunch']" :key="phase"
                            class="bg-white rounded-xl border border-gray-200 overflow-hidden">
                            <!-- Header -->
                            <div class="p-6"
                                :class="phase === 'afterLaunch' ? 'bg-gradient-to-r from-green-50 to-green-100/50' : 'bg-gradient-to-r from-gray-50 to-gray-100/50'">
                                <div class="flex items-center gap-4">
                                    <div :class="phase === 'afterLaunch' ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-600'"
                                        class="p-2 rounded-lg">
                                        <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                :d="phase === 'afterLaunch' ? 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6' : 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'" />
                                        </svg>
                                    </div>
                                    <h3 class="text-lg font-semibold"
                                        :class="phase === 'afterLaunch' ? 'text-green-900' : 'text-gray-900'">
                                        {{ phase === 'beforeLaunch' ? 'Avant Lancement' : 'Après Lancement' }}
                                    </h3>
                                </div>
                            </div>

                            <!-- Metrics -->
                            <div class="p-6">
                                <dl class="space-y-4">
                                    <div v-for="(value, key) in project.businessImpact[phase]" :key="key"
                                        class="flex justify-between items-baseline py-3 border-b border-gray-100 last:border-0">
                                        <dt class="text-gray-600">{{ formatMetricName(key) }}</dt>
                                        <dd class="font-semibold"
                                            :class="phase === 'afterLaunch' ? 'text-green-600' : 'text-gray-900'">
                                            {{ value }}
                                        </dd>
                                    </div>
                                </dl>
                            </div>
                        </div>
                    </div>

                    <!-- Improvements -->
                    <div class="bg-white rounded-xl border border-gray-200 p-8">
                        <h3 class="text-lg font-semibold text-gray-900 mb-6">Améliorations Mesurées</h3>
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div v-for="improvement in project.businessImpact.improvements" :key="improvement.metric"
                                class="relative">
                                <div
                                    class="absolute inset-0 bg-gradient-to-br from-green-50/50 to-transparent rounded-xl">
                                </div>
                                <div class="relative p-6 space-y-4">
                                    <h4 class="font-medium text-gray-900">{{ improvement.metric }}</h4>
                                    <div class="flex items-center gap-3">
                                        <span class="px-3 py-1.5 bg-red-50 text-red-700 rounded-lg text-sm">
                                            {{ improvement.before }}
                                        </span>
                                        <svg class="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24"
                                            stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                        <span class="px-3 py-1.5 bg-green-50 text-green-700 rounded-lg text-sm">
                                            {{ improvement.after }}
                                        </span>
                                    </div>
                                    <div class="mt-2">
                                        <span class="text-xl font-bold text-green-600">{{ improvement.impact }}</span>
                                        <span class="text-sm text-gray-500 ml-2">d'amélioration</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Key Features Section (Nouveau) -->
                <section id="features" class="scroll-mt-32 space-y-8">
                    <h2 class="text-2xl font-bold text-gray-900">Fonctionnalités Clés</h2>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div v-for="feature in project.keyFeatures" :key="feature.title"
                            class="bg-white rounded-xl border border-gray-200 p-6 hover:border-blue-200 transition-all duration-300">
                            <div class="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
                                <svg class="w-6 h-6 text-blue-500" viewBox="0 0 24 24">
                                    <path :d="getFeatureIcon(feature.icon)" />
                                </svg>
                            </div>
                            <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ feature.title }}</h3>
                            <p class="text-gray-600">{{ feature.description }}</p>
                        </div>
                    </div>
                </section>

                <!-- Performance Metrics (Nouveau) -->
                <section id="performance" class="scroll-mt-32 space-y-8">
                    <h2 class="text-2xl font-bold text-gray-900">Métriques de Performance</h2>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div class="bg-white rounded-xl border border-gray-200 p-6">
                            <h3 class="text-lg font-semibold text-gray-900 mb-4">Lighthouse Scores</h3>
                            <div class="grid grid-cols-2 gap-4">
                                <div v-for="(score, metric) in project.performance.lighthouse" :key="metric"
                                    class="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                    <span class="text-gray-600">{{ formatMetricName(metric) }}</span>
                                    <span class="font-semibold" :class="getScoreColor(score)">
                                        {{ score }}%
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="bg-white rounded-xl border border-gray-200 p-6">
                            <h3 class="text-lg font-semibold text-gray-900 mb-4">Stats Techniques</h3>
                            <dl class="space-y-3">
                                <div v-for="(value, key) in project.metrics.performanceStats" :key="key"
                                    class="flex justify-between items-center">
                                    <dt class="text-gray-600">{{ formatMetricName(key) }}</dt>
                                    <dd class="font-semibold text-gray-900">{{ value }}</dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                </section>

                <!-- Resources Section (Nouveau) -->
                <section id="resources" class="scroll-mt-32 space-y-8">
                    <h2 class="text-2xl font-bold text-gray-900">Ressources</h2>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div v-for="(resource, type) in project.resources" :key="type"
                            class="bg-white rounded-xl border border-gray-200 p-6">
                            <h3 class="text-lg font-semibold text-gray-900 mb-4">
                                {{ formatMetricName(type) }}
                            </h3>
                            <ul class="space-y-3">
                                <li v-for="(value, key) in resource" :key="key" class="flex items-start gap-3">
                                    <svg class="w-5 h-5 mt-0.5 text-blue-500" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                    <span class="text-gray-600">
                                        {{ Array.isArray(value) ? value.join(', ') : value }}
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                <!-- Security Section (Nouveau) -->
                <section id="security" class="scroll-mt-32 space-y-8">
                    <h2 class="text-2xl font-bold text-gray-900">Sécurité & Conformité</h2>
                    <div class="bg-white rounded-xl border border-gray-200 p-6">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h3 class="text-lg font-semibold text-gray-900 mb-4">Authentification & Chiffrement</h3>
                                <dl class="space-y-3">
                                    <div>
                                        <dt class="text-gray-600">Authentification</dt>
                                        <dd class="font-semibold text-gray-900">{{
                                            project.technicalDetails.security.authentication }}</dd>
                                    </div>
                                    <div>
                                        <dt class="text-gray-600">Chiffrement</dt>
                                        <dd class="font-semibold text-gray-900">{{
                                            project.technicalDetails.security.encryption }}</dd>
                                    </div>
                                </dl>
                            </div>
                            <div>
                                <h3 class="text-lg font-semibold text-gray-900 mb-4">Conformité</h3>
                                <div class="flex flex-wrap gap-2">
                                    <span v-for="standard in project.technicalDetails.security.compliance"
                                        :key="standard" class="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
                                        {{ standard }}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> <!-- Process de développement mis à jour -->
                <section id="process" class="scroll-mt-32 space-y-8">
                    <h2 class="text-2xl font-bold text-gray-900">Process de développement</h2>
                    <div class="relative">
                        <div class="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200"></div>
                        <div class="space-y-12">
                            <div v-for="(milestone, index) in developmentPhases" :key="index" class="relative pl-12">
                                <div class="absolute left-0 top-3 w-8 h-8 rounded-full bg-white border-2 flex items-center justify-center"
                                    :class="getStatusColor(milestone.status)">
                                    {{ index + 1 }}
                                </div>
                                <div class="bg-white rounded-xl border border-gray-200 p-6" :class="{
                                    'hover:border-green-200': milestone.status === 'done',
                                    'hover:border-blue-200': milestone.status === 'process',
                                    'hover:border-orange-200': milestone.status === 'planned',
                                    'hover:border-gray-300': milestone.status === 'proposal'
                                }">
                                    <div class="flex items-center justify-between mb-4">
                                        <h3 class="font-medium text-gray-900">{{ milestone.name }}</h3>
                                        <span class="px-3 py-1 text-sm rounded-full"
                                            :class="getStatusColor(milestone.status)">
                                            {{ formatStatus(milestone.status) }}
                                        </span>
                                    </div>
                                    <p class="text-gray-600 mb-4">{{ milestone.duration }}</p>
                                    <ul class="space-y-2">
                                        <li v-for="deliverable in milestone.deliverables" :key="deliverable"
                                            class="flex items-center gap-2 text-gray-600">
                                            <span class="w-1.5 h-1.5 rounded-full" :class="{
                                                'bg-green-400': milestone.status === 'done',
                                                'bg-blue-400': milestone.status === 'process',
                                                'bg-orange-400': milestone.status === 'planned',
                                                'bg-gray-400': milestone.status === 'proposal'
                                            }">
                                            </span>
                                            {{ deliverable }}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Maintenance et Support redesigned -->
                <section id="maintenance" class="scroll-mt-32 space-y-8">
                    <h2 class="text-2xl font-bold text-gray-900">Maintenance & Support</h2>

                    <!-- Vue d'ensemble -->
                    <div class="bg-white rounded-xl border border-gray-200 p-6">
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <!-- SLA -->
                            <div class="space-y-4">
                                <div class="flex items-center gap-3">
                                    <div class="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                                        <svg class="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24"
                                            stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <h3 class="font-semibold text-gray-900">SLA</h3>
                                </div>
                                <div class="space-y-3">
                                    <div v-for="(value, key) in project.maintenance?.sla" :key="key"
                                        class="p-3 bg-gray-50 rounded-lg">
                                        <dt class="text-sm text-gray-600">{{ key }}</dt>
                                        <dd class="font-medium text-gray-900">{{ value }}</dd>
                                    </div>
                                </div>
                            </div>

                            <!-- Support Channels -->
                            <div class="space-y-4">
                                <div class="flex items-center gap-3">
                                    <div class="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                                        <svg class="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24"
                                            stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                                        </svg>
                                    </div>
                                    <h3 class="font-semibold text-gray-900">Canaux de support</h3>
                                </div>
                                <ul class="space-y-2">
                                    <li v-for="channel in project.maintenance?.support.channels" :key="channel"
                                        class="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                                        <span class="w-2 h-2 rounded-full bg-blue-400"></span>
                                        <span class="text-gray-600">{{ channel }}</span>
                                    </li>
                                </ul>
                            </div>

                            <!-- Maintenance Schedule -->
                            <div class="space-y-4">
                                <div class="flex items-center gap-3">
                                    <div class="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                                        <svg class="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24"
                                            stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                                        </svg>
                                    </div>
                                    <h3 class="font-semibold text-gray-900">Planning</h3>
                                </div>
                                <div class="space-y-3">
                                    <div v-for="(schedule, type) in project.maintenance?.schedule" :key="type"
                                        class="p-3 bg-gray-50 rounded-lg">
                                        <dt class="text-sm text-gray-600">{{ type }}</dt>
                                        <dd class="font-medium text-gray-900">{{ schedule }}</dd>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Tableau de bord maintenance -->
                    <div class="bg-white rounded-xl border border-gray-200 p-6">
                        <h3 class="font-semibold text-gray-900 mb-4">Tableau de bord maintenance</h3>
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            <div v-for="(stat, index) in project.maintenance?.stats" :key="index"
                                class="p-4 bg-gray-50 rounded-lg">
                                <dt class="text-sm text-gray-600">{{ stat.label }}</dt>
                                <dd class="text-2xl font-semibold text-blue-600">{{ stat.value }}</dd>
                                <p class="text-sm text-gray-500 mt-1">{{ stat.description }}</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>

        <!-- Image Modal -->
        <div v-if="selectedImage" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
            <div class="relative">
                <img :src="selectedImage" class="max-w-full max-h-full">
                <button class="absolute top-4 right-4 text-white text-2xl" @click="closeImage">&times;</button>
            </div>
        </div>
    </div>
</template>

<style>
/* Ajout des styles pour le scroll smooth */
html {
    scroll-behavior: smooth;
}

/* Style pour gérer l'offset des ancres avec le header fixe */
.scroll-mt-32 {
    scroll-margin-top: 8rem;
}

/* Mise à jour des couleurs d'accentuation */
.text-accent {
    @apply text-blue-600;
}

.bg-accent-50 {
    @apply bg-blue-50;
}

.border-accent {
    @apply border-blue-200;
}
</style>