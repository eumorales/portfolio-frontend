import Image from "next/image"
import AnimatedSection from "./animated-section"

const technologies = [
  { name: "C", icon: "/assets/c.svg" },
  { name: "CSS3", icon: "/assets/css.svg" },
  { name: "Git", icon: "/assets/git.svg" },
  { name: "HTML5", icon: "/assets/html.svg" },
  { name: "Java", icon: "/assets/java.svg" },
  { name: "JavaScript", icon: "/assets/js.svg" },
  { name: "MySQL", icon: "/assets/mysql.svg" },
  { name: "Next.js", icon: "/assets/next.svg" },
  { name: "Node.js", icon: "/assets/node.svg" },
  { name: "PostgreSQL", icon: "/assets/postgre.svg" },
  { name: "Python", icon: "/assets/py.svg" },
  { name: "React", icon: "/assets/react.svg" }
]

export default function TechStack() {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 max-w-4xl mx-auto">
      {technologies.map((tech, index) => (
        <AnimatedSection key={index} delay={index * 0.05}>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 relative mb-2">
              <Image src={tech.icon || "/placeholder.svg"} alt={tech.name} fill className="object-contain" />
            </div>
            <span className="text-sm text-center">{tech.name}</span>
          </div>
        </AnimatedSection>
      ))}
    </div>
  )
}
