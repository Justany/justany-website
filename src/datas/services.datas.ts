export type Service = {
  id: number;
  title: string;
  description: string;
  icon: string;
  features: string[];
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
    ]
  },
  {
    id: 2,
    title: 'Design Graphique',
    description: 'Identité visuelle et supports de communication',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>`,
    features: [
      'Création de Logo',
      'Charte Graphique',
      'Supports Print',
      'Design d\'Interface',
      'Illustrations'
    ]
  },
  {
    id: 3,
    title: 'Marketing Digital',
    description: 'Stratégies publicitaires et acquisition',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>`,
    features: [
      'Publicité Social Media',
      'Google Ads',
      'Analyse de Performance',
      'Stratégie de Contenu',
      'Optimisation SEO'
    ]
  }
]
