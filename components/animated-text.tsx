"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface AnimatedTextProps {
  text: string
  className?: string
  once?: boolean
}

export default function AnimatedText({ text, className = "", once = false }: AnimatedTextProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const words = text.split(" ")

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  }

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  }

  return (
    <motion.div
      className={`inline-block ${className}`}
      variants={container}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      viewport={{ once }}
    >
      {words.map((word, index) => (
        <motion.span variants={child} key={index} className="inline-block mr-1">
          {word}
        </motion.span>
      ))}
    </motion.div>
  )
}
