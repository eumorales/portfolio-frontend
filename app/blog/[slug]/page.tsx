import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Calendar, Clock, Globe } from "lucide-react"
import AnimatedSection from "@/components/animated-section"
import { blogPosts } from "../posts"

interface BlogPostParams {
  params: {
    slug: string
  }
}

const getCategoryColorClass = (category: string) => {
  switch (category) {
    case "Article":
      return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
    case "How To":
      return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
    case "Notes":
      return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
    case "List":
      return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200"
    default:
      return "bg-gray-100 text-gray-800 dark:bg-zinc-700 dark:text-zinc-200"
  }
}

// Make the function async
export default async function BlogPostPage({ params }: BlogPostParams) {
  // Await params to resolve the slug
  const { slug } = await params
  const post = blogPosts[slug]

  if (!post) {
    return notFound()
  }

  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950 text-black dark:text-white">
      <div className="container mx-auto px-4 py-16">
        <Link href="/blog" className="inline-flex items-center gap-2 mb-8 hover:underline">
          <ArrowLeft className="h-4 w-4" /> Back to blog
        </Link>

        <article className="max-w-3xl mx-auto">
          <AnimatedSection>
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className={`px-2 py-1 text-sm rounded-full ${getCategoryColorClass(post.category)}`}>
                {post.category}
              </span>
              <span className="flex items-center gap-1 px-2 py-1 text-sm rounded-full bg-gray-100 text-gray-800 dark:bg-zinc-700 dark:text-zinc-200">
                <Globe className="h-4 w-4" />
                {post.language}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-black mb-6">{post.title}</h1>

            <div className="flex items-center gap-4 text-gray-500 dark:text-zinc-400 mb-6">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-2 py-1 text-sm rounded-full bg-gray-100 text-gray-800 dark:bg-zinc-700 dark:text-zinc-200"
                >
                  #{tag}
                </span>
              ))}
            </div>

            <div
              className="prose prose-lg dark:prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </AnimatedSection>
        </article>
      </div>
    </main>
  )
}
