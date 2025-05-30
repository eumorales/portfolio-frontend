"use client"

import Image from "next/image"
import Link from "next/link"
import { ExternalLink, ArrowUpRight, Clock } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import AnimatedText from "@/components/animated-text"
import AnimatedSection from "@/components/animated-section"
import MobileMenu from "@/components/mobile-menu"
import { useGithubStats } from "@/hooks/github"
import { blogPosts } from "@/app/blog/posts"
import { getRecentProjects } from "@/lib/projects"
import { TypeAnimation } from "react-type-animation"
import { useState, useEffect } from "react"

import DiscordCard from "@/components/discord-card"
import EducationCard from "@/components/education-card"
import ExperienceCard from "@/components/experience-card"
import GitHubCard from "@/components/github-card"
import LatestProjectCard from "@/components/latest-project-card"
import LatestPostCard from "@/components/latest-post-card"

const posts = Object.values(blogPosts)
const sortedPosts = posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
const latestPost = sortedPosts[0]

export default function Home() {
  const recentProjects = getRecentProjects(1)

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-zinc-900 text-black dark:text-white">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center bg-gray-50 dark:bg-zinc-900">
        <Link href="/" className="font-bold text-xl italic text-black dark:text-white">
          gilbertomorales.
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="hover:text-gray-600 dark:hover:text-zinc-300 font-medium">Home</Link>
          <Link href="/about" className="hover:text-gray-600 dark:hover:text-zinc-300 font-medium">About</Link>
          <Link href="/blog" className="hover:text-gray-600 dark:hover:text-zinc-300 font-medium">Blog</Link>
          <Link href="/projects" className="hover:text-gray-600 dark:hover:text-zinc-300 font-medium">Projects</Link>
          <Link href="/guestbook" className="hover:text-gray-600 dark:hover:text-zinc-300 font-medium">Guestbook</Link>
          <ThemeToggle />
        </nav>

        <div className="md:hidden flex items-center gap-4">
          <MobileMenu />
        </div>
      </header>

      <section className="container mx-auto px-4 py-12 md:py-20 pb-0 md:pb-0 relative mb-12 mt-8 md:mt-20 bg-gray-50 dark:bg-zinc-900">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4 md:space-y-6 text-center md:text-left">
            <AnimatedText text="Gilberto Morales," className="text-4xl sm:text-5xl md:text-6xl font-black" />
            <div className="text-2xl sm:text-3xl text-gray-500 dark:text-zinc-400 font-light h-[40px] sm:h-[48px] flex items-center md:items-start justify-center md:justify-start">
              <TypeAnimation
                sequence={["Fullstack Developer", 2000, "Computer Science Student", 2000]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
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
                  className="w-3/4 sm:w-2/3 md:w-full max-w-none mx-auto md:mx-0 relative z-10 drop-shadow-lg"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <AnimatedSection delay={0.6}>
        <section className="container mx-auto px-4 py-12 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <GitHubCard />
            {recentProjects.length > 0 && <LatestProjectCard project={recentProjects[0]} />}
            {latestPost && <LatestPostCard post={latestPost} />}
            <EducationCard />
            <ExperienceCard />
            <DiscordCard />
          </div>
        </section>
      </AnimatedSection>

      <footer className="container mx-auto px-4 py-8 bg-gray-50 dark:bg-zinc-900 border-t border-gray-200 dark:border-zinc-800">
        <div className="text-center text-gray-500 dark:text-zinc-400 text-sm">
          <p>All work © {new Date().getFullYear()} Gilberto Morales</p>
        </div>
      </footer>
    </main>
  )
}