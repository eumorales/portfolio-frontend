import type React from "react"
import AnimatedSection from "./animated-section"
import { cn } from "@/lib/utils"

interface StatProps {
  label: string
  value: string
}

interface StatsCardProps {
  icon: React.ReactNode
  title: string
  stats: StatProps[]
  delay?: number
  className?: string
  href?: string
}

export default function StatsCard({ 
  icon, 
  title, 
  stats, 
  delay = 0, 
  className, 
  href 
}: StatsCardProps) {
  
  const cardContent = (
    <AnimatedSection
      delay={delay}
      className={cn(
        "bg-white dark:bg-zinc-800 p-4 sm:p-5 rounded-xl border border-gray-200 dark:border-zinc-700",
        "transition-all duration-300 hover:shadow-md",
        className,
      )}
    >
      <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
        <div className="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-gray-100 dark:bg-zinc-700 text-gray-700 dark:text-gray-300">
          {icon}
        </div>
        <div>
          <h3 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white">{title}</h3>
          <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400">Updated just now</p>
        </div>
      </div>
      
      <div className="grid grid-cols-3 gap-2 sm:gap-3">
        {stats.map((stat, index) => (
          <div 
            key={index} 
            className="bg-gray-50 dark:bg-zinc-800/80 rounded-lg p-2 sm:p-3 border border-gray-100 dark:border-zinc-700/50"
          >
            <p className="text-[10px] font-medium text-gray-500 dark:text-zinc-400 uppercase tracking-wide truncate">
              {stat.label}
            </p>
            <p className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
              {stat.value}
            </p>
          </div>
        ))}
      </div>
    </AnimatedSection>
  )

  if (href) {
    return (
      <a href={href} className="block" target="_blank" rel="noopener noreferrer">
        {cardContent}
      </a>
    )
  }

  return cardContent
}