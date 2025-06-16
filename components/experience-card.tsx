"use client";

import { Briefcase } from "lucide-react";

export default function ExperienceCard() {
  return (
    <div className="relative bg-gray-100 dark:bg-zinc-800 rounded-xl p-5 hover:shadow-xl transition-all duration-300 hover:scale-[1.01] group border border-gray-200/50 dark:border-zinc-700/50 shadow-lg overflow-hidden">
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center group-hover:bg-purple-200 dark:group-hover:bg-purple-900/50 transition-all duration-300">
            <Briefcase className="h-4 w-4 text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform duration-300" />
          </div>
          <div>
            <h3 className="font-medium group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
              Experience
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3">
          <div className="bg-gray-50 dark:bg-zinc-700/50 p-3 rounded group-hover:bg-purple-50 dark:group-hover:bg-purple-900/20 transition-colors duration-300">
            <p className="text-xs text-gray-500 dark:text-zinc-400 uppercase">
              YEARS
            </p>
            <p className="font-bold">3+</p>
          </div>
          <div className="bg-gray-50 dark:bg-zinc-700/50 p-3 rounded group-hover:bg-purple-50 dark:group-hover:bg-purple-900/20 transition-colors duration-300">
            <p className="text-xs text-gray-500 dark:text-zinc-400 uppercase">
              TECHNOLOGIES
            </p>
            <p className="font-bold">10+</p>
          </div>
          <div className="bg-gray-50 dark:bg-zinc-700/50 p-3 rounded group-hover:bg-purple-50 dark:group-hover:bg-purple-900/20 transition-colors duration-300">
            <p className="text-xs text-gray-500 dark:text-zinc-400 uppercase">
              FOCUS
            </p>
            <p className="font-bold">Fullstack</p>
          </div>
        </div>
      </div>
    </div>
  );
}
