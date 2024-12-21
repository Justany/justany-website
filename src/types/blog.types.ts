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
  readingTime: string;
  slug: string;
  image?: string;
  author: {
    name: string;
    avatar: string;
  };
  category: string;
  color: 'orange' | 'zinc' | 'blue';
  gradient?: string;
  icon?: string;
  tags: string[];
  content: ContentBlock[];
  relatedArticles: number[];
}

export interface Articles {
  [key: string]: Article;
}
