"use client";

import Image from "next/image";
import { Calendar, ExternalLink, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/types/project";
import { formatDate } from "@/lib/projects";

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  const getStatusColor = (status?: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case "in-progress":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200";
      case "abandoned":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
      case "archived":
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
      default:
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
    }
  };

  return (
    <div
      className="group relative bg-white dark:bg-zinc-900 rounded-xl overflow-hidden border border-gray-200 dark:border-zinc-800 hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-[1.02]"
      onClick={onClick}
    >
      {/* Image */}
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={project.images[0] || "/placeholder.svg?height=300&width=400"}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 dark:bg-black/90 rounded-full p-3">
            <ExternalLink className="h-5 w-5 text-gray-700 dark:text-gray-300" />
          </div>
        </div>

        {/* Featured star */}
        {project.featured && (
          <div className="absolute top-3 left-3">
            <div className="bg-white/90 dark:bg-black/90 rounded-full p-2">
              <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
            </div>
          </div>
        )}

        {/* Status badge */}
        {project.status && (
          <div className="absolute top-3 right-3">
            <Badge className={getStatusColor(project.status)}>
              {project.status.replace("-", " ")}
            </Badge>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
          <Calendar className="h-4 w-4" />
          <span>{formatDate(project.publishedAt)}</span>
          {project.category && (
            <>
              <span>•</span>
              <span>{project.category}</span>
            </>
          )}
        </div>

        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>

        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
            >
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 3 && (
            <Badge
              variant="secondary"
              className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400"
            >
              +{project.technologies.length - 3} more
            </Badge>
          )}
        </div>

        {/* Click to view indicator */}
        <div className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          Click to view details →
        </div>
      </div>
    </div>
  );
}
