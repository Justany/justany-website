export interface Project {
  id: number;
  slug: string;
  name: string;
  client: {
    name: string;
    industry: string;
    logo?: string;
  };
  mainCategory: "Web" | "Design" | "Ads";
  description: string;
  image: string;
  duration: string;
  budget: string;
  status: "En cours" | "Terminé" | "En pause";

  // Détails techniques
  stack?: {
    frontend?: string[];
    backend?: string[];
    other?: string[];
  };

  // Contexte du projet
  context?: string;
  problem?: string;
  solution?: string;

  // Objectifs et livrables
  objectives?: Array<{
    title: string;
    description: string;
  }>;
  deliverables?: string[];

  // Plan d'action
  actionPlan?: Array<{
    title: string;
    description: string;
    tasks?: string[];
  }>;

  // Résultats et métriques
  metrics?: {
    budget?: string;
    duration?: string;
    results?: {
      reach?: string;
      engagement?: string;
      sales?: string;
      customMetrics?: Array<{
        label: string;
        value: string;
      }>;
    };
  };

  // Médias
  gallery?: string[];
  videos?: string[];

  // Liens externes
  liveUrl?: string;
  githubUrl?: string;

  // Dates importantes
  startDate: string;
  endDate?: string;

  // Mots-clés et technologies
  tools?: string[];
  tags?: string[];

  // Nouveaux champs
  teamMembers?: Array<{
    name: string;
    role: string;
    avatar?: string;
  }>;

  challenges?: Array<{
    title: string;
    description: string;
    solution: string;
  }>;

  testimonial?: {
    content: string;
    author: string;
    role: string;
    avatar?: string;
  };

  keyFeatures?: Array<{
    icon: string;
    title: string;
    description: string;
  }>;

  performance?: {
    beforeAfter?: Array<{
      metric: string;
      before: string;
      after: string;
      improvement: string;
    }>;
    lighthouse?: {
      performance: number;
      accessibility: number;
      seo: number;
      bestPractices: number;
    };
  };

  nextSteps?: Array<{
    title: string;
    description: string;
    planned: string;
  }>;
}
