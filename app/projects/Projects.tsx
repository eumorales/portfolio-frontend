"use client";

import Link from "next/link";
import { Github, ArrowRight, Calendar } from "lucide-react";
import AnimatedSection from "@/components/animated-section";
import PageHeader from "@/components/page-header";
import Image from "next/image";
import {
  getFeaturedProjects,
  getNonFeaturedProjects,
  formatDate,
} from "@/lib/projects";

function Projects() {
  const featuredProjects = getFeaturedProjects();
  const otherProjects = getNonFeaturedProjects();

  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950 text-black dark:text-white">
      <div className="container max-w-6xl mx-auto px-4 py-16">
        <PageHeader title="Projects" />

        {featuredProjects.length > 0 && (
          <section className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-black to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
                Featured Projects
              </h2>
              <div className="hidden md:block h-px bg-gradient-to-r from-black/30 to-gray-600/10 dark:from-white/30 dark:to-gray-400/10 flex-grow ml-6 mr-6" />
            </div>

            <div className="space-y-12">
              {featuredProjects.map((project, index) => (
                <AnimatedSection key={project.id} delay={index * 0.2}>
                  <div className="group relative">
                    <div className="relative bg-white dark:bg-zinc-900 p-6 md:p-8 rounded-xl shadow-sm border border-gray-200 dark:border-zinc-800 overflow-hidden">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                        <Link
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="relative aspect-video rounded-lg overflow-hidden shadow-md group-hover:shadow-xl transition-all duration-300 block"
                        >
                          <Image
                            src={
                              project.image ||
                              "/placeholder.svg?height=600&width=800" ||
                              "/placeholder.svg"
                            }
                            alt={project.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </Link>

                        <div className="flex flex-col">
                          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
                            <Calendar className="h-4 w-4" />
                            <time dateTime={project.publishedAt.toISOString()}>
                              {formatDate(project.publishedAt)}
                            </time>
                          </div>

                          <h3 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-600 dark:from-white dark:to-gray-400">
                            {project.title}
                          </h3>
                          <p className="text-gray-700 dark:text-zinc-300 mb-6 text-lg leading-relaxed">
                            {project.description}
                          </p>

                          <div className="flex flex-wrap gap-2 mb-4">
                            {project.technologies.map((tech, idx) => {
                              return (
                                <span
                                  key={`${tech}-${idx}`}
                                  className="text-xs font-medium bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-full"
                                >
                                  {tech}
                                </span>
                              );
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
          <h2 className="text-2xl font-bold text-black dark:text-white">
            All Projects
          </h2>
          <div className="hidden md:block h-px bg-gray-200 dark:bg-zinc-800 flex-grow ml-6 mr-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherProjects.map((project, index) => (
            <AnimatedSection key={project.id} delay={index * 0.1}>
              <div className="group relative">
                <div className="relative border border-gray-200 dark:border-zinc-800 rounded-lg overflow-hidden hover:shadow-sm transition-all duration-300 h-full flex flex-col bg-white dark:bg-zinc-900">
                  <Link
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative aspect-video overflow-hidden block"
                  >
                    <Image
                      src={
                        project.image || "/placeholder.svg?height=600&width=800"
                      }
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </Link>

                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 mb-2">
                      <Calendar className="h-3 w-3" />
                      <time dateTime={project.publishedAt.toISOString()}>
                        {formatDate(project.publishedAt)}
                      </time>
                    </div>

                    <h3 className="text-xl font-bold mb-2 text-black dark:text-white">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-zinc-300 mb-4 flex-grow">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, idx) => {
                        return (
                          <span
                            key={`${tech}-${idx}`}
                            className="text-xs font-medium bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-full"
                          >
                            {tech}
                          </span>
                        );
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
  );
}

export default Projects;
