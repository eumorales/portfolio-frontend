"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right"
  distance?: number
  once?: boolean
}

export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
  direction = "up",
  distance = 50,
  once = true,
}: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const getDirectionOffset = () => {
    switch (direction) {
      case "up":
        return { y: distance }
      case "down":
        return { y: -distance }
      case "left":
        return { x: distance }
      case "right":
        return { x: -distance }
      default:
        return { y: distance }
    }
  }

  const variants = {
    hidden: {
      opacity: 0,
      ...getDirectionOffset(),
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        delay: delay,
      },
    },
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={variants}
      viewport={{ once }}
    >
      {children}
    </motion.div>
  )
}
