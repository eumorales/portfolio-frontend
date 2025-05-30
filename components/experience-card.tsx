// components/ExperienceCard.tsx
"use client"

import { Briefcase } from "lucide-react"

export default function ExperienceCard() {
  return (
    <div className="bg-white dark:bg-zinc-800 rounded-xl p-5 hover:shadow-md transition-all duration-300 hover:scale-[1.01] group">
      <div className="flex items-center gap-2 mb-4">
        <Briefcase className="h-5 w-5 text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform duration-300" />
        <div>
          <h3 className="font-medium group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
            Experience
          </h3>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <div className="bg-gray-50 dark:bg-zinc-700/50 p-3 rounded group-hover:bg-purple-50 dark:group-hover:bg-purple-900/20 transition-colors duration-300">
          <p className="text-xs text-gray-500 dark:text-zinc-400 uppercase">YEARS</p>
          <p className="font-bold">3+</p>
        </div>
        <div className="bg-gray-50 dark:bg-zinc-700/50 p-3 rounded group-hover:bg-purple-50 dark:group-hover:bg-purple-900/20 transition-colors duration-300">
          <p className="text-xs text-gray-500 dark:text-zinc-400 uppercase">TECHNOLOGIES</p>
          <p className="font-bold">10+</p>
        </div>
        <div className="bg-gray-50 dark:bg-zinc-700/50 p-3 rounded group-hover:bg-purple-50 dark:group-hover:bg-purple-900/20 transition-colors duration-300">
          <p className="text-xs text-gray-500 dark:text-zinc-400 uppercase">FOCUS</p>
          <p className="font-bold">Fullstack</p>
        </div>
      </div>
    </div>
  )
}
