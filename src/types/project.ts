export interface ProjectMetrics {
  budget?: string;
  duration?: string;
  results?: {
    sales?: string;
    reach?: string;
    engagement?: number;
  };
}

export interface Project {
  id: number;
  name: string;
  slug?: string;
  description: string;
  image?: string;
  gallery?: string[];
  mainCategory: "Web" | "Design" | "Ads";
  subCategory: string;
  link?: string;
  platform?: string;
  tags?: string[];
  features?: string[];
  tools?: string[];
  deliverables?: string[];
  metrics?: ProjectMetrics;
  budget?: string;
  duration?: string;
  status?: string;
  stack?: {
    frontend?: string[];
    backend?: string[];
    other?: string[];
  };
  problem?: string;
  solution?: string;
  actionPlan?: {
    title: string;
    description: string;
    tasks?: string[];
  }[];
  inspirations?: {
    title: string;
    description: string;
    image?: string;
    url?: string;
  }[];
}
