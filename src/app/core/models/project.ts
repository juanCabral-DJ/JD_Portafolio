export interface ProjectHeader {
  label: string;
}

export interface ProjectFeature {
  icon: string;
  title: string;
  desc: string;
}

export interface ProjectHighlight {
  label: string;
  value: string;
}

export interface ProjectCard {
  id: number;
  header: string;
  label: string;
  subtitle?: string;
  img: string;
  text_short: string;
  description: string;
  tech: string[];
  demo: boolean;
  githubUrl?: string;
  liveUrl?: string;
  category?: string;
  role?: string;
  date?: string;
  features?: ProjectFeature[];
  highlights?: ProjectHighlight[];
  architecture?: string[];
  codeSnippet?: {
    filename: string;
    language: string;
    code: string;
  };
}

