<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { webProjectContent } from '@/data/projets.datas'
import WebsitePreview from '@/components/WebsitePreview.vue'

const router = useRouter()
const project = ref(webProjectContent)
const selectedImage = ref(null)

const openImage = (image: string) => {
    selectedImage.value = image
}

const closeImage = () => {
    selectedImage.value = null
}

onMounted(() => {
    if (!project.value) {
        router.push('/404')
    }
})
</script>

<template>
    <div v-if="project" class="min-h-screen bg-white">
        <!-- Hero Section -->
        <section class="relative pt-32 pb-16 px-6 border-b border-gray-200">
            <div class="max-w-7xl mx-auto">
                <!-- Navigation -->
                <div class="mb-8">
                    <button class="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
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
                    <div>
                        <div class="mb-6">
                            <span class="text-sm font-medium px-3 py-1 rounded-full" :class="{
                                'bg-blue-500/20 text-blue-400': project.mainCategory === 'Web',
                                'bg-orange-500/20 text-orange-400': project.mainCategory === 'Design',
                                'bg-green-500/20 text-green-400': project.mainCategory === 'Ads'
                            }">
                                {{ project.mainCategory }}
                            </span>
                        </div>
                        <h1 class="text-4xl font-bold text-gray-900 mb-6">{{ project.name }}</h1>
                        <p class="text-lg text-gray-600">{{ project.description }}</p>

                        <!-- Tools/Tech Stack -->
                        <div v-if="project.tools" class="mt-8">
                            <h3 class="text-lg font-semibold text-gray-900 mb-4">Technologies utilisées</h3>
                            <div class="flex flex-wrap gap-2">
                                <span v-for="tool in project.tools" :key="tool"
                                    class="px-3 py-1 text-sm rounded-full bg-gray-100 text-gray-700">
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
        </section>

        <!-- Content Sections -->
        <section class="py-16 px-6 bg-zinc-50">
            <div class="max-w-7xl mx-auto space-y-24">
                <!-- Project Overview -->
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div v-for="(item, index) in [
                        { title: 'Budget', value: project.budget, icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z', color: 'blue' },
                        { title: 'Durée', value: project.duration, icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z', color: 'green' },
                        { title: 'Statut', value: project.status, icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z', color: 'orange' }
                    ]" :key="index"
                        class="bg-white rounded-2xl shadow-sm p-8 border border-zinc-100 hover:border-zinc-200 transition-all duration-300 hover:shadow-md">
                        <div class="flex items-center justify-between mb-4">
                            <h3 class="text-lg font-semibold text-zinc-900">{{ item.title }}</h3>
                            <div :class="`w-12 h-12 rounded-xl bg-${item.color}-500/10 flex items-center justify-center`">
                                <svg class="w-6 h-6" :class="`text-${item.color}-500`" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="item.icon" />
                                </svg>
                            </div>
                        </div>
                        <p class="text-3xl font-bold text-zinc-900">{{ item.value }}</p>
                    </div>
                </div>

                <!-- Stack Technique -->
                <div class="bg-white rounded-2xl shadow-sm p-12 border border-zinc-100">
                    <h2 class="text-3xl font-bold mb-12 bg-gradient-to-r from-zinc-900 to-zinc-500 inline-block text-transparent bg-clip-text">
                        Stack Technique
                    </h2>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <template v-for="(stack, type) in {
                            frontend: { title: 'Frontend', items: project.stack?.frontend },
                            backend: { title: 'Backend', items: project.stack?.backend },
                            other: { title: 'Autres outils', items: project.stack?.other }
                        }" :key="type">
                            <div v-if="stack.items" class="space-y-6">
                                <h3 class="text-xl font-semibold text-zinc-800">{{ stack.title }}</h3>
                                <ul class="space-y-4">
                                    <li v-for="tech in stack.items" :key="tech"
                                        class="flex items-center p-4 rounded-xl bg-zinc-50 border border-zinc-100 hover:border-orange-200 transition-colors">
                                        <div class="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center mr-4">
                                            <svg class="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <span class="text-zinc-700">{{ tech }}</span>
                                    </li>
                                </ul>
                            </div>
                        </template>
                    </div>
                </div>

                <!-- Solution -->
                <div v-if="project.solution" class="bg-white rounded-2xl shadow-sm p-12 border border-zinc-100">
                    <h2 class="text-3xl font-bold mb-12 bg-gradient-to-r from-zinc-900 to-zinc-500 inline-block text-transparent bg-clip-text">
                        Notre Solution
                    </h2>
                    <div class="prose prose-zinc prose-lg max-w-none">
                        <p>{{ project.solution }}</p>
                    </div>
                </div>

                <!-- Objectives -->
                <div v-if="project.objectives" class="space-y-12">
                    <h2 class="text-3xl font-bold bg-gradient-to-r from-zinc-900 to-zinc-500 inline-block text-transparent bg-clip-text">
                        Objectifs
                    </h2>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div v-for="(objective, index) in project.objectives" :key="index"
                            class="group bg-white rounded-2xl shadow-sm p-8 border border-zinc-100 hover:border-orange-200 transition-all duration-300 hover:shadow-md">
                            <div class="flex items-start gap-6">
                                <div class="flex-shrink-0 w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center">
                                    <span class="text-orange-500 font-semibold">{{ index + 1 }}</span>
                                </div>
                                <div>
                                    <h3 class="text-xl font-semibold text-zinc-900 mb-3 group-hover:text-orange-500 transition-colors">
                                        {{ objective.title }}
                                    </h3>
                                    <p class="text-zinc-600">{{ objective.description }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Gallery -->
                <div v-if="project.gallery" class="space-y-12">
                    <h2 class="text-3xl font-bold bg-gradient-to-r from-zinc-900 to-zinc-500 inline-block text-transparent bg-clip-text">
                        Galerie
                    </h2>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div v-for="(image, index) in project.gallery" :key="index"
                            class="group relative aspect-video rounded-2xl overflow-hidden bg-zinc-100 cursor-pointer"
                            @click="openImage(image)">
                            <img :src="image" :alt="`${project.name} - Image ${index + 1}`"
                                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
                            <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                        </div>
                    </div>
                </div>

                <!-- Team Section -->
                <div v-if="project.teamMembers" class="space-y-12">
                    <h2 class="text-3xl font-bold bg-gradient-to-r from-zinc-900 to-zinc-500 inline-block text-transparent bg-clip-text">
                        L'Équipe
                    </h2>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div v-for="member in project.teamMembers" :key="member.name"
                            class="group bg-white rounded-2xl shadow-sm p-8 border border-zinc-100 hover:border-orange-200 transition-all duration-300 hover:shadow-md">
                            <div class="flex flex-col items-center text-center">
                                <div class="w-24 h-24 rounded-full bg-gradient-to-r from-orange-400 to-orange-600 p-1 mb-6">
                                    <div class="w-full h-full rounded-full overflow-hidden bg-zinc-100">
                                        <img v-if="member.avatar" :src="member.avatar" :alt="member.name"
                                            class="w-full h-full object-cover">
                                        <div v-else class="w-full h-full flex items-center justify-center">
                                            <span class="text-2xl font-bold text-zinc-400">{{ member.name[0] }}</span>
                                        </div>
                                    </div>
                                </div>
                                <h3 class="text-xl font-semibold text-zinc-900 mb-2 group-hover:text-orange-500 transition-colors">
                                    {{ member.name }}
                                </h3>
                                <p class="text-zinc-600 mb-4">{{ member.role }}</p>
                                <div class="flex gap-4">
                                    <a v-if="member.linkedin" :href="member.linkedin" target="_blank" rel="noopener"
                                        class="text-zinc-400 hover:text-blue-500 transition-colors">
                                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                        </svg>
                                    </a>
                                    <a v-if="member.github" :href="member.github" target="_blank" rel="noopener"
                                        class="text-zinc-400 hover:text-zinc-900 transition-colors">
                                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Next Steps -->
                <div v-if="project.nextSteps" class="space-y-12">
                    <h2 class="text-3xl font-bold bg-gradient-to-r from-zinc-900 to-zinc-500 inline-block text-transparent bg-clip-text">
                        Prochaines Étapes
                    </h2>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div v-for="(step, index) in project.nextSteps" :key="index"
                            class="group bg-white rounded-2xl shadow-sm p-8 border border-zinc-100 hover:border-orange-200 transition-all duration-300 hover:shadow-md">
                            <div class="flex items-start gap-6">
                                <div class="flex-shrink-0 w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center">
                                    <span class="text-orange-500 font-semibold">{{ index + 1 }}</span>
                                </div>
                                <div class="flex-1">
                                    <div class="flex items-start justify-between">
                                        <h3 class="text-xl font-semibold text-zinc-900 mb-3 group-hover:text-orange-500 transition-colors">
                                            {{ step.title }}
                                        </h3>
                                        <span class="px-3 py-1 bg-orange-500/10 text-orange-600 rounded-full text-sm">
                                            {{ step.planned }}
                                        </span>
                                    </div>
                                    <p class="text-zinc-600">{{ step.description }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Image Modal -->
        <div v-if="selectedImage" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
            <div class="relative">
                <img :src="selectedImage" class="max-w-full max-h-full">
                <button class="absolute top-4 right-4 text-white text-2xl" @click="closeImage">&times;</button>
            </div>
        </div>
    </div>
</template>