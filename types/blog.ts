import { StringToBoolean } from "class-variance-authority/types";

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  readTime: string;
  language: string;
  category: string;
  tags: string[];
  content: string;
  excerpt: string;
  year: number;
}