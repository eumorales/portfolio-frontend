"use client";

import Link from "next/link";
import { Pin, ArrowUpRight, Clock } from "lucide-react";

interface LatestPostCardProps {
  post: {
    id: string;
    title: string;
    excerpt: string;
    category: string;
    language: string;
    date: string;
    readTime: string;
  };
}

export default function LatestPostCard({ post }: LatestPostCardProps) {
  const getPostCategoryColor = (category: string) => {
    switch (category) {
      case "Article":
        return "bg-blue-50 dark:bg-blue-900/20";
      case "How To":
        return "bg-green-50 dark:bg-green-900/20";
      case "Notes":
        return "bg-yellow-50 dark:bg-yellow-900/20";
      default:
        return "bg-purple-50 dark:bg-purple-900/20";
    }
  };

  const getPostHoverColor = (category: string) => {
    switch (category) {
      case "Article":
        return "hover:bg-blue-100 dark:hover:bg-blue-900/40";
      case "How To":
        return "hover:bg-green-100 dark:hover:bg-green-900/40";
      case "Notes":
        return "hover:bg-yellow-100 dark:hover:bg-yellow-900/40";
      default:
        return "hover:bg-purple-100 dark:hover:bg-purple-900/40";
    }
  };

  return (
    <div
      className={`relative ${getPostCategoryColor(
        post.category
      )} ${getPostHoverColor(
        post.category
      )} rounded-xl h-full transition-all duration-300 hover:scale-[1.02] hover:shadow-xl shadow-lg border border-gray-200/50 dark:border-gray-700/50 group cursor-pointer overflow-hidden`}
    >
      {/* Notebook lines background pattern */}
      <div className="absolute inset-0 opacity-15 dark:opacity-8">
        <div className="notebook-lines h-full w-full"></div>
      </div>

      {/* Black margin line */}
      <div className="absolute left-8 top-0 bottom-0 w-px bg-black/40 dark:bg-white/30"></div>

      {/* Content area */}
      <div className="relative z-10 pl-12 pr-6 py-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold flex items-center gap-2">
            <Pin className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
            Latest Post
          </h3>
          <Link
            href="/blog"
            className="text-sm text-gray-600 dark:text-zinc-400 hover:text-black dark:hover:text-white flex items-center gap-1 group/all"
          >
            View all
            <ArrowUpRight className="h-3 w-3 group-hover/all:translate-x-0.5 group-hover/all:-translate-y-0.5 transition-transform duration-200" />
          </Link>
        </div>

        <Link href={`/blog/${post.id}`} className="block">
          <div className="flex items-center gap-2 mb-3">
            <span
              className={`px-2 py-0.5 text-xs rounded-full transition-all duration-300 shadow-sm ${
                post.category === "Article"
                  ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 group-hover:bg-blue-200 dark:group-hover:bg-blue-800"
                  : post.category === "How To"
                  ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 group-hover:bg-green-200 dark:group-hover:bg-green-800"
                  : post.category === "Notes"
                  ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 group-hover:bg-yellow-200 dark:group-hover:bg-yellow-800"
                  : "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 group-hover:bg-purple-200 dark:group-hover:bg-purple-800"
              }`}
            >
              {post.category}
            </span>
            <span className="px-2 py-0.5 text-xs rounded-full bg-white text-gray-800 dark:bg-white dark:text-gray-800 font-medium group-hover:bg-gray-100 transition-colors duration-300 shadow-sm">
              {post.language}
            </span>
          </div>
          <h4 className="text-xl font-semibold mb-3 group-hover:text-gray-700 dark:group-hover:text-zinc-300 transition-colors duration-300">
            {post.title}
          </h4>
          <p className="text-gray-600 dark:text-zinc-300 mb-4 line-clamp-2 group-hover:text-gray-700 dark:group-hover:text-zinc-200 transition-colors duration-300">
            {post.excerpt}
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-zinc-400 group-hover:text-gray-600 dark:group-hover:text-zinc-300 transition-colors duration-300">
            <span>{post.date}</span>
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </Link>
      </div>

      <style jsx>{`
        .notebook-lines {
          background-image: repeating-linear-gradient(
            transparent,
            transparent 23px,
            #d1d5db 23px,
            #d1d5db 24px
          );
        }
        .dark .notebook-lines {
          background-image: repeating-linear-gradient(
            transparent,
            transparent 23px,
            #4b5563 23px,
            #4b5563 24px
          );
        }
      `}</style>
    </div>
  );
}
