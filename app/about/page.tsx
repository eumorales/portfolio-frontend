import Image from "next/image"
import PageHeader from "@/components/page-header"
import AnimatedSection from "@/components/animated-section"
import SpotifyStats from "@/components/spotify-stats"
import TechStack from "@/components/tech-stack"
import Link from "next/link"
import { Github, Linkedin, Twitter, Calendar, Building2, Briefcase, GraduationCap, Laptop, Instagram } from "lucide-react"

const experiences = [
  {
    title: "Internship - Healthcare Teleplatform Enhancement",
    company: "Franciscan University",
    period: "Sep 2023 - Aug 2024",
    description:
      "Assisted in the creation and maintenance of databases. Learned and applied knowledge in various programming languages. Contributed to solving project-related problems.",
    skills: ["SQL", "Problem Solving", "Programming"],
    icon: <GraduationCap className="h-5 w-5" />,
  },
  {
    title: "Computer Technician",
    company: "Freelance",
    period: "Present",
    description:
      "Assembly and maintenance of hardware and software, and technical support on Windows systems.",
    skills: ["Hardware", "Software", "Windows", "Linux", "Technical Support"],
    icon: <Laptop className="h-5 w-5" />,
  },
  {
    title: "Full-Stack Developer",
    company: "Freelance",
    period: "Present",
    description:
      "Development of websites, web applications, and tools using technologies such as React, HTML, JavaScript, Python, Java, TypeScript, and others.",
    skills: ["React", "HTML", "JavaScript", "Python", "Java", "TypeScript"],
    icon: <Briefcase className="h-5 w-5" />,
  },
]

export default function About() {
  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950 text-black dark:text-white scroll-smooth">
      <div className="container max-w-4xl mx-auto px-4 py-16">
        <PageHeader title="About Me" />

        <div className="mb-12">
          
          <div className="flex flex-col md:flex-row gap-8 items-start">
            
            <div className="w-32 h-32 md:w-40 md:h-40 relative mb-4 md:mb-0">
              <Image
                src="/assets/perfil.jpg"
                alt="Profile picture"
                fill
                className="object-cover rounded-full"
              />
            </div>

            <div className="flex flex-col">
              
              <h2 className="text-2xl font-bold mb-1">Gilberto Morales</h2>
              <p className="text-gray-600 dark:text-zinc-300 mb-4">Fullstack Developer</p>

              <div className="flex gap-4 mb-6">
                <Link href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5 hover:text-gray-600 dark:hover:text-zinc-300" />
                </Link>
                <Link href="https://instagram.com/gilbertomrls" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-5 w-5 hover:text-gray-600 dark:hover:text-zinc-300" />
                </Link>
              </div>

              <Link
                href="/cv.pdf"
                target="_blank"
                className="text-sm inline-flex items-center gap-2 border border-black dark:border-white px-4 py-2 rounded-md hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors w-fit"
              >
                Download CV
              </Link>
            </div>
      
          </div>

        </div>
      


        <AnimatedSection className="mb-12">
          <h2 className="text-2xl font-bold mb-6">About</h2>
          <div className="space-y-4 text-gray-600 dark:text-zinc-300">
            <p>
              Hello! I'm a fullstack developer passionate about building engaging and functional web experiences. My journey with programming began at a young age, sparked by a curiosity to create plugins for games — and that passion has only grown since then.
            </p>
            <p>
              Over the years, I’ve developed a strong foundation in technologies like React, HTML, JavaScript, Python, Java, TypeScript, and more. My focus is on writing clean, maintainable code and designing scalable systems that deliver great user experiences.
            </p>
            <p>
              Outside of programming, I enjoy playing volleyball and video games — hobbies that keep me balanced and often inspire fresh ideas for my projects.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Spotify Stats</h2>
          <SpotifyStats />
        </AnimatedSection>

        <AnimatedSection className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Technologies</h2>
          <TechStack />
        </AnimatedSection>

        <AnimatedSection className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Experience</h2>
          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <div key={index} className="mb-12 relative">
                {index < experiences.length - 1 && (
                  <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-gray-200 dark:bg-zinc-700"></div>
                )}

                <div className="flex gap-6">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-12 h-12 rounded-full bg-black dark:bg-white text-white dark:text-black flex items-center justify-center">
                      {experience.icon}
                    </div>
                  </div>

                  <div className="flex-grow">
                    <h3 className="text-xl font-bold">{experience.title}</h3>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mt-1 mb-3 text-gray-600 dark:text-zinc-300">
                      <div className="flex items-center gap-1">
                        <Building2 className="h-4 w-4" />
                        <span>{experience.company}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{experience.period}</span>
                      </div>
                    </div>

                    <p className="text-gray-700 dark:text-zinc-300 mb-4">{experience.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {experience.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="bg-gray-100 dark:bg-zinc-800 px-3 py-1 rounded-full text-sm text-gray-700 dark:text-zinc-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </main>
  )
}
