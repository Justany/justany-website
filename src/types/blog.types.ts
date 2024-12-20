export interface ContentBlock {
  type: 'paragraph' | 'heading' | 'list' | 'quote' | 'code' | 'image';
  content: string;
  language?: string;
  caption?: string;
  author?: string;
  items?: string[];
}

export interface Article {
  id: number;
  title: string;
  description: string;
  date: string;
  readTime?: string;
  author: string;
  category: string;
  color: 'orange' | 'zinc' | 'blue';
  gradient?: string;
  icon?: string;
  tags: string[];
  content: ContentBlock[];
  relatedArticles: number[];
  image?: string;
}

export interface Articles {
  [key: string]: Article;
}
