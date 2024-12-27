import type { Project } from "@/types/project";

// Images data
export const logosImages = {
  fournisseurNormal: "./img/logos/f-logo-normal.png",
  fournisseur: "./img/logos/f-logo.png",
  colorful: "./img/logos/colorful-logo.png",
};

export const creasImages = {
  affiches: {
    fb: {
      december: {
        "02": "./img/creas/02-affiche.png",
        "03": "./img/creas/03-affiche.png",
        "04": "./img/creas/04-affiche.png",
        "05": "./img/creas/05-affiche.png",
        "06": "./img/creas/06-affiche.png",
        "07": "./img/creas/07-affiche.png",
        "08": "./img/creas/08-affiche.png",
        "09": "./img/creas/09-affiche.png",
        "10": "./img/creas/10-affiche.png",
      },
    },
    lrs: "./img/creas/LRS Affiche.png",
  },
};

// Projects data
export const webProjects: Project[] = [
  {
    id: 1,
    name: "Karriere",
    description:
      "Plateforme de recherche d'emploi avec gestion intuitive des candidatures.",
    image: "./img/projects/karriere.jpg",
    mainCategory: "Web",
    subCategory: "Plateformes",
    link: "https://karriere.cg",
    tags: ["Vue.js", "Laravel", "PostgreSQL"],
    features: [
      "Gestion des profils candidats",
      "Système de matching avancé",
      "Tableau de bord analytique",
    ],
  },
  {
    id: 2,
    name: "Portfolio",
    description: "Portfolio personnel avec gestion de projets dynamique",
    image: "./img/projects/portfolio.jpg",
    mainCategory: "Web",
    subCategory: "Sites",
    link: "https://justany.cg",
    tags: ["Vue.js", "TypeScript", "Tailwind"],
    features: [
      "Design responsive",
      "Animations fluides",
      "Gestion de projets par catégorie",
    ],
  },
  {
    id: 3,
    name: "E-commerce Dashboard",
    description:
      "Interface d'administration pour boutique en ligne et Apps Mobile",
    image: "./img/projects/dashboard.jpg",
    mainCategory: "Web",
    subCategory: "Applications",
    tags: ["React", "Node.js", "MongoDB"],
    features: [
      "Gestion des commandes",
      "Statistiques en temps réel",
      "Interface utilisateur moderne",
    ],
  },
];

export const designProjects: Project[] = [
  // Logos
  {
    id: 4,
    name: "Fournisseur Logo",
    description: "Design du logo et de l'identité visuelle de Fournisseur",
    image: logosImages.fournisseur,
    mainCategory: "Design",
    subCategory: "Logos",
    tools: ["Illustrator", "Photoshop"],
    deliverables: [
      "Logo principal",
      "Variante monochrome",
      "Guide d'utilisation",
    ],
  },
  {
    id: 5,
    name: "Logo Coloré",
    description: "Design d'un logo moderne et coloré",
    image: logosImages.colorful,
    mainCategory: "Design",
    subCategory: "Logos",
    tools: ["Illustrator", "Photoshop"],
    deliverables: [
      "Logo vectoriel",
      "Variations de couleurs",
      "Guide de marque",
    ],
  },
  // Affiches
  {
    id: 6,
    name: "Hadassah Promo - Décembre 24",
    description: "Collection d'affiches promotionnelles pour Facebook",
    image: creasImages.affiches.fb.december["02"],
    mainCategory: "Design",
    subCategory: "Affiches",
    tools: ["Photoshop", "Illustrator"],
    deliverables: [
      "Série de 9 affiches",
      "Formats optimisés pour Facebook",
      "Guide des spécifications",
    ],
    gallery: Object.values(creasImages.affiches.fb.december),
  },
  {
    id: 7,
    name: "LRS Campaign",
    description: "Affiche promotionnelle LRS",
    image: creasImages.affiches.lrs,
    mainCategory: "Design",
    subCategory: "Affiches",
    tools: ["Photoshop", "Illustrator"],
    deliverables: [
      "Affiche haute résolution",
      "Version web",
      "Formats adaptés réseaux sociaux",
    ],
  },
];

export const adsProjects: Project[] = [
  {
    id: 8,
    name: "Hadassah Facebook Ads",
    description:
      "Campagne publicitaire Facebook pour la promotion des articles",
    image: creasImages.affiches.fb.december["02"],
    mainCategory: "Ads",
    subCategory: "Social Media Ads",
    tools: ["Facebook Ads Manager", "Photoshop"],
    deliverables: [
      "Campagne publicitaire Facebook",
      "Budget optimisé",
      "Ciblage précis",
    ],
    metrics: {
      budget: "170,00 $",
      duration: "7 jours",
      results: {
        reach: "28 440",
        engagement: 40511,
        sales: "270,00 $",
      },
    },
  },
];

export const webProjectContent = {
  id: 1,
  name: "Site E-commerce ModeShop",
  slug: "modeshop-ecommerce",
  client: {
    name: "ModeShop Inc",
    industry: "Mode & Retail",
    size: "50-100 employés",
    location: "Paris, France",
    yearFounded: 2015,
    website: "https://justany.cg",
    logo: "./img/logos/colorful-logo.png",
    contact: {
      name: "Jean Dupont",
      role: "Directeur Digital",
      email: "jean.dupont@modeshop.com",
    },
  },
  mainCategory: "Web",
  description:
    "Création d'une plateforme e-commerce complète avec système de gestion des stocks et paiement en ligne",
  image: "/images/projects/modeshop-hero.jpg",
  duration: "4 mois",
  budget: "15 000 €",
  status: "Terminé",
  liveUrl: "https://justany.cg", // Ajoutez l'URL du site live

  stack: {
    frontend: ["Vue.js", "TailwindCSS", "TypeScript"],
    backend: ["Node.js", "Express", "MongoDB"],
    other: ["Stripe", "AWS"],
  },

  context:
    "ModeShop cherchait à transformer sa boutique physique en une expérience en ligne complète.",
  problem:
    "Absence de présence en ligne et perte de clients potentiels pendant la période COVID.",
  solution:
    "Développement d'une plateforme e-commerce sur mesure avec gestion des stocks en temps réel.",

  objectives: [
    {
      title: "Augmentation des ventes",
      description: "Atteindre 100 commandes en ligne par mois",
    },
    {
      title: "Expérience utilisateur",
      description: "Créer une interface intuitive et responsive",
    },
  ],

  actionPlan: [
    {
      title: "Phase 1 - Design",
      description:
        "Création des maquettes et validation du parcours utilisateur",
      tasks: ["Wireframes", "Design UI/UX", "Validation client"],
    },
    {
      title: "Phase 2 - Développement",
      description: "Développement frontend et backend",
      tasks: ["Setup infrastructure", "Développement features", "Tests"],
    },
  ],

  startDate: "2023-01-15",
  endDate: "2023-05-15",

  tools: ["Vue.js", "Node.js", "MongoDB", "Stripe"],
  tags: ["e-commerce", "web", "fullstack"],

  teamMembers: [
    {
      name: "Sophie Martin",
      role: "Chef de Projet",
      avatar: "/images/team/sophie.jpg",
    },
    {
      name: "Thomas Bernard",
      role: "Lead Developer",
      avatar: "/images/team/thomas.jpg",
    },
    {
      name: "Marie Dubois",
      role: "UI/UX Designer",
      avatar: "/images/team/marie.jpg",
    },
  ],

  challenges: [
    {
      title: "Performance Mobile",
      description:
        "Le site initial avait des temps de chargement supérieurs à 5 secondes sur mobile",
      solution:
        "Implémentation du lazy loading, optimisation des images et mise en cache avancée",
    },
    {
      title: "Gestion du Stock",
      description:
        "Synchronisation complexe entre le stock physique et en ligne",
      solution:
        "Développement d'une API temps réel avec webhooks pour la synchronisation",
    },
  ],

  testimonial: {
    content:
      "L'équipe a transformé notre vision en réalité. Notre chiffre d'affaires en ligne a augmenté de 200% en 3 mois.",
    author: "Jean Dupont",
    role: "CEO, ModeShop",
    avatar: "/images/testimonials/jean.jpg",
  },

  keyFeatures: [
    {
      icon: "shopping-cart",
      title: "Panier Intelligent",
      description:
        "Suggestions personnalisées basées sur le comportement utilisateur",
    },
    {
      icon: "mobile-device",
      title: "Application PWA",
      description:
        "Expérience native sur mobile avec fonctionnalités hors ligne",
    },
    {
      icon: "analytics",
      title: "Analytics Avancés",
      description: "Tableaux de bord détaillés pour le suivi des performances",
    },
  ],

  performance: {
    beforeAfter: [
      {
        metric: "Temps de chargement",
        before: "5.2s",
        after: "1.8s",
        improvement: "65%",
      },
      {
        metric: "Taux de conversion",
        before: "1.2%",
        after: "3.5%",
        improvement: "192%",
      },
    ],
    lighthouse: {
      performance: 95,
      accessibility: 98,
      seo: 100,
      bestPractices: 92,
    },
  },

  nextSteps: [
    {
      title: "Application Mobile Native",
      description: "Développement d'applications iOS et Android natives",
      planned: "Q3 2024",
    },
    {
      title: "Intelligence Artificielle",
      description: "Système de recommandation basé sur l'IA",
      planned: "Q4 2024",
    },
  ],

  metrics: {
    roi: "350%",
    timeToMarket: "16 sem.",
    userBase: "15 000+ Us",
    monthlyRevenue: "45,000 €",
    conversionRate: "3.5%",
    customerSatisfaction: "4.8/5",
    performanceStats: {
      pageLoadTime: "1.8s",
      uptime: "99.99%",
      errorRate: "0.1%",
      mobileUsage: "65%",
    },
  },

  technicalDetails: {
    architecture: "Microservices",
    hosting: "AWS",
    security: {
      authentication: "OAuth 2.0 + JWT",
      encryption: "AES-256",
      compliance: ["GDPR", "PCI DSS"],
    },
    testing: {
      coverage: "92%",
      tools: ["Jest", "Cypress", "Lighthouse"],
      types: ["Unit", "Integration", "E2E"],
    },
    monitoring: {
      tools: ["New Relic", "Sentry", "DataDog"],
      metrics: ["Uptime", "Error rates", "User sessions"],
    },
  },

  developmentProcess: {
    methodology: "Agile Scrum",
    sprintDuration: "2 semaines",
    totalSprints: 8,
    keyMilestones: [
      {
        name: "Discovery & Planning",
        duration: "2 semaines",
        deliverables: ["Specifications", "Wireframes", "Tech Stack Selection"],
        status: "done",
      },
      {
        name: "MVP Development",
        duration: "6 semaines",
        deliverables: ["Core Features", "Basic UI", "Payment Integration"],
        status: "process",
      },
      {
        name: "Testing & Optimization",
        duration: "4 semaines",
        deliverables: [
          "QA Reports",
          "Performance Optimization",
          "Security Audit",
        ],
        status: "planned",
      },
      {
        name: "Launch & Support",
        duration: "4 semaines",
        deliverables: ["Deployment", "Documentation", "Training"],
        status: "proposal",
      },
    ],
  },

  businessImpact: {
    beforeLaunch: {
      revenue: "15,000 €/mois",
      customers: 500,
      marketShare: "2%",
    },
    afterLaunch: {
      revenue: "45,000 €/mois",
      customers: 1500,
      marketShare: "6%",
    },
    improvements: [
      {
        metric: "Satisfaction client",
        before: "3.2/5",
        after: "4.8/5",
        impact: "+50%",
      },
      {
        metric: "Temps de traitement des commandes",
        before: "48h",
        after: "4h",
        impact: "-92%",
      },
    ],
  },

  maintenance: {
    sla: {
      uptime: "99.99%",
      responseTime: "< 1h",
      resolutionTime: "< 24h",
    },
    updates: {
      frequency: "Bi-mensuel",
      type: ["Sécurité", "Features", "Performance"],
    },
    support: {
      channels: ["Email", "Phone", "Chat"],
      availability: "24/7",
      languages: ["Français", "Anglais"],
    },
  },

  resources: {
    documentation: {
      technical: "/docs/technical-spec.pdf",
      user: "/docs/user-manual.pdf",
      api: "/docs/api-reference.pdf",
    },
    training: {
      materials: "/training/modules",
      videos: "/training/videos",
      workshops: ["Admin", "User", "Developer"],
    },
    assets: {
      logos: "/assets/logos",
      screenshots: "/assets/screenshots",
      presentations: "/assets/presentations",
    },
  },
};

// Export all projects combined
export const allProjects: Project[] = [
  ...webProjects,
  ...designProjects,
  ...adsProjects,
];
