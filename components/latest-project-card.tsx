"use client";

import type React from "react";

import Image from "next/image";
import { Code, ArrowUpRight, Star } from "lucide-react";
import type { Project } from "@/types/project";

interface LatestProjectCardProps {
  project: Project;
  onProjectClick: (project: Project) => void;
}

const statusColors = {
  completed:
    "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300",
  "in-progress":
    "bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300",
  abandoned: "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300",
  archived: "bg-gray-100 text-gray-700 dark:bg-gray-900 dark:text-gray-300",
  default: "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300",
};

export default function LatestProjectCard({
  project,
  onProjectClick,
}: LatestProjectCardProps) {
  const statusColor = statusColors[project.status] || statusColors.default;

  const handleViewAllClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    window.location.href = "/projects";
  };

  return (
    <div onClick={() => onProjectClick(project)} className="block h-full">
      <div className="bg-gray-100 dark:bg-zinc-800 rounded-xl p-6 h-full flex flex-col hover:shadow-xl shadow-lg border border-gray-200/50 dark:border-gray-700/50 transition-all duration-300 hover:scale-[1.01] group relative overflow-hidden cursor-pointer">
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 opacity-5 dark:opacity-10">
          <div className="code-grid h-full w-full"></div>
        </div>

        {/* Gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-gray-50/30 dark:to-zinc-900/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
          <Image
            src={project.images[0] || "/placeholder.svg?height=400&width=600"}
            alt=""
            fill
            className="object-cover blur-md"
          />
        </div>

        <div className="relative z-10 flex flex-col h-full">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold flex items-center gap-2">
              <Code className="h-4 w-4 group-hover:scale-110 transition-transform duration-300 text-blue-600 dark:text-blue-400" />
              Latest Project
            </h3>
            <div className="absolute top-4 right-4 flex flex-col items-end gap-1">
              {project.featured && (
                <Star className="h-5 w-5 text-yellow-500 stroke-yellow-500 fill-yellow-100 dark:fill-yellow-900/50 shadow-md" />
              )}
            </div>
          </div>

          <div className="flex gap-4 mb-4 flex-1">
            <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 shadow-md ring-1 ring-gray-300/50 dark:ring-gray-700/50">
              <Image
                src={project.images[0] || "/placeholder.svg?height=80&width=80"}
                alt={project.title}
                width={80}
                height={80}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="flex-1 flex flex-col">
              <h4 className="font-semibold text-lg mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                {project.title}
              </h4>
              <p className="text-sm text-gray-700 dark:text-zinc-400 flex-1 leading-relaxed">
                {project.description}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.slice(0, 3).map((tech, idx) => (
              <span
                key={idx}
                className="text-xs bg-white dark:bg-zinc-700 text-gray-700 dark:text-gray-300 px-3 py-1.5 rounded-full group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 transition-colors duration-300 font-medium shadow-sm"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex justify-between items-center pt-2 border-t border-gray-300 dark:border-zinc-700">
            <span className="text-sm text-blue-600 dark:text-blue-400 flex items-center gap-1 group/link font-medium">
              Click to view details
              <ArrowUpRight className="h-3 w-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </span>
            <span
              onClick={handleViewAllClick}
              className="text-sm text-gray-700 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white flex items-center gap-1 group/all font-medium cursor-pointer"
            >
              View all
              <ArrowUpRight className="h-3 w-3 group-hover/all:translate-x-0.5 group-hover/all:-translate-y-0.5 transition-transform duration-200" />
            </span>
          </div>
        </div>

        <style jsx>{`
          .code-grid {
            background-image: linear-gradient(
                rgba(0, 0, 0, 0.1) 1px,
                transparent 1px
              ),
              linear-gradient(90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px);
            background-size: 20px 20px;
          }
          .dark .code-grid {
            background-image: linear-gradient(
                rgba(255, 255, 255, 0.1) 1px,
                transparent 1px
              ),
              linear-gradient(
                90deg,
                rgba(255, 255, 255, 0.1) 1px,
                transparent 1px
              );
            background-size: 20px 20px;
          }
        `}</style>
      </div>
    </div>
  );
}
