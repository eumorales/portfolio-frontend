import type React from "react"
import AnimatedSection from "./animated-section"

interface StatProps {
  label: string
  value: string
}

interface StatsCardProps {
  icon: React.ReactNode
  title: string
  stats: StatProps[]
  delay?: number
}

export default function StatsCard({ icon, title, stats, delay = 0 }: StatsCardProps) {
  return (
    <AnimatedSection
      delay={delay}
      className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow"
    >
      <div className="flex items-center gap-2 mb-4">
        {icon}
        <span className="font-medium">{title}</span>
      </div>

      <div className="grid grid-cols-3 gap-2">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <p className="text-xl font-bold">{stat.value}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</p>
          </div>
        ))}
      </div>
    </AnimatedSection>
  )
}
