export interface TimelineItem {
  id: number;
  date: string;
  title: string;
  company: string;
  location?: string;
  description: string;
  active?: boolean;
  color?: 'red' | 'cyan' | 'muted';
  icon?: string;
}
