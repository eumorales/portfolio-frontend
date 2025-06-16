"use client";

import Link from "next/link";
import Image from "next/image";
import { Code, ArrowUpRight } from "lucide-react";

interface LatestProjectCardProps {
  project: {
    title: string;
    description: string;
    technologies: string[];
    demo: string;
    image?: string;
  };
}

export default function LatestProjectCard({ project }: LatestProjectCardProps) {
  return (
    <Link
      href={project.demo}
      target="_blank"
      rel="noopener noreferrer"
      className="block h-full"
    >
      <div className="bg-gray-100 dark:bg-zinc-800 rounded-xl p-6 h-full flex flex-col hover:shadow-xl shadow-lg border border-gray-200/50 dark:border-gray-700/50 transition-all duration-300 hover:scale-[1.01] group relative overflow-hidden cursor-pointer">
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 opacity-5 dark:opacity-10">
          <div className="code-grid h-full w-full"></div>
        </div>

        {/* Gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-gray-50/30 dark:to-zinc-900/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
          <Image
            src={project.image || "/placeholder.svg?height=400&width=600"}
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
          </div>

          <div className="flex gap-4 mb-4 flex-1">
            <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 shadow-md ring-1 ring-gray-300/50 dark:ring-gray-700/50">
              <Image
                src={project.image || "/placeholder.svg?height=80&width=80"}
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
            {project.technologies.map((tech, idx) => (
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
              Visit Website
              <ArrowUpRight className="h-3 w-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </span>
            <span
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "/projects";
              }}
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
    </Link>
  );
}
