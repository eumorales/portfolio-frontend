// "use client"

// import type React from "react"

// import { useState } from "react"
// import { Github } from "lucide-react"
// import PageHeader from "@/components/page-header"
// import AnimatedSection from "@/components/animated-section"
// import Image from "next/image"

// interface GuestbookEntry {
//   id: string
//   name: string
//   avatarUrl: string
//   message: string
//   createdAt: string
// }

// const sampleEntries: GuestbookEntry[] = [
//   {
//     id: "1",
//     name: "Gilberto",
//     avatarUrl: "/placeholder.svg?height=40&width=40",
//     message: "Mensagem de teste",
//     createdAt: "2 days ago",
//   },
// ]

// export default function Guestbook() {
//   const [isSignedIn, setIsSignedIn] = useState(false)
//   const [message, setMessage] = useState("")
//   const [entries, setEntries] = useState<GuestbookEntry[]>(sampleEntries)
//   const [isSubmitting, setIsSubmitting] = useState(false)

//   const handleSignIn = () => {
//     setIsSignedIn(true)
//   }

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     if (!message.trim()) return

//     setIsSubmitting(true)

//     // Simulate API call
//     setTimeout(() => {
//       const newEntry: GuestbookEntry = {
//         id: Date.now().toString(),
//         name: "You",
//         avatarUrl: "/placeholder.svg?height=40&width=40",
//         message: message,
//         createdAt: "Just now",
//       }

//       setEntries([newEntry, ...entries])
//       setMessage("")
//       setIsSubmitting(false)
//     }, 500)
//   }

//   return (
//     <main className="min-h-screen bg-white dark:bg-gray-950 text-black dark:text-white">
//       <div className="container max-w-3xl mx-auto px-4 py-16">
//         <PageHeader title="Guestbook" />

//         <AnimatedSection className="mb-8">
//           <p className="text-gray-600 dark:text-gray-300 mb-6">
//             Leave a comment, feedback, or just say hi! Sign in with GitHub to leave a message.
//           </p>

//           {!isSignedIn ? (
//             <button
//               onClick={handleSignIn}
//               className="flex items-center gap-2 bg-gray-900 text-white dark:bg-white dark:text-black px-4 py-2 rounded-md hover:bg-gray-700 dark:hover:bg-gray-200 transition-colors"
//             >
//               <Github className="h-5 w-5" />
//               Sign in with GitHub
//             </button>
//           ) : (
//             <form onSubmit={handleSubmit} className="space-y-4">
//               <div>
//                 <textarea
//                   value={message}
//                   onChange={(e) => setMessage(e.target.value)}
//                   placeholder="Your message..."
//                   className="w-full border border-gray-300 dark:border-gray-600 rounded-md p-3 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
//                   rows={3}
//                   required
//                 />
//               </div>
//               <div className="flex justify-end">
//                 <button
//                   type="submit"
//                   disabled={isSubmitting}
//                   className="bg-black dark:bg-white text-white dark:text-black px-4 py-2 rounded-md hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors disabled:opacity-50"
//                 >
//                   {isSubmitting ? "Submitting..." : "Submit"}
//                 </button>
//               </div>
//             </form>
//           )}
//         </AnimatedSection>

//         <div className="space-y-6">
//           <h2 className="text-xl font-bold">Recent messages</h2>

//           {entries.length === 0 ? (
//             <p className="text-gray-500 dark:text-gray-400 italic">No messages yet. Be the first to sign!</p>
//           ) : (
//             entries.map((entry, index) => (
//               <AnimatedSection
//                 key={entry.id}
//                 delay={index * 0.1}
//                 className="border-b border-gray-100 dark:border-gray-800 pb-6 last:border-0"
//               >
//                 <div className="flex gap-4">
//                   <div className="flex-shrink-0 w-10 h-10 relative rounded-full overflow-hidden">
//                     <Image src={entry.avatarUrl || "/placeholder.svg"} alt={entry.name} fill className="object-cover" />
//                   </div>
//                   <div className="flex-grow">
//                     <div className="flex justify-between items-start mb-1">
//                       <h3 className="font-medium">{entry.name}</h3>
//                       <span className="text-sm text-gray-500 dark:text-gray-400">{entry.createdAt}</span>
//                     </div>
//                     <p className="text-gray-600 dark:text-gray-300">{entry.message}</p>
//                   </div>
//                 </div>
//               </AnimatedSection>
//             ))
//           )}
//         </div>
//       </div>
//     </main>
//   )
// }
import Link from "next/link"
import { ArrowLeft, Bell, Calendar } from 'lucide-react'
import AnimatedText from "@/components/animated-text"
import AnimatedSection from "@/components/animated-section"
import Image from "next/image"

export default function Guestbook() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950 text-black dark:text-white">
      <div className="container max-w-4xl mx-auto px-4 py-16">
        <Link href="/" className="inline-flex items-center gap-2 mb-8 hover:underline">
          <ArrowLeft className="h-4 w-4" /> Back to home
        </Link>

        <div className="flex flex-col items-center text-center">
          <AnimatedText text="Coming Soon" className="text-6xl md:text-6xl mt-12 font-black mb-6" />
          
          <AnimatedSection delay={0.2} className="mb-12">
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              I'm working on something exciting that will be available here soon.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.3} className="">
            <div className="relative w-full max-w-md h-64 md:h-80">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Coming Soon Illustration"
                fill
                className="object-contain"
              />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.5} className="mt-4">
            <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
              <Calendar className="h-5 w-5" />
              <p>Expected launch: H2 2025</p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </main>
  )
}

