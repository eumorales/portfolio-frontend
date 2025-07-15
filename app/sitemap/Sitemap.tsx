"use client"

import { LinkIcon, ExternalLink } from "lucide-react"
import Link from "next/link"
import PageHeader from "@/components/page-header"
import AnimatedSection from "@/components/animated-section"
import { blogPosts } from "@/app/blog/posts"

const siteStructure = [
  {
    url: "/",
    title: "Home",
    description: "Personal portfolio showcasing projects and skills as a fullstack developer",
  },
  {
    url: "/about",
    title: "About",
    description:
      "Learn more about my background, skills, experience, and education in computer science and web development",
  },
  {
    url: "/projects",
    title: "Projects",
    description: "Explore my featured and other development projects with descriptions, technologies used, and links",
  },
  {
    url: "/blog",
    title: "Blog",
    description: "Articles, tutorials, and notes on web development, programming, and computer science topics",
    children: Object.values(blogPosts).map((post) => ({
      url: `/blog/${post.id}`,
      title: post.title,
      description: post.excerpt,
    })),
  },
  {
    url: "/guestbook",
    title: "Guestbook",
    description: "Leave a comment, share your feedback, or just say hi! Log in with GitHub to post a message",
  },
  {
    url: "/sitemap",
    title: "Sitemap",
    description: "A complete map of all pages on gilbertomorales.com",
  },
  {
    url: "/sitemap.xml",
    title: "Sitemap XML",
    description: "XML version of the sitemap for search engines",
    isExternal: true,
  },
]

export default function Sitemap() {
  const baseUrl = "https://gilbertomorales.com"

  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950 text-black dark:text-white">
      <div className="container py-16">
        <PageHeader title="Sitemap" />

        <AnimatedSection className="mb-8">
          <p className="text-gray-600 dark:text-zinc-300 mb-6 text-lg">
            This page helps you navigate through the website and find the content you're looking for.
          </p>

          <div className="flex items-center gap-3 mb-8 text-sm text-gray-500 dark:text-zinc-400 border-l-4 border-gray-200 dark:border-zinc-700 pl-4 py-2">
            <LinkIcon className="h-4 w-4" />
            <p className="text-black dark:text-white">
              <Link
                href="/sitemap.xml"
                className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
              >
                View XML Sitemap <ExternalLink className="h-3 w-3" />
              </Link>
            </p>
          </div>
        </AnimatedSection>

        <div className="space-y-8">
          {siteStructure.map((page, index) => (
            <AnimatedSection key={page.url} delay={index * 0.1}>
              <div className="group">
                <div className="flex items-start gap-3 mb-2">
                  <LinkIcon className="h-5 w-5 mt-1 text-gray-400 dark:text-gray-500 flex-shrink-0" />
                  <div className="flex-grow">
                    <Link
                      href={page.isExternal ? `${baseUrl}${page.url}` : page.url}
                      target={page.isExternal ? "_blank" : undefined}
                      rel={page.isExternal ? "noopener noreferrer" : undefined}
                      className="text-lg font-semibold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
                    >
                      {baseUrl}
                      {page.url}
                      {page.isExternal && <ExternalLink className="h-3 w-3" />}
                    </Link>
                  </div>
                </div>

                {page.children && page.children.length > 0 && (
                  <div className="ml-8 pl-8 border-l border-gray-200 dark:border-zinc-800 mt-4 space-y-4">
                    {page.children.map((child) => (
                      <div key={child.url} className="flex items-start gap-3">
                        <LinkIcon className="h-4 w-4 mt-1 text-gray-400 dark:text-gray-500 flex-shrink-0" />
                        <div>
                          <Link
                            href={child.url}
                            className="font-medium text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
                          >
                            {baseUrl}
                            {child.url}
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </main>
  )
}
