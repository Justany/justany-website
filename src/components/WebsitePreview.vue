<script setup lang="ts">
import { ref, onMounted, watch, computed } from 'vue'
import { getMicrolinkData, type MicrolinkResponse, type MicrolinkOptions, getMicrolinkScreenshotUrl } from '@/services/microlink.service'

const props = defineProps<{
    url: string
    alt?: string
    showDetails?: boolean
    options?: Partial<MicrolinkOptions>
}>()

const previewData = ref<MicrolinkResponse | null>(null)
const isLoading = ref(true)
const hasError = ref(false)
const activeTab = ref('preview')
const retryCount = ref(0)
const errorMessage = ref('')

// Ajout du state pour les presets Lighthouse
const selectedPreset = ref('desktop')

// Modifier la liste des tabs
const tabs = ['preview', 'performance', 'technologies', 'meta']

const fetchPreview = async () => {
    try {
        isLoading.value = true
        errorMessage.value = ''
        previewData.value = await getMicrolinkData(props.url, props.options)
        isLoading.value = false
    } catch (error) {
        console.error('Error loading preview:', error)
        errorMessage.value = error instanceof Error ? error.message : 'Erreur de chargement'
        hasError.value = true
        isLoading.value = false
    }
}

// Fonction de retry manuelle
const retryFetch = async () => {
    if (retryCount.value < 3) {
        retryCount.value++
        hasError.value = false
        await fetchPreview()
    }
}

// Modifier loadInsights pour ne charger que la performance
const loadInsights = async () => {
    if ((activeTab.value === 'performance' || activeTab.value === 'technologies')
        && !previewData.value?.insights) {
        try {
            const data = await getMicrolinkData(props.url, {
                ...props.options,
                insights: {
                    technologies: activeTab.value === 'technologies',
                    lighthouse: activeTab.value === 'performance' ? {
                        preset: selectedPreset.value,
                        onlyCategories: ['performance']
                    } : false
                }
            });
            if (data.insights) {
                previewData.value = {
                    ...previewData.value,
                    insights: data.insights
                };
            }
        } catch (error) {
            console.error('Error loading insights:', error);
        }
    }
};

const screenshotUrl = computed(() => {
    return getMicrolinkScreenshotUrl(props.url, {
        type: 'jpeg',
        quality: 85,
        width: 1200,
        height: 630,
        ...props.options?.screenshot
    });
});

const groupedTechnologies = computed(() => {
    if (!previewData.value?.insights?.technologies) return {};

    return previewData.value.insights.technologies.reduce((acc, tech) => {
        tech.categories.forEach(category => {
            if (!acc[category]) acc[category] = [];
            acc[category].push(tech);
        });
        return acc;
    }, {} as Record<string, Technology[]>);
});

const sortedCategories = computed(() =>
    Object.keys(groupedTechnologies.value).sort()
);

const formatMetricName = (metric: string) => {
    return metric
        .replace(/([A-Z])/g, ' $1')
        .toLowerCase()
        .replace(/^./, str => str.toUpperCase())
}

const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    })
}

// Surveillez les changements de preset pour recharger les données
watch([activeTab, selectedPreset], loadInsights);

onMounted(fetchPreview)
</script>

<template>
    <div class="bg-white border border-orange-200">

        <!-- Tabs -->
        <div v-if="props.showDetails" class="border-b border-zinc-200 bg-zinc-100">
            <nav class="flex space-x-4 px-4">
                <button v-for="tab in tabs" :key="tab" :class="[
                    'px-3 py-2 text-sm font-medium',
                    activeTab === tab
                        ? 'border-b-2 border-blue-500 text-blue-600'
                        : 'text-zinc-500 hover:text-zinc-700'
                ]" @click="activeTab = tab">
                    {{ tab.charAt(0).toUpperCase() + tab.slice(1) }}
                </button>
            </nav>
        </div>

        <!-- Content -->
        <div class="p-2">
            <!-- Preview Tab with direct image URL -->
            <div v-if="activeTab === 'preview'" class="relative rounded-lg">
                <img :src="screenshotUrl" :alt="alt || 'Site preview'" class="w-full h-auto object-cover"
                    @error="hasError = true">

                <!-- Loading Overlay -->
                <div v-if="isLoading" class="absolute inset-0 bg-zinc-100 bg-opacity-75 flex items-center
                    justify-center">
                    <svg class="animate-spin h-8 w-8 text-orange-500" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4">
                        </circle>
                        <path class="opacity-75" fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                        </path>
                    </svg>
                </div>

                <!-- URL Bar -->
                <div
                    class="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white px-4 py-2 text-sm flex items-center">
                    <div class="w-3 h-3 rounded-full bg-green-400 mr-2"></div>
                    {{ url }}
                </div>
            </div>

            <!-- Error State with Better Message -->
            <div v-if="hasError" class="absolute inset-0 flex items-center justify-center">
                <div class="text-center p-4">
                    <svg class="mx-auto h-12 w-12 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <p class="mt-2 text-zinc-500">{{ errorMessage || 'Impossible de charger l\'aperçu' }}</p>
                    <button v-if="retryCount < 3"
                        class="mt-4 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
                        @click="retryFetch">
                        Réessayer ({{ retryCount }}/3)
                    </button>
                </div>
            </div>

            <!-- Performance Tab avec résumé -->
            <div v-else-if="activeTab === 'performance' && previewData?.insights?.lighthouse" class="space-y-6 p-4">
                <div class="flex justify-between items-center mb-6">
                    <h3 class="text-lg font-semibold text-gray-900">Performance Metrics</h3>
                    <select v-model="selectedPreset"
                        class="text-sm border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500">
                        <option value="desktop">Desktop</option>
                        <option value="mobile">Mobile</option>
                    </select>
                </div>

                <!-- Lighthouse Scores Grid -->
                <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <template v-for="(metric, title) in {
                        performance: previewData.insights.lighthouse?.categories.performance || 0,
                        accessibility: previewData.insights.lighthouse?.categories.accessibility || 0,
                        bestPractices: previewData.insights.lighthouse?.categories.bestPractices || 0,
                        seo: previewData.insights.lighthouse?.categories.seo || 0
                    }" :key="title">
                        <div class="flex flex-col items-center">
                            <!-- Circular Progress -->
                            <div class="relative w-24 h-24">

                                <svg class="w-full h-full" viewBox="0 0 36 36">
                                    <!-- Background circle -->
                                    <circle cx="18" cy="18" r="16" fill="none" class="stroke-current"
                                        :class="[metric.scrore >= 0.9 ? 'text-green-100' : metric.scrore >= 0.5 ? 'text-orange-100' : 'text-red-100']"
                                        stroke-width="3" />
                                    <!-- Progress circle -->
                                    <circle cx="18" cy="18" r="16" fill="none"
                                        :class="[metric.scrore >= 0.9 ? 'text-green-500' : metric.scrore >= 0.5 ? 'text-orange-500' : 'text-red-500']"
                                        class="stroke-current transform -rotate-90 origin-center"
                                        :stroke-dasharray="metric.scrore * 100" stroke-width="3"
                                        stroke-linecap="round" />
                                    <!-- Score text -->
                                    <text x="18" y="18" class="font-bold"
                                        :class="[metric.scrore >= 0.9 ? 'fill-green-700' : metric.scrore >= 0.5 ? 'fill-orange-700' : 'fill-red-700']"
                                        text-anchor="middle" dominant-baseline="central" font-size="12">
                                        {{ metric.score * 100 }}
                                    </text>
                                </svg>
                            </div>
                            <!-- Category label -->
                            <span class="mt-2 text-sm font-medium text-gray-700">
                                {{ metric.title }}
                            </span>
                        </div>
                    </template>
                </div>

                <div class="mt-4 text-sm text-center text-gray-500">
                    Les valeurs sont estimées et peuvent varier.
                    <div class="flex justify-center content-center items-center gap-4 mt-2">
                        <div class="flex items-center gap-2">
                            <span class="w-3 h-3 rounded-full bg-red-500"></span>
                            <span>0-49</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <span class="w-3 h-3 rounded-full bg-orange-500"></span>
                            <span>50-89</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <span class="w-3 h-3 rounded-full bg-green-500"></span>
                            <span>90-100</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Technologies Tab (nouveau) -->
            <div v-else-if="activeTab === 'technologies' && previewData?.insights?.technologies" class="space-y-6 p-4">
                <h3 class="text-lg font-semibold text-gray-900">Technologies Détectées</h3>
                <div v-for="category in sortedCategories" :key="category"
                    class="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                    <h4 class="text-sm font-medium text-gray-700 mb-3">{{ category }}</h4>
                    <div class="flex flex-wrap gap-3">
                        <div v-for="tech in groupedTechnologies[category]" :key="tech.name"
                            class="flex items-center space-x-2 bg-gray-50 rounded-lg p-2 hover:bg-gray-100 transition-colors">
                            <img v-if="tech.logo" :src="tech.logo" :alt="tech.name" class="w-6 h-6 object-contain" />
                            <div>
                                <p class="text-sm font-medium">{{ tech.name }}</p>
                                <p class="text-xs text-gray-500">{{ tech.confidence }}% confiance</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Meta Tab with enhanced display -->
            <div v-else-if="activeTab === 'meta' && previewData?.meta" class="space-y-6 p-4">
                <!-- Header with Logo and Basic Info -->
                <div class="flex items-start space-x-4 bg-white rounded-lg p-4 shadow-sm">
                    <img v-if="previewData.meta.logo?.url" :src="previewData.meta.logo.url"
                        :alt="previewData.meta.publisher"
                        class="w-16 h-16 object-contain rounded-lg border border-gray-200"
                        @error="$event.target.style.display = 'none'">
                    <div class="flex-1 min-w-0">
                        <h1 class="text-xl font-bold text-gray-900 truncate">{{ previewData.meta.title }}</h1>
                        <div class="mt-1 flex flex-wrap items-center gap-2 text-sm text-gray-500">
                            <span class="inline-flex items-center">
                                <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                    <path
                                        d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                                </svg>
                                {{ previewData.meta.publisher }}
                            </span>
                            <span>•</span>
                            <span class="uppercase">{{ previewData.meta.lang }}</span>
                            <span v-if="previewData.meta.date">•</span>
                            <time v-if="previewData.meta.date" :datetime="previewData.meta.date">
                                {{ formatDate(previewData.meta.date) }}
                            </time>
                        </div>
                    </div>
                </div>

                <!-- Description -->
                <div class="prose prose-sm max-w-none">
                    <p class="text-gray-700">{{ previewData.meta.description }}</p>
                </div>

                <!-- Author Info -->
                <div v-if="previewData.meta.author" class="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                    <div class="flex-shrink-0">
                        <img v-if="previewData.meta.image?.url" :src="previewData.meta.image.url"
                            class="w-12 h-12 rounded-full" :alt="previewData.meta.author">
                        <div v-else class="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                            <span class="text-xl text-gray-500">{{ previewData.meta.author[0] }}</span>
                        </div>
                    </div>
                    <div>
                        <p class="text-sm font-medium text-gray-900">{{ previewData.meta.author }}</p>
                        <p class="text-sm text-gray-500">Auteur</p>
                    </div>
                </div>

                <!-- Additional Meta Info -->
                <div class="grid grid-cols-2 gap-4 text-sm">
                    <div v-if="previewData.meta.url" class="col-span-2">
                        <span class="font-medium text-gray-500">URL: </span>
                        <a :href="previewData.meta.url" target="_blank" rel="noopener noreferrer"
                            class="text-blue-600 hover:underline">
                            {{ previewData.meta.url }}
                        </a>
                    </div>
                    <div v-if="previewData.statusCode">
                        <span class="font-medium text-gray-500">Status: </span>
                        <span :class="previewData.statusCode === 200 ? 'text-green-600' : 'text-orange-600'">
                            {{ previewData.statusCode }}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
