"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Github,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Calendar,
  Tag,
  Star,
} from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/types/project";
import { formatDate } from "@/lib/projects";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({
  project,
  isOpen,
  onClose,
}: ProjectModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Reset image index when modal opens or project changes
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [project?.id, isOpen]);

  if (!project) return null;

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

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

  const hasValidDemo = project.demo && project.demo.trim() !== "";
  const hasValidGithub = project.github && project.github.trim() !== "";

  // Ensure we have valid images and index
  const validImages = project.images.filter((img) => img && img.trim() !== "");
  const hasMultipleImages = validImages.length > 1;
  const safeImageIndex = Math.min(
    Math.max(0, currentImageIndex),
    validImages.length - 1
  );
  const currentImage =
    validImages[safeImageIndex] || "/placeholder.svg?height=400&width=600";

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl h-[85vh] p-0 overflow-hidden">
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b bg-gray-50 dark:bg-gray-900">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <DialogTitle className="text-xl font-bold">
                  {project.title}
                </DialogTitle>
                {project.featured && (
                  <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                )}
              </div>
              {project.status && (
                <Badge className={getStatusColor(project.status)}>
                  {project.status.replace("-", " ")}
                </Badge>
              )}
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 flex overflow-hidden">
            {/* Left side - Image */}
            <div className="flex-1 p-4">
              <div className="relative h-full rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800">
                <Image
                  src={currentImage || "/placeholder.svg"}
                  alt={
                    hasMultipleImages
                      ? `${project.title} - Image ${safeImageIndex + 1}`
                      : project.title
                  }
                  fill
                  className="object-cover"
                />

                {hasMultipleImages && (
                  <>
                    <Button
                      variant="secondary"
                      size="icon"
                      className="absolute left-2 top-1/2 -translate-y-1/2 h-8 w-8 bg-white/80 hover:bg-white dark:bg-black/80 dark:hover:bg-black"
                      onClick={prevImage}
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="secondary"
                      size="icon"
                      className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 bg-white/80 hover:bg-white dark:bg-black/80 dark:hover:bg-black"
                      onClick={nextImage}
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>

                    {/* Image indicators */}
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1">
                      {validImages.map((_, index) => (
                        <button
                          key={index}
                          className={`w-2 h-2 rounded-full transition-colors ${
                            index === safeImageIndex
                              ? "bg-white"
                              : "bg-white/50"
                          }`}
                          onClick={() => setCurrentImageIndex(index)}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Right side - Information */}
            <div className="w-80 p-4 border-l bg-gray-50/50 dark:bg-gray-900/50 flex flex-col">
              {/* Project Info */}
              <div className="space-y-3 flex-1">
                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{formatDate(project.publishedAt)}</span>
                  </div>
                  {project.category && (
                    <div className="flex items-center gap-1">
                      <Tag className="h-4 w-4" />
                      <span>{project.category}</span>
                    </div>
                  )}
                </div>

                {/* Description */}
                <div>
                  <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">
                    Description
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    {project.longDescription || project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div>
                  <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">
                    Technologies
                  </h3>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 pt-4 border-t">
                {hasValidDemo ? (
                  <Button asChild className="w-full" size="sm">
                    <Link
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Visit Website
                    </Link>
                  </Button>
                ) : (
                  <Button
                    disabled
                    className="w-full opacity-50 cursor-not-allowed"
                    size="sm"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Preview Unavailable
                  </Button>
                )}

                {hasValidGithub ? (
                  <Button
                    variant="outline"
                    asChild
                    className="w-full"
                    size="sm"
                  >
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Github className="h-4 w-4" />
                      View Source
                    </Link>
                  </Button>
                ) : (
                  <Button
                    variant="outline"
                    disabled
                    className="w-full opacity-50 cursor-not-allowed"
                    size="sm"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Source Unavailable
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
