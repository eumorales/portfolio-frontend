"use client";

import { BookOpen } from "lucide-react";

export default function EducationCard() {
  return (
    <div className="relative bg-gray-100 dark:bg-zinc-800 rounded-xl p-5 hover:shadow-xl transition-all duration-300 hover:scale-[1.01] group border border-gray-200/50 dark:border-zinc-700/50 shadow-lg overflow-hidden">
      {/* Book/education pattern background */}

      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50 transition-all duration-300">
            <BookOpen className="h-4 w-4 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300" />
          </div>
          <div>
            <h3 className="font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
              Education
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3">
          <div className="bg-gray-50 dark:bg-zinc-700/50 p-3 rounded group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 transition-colors duration-300">
            <p className="text-xs text-gray-500 dark:text-zinc-400 uppercase">
              DEGREE
            </p>
            <p className="font-bold">BSc CS</p>
          </div>
          <div className="bg-gray-50 dark:bg-zinc-700/50 p-3 rounded group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 transition-colors duration-300">
            <p className="text-xs text-gray-500 dark:text-zinc-400 uppercase">
              SEMESTER
            </p>
            <p className="font-bold">6th</p>
          </div>
          <div className="bg-gray-50 dark:bg-zinc-700/50 p-3 rounded group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 transition-colors duration-300">
            <p className="text-xs text-gray-500 dark:text-zinc-400 uppercase">
              UNIVERSITY
            </p>
            <p className="font-bold">UFN</p>
          </div>
        </div>
      </div>
    </div>
  );
}
