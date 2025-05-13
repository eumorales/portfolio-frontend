import { Calendar, Building2, Briefcase } from "lucide-react"
import AnimatedSection from "./animated-section"

interface ExperienceProps {
  title: string
  company: string
  period: string
  description: string
  skills: string[]
}

const experiences: ExperienceProps[] = [
  {
    title: "Senior Fullstack Developer",
    company: "Tech Company XYZ",
    period: "Jan 2023 - Present",
    description:
      "Leading the development of high-performance web applications using React, Next.js, and Node.js. Responsible for system architecture, CI/CD implementation, and mentoring junior developers.",
    skills: ["React", "Next.js", "Node.js", "TypeScript", "AWS", "Docker"],
  },
  {
    title: "Frontend Developer",
    company: "Digital Agency ABC",
    period: "Mar 2020 - Dec 2022",
    description:
      "Developed responsive and accessible interfaces for various clients using React and Vue.js. Worked closely with designers and backend developers to deliver high-quality projects.",
    skills: ["React", "Vue.js", "JavaScript", "SCSS", "Figma", "REST APIs"],
  },
  {
    title: "Junior Web Developer",
    company: "Innovative Startup",
    period: "Jun 2018 - Feb 2020",
    description:
      "Started my career developing frontend components and implementing responsive designs. Participated in agile projects and learned to work in a multidisciplinary team.",
    skills: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap", "PHP"],
  },
]

export default function ExperienceTimeline() {
  return (
    <div className="max-w-3xl mx-auto">
      {experiences.map((experience, index) => (
        <AnimatedSection key={index} delay={index * 0.2} className="mb-12 relative">

          {index < experiences.length - 1 && (
            <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-gray-200 dark:bg-zinc-700"></div>
          )}

          <div className="flex gap-6">
            <div className="flex-shrink-0 mt-1">
              <div className="w-12 h-12 rounded-full bg-black dark:bg-white text-white dark:text-black flex items-center justify-center">
                {index === 0 ? <Briefcase className="h-5 w-5" /> : <Building2 className="h-5 w-5" />}
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
        </AnimatedSection>
      ))}
    </div>
  )
}
