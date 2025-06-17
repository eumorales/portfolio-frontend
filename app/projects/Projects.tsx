"use client";

import { useState } from "react";
import AnimatedSection from "@/components/animated-section";
import PageHeader from "@/components/page-header";
import ProjectCard from "@/components/project-card";
import ProjectModal from "@/components/project-modal";
import type { Project } from "@/types/project";
import { getFeaturedProjects, getNonFeaturedProjects } from "@/lib/projects";

function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const featuredProjects = getFeaturedProjects();
  const otherProjects = getNonFeaturedProjects();

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950 text-black dark:text-white">
      <div className="container max-w-7xl mx-auto px-4 py-16">
        <PageHeader title="Projects" />

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <section className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-black to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
                Featured Projects
              </h2>
              <div className="hidden md:block h-px bg-gradient-to-r from-black/30 to-gray-600/10 dark:from-white/30 dark:to-gray-400/10 flex-grow ml-6" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project, index) => (
                <AnimatedSection key={project.id} delay={index * 0.1}>
                  <ProjectCard
                    project={project}
                    onClick={() => handleProjectClick(project)}
                  />
                </AnimatedSection>
              ))}
            </div>
          </section>
        )}

        {/* All Projects */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-black dark:text-white">
              All Projects
            </h2>
            <div className="hidden md:block h-px bg-gray-200 dark:bg-zinc-800 flex-grow ml-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((project, index) => (
              <AnimatedSection key={project.id} delay={index * 0.1}>
                <ProjectCard
                  project={project}
                  onClick={() => handleProjectClick(project)}
                />
              </AnimatedSection>
            ))}
          </div>
        </section>
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </main>
  );
}

export default Projects;
