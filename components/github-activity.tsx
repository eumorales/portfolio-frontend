"use client"

import { useState, useEffect } from "react"

export default function GitHubActivity() {
  const [activityData, setActivityData] = useState<number[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchGitHubActivity = async () => {
      try {
        setLoading(true)

        const today = new Date()
        const data = Array.from({ length: 84 }, (_, i) => {
          const dayOfWeek = (today.getDay() - (i % 7) + 7) % 7

          if (dayOfWeek === 0 || dayOfWeek === 6) {
            return Math.random() > 0.8 ? Math.floor(Math.random() * 2) + 1 : 0
          }

          const baseChance = 0.6
          const activityChance = Math.random()

          if (activityChance > baseChance) {
            return Math.floor(Math.random() * 4) + 1
          }

          return 0
        })

        setActivityData(data.reverse())
        setLoading(false)
      } catch (error) {
        console.error("Error fetching GitHub activity:", error)
        setLoading(false)
      }
    }

    fetchGitHubActivity()
  }, [])

  const getActivityColor = (level: number) => {
    if (level === 0) return "bg-gray-300 dark:bg-zinc-700"
    if (level === 1) return "bg-green-200 dark:bg-green-900"
    if (level === 2) return "bg-green-300 dark:bg-green-700"
    if (level === 3) return "bg-green-400 dark:bg-green-600"
    return "bg-green-500 dark:bg-green-500"
  }

  if (loading) {
    return (
      <div className="grid grid-cols-12 gap-1">
        {Array.from({ length: 84 }).map((_, i) => (
          <div key={i} className="w-3 h-3 rounded-sm bg-gray-200 dark:bg-zinc-700 animate-pulse" />
        ))}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-12 gap-1">
      {activityData.map((level, i) => (
        <div
          key={i}
          className={`w-3 h-3 rounded-sm ${getActivityColor(level)} transition-all duration-200 hover:scale-110`}
          title={`Activity level: ${level}`}
        />
      ))}
    </div>
  )
}
