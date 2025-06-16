// components/GitHubCard.tsx
"use client";

import Link from "next/link";
import { Github } from "lucide-react";
import GitHubActivity from "@/components/github-activity";
import { useGithubStats } from "@/hooks/github";

export default function GitHubCard() {
  const githubStats = useGithubStats("eumorales");

  return (
    <Link
      href="https://github.com/eumorales"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="bg-gray-100 dark:bg-zinc-800/50 rounded-xl p-6 h-full flex flex-col cursor-pointer hover:bg-gray-200 dark:hover:bg-zinc-800/70 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg group border border-gray-200/50 dark:border-zinc-700/50 shadow-lg">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-gray-300 dark:bg-zinc-600 rounded-full flex items-center justify-center group-hover:bg-gray-400 dark:group-hover:bg-zinc-500 transition-colors duration-300">
            <Github className="h-5 w-5 text-gray-700 dark:text-gray-200 group-hover:scale-110 transition-transform duration-300" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 dark:text-gray-200 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors duration-300">
              eumorales
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-xs group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
              My projects
            </p>
          </div>
        </div>

        <div className="mb-4">
          <GitHubActivity />
        </div>

        <div className="mt-auto pt-2">
          {githubStats && (
            <div className="grid grid-cols-3 gap-2 w-full">
              <div className="text-center group-hover:scale-105 transition-transform duration-300">
                <p className="text-lg font-bold text-gray-800 dark:text-gray-200">
                  {githubStats.stars}
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  Stars
                </p>
              </div>
              <div className="text-center group-hover:scale-105 transition-transform duration-300">
                <p className="text-lg font-bold text-gray-800 dark:text-gray-200">
                  {githubStats.followers}
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  Followers
                </p>
              </div>
              <div className="text-center group-hover:scale-105 transition-transform duration-300">
                <p className="text-lg font-bold text-gray-800 dark:text-gray-200">
                  {githubStats.repos}
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  Repos
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
