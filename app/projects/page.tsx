import Link from "next/link"
import { Github, ArrowRight } from "lucide-react"
import AnimatedSection from "@/components/animated-section"
import PageHeader from "@/components/page-header"
import Image from "next/image"

// Technology color mapping based on their logos
const techColors: Record<string, { bg: string; text: string }> = {
  // Existing technologies
  next: {
    bg: "bg-black dark:bg-white",
    text: "text-white dark:text-black",
  },
  react: {
    bg: "bg-[#282c34]",
    text: "text-[#61dafb]",
  },
  tailwindcss: {
    bg: "bg-[#0b1120]",
    text: "text-[#38bdf8]",
  },
  html: {
    bg: "bg-[#e34f26]/10",
    text: "text-[#e34f26]",
  },
  css: {
    bg: "bg-[#1572b6]/10",
    text: "text-[#1572b6]",
  },
  javascript: {
    bg: "bg-[#f7df1e]/10",
    text: "text-[#000000] dark:text-[#f7df1e]",
  },

  // New technologies from the image
  c: {
    bg: "bg-[#5c6bc0]/10",
    text: "text-[#5c6bc0]",
  },
  css3: {
    bg: "bg-[#1572b6]/10",
    text: "text-[#1572b6]",
  },
  git: {
    bg: "bg-[#f05033]/10",
    text: "text-[#f05033]",
  },
  html5: {
    bg: "bg-[#e34f26]/10",
    text: "text-[#e34f26]",
  },
  java: {
    bg: "bg-[#007396]/10",
    text: "text-[#007396]",
  },
  mysql: {
    bg: "bg-[#4479a1]/10",
    text: "text-[#4479a1]",
  },
  "next.js": {
    bg: "bg-black dark:bg-white",
    text: "text-white dark:text-black",
  },
  nextjs: {
    bg: "bg-black dark:bg-white",
    text: "text-white dark:text-black",
  },
  "node.js": {
    bg: "bg-[#339933]/10",
    text: "text-[#339933]",
  },
  nodejs: {
    bg: "bg-[#339933]/10",
    text: "text-[#339933]",
  },
  postgresql: {
    bg: "bg-[#336791]/10",
    text: "text-[#336791]",
  },
  python: {
    bg: "bg-[#3776ab]/10",
    text: "text-[#ffd343]",
  },
}

// Default color for technologies not in the mapping
const defaultTechColor = {
  bg: "bg-gray-100 dark:bg-zinc-800",
  text: "text-gray-700 dark:text-gray-300",
}

// Function to get color for a technology
const getTechColor = (tech: string) => {
  return techColors[tech.toLowerCase()] || defaultTechColor
}

const projects = [
  {
    id: "portfolio",
    title: "Portfolio",
    description: "This is my personal portfolio, where I showcase most of my projects.",
    image: "/assets/previews/portfolio-web.png",
    technologies: ["next", "react", "tailwindcss"],
    github: "https://github.com/eumorales/portfolio-frontend",
    demo: "https://gilbertomorales.com",
    featured: false,
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
  },
]

export default function Projects() {
  const featuredProjects = projects.filter((project) => project.featured)
  const otherProjects = projects.filter((project) => !project.featured)

  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950 text-black dark:text-white">
      <div className="container max-w-6xl mx-auto px-4 py-16">
        <PageHeader title="Projects" />

        {featuredProjects.length > 0 && (
          <section className="mb-24">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-black to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
                Featured Projects
              </h2>
              <div className="hidden md:block h-px bg-gradient-to-r from-black/30 to-gray-600/10 dark:from-white/30 dark:to-gray-400/10 flex-grow ml-6 mr-6" />
            </div>

            <div className="space-y-24">
              {featuredProjects.map((project, index) => (
                <AnimatedSection key={project.id} delay={index * 0.2}>
                  <div className="group relative">
                    {/* Background decorative element */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-black/10 to-gray-500/10 dark:from-white/10 dark:to-gray-500/10 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-500 group-hover:duration-200" />

                    <div className="relative bg-white dark:bg-zinc-900 p-6 md:p-8 rounded-xl shadow-sm border border-gray-200 dark:border-zinc-800 overflow-hidden">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                        <div className="relative aspect-video rounded-lg overflow-hidden shadow-md group-hover:shadow-xl transition-all duration-300">
                          <Image
                            src={project.image || "/placeholder.svg?height=600&width=800"}
                            alt={project.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>

                        <div className="flex flex-col">
                          <h3 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-600 dark:from-white dark:to-gray-400">
                            {project.title}
                          </h3>
                          <p className="text-gray-700 dark:text-zinc-300 mb-6 text-lg leading-relaxed">
                            {project.description}
                          </p>

                          <div className="flex flex-wrap gap-2 mb-8">
                            {project.technologies.map((tech, idx) => {
                              const colors = getTechColor(tech)
                              return (
                                <span
                                  key={idx}
                                  className={`text-sm font-medium ${colors.text} ${colors.bg} px-3 py-1.5 rounded-full`}
                                >
                                  {tech}
                                </span>
                              )
                            })}
                          </div>

                          <div className="flex gap-6 mt-auto">
                            <Link
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm flex items-center gap-2 font-medium text-gray-800 dark:text-gray-200 hover:text-black dark:hover:text-white transition-colors group/link"
                            >
                              <span>Visit Website</span>
                              <ArrowRight className="h-4 w-4 transform group-hover/link:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm flex items-center gap-2 font-medium text-gray-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors"
                            >
                              <Github className="h-4 w-4" />
                              <span>Source Code</span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </section>
        )}

        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-black dark:text-white">Other Projects</h2>
          <div className="hidden md:block h-px bg-gray-200 dark:bg-zinc-800 flex-grow ml-6 mr-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherProjects.map((project, index) => (
            <AnimatedSection key={project.id} delay={index * 0.1}>
              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-black/5 to-gray-500/5 dark:from-white/5 dark:to-gray-500/5 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-300" />

                <div className="relative border border-gray-200 dark:border-zinc-800 rounded-lg overflow-hidden hover:shadow-sm transition-all duration-300 h-full flex flex-col bg-white dark:bg-zinc-900">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg?height=600&width=800"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold mb-2 text-black dark:text-white">{project.title}</h3>
                    <p className="text-gray-600 dark:text-zinc-300 mb-4 flex-grow">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, idx) => {
                        const colors = getTechColor(tech)
                        return (
                          <span
                            key={idx}
                            className={`text-xs font-medium ${colors.text} ${colors.bg} px-2 py-1 rounded-full`}
                          >
                            {tech}
                          </span>
                        )
                      })}
                    </div>

                    <div className="flex gap-6 mt-auto">
                      <Link
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm flex items-center gap-2 font-medium text-gray-800 dark:text-gray-200 hover:text-black dark:hover:text-white transition-colors group/link"
                      >
                        <span>Visit Website</span>
                        <ArrowRight className="h-4 w-4 transform group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                      <Link
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm flex items-center gap-2 font-medium text-gray-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors"
                      >
                        <Github className="h-4 w-4" />
                        <span>Source Code</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </main>
  )
}
