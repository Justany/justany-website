import { Articles } from '@/types/blog.types'

export const articles: Articles = {
  '1': {
    id: 1,
    image: '',
    title: 'Les meilleures pratiques pour le développement Vue.js en 2024',
    slug: 'les-meilleures-pratiques-pour-le-dev-vuejs-en-2024',
    description: 'Un guide complet des meilleures pratiques actuelles pour développer des applications Vue.js modernes, performantes et maintenables.',
    date: '20 Dec 2024',
    readingTime: '12 min',
    author: {
      name: 'Jean Dupont',
      avatar: '/images/avatars/jean-dupont.jpg'
    },
    category: 'Frontend',
    color: 'orange',
    gradient: 'from-orange-500/20 to-orange-500/5',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />',
    tags: ['Vue.js', 'JavaScript', 'TypeScript', 'Performance'],
    content: [
      {
        type: 'paragraph',
        content: 'Le développement Vue.js a considérablement évolué depuis ses débuts. Avec l\'arrivée de Vue 3 et de la Composition API, de nouvelles pratiques et patterns ont émergé pour nous aider à construire des applications plus robustes et maintenables. Dans cet article, nous allons explorer les meilleures pratiques actuelles et voir comment les appliquer dans vos projets.'
      },
      {
        type: 'heading',
        content: 'TypeScript et Vue 3'
      },
      {
        type: 'paragraph',
        content: 'L\'utilisation de TypeScript avec Vue 3 est devenue un standard de l\'industrie. Non seulement il améliore la qualité du code en ajoutant un système de types fort, mais il offre également une meilleure expérience de développement grâce à l\'autocomplétion et la détection d\'erreurs précoce.'
      },
      {
        type: 'code',
        language: 'typescript',
        content: `interface User {
  id: number
  name: string
  email: string
  role: 'admin' | 'user'
}

// Composition API avec TypeScript
const useUsers = () => {
  const users = ref<User[]>([])
  const loading = ref(false)
  const error = ref<Error | null>(null)

  const fetchUsers = async () => {
    loading.value = true
    try {
      const response = await api.get<User[]>('/users')
      users.value = response.data
    } catch (e) {
      error.value = e as Error
    } finally {
      loading.value = false
    }
  }

  return {
    users,
    loading,
    error,
    fetchUsers
  }
}`
      },
      {
        type: 'heading',
        content: 'Organisation du code avec la Composition API'
      },
      {
        type: 'paragraph',
        content: 'La Composition API nous permet d\'organiser notre code de manière plus logique, en regroupant les fonctionnalités liées plutôt que de les séparer par options. Cette approche rend le code plus facile à comprendre, à maintenir et à réutiliser.'
      },
      {
        type: 'list',
        content: 'Avantages de la Composition API',
        items: [
          'Meilleure réutilisation du code avec les composables',
          'Organisation plus logique du code par fonctionnalité',
          'Typage TypeScript plus naturel',
          'Meilleure performance avec le tree-shaking'
        ]
      },
      {
        type: 'code',
        language: 'vue',
        content: `<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { useUsers } from '@/composables/users'
import { useNotifications } from '@/composables/notifications'

// Composition des fonctionnalités
const { users, loading, error, fetchUsers } = useUsers()
const { notify } = useNotifications()

// Gestion des effets de bord
onMounted(async () => {
  await fetchUsers()
})

// Réactions aux changements
watch(error, (newError) => {
  if (newError) {
    notify({
      type: 'error',
      message: 'Erreur lors du chargement des utilisateurs'
    })
  }
})
</script>

<template>
  <div class="users-list">
    <loading-spinner v-if="loading" />
    <error-message v-else-if="error" :message="error.message" />
    <user-table v-else :users="users" />
  </div>
</template>`
      },
      {
        type: 'heading',
        content: 'Performance et optimisation'
      },
      {
        type: 'paragraph',
        content: 'La performance est cruciale pour offrir une bonne expérience utilisateur. Vue 3 apporte de nombreuses améliorations de performance par défaut, mais il existe plusieurs techniques que nous pouvons appliquer pour optimiser davantage nos applications.'
      },
      {
        type: 'list',
        content: 'Techniques d\'optimisation',
        items: [
          'Utilisation de Suspense pour le chargement asynchrone',
          'Lazy loading des composants et des routes',
          'Mise en cache des données avec Pinia',
          'Virtualisation des listes longues'
        ]
      },
      {
        type: 'code',
        language: 'typescript',
        content: `// Lazy loading d'un composant
const UserDashboard = defineAsyncComponent(() =>
  import('./components/UserDashboard.vue')
)

// Store Pinia avec mise en cache
export const useUserStore = defineStore('users', {
  state: () => ({
    users: [],
    cache: new Map()
  }),
  actions: {
    async fetchUser(id: number) {
      if (this.cache.has(id)) {
        return this.cache.get(id)
      }
      
      const user = await api.getUser(id)
      this.cache.set(id, user)
      return user
    }
  }
})`
      },
      {
        type: 'quote',
        content: 'La performance n\'est pas une fonctionnalité, c\'est une exigence fondamentale pour toute application moderne.',
        author: 'Evan You, créateur de Vue.js'
      },
      {
        type: 'heading',
        content: 'Tests et qualité du code'
      },
      {
        type: 'paragraph',
        content: 'Les tests sont essentiels pour maintenir la qualité du code et prévenir les régressions. Vue 3 et son écosystème offrent d\'excellents outils pour tester nos applications de manière efficace.'
      },
      {
        type: 'code',
        language: 'typescript',
        content: `import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import UserList from './UserList.vue'

describe('UserList', () => {
  it('affiche la liste des utilisateurs', async () => {
    const wrapper = mount(UserList, {
      props: {
        users: [
          { id: 1, name: 'Alice' },
          { id: 2, name: 'Bob' }
        ]
      }
    })

    expect(wrapper.findAll('.user-item')).toHaveLength(2)
    expect(wrapper.text()).toContain('Alice')
    expect(wrapper.text()).toContain('Bob')
  })

  it('émet un événement lors de la sélection', async () => {
    const wrapper = mount(UserList)
    await wrapper.find('.user-item').trigger('click')
    expect(wrapper.emitted('select')).toBeTruthy()
  })
})`
      }
    ],
    relatedArticles: [2, 3]
  },
  '2': {
    id: 2,
    image: '',
    slug: 'architecture-modulaire-avec-les-composables-vue',
    title: 'Architecture modulaire avec les Composables Vue',
    description: 'Découvrez comment créer une architecture modulaire et maintenable en utilisant les composables Vue et les dernières fonctionnalités de l\'écosystème Vue.',
    date: '19 Dec 2024',
    readingTime: '15 min',
    author: {
      name: 'Marie Martin',
      avatar: '/images/avatars/marie-martin.jpg'
    },
    category: 'Architecture',
    color: 'blue',
    gradient: 'from-blue-500/20 to-blue-500/5',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />',
    tags: ['Vue.js', 'Composables', 'Architecture', 'TypeScript'],
    content: [
      {
        type: 'paragraph',
        content: 'Les composables représentent une évolution majeure dans la façon dont nous structurons nos applications Vue. Ils nous permettent de créer des abstractions réutilisables et de séparer clairement les responsabilitités dans notre code.'
      },
      {
        type: 'heading',
        content: 'Anatomie d\'un composable'
      },
      {
        type: 'code',
        language: 'typescript',
        content: `import { ref, computed, watch } from 'vue'
import type { Ref } from 'vue'

interface UseCounter {
  count: Ref<number>
  double: Ref<number>
  increment: () => void
  decrement: () => void
}

export function useCounter(initial = 0): UseCounter {
  const count = ref(initial)
  
  const double = computed(() => count.value * 2)
  
  watch(count, (newValue) => {
    console.log(\`Counter changed to: \${newValue}\`)
  })
  
  function increment() {
    count.value++
  }
  
  function decrement() {
    count.value--
  }
  
  return {
    count,
    double,
    increment,
    decrement
  }
}`
      }
    ],
    relatedArticles: [1, 3]
  },
  '3': {
    id: 3,
    image: '',
    title: 'Optimisation des performances Vue.js',
    slug: 'optimisation-des-performances-vuejs',
    description: 'Guide approfondi sur l\'optimisation des performances dans les applications Vue.js, de la compilation à l\'exécution.',
    date: '18 Dec 2024',
    readingTime: '18 min',
    author: {
      name: 'Luc Bernard',
      avatar: '/images/avatars/luc-bernard.jpg'
    },
    category: 'Performance',
    color: 'zinc',
    gradient: 'from-zinc-500/20 to-zinc-500/5',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />',
    tags: ['Performance', 'Optimisation', 'Vue.js', 'DevTools'],
    content: [
      {
        type: 'paragraph',
        content: 'La performance est un aspect crucial du développement web moderne. Dans cet article, nous explorerons les techniques avancées d\'optimisation pour les applications Vue.js.'
      }
    ],
    relatedArticles: [1, 2]
  }
}
