"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"
import { AnimatePresence, motion } from "framer-motion"

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <div className="md:hidden">
      <button onClick={toggleMenu} className="p-2 focus:outline-none" aria-label={isOpen ? "Close menu" : "Open menu"}>
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-16 left-0 right-0 bg-white dark:bg-gray-900 shadow-lg z-50 border-b border-gray-200 dark:border-gray-700"
          >
            <nav className="flex flex-col p-4 space-y-4">
              <Link
                href="/"
                onClick={closeMenu}
                className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
              >
                Home
              </Link>
              <Link
                href="/blog"
                onClick={closeMenu}
                className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
              >
                Blog
              </Link>
              <Link
                href="/projects"
                onClick={closeMenu}
                className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
              >
                Projects
              </Link>
              <Link
                href="/about"
                onClick={closeMenu}
                className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
              >
                About
              </Link>
              <Link
                href="/guestbook"
                onClick={closeMenu}
                className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
              >
                Guestbook
              </Link>
              <div className="px-4 py-2">
                <ThemeToggle />
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
