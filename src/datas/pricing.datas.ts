export type PricingFeature = {
  name: string;
  included: boolean;
  details?: string[];
}

export type PricingPlan = {
  id: number;
  name: string;
  price: string;
  description: string;
  features: PricingFeature[];
  popular?: boolean;
}

export type ServiceRate = {
  id: number;
  service: string;
  startingPrice: string;
  unit: string;
  description: string;
  features?: string[];
}

export const serviceRates: ServiceRate[] = [
  {
    id: 1,
    service: 'Design Graphique',
    startingPrice: '150 000 FCFA',
    unit: 'par projet',
    description: 'Logo, charte graphique, supports marketing',
    features: [
      'Logo vectoriel & déclinaisons',
      'Charte graphique complète',
      'Supports marketing de base',
      'Fichiers sources inclus'
    ]
  },
  {
    id: 2,
    service: 'Développement Web',
    startingPrice: '450 000 FCFA',
    unit: 'par site',
    description: 'Sites vitrines, e-commerce, applications web',
    features: [
      'Design responsive moderne',
      'Optimisation SEO de base',
      'Hébergement première année',
      'Formation utilisation'
    ]
  },
  {
    id: 3,
    service: 'Applications Mobile',
    startingPrice: '850 000 FCFA',
    unit: 'par app',
    description: 'Applications iOS et Android',
    features: [
      'Design UI/UX natif',
      'Publication sur les stores',
      'Backend & API inclus',
      'Support 6 mois'
    ]
  },
  {
    id: 4,
    service: 'Marketing Digital',
    startingPrice: '250 000 FCFA',
    unit: 'par mois',
    description: 'SEO, publicité, réseaux sociaux',
    features: [
      'Stratégie personnalisée',
      'Gestion des réseaux sociaux',
      'Rapports mensuels',
      'Support dédié'
    ]
  },
  {
    id: 5,
    service: 'Solutions IA',
    startingPrice: '750 000 FCFA',
    unit: 'par projet',
    description: 'Chatbots, automatisation, analyse de données',
    features: [
      'Analyse des besoins',
      'Développement sur mesure',
      'Intégration & Tests',
      'Documentation complète'
    ]
  },
  {
    id: 6,
    service: 'Formation',
    startingPrice: '15 000 FCFA',
    unit: 'par semaine',
    description: 'Formation personnalisée en développement',
    features: [
      'Support de cours inclus',
      'Exercices pratiques',
      'Suivi personnalisé',
      'Attestation de formation'
    ]
  }
]

export const pricingPlans: PricingPlan[] = [
  {
    id: 1,
    name: 'Starter',
    price: '650 000 FCFA',
    description: 'Pack essentiel pour lancer votre présence digitale',
    features: [
      { 
        name: 'Design Graphique', 
        included: true,
        details: [
          'Logo & Identité visuelle',
          '2 Cartes de visite',
          'En-tête de lettre'
        ]
      },
      { 
        name: 'Site Web', 
        included: true,
        details: [
          'Site vitrine responsive',
          'Jusqu\'à 5 pages',
          'Formulaire de contact'
        ]
      },
      { 
        name: 'Marketing Digital', 
        included: true,
        details: [
          'Configuration Google Business',
          'SEO de base',
          'Intégration réseaux sociaux'
        ]
      },
      { name: 'Application Mobile', included: false },
      { name: 'Plateforme de Gestion', included: false },
      { name: 'Solutions IA', included: false }
    ]
  },
  {
    id: 2,
    name: 'Business',
    price: '1 650 000 FCFA',
    description: 'Solution complète pour une présence digitale professionnelle',
    popular: true,
    features: [
      { 
        name: 'Design Graphique', 
        included: true,
        details: [
          'Pack identité visuelle complet',
          'Supports marketing print & web',
          'Templates réseaux sociaux'
        ]
      },
      { 
        name: 'Site Web', 
        included: true,
        details: [
          'Site web dynamique',
          'Blog intégré',
          'Espace administrateur'
        ]
      },
      { 
        name: 'Marketing Digital', 
        included: true,
        details: [
          'Stratégie marketing complète',
          'SEO avancé',
          'Campagnes publicitaires'
        ]
      },
      { 
        name: 'Plateforme de Gestion', 
        included: true,
        details: [
          'CRM de base',
          'Gestion des clients',
          'Tableau de bord'
        ]
      },
      { name: 'Application Mobile', included: false },
      { name: 'Solutions IA', included: false }
    ]
  },
  {
    id: 3,
    name: 'Enterprise',
    price: 'Sur Mesure',
    description: 'Transformation digitale complète de votre entreprise',
    features: [
      { 
        name: 'Design Graphique', 
        included: true,
        details: [
          'Identité visuelle premium',
          'Tous supports marketing',
          'Motion design'
        ]
      },
      { 
        name: 'Site Web', 
        included: true,
        details: [
          'Application web sur mesure',
          'Fonctionnalités avancées',
          'Multi-langues'
        ]
      },
      { 
        name: 'Marketing Digital', 
        included: true,
        details: [
          'Stratégie omnicanale',
          'Marketing automation',
          'Analytics avancés'
        ]
      },
      { 
        name: 'Plateforme de Gestion', 
        included: true,
        details: [
          'ERP personnalisé',
          'Intégrations sur mesure',
          'Rapports avancés'
        ]
      },
      { 
        name: 'Application Mobile', 
        included: true,
        details: [
          'App iOS & Android',
          'Fonctionnalités personnalisées',
          'Backend robuste'
        ]
      },
      { 
        name: 'Solutions IA', 
        included: true,
        details: [
          'Chatbot personnalisé',
          'Automatisation des processus',
          'Analyse prédictive'
        ]
      }
    ]
  }
]

export const consultationOptions = {
  discovery: {
    duration: '15 min',
    price: 'Gratuit',
    description: 'Découverte de votre projet et de vos besoins'
  },
  consultation: {
    duration: '1 heure',
    price: '10 000 FCFA',
    description: 'Consultation approfondie avec -20% sur votre projet',
    discount: '20% de réduction sur la facture finale'
  }
}
