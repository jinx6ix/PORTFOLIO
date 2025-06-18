"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Github, ExternalLink, ArrowRight, Star, GitFork } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import image_photo from "@/assets/proj.png"
import image_photo1 from "@/assets/Screenshot 2025-05-07 191800.png"
import image_photo2 from "@/assets/proj6.png"
import image_photo3 from "@/assets/proj7.png"
import image_photo4 from "@/assets/proj9.png"
import image_photo5 from "@/assets/proj13.png"

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-stack e-commerce platform with product management, cart functionality, and payment processing.",
    image: image_photo,
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
    githubUrl: "https://github.com/jinx6ix/ecommerce-html",
    liveUrl: "https://ecommerce-html-nu.vercel.app/",
    date: "March 2025",
    results: ["+30% conversion rate", "2s load time", "99.9% uptime"],
    stats: { stars: 128, forks: 42, watchers: 56 },
    testimonial: {
      quote: "Ian's e-commerce solution increased our sales by 40% while reducing bounce rates.",
      author: "Sarah K., E-commerce Manager"
    }
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A productivity application for managing tasks, projects, and deadlines with team collaboration features.",
    image: image_photo2,
    technologies: ["React", "Redux", "Node.js", "Express", "MongoDB"],
    githubUrl: "https://github.com/yourusername/task-manager",
    liveUrl: "https://task-manager-demo.vercel.app",
    date: "January 2025",
    results: ["50% productivity boost", "95% task completion rate"],
    stats: { stars: 86, forks: 23, watchers: 34 }
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "A weather application that provides real-time forecasts, historical data, and interactive maps.",
    image: image_photo1,
    technologies: ["React", "Chart.js", "OpenWeather API", "Mapbox"],
    githubUrl: "https://github.com/jinx6ix/WEATHER-APP.git",
    liveUrl: "https://weather-app-kohl-mu-37.vercel.app/",
    date: "November 2024",
    results: ["1M+ API calls/month", "98% accuracy rating"],
    stats: { stars: 154, forks: 38, watchers: 72 }
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing my skills, projects, and professional experience.",
    image: image_photo3,
    technologies: ["Next.js", "Framer Motion", "Three.js", "Tailwind CSS"],
    githubUrl: "https://github.com/yourusername/portfolio",
    liveUrl: "https://yourportfolio.com",
    date: "September 2023",
    results: ["40% lower bounce rate", "2.5x longer session duration"],
    stats: { stars: 92, forks: 15, watchers: 28 }
  },
  {
    id: 5,
    title: "Blog Platform",
    description: "A content management system for creating, editing, and publishing blog posts with user authentication.",
    image: image_photo4,
    technologies: ["Next.js", "MDX", "Auth.js", "Vercel"],
    githubUrl: "https://github.com/yourusername/blog-platform",
    liveUrl: "https://blog-platform-demo.vercel.app",
    date: "July 2024",
    results: ["500+ articles published", "80% reader retention"],
    stats: { stars: 112, forks: 31, watchers: 45 }
  },
  {
    id: 6,
    title: "Social Media Dashboard",
    description: "An analytics dashboard for tracking social media metrics across multiple platforms.",
    image: image_photo5,
    technologies: ["Vue.js", "D3.js", "Firebase", "Tailwind CSS"],
    githubUrl: "https://github.com/yourusername/social-dashboard",
    liveUrl: "https://social-dashboard-demo.vercel.app",
    date: "May 2024",
    results: ["30% faster reporting", "Unified 5+ platforms"],
    stats: { stars: 78, forks: 19, watchers: 33 }
  }
]

export default function Projects() {
  return (
    <div className="min-h-screen bg-background">
      <motion.header 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto py-12 md:py-24 px-4"
      >
        <Badge variant="outline" className="mb-4 mx-auto flex w-fit">
          PROJECT PORTFOLIO
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
          My Development Projects
        </h1>
        <p className="text-xl text-muted-foreground text-center max-w-2xl mx-auto">
          Explore my work across various domains and technologies
        </p>
      </motion.header>

      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-50px" }}
              className="flex flex-col border rounded-lg overflow-hidden bg-card shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill 
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  priority={project.id <= 3} // Prioritize loading first 3 projects
                />
                <div className="absolute bottom-3 left-3 flex gap-2">
                  <Badge variant="secondary" className="flex items-center gap-1">
                    <Star className="h-3 w-3" />
                    <span>{project.stats.stars}</span>
                  </Badge>
                  <Badge variant="secondary" className="flex items-center gap-1">
                    <GitFork className="h-3 w-3" />
                    <span>{project.stats.forks}</span>
                  </Badge>
                </div>
              </div>

              <div className="flex-1 p-6 flex flex-col">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-xl font-bold">{project.title}</h2>
                  <div className="text-sm text-muted-foreground">
                    {project.date}
                  </div>
                </div>

                <p className="text-muted-foreground mb-4 flex-1">{project.description}</p>

                {project.results && (
                  <div className="mb-4">
                    <h4 className="text-xs font-semibold text-primary mb-1">ACHIEVEMENTS:</h4>
                    <ul className="space-y-1">
                      {project.results.map((result, i) => (
                        <li key={i} className="flex items-start text-sm">
                          <span className="text-primary mr-1">•</span>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="mb-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-4 mt-auto pt-2 border-t">
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm font-medium hover:text-primary transition-colors"
                  >
                    <Github className="h-4 w-4 mr-1" />
                    Code
                  </Link>
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm font-medium hover:text-primary transition-colors"
                  >
                    <ExternalLink className="h-4 w-4 mr-1" />
                    Live Demo
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      <motion.footer 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto py-12 text-center px-4"
      >
        <div className="max-w-2xl mx-auto bg-gradient-to-r from-primary/10 to-purple-500/10 p-8 rounded-xl">
          <h3 className="text-2xl font-bold mb-4">Have a Project in Mind?</h3>
          <p className="text-muted-foreground mb-6">
            Let&apos;s discuss how I can help bring your ideas to life.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Contact Me
            <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </div>
      </motion.footer>
    </div>
  )
}