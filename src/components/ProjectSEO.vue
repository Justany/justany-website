<script setup lang="ts">
import { computed } from 'vue'
import { getMicrolinkScreenshotUrl } from '@/services/microlink.service'

const props = defineProps<{
    url: string
    title: string
    description: string
}>()

const screenshotUrl = computed(() =>
    getMicrolinkScreenshotUrl(props.url, {
        type: 'jpeg',
        quality: 85,
        width: 1200,
        height: 630
    })
)
</script>

<template>

    <Head>
        <title>{{ title }}</title>
        <meta name="description" :content="description" />

        <!-- Open Graph / Facebook -->
        <meta property="og:title" :content="title" />
        <meta property="og:description" :content="description" />
        <meta property="og:image" :content="screenshotUrl" />

        <!-- Twitter -->
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" :content="title" />
        <meta name="twitter:description" :content="description" />
        <meta name="twitter:image" :content="screenshotUrl" />
    </Head>
</template>
