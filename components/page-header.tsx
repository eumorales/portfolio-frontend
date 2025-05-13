import Link from "next/link"
import { ArrowLeft } from "lucide-react"

interface PageHeaderProps {
  title: string
  backLink?: string
  backLinkText?: string
}

export default function PageHeader({ title, backLink = "/", backLinkText = "Back to home" }: PageHeaderProps) {
  return (
    <div className="mb-12">
      {backLink && (
        <Link href={backLink} className="inline-block mb-6 text-sm text-gray-500 dark:text-zinc-400 hover:underline">
          <div className="flex items-center gap-1">
            <ArrowLeft className="h-4 w-4" />
            <span>{backLinkText}</span>
          </div>
        </Link>
      )}
      <h1 className="text-4xl md:text-5xl font-black">{title}</h1>
    </div>
  )
}
