export type Language = 'es' | 'pt';

export interface IconMap {
  [key: string]: React.FC<React.SVGProps<SVGSVGElement>>;
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number; // index of the correct option
}

export interface FileItem {
  id: string;
  name: string;
  description: string[];
}

export interface ContentPart {
  type: 'heading' | 'paragraph' | 'code' | 'list' | 'alert' | 'subtitle' | 'image' | 'twoColumn' | 'featureCard' | 'callout' | 'divider' | 'quiz' | 'fileStructure';
  text?: string;
  code?: string;
  language?: string;
  items?: (string | { text: string; subItems: string[] })[];
  alertType?: 'info' | 'warning' | 'tip';
  // New properties for richer content
  imageUrl?: string;
  caption?: string;
  columns?: {
    title: string;
    content: string[];
  }[];
  featureItems?: {
    icon: string;
    title: string;
    text: string;
  }[];
  questions?: QuizQuestion[];
  files?: FileItem[];
}

export interface CurriculumTopic {
  id: string;
  title: string;
  content: ContentPart[];
}

export interface CurriculumModule {
    id: string;
    title: string;
    overview: CurriculumTopic;
    conferences: CurriculumTopic[];
}

export interface ChatMessage {
    sender: 'user' | 'ai';
    text: string;
}