export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  images: string[];
  technologies: string[];
  github: string;
  demo: string;
  featured: boolean;
  publishedAt: Date;
  category?: string;
  status?: "completed" | "in-progress" | "archived" | "abandoned";
}
