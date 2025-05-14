export interface Project {
  id: string
  title: string
  description: string
  image: string
  technologies: string[]
  github: string
  demo: string
  featured: boolean
  publishedAt: Date
}

export const projects: Project[] = [
  {
    id: "portfolio",
    title: "Portfolio v3",
    description: "This is my personal portfolio, where I showcase most of my projects.",
    image: "/assets/previews/portfolio-web.png",
    technologies: ["next", "react", "tailwindcss"],
    github: "https://github.com/eumorales/portfolio-frontend",
    demo: "https://gilbertomorales.com",
    featured: false,
    publishedAt: new Date("2023-09-01"),
  },
  {
    id: "dog",
    title: "Dog",
    description: "A web app for random dog images. Made with dog.ceo/api",
    image: "/assets/previews/dog-web.png",
    technologies: ["html", "css", "javascript"],
    github: "https://github.com/eumorales/dog",
    demo: "https://cachorro.gilbertomorales.com",
    featured: false,
    publishedAt: new Date("2023-10-24"),
  },
  {
    id: "aacuf",
    title: "AACUF",
    description: "Linktree for Computer Athletic Association of Universidade Franciscana.",
    image: "/assets/previews/aacuf-web.png",
    technologies: ["html", "css", "javascript"],
    github: "https://github.com/eumorales/aacuf",
    demo: "https://aacuf.com",
    featured: true,
    publishedAt: new Date("2024-06-20"), 
  },
]

export const getFeaturedProjects = (limit?: number) => {
  const featured = projects
    .filter((project) => project.featured)
    .sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime())

  return limit ? featured.slice(0, limit) : featured
}

export const getRecentProjects = (limit?: number) => {
  const sorted = [...projects].sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime())

  return limit ? sorted.slice(0, limit) : sorted
}

export const getNonFeaturedProjects = (limit?: number) => {
  const nonFeatured = projects
    .filter((project) => !project.featured)
    .sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime())

  return limit ? nonFeatured.slice(0, limit) : nonFeatured
}

export const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date)
}
