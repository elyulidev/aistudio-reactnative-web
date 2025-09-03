export type Language = 'es' | 'pt';

export interface IconMap {
  [key: string]: React.FC<React.SVGProps<SVGSVGElement>>;
}

export interface ContentPart {
  type: 'heading' | 'paragraph' | 'code' | 'list' | 'alert' | 'subtitle' | 'image' | 'twoColumn' | 'featureCard' | 'callout' | 'divider';
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
