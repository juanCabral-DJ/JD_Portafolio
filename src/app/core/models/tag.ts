// core/models/stack-category.model.ts
export interface TechTag {
  prefix: string;
  label: string;
  highlight?: boolean;
}

export interface StackCategory {
  icon: string;
  title: string;
  emphasized?: boolean;
  tags: TechTag[];
}
