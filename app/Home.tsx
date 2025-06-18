"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import AnimatedText from "@/components/animated-text";
import AnimatedSection from "@/components/animated-section";
import MobileMenu from "@/components/mobile-menu";
import { blogPosts } from "@/app/blog/posts";
import { getRecentProjects } from "@/lib/projects";
import { TypeAnimation } from "react-type-animation";
import ProjectModal from "@/components/project-modal";
import { useState } from "react";
import type { Project } from "@/types/project";

import DiscordCard from "@/components/discord-card";
import EducationCard from "@/components/education-card";
import ExperienceCard from "@/components/experience-card";
import GitHubCard from "@/components/github-card";
import LatestProjectCard from "@/components/latest-project-card";
import LatestPostCard from "@/components/latest-post-card";

const posts = Object.values(blogPosts);
const sortedPosts = posts.sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);
const latestPost = sortedPosts[0];

export default function ClientPage() {
  const recentProjects = getRecentProjects(1);

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center bg-white dark:bg-black">
        <Link
          href="/"
          className="font-bold text-xl italic text-black dark:text-white"
        >
          gilbertomorales.
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <Link
            href="/"
            className="hover:text-gray-600 dark:hover:text-gray-300 font-medium"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="hover:text-gray-600 dark:hover:text-gray-300 font-medium"
          >
            About
          </Link>
          <Link
            href="/blog"
            className="hover:text-gray-600 dark:hover:text-gray-300 font-medium"
          >
            Blog
          </Link>
          <Link
            href="/projects"
            className="hover:text-gray-600 dark:hover:text-gray-300 font-medium"
          >
            Projects
          </Link>
          <Link
            href="/guestbook"
            className="hover:text-gray-600 dark:hover:text-gray-300 font-medium"
          >
            Guestbook
          </Link>
          <ThemeToggle />
        </nav>

        <div className="md:hidden flex items-center gap-4">
          <MobileMenu />
        </div>
      </header>

      <section className="container mx-auto px-4 py-6 md:py-10 pb-8 md:pb-12 relative bg-white dark:bg-black">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4 md:space-y-5 text-center md:text-left">
            <AnimatedText
              text="Gilberto Morales,"
              className="text-4xl sm:text-5xl md:text-6xl font-black"
            />
            <div className="text-2xl sm:text-3xl text-gray-500 dark:text-gray-400 font-light h-[40px] sm:h-[48px] flex items-center md:items-start justify-center md:justify-start">
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
              <p className="text-gray-600 dark:text-gray-300 max-w-md mx-auto md:mx-0 mt-4 md:mt-5">
                "I'm a Computer Science student who enjoys fullstack web
                development, always striving to improve my skills."
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.6}>
              <div className="pt-5 pb-8 md:pb-0 flex justify-center md:justify-start">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 border border-black dark:border-white px-4 py-2 rounded-md hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
                >
                  About Me <ExternalLink className="h-4 w-4" />
                </Link>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection
            delay={0.3}
            direction="left"
            className="flex items-center justify-center"
          >
            <div className="relative w-full max-w-[320px] md:max-w-[400px] mx-auto overflow-hidden rounded-lg">
              {/* Light mode image */}
              <Image
                src="/assets/hero.png"
                alt="Gilberto Morales - ASCII Art"
                width={400}
                height={350}
                className="w-full relative z-10 object-cover object-top 
                          transition-all duration-700 ease-out
                          dark:opacity-0 dark:scale-110 dark:blur-sm dark:pointer-events-none
                          opacity-100 scale-100 blur-0"
                style={{ imageRendering: "pixelated" }}
              />

              {/* Dark mode image */}
              <Image
                src="/assets/hero-dark.png"
                alt="Gilberto Morales - ASCII Art Dark"
                width={400}
                height={350}
                className="w-full absolute top-0 left-0 z-10 object-cover object-top 
                          transition-all duration-700 ease-out
                          opacity-0 scale-90 blur-sm pointer-events-none
                          dark:opacity-100 dark:scale-100 dark:blur-0 dark:pointer-events-auto"
                style={{ imageRendering: "pixelated" }}
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      <AnimatedSection delay={0.6}>
        <section className="container mx-auto px-4 py-8 md:py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <GitHubCard />
            {recentProjects.length > 0 && (
              <LatestProjectCard
                project={recentProjects[0]}
                onProjectClick={handleProjectClick}
              />
            )}
            {latestPost && <LatestPostCard post={latestPost} />}
            <EducationCard />
            <ExperienceCard />
            <DiscordCard />
          </div>
        </section>
      </AnimatedSection>

      <footer className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-black">
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-center">
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
              <Link
                href="/sitemap"
                className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors flex items-center gap-1 text-sm"
              >
                Sitemap
                <ArrowUpRight className="h-3 w-3" />
              </Link>
              <Link
                href="https://github.com/eumorales/eumorales/blob/main/LICENSE"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors flex items-center gap-1 text-sm"
              >
                Licence
                <ArrowUpRight className="h-3 w-3" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </main>
  );
}
