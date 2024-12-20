import type { Project } from '@/types/project'

// Images data
export const logosImages = {
  fournisseurNormal: './img/logos/F logo 512 x 512 px normal.png',
  fournisseur: './img/logos/F logo 512 x 512 px.png',
  colorful: './img/logos/colorful - logo.png'
}

export const creasImages = {
  affiches: {
    fb: {
      december: {
        '02': './img/creas/02-affiche.png',
        '03': './img/creas/03-affiche.png',
        '04': './img/creas/04-affiche.png',
        '05': './img/creas/05-affiche.png',
        '06': './img/creas/06-affiche.png',
        '07': './img/creas/07-affiche.png',
        '08': './img/creas/08-affiche.png',
        '09': './img/creas/09-affiche.png',
        '10': './img/creas/10-affiche.png'
      }
    },
    lrs: './img/creas/LRS Affiche.png'
  }
}

// Projects data
export const webProjects: Project[] = [
  {
    id: 1,
    name: 'Karriere',
    description: 'Plateforme de recherche d\'emploi avec gestion intuitive des candidatures.',
    image: './img/projects/karriere.jpg',
    mainCategory: 'Web',
    subCategory: 'Plateformes',
    link: 'https://karriere.cg',
    tags: ['Vue.js', 'Laravel', 'PostgreSQL'],
    features: [
      'Gestion des profils candidats',
      'Système de matching avancé',
      'Tableau de bord analytique'
    ]
  },
  {
    id: 2,
    name: 'Portfolio',
    description: 'Portfolio personnel avec gestion de projets dynamique',
    image: './img/projects/portfolio.jpg',
    mainCategory: 'Web',
    subCategory: 'Sites',
    link: 'https://justany.cg',
    tags: ['Vue.js', 'TypeScript', 'Tailwind'],
    features: [
      'Design responsive',
      'Animations fluides',
      'Gestion de projets par catégorie'
    ]
  },
  {
    id: 3,
    name: 'E-commerce Dashboard',
    description: 'Interface d\'administration pour boutique en ligne et Apps Mobile',
    image: './img/projects/dashboard.jpg',
    mainCategory: 'Web',
    subCategory: 'Applications',
    tags: ['React', 'Node.js', 'MongoDB'],
    features: [
      'Gestion des commandes',
      'Statistiques en temps réel',
      'Interface utilisateur moderne'
    ]
  }
]

export const designProjects: Project[] = [
  // Logos
  {
    id: 4,
    name: 'Fournisseur Logo',
    description: 'Design du logo et de l\'identité visuelle de Fournisseur',
    image: logosImages.fournisseur,
    mainCategory: 'Design',
    subCategory: 'Logos',
    tools: ['Illustrator', 'Photoshop'],
    deliverables: [
      'Logo principal',
      'Variante monochrome',
      'Guide d\'utilisation'
    ]
  },
  {
    id: 5,
    name: 'Logo Coloré',
    description: 'Design d\'un logo moderne et coloré',
    image: logosImages.colorful,
    mainCategory: 'Design',
    subCategory: 'Logos',
    tools: ['Illustrator', 'Photoshop'],
    deliverables: [
      'Logo vectoriel',
      'Variations de couleurs',
      'Guide de marque'
    ]
  },
  // Affiches
  {
    id: 6,
    name: 'Hadassah Promo - Décembre 24',
    description: 'Collection d\'affiches promotionnelles pour Facebook',
    image: creasImages.affiches.fb.december['02'],
    mainCategory: 'Design',
    subCategory: 'Affiches',
    tools: ['Photoshop', 'Illustrator'],
    deliverables: [
      'Série de 9 affiches',
      'Formats optimisés pour Facebook',
      'Guide des spécifications'
    ],
    gallery: Object.values(creasImages.affiches.fb.december)
  },
  {
    id: 7,
    name: 'LRS Campaign',
    description: 'Affiche promotionnelle LRS',
    image: creasImages.affiches.lrs,
    mainCategory: 'Design',
    subCategory: 'Affiches',
    tools: ['Photoshop', 'Illustrator'],
    deliverables: [
      'Affiche haute résolution',
      'Version web',
      'Formats adaptés réseaux sociaux'
    ]
  }
]

export const adsProjects: Project[] = [
  {
    id: 8,
    name: 'Hadassah Facebook Ads',
    description: 'Campagne publicitaire Facebook pour la promotion des articles',
    image: creasImages.affiches.fb.december['02'],
    mainCategory: 'Ads',
    subCategory: 'Social Media Ads',
    tools: ['Facebook Ads Manager', 'Photoshop'],
    deliverables: [
      'Campagne publicitaire Facebook',
      'Budget optimisé',
      'Ciblage précis'
    ],
    metrics: {
      budget: '170,00 $',
      duration: '7 jours',
      results: {
        reach: '28 440',
        engagement: 40511,
        sales: '270,00 $'
      }
    }
  }
]

// Export all projects combined
export const allProjects: Project[] = [
  ...webProjects,
  ...designProjects,
  ...adsProjects
]