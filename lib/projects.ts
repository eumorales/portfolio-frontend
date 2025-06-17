import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "portfolio",
    title: "Portfolio v3",
    description:
      "This is my personal portfolio, where I showcase most of my projects.",
    longDescription:
      "A modern, responsive portfolio built with Next.js and React. Features a clean design, dark mode support, blog system, and project showcase. Built with performance and accessibility in mind.",
    images: ["/assets/previews/portfolio-web.png"],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
    ],
    github: "https://github.com/eumorales/portfolio-frontend",
    demo: "https://gilbertomorales.com",
    featured: false,
    publishedAt: new Date("2023-09-01"),
    category: "Web Development",
    status: "in-progress",
  },
  {
    id: "dog",
    title: "Dog",
    description: "A web app for random dog images. Made with dog.ceo/api",
    longDescription:
      "A fun and simple web application that displays random dog images using the Dog CEO API. Features a clean interface with the ability to fetch new random images and filter by breed.",
    images: ["/assets/previews/dog-web.png"],
    technologies: ["HTML", "CSS", "JavaScript", "Dog API"],
    github: "https://github.com/eumorales/dog",
    demo: "https://cachorro.gilbertomorales.com",
    featured: false,
    publishedAt: new Date("2023-10-24"),
    category: "Fun Projects",
    status: "completed",
  },
  {
    id: "aacuf",
    title: "AACUF",
    description: "Linktree for Computer Athletic Association of UFN.",
    longDescription:
      "A custom linktree-style website for the Computer Athletic Association of UFN. Features social media links, event announcements, and team information in a clean, mobile-friendly design.",
    images: ["/assets/previews/aacuf-web.png"],
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/eumorales/aacuf",
    demo: "https://aacuf.com",
    featured: false,
    publishedAt: new Date("2024-06-20"),
    category: "Web Development",
    status: "completed",
  },
  {
    id: "removedor-de-fundo",
    title: "Removedor de Fundo",
    description:
      "A web app for removing backgrounds from images using the RemoveBG API.",
    longDescription:
      "An intuitive web application that removes backgrounds from images using the RemoveBG API. Features drag-and-drop upload, preview functionality, and high-quality background removal for various image formats.",
    images: ["/assets/previews/removedor-de-fundo-web.png"],
    technologies: ["React", "Next.js", "RemoveBG API", "TypeScript"],
    github: "https://github.com/eumorales/removedor-de-fundo",
    demo: "https://rf.gilbertomorales.com",
    featured: false,
    publishedAt: new Date("2025-05-16"),
    category: "Utility Tools",
    status: "completed",
  },
  {
    id: "quadro-tatico",
    title: "Quadro Tático",
    description:
      "A tactical board web app for planning and visualizing volleyball plays.",
    longDescription:
      "A comprehensive tactical board application designed for volleyball coaches and players. Features interactive player positioning, play drawing tools, save/load functionality, and team management capabilities.",
    images: ["/assets/previews/quadro-tatico-web.png"],
    technologies: ["React", "Next.js", "Canvas API", "TypeScript"],
    github: "https://github.com/eumorales/quadro-tatico",
    demo: "https://volei.gilbertomorales.com",
    featured: false,
    publishedAt: new Date("2025-05-21"),
    category: "Sports Tech",
    status: "completed",
  },
  {
    id: "planejamento-aacuf",
    title: "Planejamento AACUF",
    description:
      "Task management system for AACUF, focused on organizing tasks.",
    longDescription:
      "A comprehensive task management system built specifically for AACUF. Features project organization, task assignment, deadline tracking, and team collaboration tools with a clean, intuitive interface.",
    images: ["/assets/previews/planejamento-aacuf-web.png"],
    technologies: ["React", "Next.js", "MongoDB", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/eumorales/planejamento-aacuf",
    demo: "https://p.aacuf.com",
    featured: false,
    publishedAt: new Date("2025-05-20"),
    category: "Productivity",
    status: "completed",
  },
  {
    id: "text-tools",
    title: "Text Tools",
    description: "Transform, analyze, and manipulate text with our collection.",
    longDescription:
      "A comprehensive collection of text manipulation tools including case conversion, word counting, text formatting, encoding/decoding, and various text analysis features. Perfect for developers, writers, and content creators.",
    images: ["/assets/previews/text-tools-web.png"],
    technologies: ["React", "Tailwind CSS", "TypeScript"],
    github: "https://github.com/eumorales/text-tools",
    demo: "https://texto.gilbertomorales.com",
    featured: false,
    publishedAt: new Date("2025-06-16"),
    category: "Utility Tools",
    status: "completed",
  },
];

export const getFeaturedProjects = (limit?: number) => {
  const featured = projects
    .filter((project) => project.featured)
    .sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime());

  return limit ? featured.slice(0, limit) : featured;
};

export const getRecentProjects = (limit?: number) => {
  const sorted = [...projects].sort(
    (a, b) => b.publishedAt.getTime() - a.publishedAt.getTime()
  );

  return limit ? sorted.slice(0, limit) : sorted;
};

export const getNonFeaturedProjects = (limit?: number) => {
  const nonFeatured = projects
    .filter((project) => !project.featured)
    .sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime());

  return limit ? nonFeatured.slice(0, limit) : nonFeatured;
};

export const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
};

export const getProjectsByCategory = () => {
  const categories: Record<string, Project[]> = {};

  projects.forEach((project) => {
    const category = project.category || "Other";
    if (!categories[category]) {
      categories[category] = [];
    }
    categories[category].push(project);
  });

  return categories;
};
