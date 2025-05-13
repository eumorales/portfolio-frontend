import Link from "next/link"
import { Calendar, Clock, Globe } from "lucide-react"
import AnimatedSection from "@/components/animated-section"
import PageHeader from "@/components/page-header"

interface BlogPost {
  id: string
  title: string
  excerpt: string
  date: string
  readTime: string
  language: string
  category: "Article" | "How To" | "Notes" | "List"
  tags: string[]
  year: number
}

const blogPosts: BlogPost[] = [
  {
    id: "r-concorrencia-e-processos",
    title: "Programação Concorrente, Escalonamento e Processos",
    excerpt:
      "Resumo elaborado para a prova de Sistemas Operacionais, abordando de forma clara os principais tópicos sobre concorrência, threads, escalonamento e sincronização — destinado ao uso próprio.",
    date: "Apr 24, 2025",
    readTime: "4 min read",
    language: "Portuguese",
    category: "Notes",
    tags: ["sistemas operacionais", "concorrencia", "threads", "escalonamento"],
    year: 2025,
  },

  {
    id: "r-registradores-assembly",
    title: "Registradores e Linguagem Assembly",
    excerpt:
      "Resumo elaborado para revisão dos conteúdos de registradores e linguagem Assembly, com foco nas operações básicas e representação em linguagem de máquina.",
    date: "Dec 6, 2023",
    readTime: "3 min read",
    language: "Portuguese",
    category: "Notes",
    tags: ["arquitetura", "registradores", "assembly"],
    year: 2023,
  }

]

const groupPostsByYear = (posts: BlogPost[]) => {
  const grouped: Record<number, BlogPost[]> = {}

  posts.forEach((post) => {
    if (!grouped[post.year]) {
      grouped[post.year] = []
    }
    grouped[post.year].push(post)
  })

  return Object.entries(grouped)
    .sort(([yearA], [yearB]) => Number(yearB) - Number(yearA))
    .map(([year, posts]) => ({
      year: Number(year),
      posts,
    }))
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
      return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
  }
}

export default function Blog() {
  const groupedPosts = groupPostsByYear(blogPosts)

  return (
    <main className="min-h-screen bg-white dark:bg-gray-950 text-black dark:text-white scroll-smooth">
      <div className="container max-w-4xl mx-auto px-4 py-16">
        <PageHeader title="Blog" />

        <div className="space-y-16">
          {groupedPosts.map(({ year, posts }) => (
            <div key={year} className="space-y-12">
              <h2 className="text-3xl font-bold border-b border-gray-200 dark:border-gray-800 pb-4">{year}</h2>

              {posts.map((post, index) => (
                <AnimatedSection key={post.id} delay={index * 0.1}>
                  <article className="group" id={post.id}>
                    <Link href={`/blog/${post.id}`} className="block">
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <span className={`px-2 py-0.5 text-xs rounded-full ${getCategoryColorClass(post.category)}`}>
                          {post.category}
                        </span>
                        <span className="flex items-center gap-1 px-2 py-0.5 text-xs rounded-full bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200">
                          <Globe className="h-3 w-3" />
                          {post.language}
                        </span>
                        {post.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-0.5 text-xs rounded-full bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>

                      <h3 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                        {post.title}
                      </h3>

                      <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>

                      <p className="text-gray-600 dark:text-gray-300 mb-4">{post.excerpt}</p>

                      <div className="text-black dark:text-white font-medium underline-offset-4 group-hover:underline">
                        Read more
                      </div>
                    </Link>
                  </article>

                  {index < posts.length - 1 && (
                    <div className="border-b border-gray-100 dark:border-gray-800 mt-12"></div>
                  )}
                </AnimatedSection>
              ))}
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
