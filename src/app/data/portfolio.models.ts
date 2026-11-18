export interface Project {
  id: string;
  title: string;
  subtitle: string;
  role: string;
  year: string;
  summary: string;
  image: string;
  imageAlt: string;
  tech: string[];
  repoUrl?: string;
  liveUrl?: string;
  featured: boolean;
  highlights?: string[];
}

export interface Job {
  id: string;
  title: string;
  org: string;
  period: string;
  description: string;
  current: boolean;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: string[];
}

export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  email: string;
  availability: string;
  heroTagline: string;
  aboutParagraphs: string[];
  codeSnippet: {
    filename: string;
    language: string;
    code: string;
  };
  socialLinks: {
    github: string;
    linkedin: string;
    email: string;
  };
  cvUrl: string;
}
