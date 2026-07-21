export interface ProjectHeader {
  label: string;
}

export interface ProjectCard {
  id: number;
  header: string;
  label: string;
  img: string;
  text_short:string;
  description: string;
  tech: string[];
  demo: boolean;
}
