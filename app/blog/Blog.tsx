"use client"

import PageHeader from "@/components/page-header"
import BlogFilter from "./blog-filter"

export default function Blog() {
  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950 text-black dark:text-white">
      <div className="container max-w-6xl mx-auto px-4 py-16">
        <PageHeader title="Blog" />

        <div className="mb-8">
          <p className="text-gray-600 dark:text-zinc-300 text-lg">
            Thoughts, tutorials, and insights about web development, technology, and computer science.
          </p>
        </div>

        <BlogFilter />
      </div>
    </main>
  )
}
