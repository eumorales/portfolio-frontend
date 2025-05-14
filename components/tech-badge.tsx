"use client"

import { getTechColor } from "@/lib/tech-colors"

interface TechBadgeProps {
  tech: string
  className?: string
  size?: "sm" | "md" | "lg"
}

export function TechBadge({ tech, className = "", size = "sm" }: TechBadgeProps) {
  const colors = getTechColor(tech)
  
  const sizeClasses = {
    sm: "text-xs px-2 py-1",
    md: "text-sm px-2.5 py-1.5",
    lg: "text-base px-3 py-2"
  }
  
  return (
    <span
      className={`font-medium ${colors.text} ${colors.bg} ${sizeClasses[size]} rounded-full transition-all duration-200 hover:scale-105 ${className}`}
    >
      {tech}
    </span>
  )
}