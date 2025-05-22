"use client"

import { useEffect, useState } from "react"
import { ArrowLeft, MessageSquare, Github } from "lucide-react"
import AnimatedSection from "@/components/animated-section"
import { useTheme } from "next-themes"
import PageHeader from "@/components/page-header"

export default function Guestbook() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    const script = document.createElement("script")
    script.src = "https://giscus.app/client.js"
    script.setAttribute("data-repo", "eumorales/eumorales")
    script.setAttribute("data-repo-id", "R_kgDOKDzZDA")
    script.setAttribute("data-category", "General")
    script.setAttribute("data-category-id", "DIC_kwDOKDzZDM4Cqdkl")
    script.setAttribute("data-mapping", "specific")
    script.setAttribute("data-term", "Guestbook")
    script.setAttribute("data-strict", "0")
    script.setAttribute("data-reactions-enabled", "1")
    script.setAttribute("data-emit-metadata", "0")
    script.setAttribute("data-input-position", "bottom")
    script.setAttribute("data-theme", theme === "dark" ? "dark_dimmed" : "light")
    script.setAttribute("data-lang", "pt")
    script.setAttribute("data-loading", "lazy")
    script.setAttribute("crossorigin", "anonymous")
    script.async = true

    const giscusContainer = document.getElementById("giscus-container")
    if (giscusContainer) {
      giscusContainer.innerHTML = ""
      giscusContainer.appendChild(script)
    }

    return () => {
      if (giscusContainer && giscusContainer.contains(script)) {
        giscusContainer.removeChild(script)
      }
    }
  }, [theme, mounted])

  if (!mounted) return null

  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950 text-black dark:text-white">
      <div className="container max-w-4xl mx-auto px-4 py-16">

        <PageHeader title="Guestbook" />

        <AnimatedSection className="">
          <p className="text-gray-600 dark:text-zinc-300 mb-6 text-lg">
            Leave a comment, share your feedback, or just say hi! Log in with GitHub to post a message.
          </p>

      <div className="flex items-center gap-3 mb-8 text-sm text-gray-500 dark:text-zinc-400 border-l-4 border-gray-200 dark:border-zinc-700 pl-4 py-2">
            <MessageSquare className="h-4 w-4" />
            <p className="text-black dark:text-white">
              
                Comments are powered by{" "}
                <a
                  href="https://giscus.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "underline", fontWeight: "bold" }}
                >
                  Giscus
                </a>.
             
            </p>
          </div>


          <div className="p-6 bg-gray-50 dark:bg-zinc-900 rounded-lg border border-gray-200 dark:border-zinc-800 shadow-sm">
            <div id="giscus-container" className="giscus"></div>
          </div>
        </AnimatedSection>

        <style jsx global>{`
          .giscus {
            width: 100%;
          }
          
          .giscus img:not(.avatar) {
            max-width: 100%;
            height: auto;
            border-radius: 0.5rem;
          }
          
          .giscus .avatar {
            border-radius: 50%;
          }
          
          .giscus a {
            color: inherit;
            text-decoration: underline;
            text-underline-offset: 2px;
          }
          
          .giscus button {
            border-radius: 0.375rem;
            transition: all 0.2s;
          }
          
          .giscus textarea, .giscus input {
            border-radius: 0.375rem;
            border: 1px solid #e5e7eb;
            background-color: white;
          }
          
          .dark .giscus textarea, .dark .giscus input {
            border-color: #374151;
            background-color: #1f2937;
          }
        `}</style>
      </div>
    </main>
  )
}
