// Type definitions for the application

export interface Service {
    id: string;
    title: string;
    description: string;
    icon: string;
    features: string[];
    href: string;
  }
  
  export interface BlogArticle {
    id: number;
    title: string;
    excerpt: string;
    category: string;
    author: string;
    date: string;
    readTime: string;
    tags: string[];
  }
  