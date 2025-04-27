
"use client"
import Link from "next/link"
import Image from "next/image"
import { Github, ExternalLink, Calendar } from "lucide-react"
import { Badge } from "@/components/ui/badge"

// Sample project data - replace with your actual projects
const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce platform with product management, cart functionality, and payment processing.",
    image: "/assets/Screenshot 2025-04-27 013857.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
    githubUrl: "https://github.com/jinx6ix/ecommerce-html",
    liveUrl: "https://ecommerce-html-nu.vercel.app/",
    date: "March 2025s",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "A productivity application for managing tasks, projects, and deadlines with team collaboration features.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["React", "Redux", "Node.js", "Express", "MongoDB"],
    githubUrl: "https://github.com/yourusername/task-manager",
    liveUrl: "https://task-manager-demo.vercel.app",
    date: "January 2023",
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "A weather application that provides real-time forecasts, historical data, and interactive maps.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["React", "Chart.js", "OpenWeather API", "Mapbox"],
    githubUrl: "https://github.com/yourusername/weather-app",
    liveUrl: "https://weather-dashboard-demo.vercel.app",
    date: "November 2022",
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing my skills, projects, and professional experience.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Next.js", "Framer Motion", "Three.js", "Tailwind CSS"],
    githubUrl: "https://github.com/yourusername/portfolio",
    liveUrl: "https://yourportfolio.com",
    date: "September 2022",
  },
  {
    id: 5,
    title: "Blog Platform",
    description:
      "A content management system for creating, editing, and publishing blog posts with user authentication.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Next.js", "MDX", "Auth.js", "Vercel"],
    githubUrl: "https://github.com/yourusername/blog-platform",
    liveUrl: "https://blog-platform-demo.vercel.app",
    date: "July 2022",
  },
  {
    id: 6,
    title: "Social Media Dashboard",
    description: "An analytics dashboard for tracking social media metrics across multiple platforms.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Vue.js", "D3.js", "Firebase", "Tailwind CSS"],
    githubUrl: "https://github.com/yourusername/social-dashboard",
    liveUrl: "https://social-dashboard-demo.vercel.app",
    date: "May 2022",
  },
]

export default function Projects() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="container mx-auto py-12 md:py-24">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">My Projects</h1>
        <p className="text-xl text-muted-foreground text-center max-w-2xl mx-auto">
          A collection of my work, side projects, and open source contributions. Each project represents different
          skills and technologies Ive worked with.
        </p>
      </header>

      {/* Projects Grid */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col border rounded-lg overflow-hidden bg-card shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative h-48 w-full">
                <Image src={project.image} alt={project.title} fill className="object-cover" />
              </div>

              <div className="flex-1 p-6 flex flex-col">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-xl font-bold">{project.title}</h2>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-1" />
                    {project.date}
                  </div>
                </div>

                <p className="text-muted-foreground mb-4 flex-1">{project.description}</p>

                <div className="mb-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-4 mt-auto">
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm font-medium hover:underline"
                  >
                    <Github className="h-4 w-4 mr-1" />
                    Code
                  </Link>
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm font-medium hover:underline"
                  >
                    <ExternalLink className="h-4 w-4 mr-1" />
                    Live Demo
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="container mx-auto py-12 text-center">
        <p className="text-muted-foreground">
          Interested in working together? Feel free to
          <Link href="/contact" className="text-primary font-medium mx-1 hover:underline">
            contact me
          </Link>
          to discuss your project.
        </p>
      </footer>
    </div>
  )
}
