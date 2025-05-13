import Link from "next/link"
import { Github, ExternalLink } from "lucide-react"
import AnimatedSection from "@/components/animated-section"
import PageHeader from "@/components/page-header"
import Image from "next/image"

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
          <>
            <h2 className="text-2xl font-bold mb-8">Featured Projects</h2>
            <div className="space-y-16 mb-16">
              {featuredProjects.map((project, index) => (
                <AnimatedSection key={project.id} delay={index * 0.2}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="relative aspect-video bg-gray-100 dark:bg-zinc-800 rounded-lg overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg?height=600&width=800"}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                      <p className="text-gray-600 dark:text-zinc-300 mb-6">{project.description}</p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="text-sm text-gray-600 dark:text-zinc-300 bg-gray-100 dark:bg-zinc-800 px-2 py-1 rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-4">
                        <Link
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 border border-gray-300 dark:border-zinc-600 px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                        >
                          <Github className="h-4 w-4" /> Code
                        </Link>
                        <Link
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 bg-black dark:bg-white text-white dark:text-black px-4 py-2 rounded-md hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
                        >
                          <ExternalLink className="h-4 w-4" /> Live Demo
                        </Link>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </>
        )}

        <h2 className="text-2xl font-bold mb-8">Other Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherProjects.map((project, index) => (
            <AnimatedSection key={project.id} delay={index * 0.1}>
              <div className="border border-gray-200 dark:border-zinc-800 rounded-lg overflow-hidden hover:shadow-sm transition-shadow h-full flex flex-col">
                <div className="relative aspect-video">
                  <Image
                    src={project.image || "/placeholder.svg?height=600&width=800"}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-zinc-300 mb-4 flex-grow">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-sm text-gray-600 dark:text-zinc-300 bg-gray-100 dark:bg-zinc-800 px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 mt-auto">
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm flex items-center gap-1 text-gray-600 dark:text-zinc-300 hover:text-black dark:hover:text-white transition-colors"
                    >
                      <Github className="h-4 w-4" /> Code
                    </Link>
                    <Link
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm flex items-center gap-1 text-gray-600 dark:text-zinc-300 hover:text-black dark:hover:text-white transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" /> Demo
                    </Link>
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
