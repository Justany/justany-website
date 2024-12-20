export type Service = {
  id: number;
  title: string;
  description: string;
  icon: string;
  features: string[];
  color: string;
}

export const services: Service[] = [
  {
    id: 1,
    title: 'Développement Web',
    description: 'Applications web modernes et performantes',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 10h-4v4h4v-4z"></path><path d="M22 6v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg>`,
    features: [
      'Applications Web Progressive',
      'Sites Vitrines & E-commerce',
      'Interfaces d\'Administration',
      'Optimisation des Performances',
      'Responsive Design'
    ],
    color: 'blue'
  },
  {
    id: 2,
    title: 'Développement Mobile',
    description: 'Applications mobiles natives et cross-platform',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12" y2="18"></line></svg>`,
    features: [
      'Applications iOS & Android',
      'Applications Cross-Platform',
      'UI/UX Mobile Native',
      'Intégration API REST',
      'Publication sur les Stores'
    ],
    color: 'green'
  },
  {
    id: 3,
    title: 'Design Graphique',
    description: 'Identité visuelle et supports de communication',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>`,
    features: [
      'Création de Logo',
      'Charte Graphique',
      'Supports Print',
      'Design d\'Interface',
      'Illustrations'
    ],
    color: 'purple'
  },
  {
    id: 4,
    title: 'Marketing Digital',
    description: 'Stratégies publicitaires et acquisition',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>`,
    features: [
      'Publicité Social Media',
      'Google Ads',
      'Analyse de Performance',
      'Stratégie de Contenu',
      'Optimisation SEO'
    ],
    color: 'orange'
  },
  {
    id: 5,
    title: 'Formation',
    description: 'Accompagnement et montée en compétences',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>`,
    features: [
      'Formation Développement',
      'Ateliers Design',
      'Marketing Digital',
      'Accompagnement Projet',
      'Support Technique'
    ],
    color: 'yellow'
  },
  {
    id: 6,
    title: 'Intelligence Artificielle',
    description: 'Solutions IA innovantes et sur mesure',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-1a7 7 0 0 1-7 7h-2a7 7 0 0 1-7-7H3a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z"></path><circle cx="12" cy="14" r="3"></circle></svg>`,
    features: [
      'Chatbots & Assistants IA',
      'Analyse de Données',
      'Machine Learning',
      'Vision par Ordinateur',
      'Automatisation IA'
    ],
    color: 'pink'
  }
]
