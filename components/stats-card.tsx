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

export default function StatsCard({ icon, title, stats, delay = 0, className, href }: StatsCardProps) {
  const cardContent = (
    <AnimatedSection
      delay={delay}
      className={cn(
        "bg-white dark:bg-zinc-800 p-6 rounded-lg border border-gray-200 dark:border-zinc-700",
        "transition-all duration-300 hover:shadow-md hover:-translate-y-1",
        className,
      )}
    >
      <div className="flex flex-col items-center justify-center mb-4 gap-2 text-center">
        <div className="flex items-center justify-center gap-2">
          <span className="text-gray-500 dark:text-gray-400">{icon}</span>
        </div>
        {href && (
          <div className="text-gray-400 dark:text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 17L17 7" />
              <path d="M7 7h10v10" />
            </svg>
          </div>
        )}
      </div>

      <div className="grid grid-cols-3 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <p className="text-xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
            <p className="text-sm text-gray-500 dark:text-zinc-400">{stat.label}</p>
          </div>
        ))}
      </div>
    </AnimatedSection>
  )

  if (href) {
    return (
      <a href={href} className="block group">
        {cardContent}
      </a>
    )
  }

  return cardContent
}
