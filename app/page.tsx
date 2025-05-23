"use client"

import Image from "next/image"
import Link from "next/link"
import { Github, ExternalLink, LaptopMinimal, BookOpen, Clock, Pin, Calendar, ArrowRight } from "lucide-react"
import StatsCard from "@/components/stats-card"
import { ThemeToggle } from "@/components/theme-toggle"
import AnimatedText from "@/components/animated-text"
import AnimatedSection from "@/components/animated-section"
import MobileMenu from "@/components/mobile-menu"
import { useGithubStats } from "@/hooks/github"
import { blogPosts } from "@/app/blog/posts"
import { getRecentProjects, formatDate } from "@/lib/projects"
import { TypeAnimation } from "react-type-animation"

const posts = Object.values(blogPosts)

const sortedPosts = posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

const latestPost = sortedPosts[0]

export default function Home() {
  const githubStats = useGithubStats("eumorales")
  const recentProjects = getRecentProjects(3)

  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950 text-black dark:text-white">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
      <Link
        href="/"
        className="font-bold text-xl italic text-black dark:text-white"
      >
        gilbertomorales.
      </Link>


        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="hover:text-gray-600 dark:hover:text-zinc-300 font-medium">
            Home
          </Link>
          <Link href="/about" className="hover:text-gray-600 dark:hover:text-zinc-300 font-medium">
            About
          </Link>
          <Link href="/blog" className="hover:text-gray-600 dark:hover:text-zinc-300 font-medium">
            Blog
          </Link>
          <Link href="/projects" className="hover:text-gray-600 dark:hover:text-zinc-300 font-medium">
            Projects
          </Link>
          <Link href="/guestbook" className="hover:text-gray-600 dark:hover:text-zinc-300 font-medium">
            Guestbook
          </Link>
          <ThemeToggle />
        </nav>
        <div className="md:hidden flex items-center gap-4">
          <MobileMenu />
        </div>
      </header>

      <section className="container mx-auto px-4 py-12 md:py-20 pb-0 md:pb-0 relative mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4 md:space-y-6 text-center md:text-left">
            <AnimatedText text="Gilberto Morales," className="text-4xl sm:text-5xl md:text-6xl font-black" />
            <div className="text-2xl sm:text-3xl text-gray-500 dark:text-zinc-400 font-light h-[40px] sm:h-[48px] flex items-center md:items-start justify-center md:justify-start">
              <TypeAnimation
                sequence={[
                  "Fullstack Developer",
                  2000,
                  "Computer Science Student",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Number.POSITIVE_INFINITY}
                className="inline-block border-r-2 border-black dark:border-white pr-1"
                cursor={false}
              />
            </div>
            <AnimatedSection delay={0.4}>
              <p className="text-gray-600 dark:text-zinc-300 max-w-md mx-auto md:mx-0 mt-4 md:mt-6">
                "I'm a Computer Science student who enjoys fullstack web development, always striving to improve my
                skills."
              </p>
            </AnimatedSection>
      
<AnimatedSection delay={0.6}>
  <div className="pt-4 pb-16 md:pb-0 flex justify-center md:justify-start">
    <Link
      href="/about"
      className="inline-flex items-center gap-2 border border-black dark:border-white px-4 py-2 rounded-md hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
    >
      About Me <ExternalLink className="h-4 w-4" />
    </Link>
  </div>
</AnimatedSection>
    </div>
    
<AnimatedSection delay={0.3} direction="left" className="flex items-start md:items-center">
  <div className="flex justify-center md:justify-end relative w-full -mt-12 md:-mt-24">
    <div className="relative md:w-5/6">
      <Image
        src="/assets/capa.svg"
        alt="Gilberto Morales"
        width={400}
        height={400}
        className="w-3/4 sm:w-2/3 md:w-full max-w-none md:max-w-none mx-auto md:mx-0 relative z-10 drop-shadow-lg"
      />
    </div>
  </div>
</AnimatedSection>
  </div>
</section>
        <section className="container mx-auto px-4 pt-6 pb-16 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {githubStats ? (
            <StatsCard
              icon={<Github className="h-5 w-5" />}
              title="GitHub"
              stats={[
                { label: "Stars", value: githubStats.stars.toString() },
                { label: "Followers", value: githubStats.followers.toString() },
                { label: "Repositories", value: githubStats.repos.toString() },
              ]}
              delay={0.1}
              className="group"
            />
          ) : (
            <StatsCard
              icon={<Github className="h-5 w-5" />}
              title="GitHub"
              stats={[
                { label: "Stars", value: "..." },
                { label: "Followers", value: "..." },
                { label: "Repositories", value: "..." },
              ]}
              delay={0.1}
            />
          )}

          <StatsCard
            icon={<LaptopMinimal className="h-5 w-5" />}
            title="Experience"
            stats={[
              { label: "Years", value: "3+" },
              { label: "Technologies", value: "10+" },
              { label: "Focus", value: "Fullstack" },
            ]}
            delay={0.2}
          />

          <StatsCard
            icon={<BookOpen className="h-5 w-5" />}
            title="Education"
            stats={[
              { label: "Degree", value: "BSc CS" },
              { label: "Semester", value: "5th" },
              { label: "University", value: "UFN" },
            ]}
            delay={0.3}
          />
        </div>
      </section>
      <section className="container mx-auto px-4 py-16">
        <div className="flex justify-between items-center mb-12">
          <div className="flex items-center gap-2">
            <h2 className="text-3xl font-bold">Recent Projects</h2>
          </div>
          <AnimatedSection delay={0.2}>
            <Link
              href="/projects"
              className="text-sm flex items-center gap-1 border border-black dark:border-white px-3 py-1 rounded-md hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
            >
              View all <ExternalLink className="h-4 w-4" />
            </Link>
          </AnimatedSection>
        </div>

        <div
          className={`grid grid-cols-1 ${
            recentProjects.length === 1
              ? "md:grid-cols-1 max-w-2xl mx-auto"
              : recentProjects.length === 2
                ? "md:grid-cols-2"
                : "md:grid-cols-2 lg:grid-cols-3"
          } gap-8`}
        >
          {recentProjects.map((project, index) => (
            <AnimatedSection key={project.id} delay={index * 0.1}>
              <div className="group relative">
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
                    <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 mb-2">
                      <Calendar className="h-3 w-3" />
                      <time dateTime={project.publishedAt.toISOString()}>{formatDate(project.publishedAt)}</time>
                    </div>

                    <h3 className="text-xl font-bold mb-2 text-black dark:text-white">{project.title}</h3>
                    <p className="text-gray-600 dark:text-zinc-300 mb-4 flex-grow">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, idx) => {
                        return (
                          <span
                            key={`${tech}-${idx}`}
                            className="text-xs font-medium bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-full"
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
      </section>

      <section className="container mx-auto px-4 py-16 bg-gray-50 dark:bg-zinc-900">
        <div className="max-w-2xl mx-auto">
          <AnimatedSection>
            <div className="flex items-center gap-2 mb-4">
              <Pin className="h-6 w-6" />
              <h3 className="text-2xl font-bold">Latest post</h3>
            </div>
            <div className="border border-gray-200 dark:border-zinc-700 rounded-lg p-6 bg-white dark:bg-zinc-800 hover:shadow-md transition-shadow">
              <Link href={`/blog/${latestPost.id}`} className="block">
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className={`px-2 py-0.5 text-xs rounded-full ${
                      latestPost.category === "Article"
                        ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                        : latestPost.category === "How To"
                          ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                          : latestPost.category === "Notes"
                            ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                            : "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200"
                    }`}
                  >
                    {latestPost.category}
                  </span>
                  <span className="px-2 py-0.5 text-xs rounded-full bg-gray-100 text-gray-800 dark:bg-zinc-700 dark:text-zinc-200">
                    {latestPost.language}
                  </span>
                </div>
                <h4 className="text-2xl font-bold mb-2 hover:text-gray-700 dark:hover:text-zinc-300">
                  {latestPost.title}
                </h4>
                <p className="text-gray-600 dark:text-zinc-300 mb-4">{latestPost.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-zinc-400">
                  <span>{latestPost.date}</span>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{latestPost.readTime}</span>
                  </div>
                </div>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-5xl font-bold mb-12">
              Reach me <span className="font-black">here</span>:
            </h2>
            <div className="flex justify-center gap-8">
              <a
                href="mailto:eu@gilbertomorales.com"
                className="transform transition-transform hover:scale-110"
                aria-label="Email me"
              >
                <div className="w-16 h-16 flex items-center justify-center">
                  <svg
                    viewBox="0 0 24 24"
                    width="48"
                    height="48"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
              </a>
              <a
                href="https://github.com/eumorales"
                target="_blank"
                rel="noopener noreferrer"
                className="transform transition-transform hover:scale-110"
                aria-label="Visit my GitHub"
              >
                <div className="w-16 h-16 flex items-center justify-center">
                  <svg
                    viewBox="0 0 24 24"
                    width="48"
                    height="48"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </div>
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <footer className="container mx-auto px-4 py-8 border-t border-gray-200 dark:border-zinc-800">
        <div className="text-center mt-8 text-gray-500 dark:text-zinc-400 text-sm">
          <p>All work © {new Date().getFullYear()} Gilberto Morales</p>
        </div>
      </footer>
    </main>
  )
}
