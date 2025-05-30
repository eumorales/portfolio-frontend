"use client"

import { BookOpen } from "lucide-react"

export default function EducationCard() {
  return (
    <div className="bg-white dark:bg-zinc-800 rounded-xl p-5 hover:shadow-md transition-all duration-300 hover:scale-[1.01] group">
      <div className="flex items-center gap-2 mb-4">
        <BookOpen className="h-5 w-5 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300" />
        <div>
          <h3 className="font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
            Education
          </h3>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <div className="bg-gray-50 dark:bg-zinc-700/50 p-3 rounded group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 transition-colors duration-300">
          <p className="text-xs text-gray-500 dark:text-zinc-400 uppercase">DEGREE</p>
          <p className="font-bold">BSc CS</p>
        </div>
        <div className="bg-gray-50 dark:bg-zinc-700/50 p-3 rounded group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 transition-colors duration-300">
          <p className="text-xs text-gray-500 dark:text-zinc-400 uppercase">SEMESTER</p>
          <p className="font-bold">5th</p>
        </div>
        <div className="bg-gray-50 dark:bg-zinc-700/50 p-3 rounded group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 transition-colors duration-300">
          <p className="text-xs text-gray-500 dark:text-zinc-400 uppercase">UNIVERSITY</p>
          <p className="font-bold">UFN</p>
        </div>
      </div>
    </div>
  )
}
