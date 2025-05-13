import Link from "next/link"
import { ArrowLeft, Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react"
import AnimatedText from "@/components/animated-text"
import AnimatedSection from "@/components/animated-section"

export default function Contact() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950 text-black dark:text-white">
      <div className="container mx-auto px-4 py-16">
        <Link href="/" className="inline-flex items-center gap-2 mb-8 hover:underline">
          <ArrowLeft className="h-4 w-4" /> Back to home
        </Link>

        <AnimatedText text="Contact" className="text-4xl md:text-5xl font-black mb-16" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <AnimatedSection>
            <h2 className="text-2xl font-bold mb-6">Get in touch</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              I'm always open to new opportunities, collaborations, or just to exchange ideas about technology and
              development. Fill out the form or use one of the direct contact channels.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                  <a href="mailto:your@email.com" className="font-medium hover:underline">
                    your@email.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
                  <a href="tel:+1234567890" className="font-medium hover:underline">
                    (123) 456-7890
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                  <p className="font-medium">New York, USA</p>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-bold mb-4">Social media</h3>
            <div className="flex gap-4">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-900 dark:bg-gray-700 text-white flex items-center justify-center hover:opacity-90 transition-opacity"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>

              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:opacity-90 transition-opacity"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>

              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-sky-500 text-white flex items-center justify-center hover:opacity-90 transition-opacity"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full border border-gray-300 dark:border-gray-600 rounded-md p-3 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full border border-gray-300 dark:border-gray-600 rounded-md p-3 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block mb-2 font-medium">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full border border-gray-300 dark:border-gray-600 rounded-md p-3 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                  placeholder="Message subject"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full border border-gray-300 dark:border-gray-600 rounded-md p-3 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                  placeholder="Your message"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-black dark:bg-white text-white dark:text-black py-3 rounded-md hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
              >
                Send message
              </button>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </main>
  )
}
