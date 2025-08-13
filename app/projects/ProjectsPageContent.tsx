"use client";
import { useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FiGithub, 
  FiExternalLink, 
  FiCode,
  FiX,
  FiChevronDown,
  FiChevronUp
} from "react-icons/fi";



interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  category: string;
  year: number;
  image: string;
  githubUrl?: string;
  liveUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Full-featured online store with cart and checkout.",
    longDescription: "A complete e-commerce solution with product management, user authentication, payment processing, and admin dashboard. Built with modern technologies for optimal performance.",
    technologies: ["react", "nextjs", "node", "mongodb", "tailwind"],
    category: "ecommerce",
    year: 2023,
    image: "/images/ecommerce.jpg",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Collaborative task manager with real-time updates.",
    longDescription: "A productivity application featuring drag-and-drop interface, team collaboration, and progress tracking. Implemented real-time sync across devices.",
    technologies: ["react", "typescript", "graphql", "node"],
    category: "productivity",
    year: 2023,
    image: "/images/taskapp.jpg",
    githubUrl: "https://github.com"
  },
  {
    id: 3,
    title: "Social Media Dashboard",
    description: "Analytics dashboard for social media metrics.",
    longDescription: "Comprehensive analytics platform with data visualization, custom reporting, and API integrations with major social networks.",
    technologies: ["nextjs", "typescript", "tailwind", "express"],
    category: "analytics",
    year: 2022,
    image: "/images/dashboard.jpg",
    liveUrl: "https://example.com"
  },
  {
    id: 4,
    title: "API Service",
    description: "RESTful API service with authentication.",
    longDescription: "Scalable backend service with JWT authentication, rate limiting, and comprehensive documentation. Serves thousands of requests daily.",
    technologies: ["node", "express", "mongodb"],
    category: "backend",
    year: 2022,
    image: "/images/api.jpg",
    githubUrl: "https://github.com"
  },
  {
    id: 5,
    title: "Portfolio Website",
    description: "Modern portfolio with animations.",
    longDescription: "Custom-designed portfolio website featuring smooth animations, dark mode, and contact form. Optimized for performance and SEO.",
    technologies: ["nextjs", "react", "tailwind"],
    category: "portfolio",
    year: 2023,
    image: "/images/portfolio.jpg",
    liveUrl: "https://example.com"
  },
  {
    id: 6,
    title: "Real-time Chat App",
    description: "Websocket-based chat application.",
    longDescription: "Instant messaging platform with rooms, user presence, and message history. Features end-to-end encryption for privacy.",
    technologies: ["react", "node", "express", "mongodb"],
    category: "communication",
    year: 2021,
    image: "/images/chat.jpg",
    githubUrl: "https://github.com"
  },
  {
    id: 7,
    title: "Health Tracking App",
    description: "Fitness and nutrition tracking platform.",
    longDescription: "Comprehensive health dashboard integrating with wearable devices. Tracks workouts, nutrition, and sleep patterns with personalized recommendations.",
    technologies: ["react", "typescript", "graphql", "node"],
    category: "health",
    year: 2023,
    image: "/images/health.jpg",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  },
  {
    id: 8,
    title: "Learning Management System",
    description: "Online course platform with video hosting.",
    longDescription: "Feature-rich LMS with course creation tools, student progress tracking, quizzes, and certificate generation. Supports SCORM compliance.",
    technologies: ["nextjs", "node", "mongodb", "tailwind"],
    category: "education",
    year: 2022,
    image: "/images/lms.jpg"
  }
];

const technologies = [
  { id: "react", name: "React" },
  { id: "nextjs", name: "Next.js" },
  { id: "node", name: "Node.js" },
  { id: "typescript", name: "TypeScript" },
  { id: "mongodb", name: "MongoDB" },
  { id: "express", name: "Express" },
  { id: "tailwind", name: "Tailwind CSS" },
  { id: "graphql", name: "GraphQL" }
];

const categories = [
  { id: "all", name: "All Categories" },
  { id: "ecommerce", name: "E-Commerce" },
  { id: "productivity", name: "Productivity" },
  { id: "analytics", name: "Analytics" },
  { id: "backend", name: "Backend" },
  { id: "portfolio", name: "Portfolio" },
  { id: "communication", name: "Communication" },
  { id: "health", name: "Health" },
  { id: "education", name: "Education" }
];

const sortOptions = [
  { id: "newest", name: "Newest First" },
  { id: "oldest", name: "Oldest First" },
  { id: "name-asc", name: "Name (A-Z)" },
  { id: "name-desc", name: "Name (Z-A)" }
];

export default function ProjectsPage() {
  const searchParams = useSearchParams();
  const techFilter = searchParams.get('tech') || 'all';
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [sortBy, setSortBy] = useState("newest");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [isSortOpen, setIsSortOpen] = useState(false);

  // Filter and sort projects
  const filteredProjects = projects
    .filter(project => 
      techFilter === 'all' || project.technologies.includes(techFilter)
    )
    .filter(project =>
      categoryFilter === 'all' || project.category === categoryFilter
    )
    .sort((a, b) => {
      switch (sortBy) {
        case "newest": return b.year - a.year;
        case "oldest": return a.year - b.year;
        case "name-asc": return a.title.localeCompare(b.title);
        case "name-desc": return b.title.localeCompare(a.title);
        default: return 0;
      }
    });

  return (
    <main className="min-h-screen bg-gray-950 text-gray-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 to-transparent"></div>
        <div className="container mx-auto px-6 py-24 md:py-32 flex flex-col items-center text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
          >
            Project Portfolio
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 text-gray-300"
          >
            Explore our work across various technologies and industries
          </motion.p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setCategoryFilter(category.id)}
                className={`px-4 py-2 rounded-full font-medium transition-all ${categoryFilter === category.id ? 'bg-gradient-to-r from-blue-600 to-purple-600' : 'bg-gray-800 hover:bg-gray-700'}`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Sort Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsSortOpen(!isSortOpen)}
              className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-full transition"
            >
              Sort: {sortOptions.find(o => o.id === sortBy)?.name}
              {isSortOpen ? <FiChevronUp /> : <FiChevronDown />}
            </button>
            
            {isSortOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute right-0 mt-2 w-48 bg-gray-800 border border-gray-700 rounded-lg shadow-lg z-10"
              >
                {sortOptions.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => {
                      setSortBy(option.id);
                      setIsSortOpen(false);
                    }}
                    className={`block w-full text-left px-4 py-2 hover:bg-gray-700 ${sortBy === option.id ? 'text-blue-400' : ''}`}
                  >
                    {option.name}
                  </button>
                ))}
              </motion.div>
            )}
          </div>
        </div>

        {/* Technology Filters */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <Link
            href="/projects"
            className={`px-4 py-2 rounded-full font-medium transition-all ${techFilter === 'all' ? 'bg-gradient-to-r from-blue-600 to-purple-600' : 'bg-gray-800 hover:bg-gray-700'}`}
          >
            All Technologies
          </Link>
          {technologies.map((tech) => (
            <Link
              key={tech.id}
              href={`/projects?tech=${tech.id}`}
              className={`px-4 py-2 rounded-full font-medium transition-all ${techFilter === tech.id ? 'bg-gradient-to-r from-blue-600 to-purple-600' : 'bg-gray-800 hover:bg-gray-700'}`}
            >
              {tech.name}
            </Link>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                layout
                className="bg-gray-800/50 border border-gray-700 rounded-xl overflow-hidden hover:shadow-lg hover:shadow-blue-500/10 transition-all cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="h-48 bg-gray-700 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <p className="text-sm text-gray-300">{project.year}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((techId) => {
                      const tech = technologies.find(t => t.id === techId);
                      return tech ? (
                        <Link 
                          key={tech.id}
                          href={`/projects?tech=${tech.id}`}
                          onClick={(e) => e.stopPropagation()}
                          className="text-xs bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded-full transition"
                        >
                          {tech.name}
                        </Link>
                      ) : null;
                    })}
                  </div>

                  <div className="flex space-x-4">
                    {project.githubUrl && (
                      <Link
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center text-gray-400 hover:text-blue-400 transition"
                      >
                        <FiGithub className="mr-2" /> Code
                      </Link>
                    )}
                    {project.liveUrl && (
                      <Link
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center text-gray-400 hover:text-purple-400 transition"
                      >
                        <FiExternalLink className="mr-2" /> Live
                      </Link>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <FiCode className="mx-auto text-5xl text-gray-600 mb-4" />
            <h3 className="text-xl font-medium text-gray-400">No projects found matching your filters</h3>
            <button 
              onClick={() => {
                setCategoryFilter('all');
                window.location.href = '/projects';
              }}
              className="mt-4 inline-block text-blue-400 hover:text-blue-300"
            >
              Clear all filters
            </button>
          </motion.div>
        )}
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              className="bg-gray-800 border border-gray-700 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                title="Close"
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white p-2 rounded-full bg-gray-700"
              >
                <FiX size={24} />
              </button>

              <div className="h-64 bg-gray-700 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
              </div>

              <div className="p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                  <div>
                    <h2 className="text-3xl font-bold">{selectedProject.title}</h2>
                    <p className="text-gray-400">{selectedProject.year}</p>
                  </div>
                  <div className="flex gap-4">
                    {selectedProject.githubUrl && (
                      <Link
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg transition"
                      >
                        <FiGithub /> View Code
                      </Link>
                    )}
                    {selectedProject.liveUrl && (
                      <Link
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition"
                      >
                        <FiExternalLink /> Live Demo
                      </Link>
                    )}
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-4">Project Overview</h3>
                  <p className="text-gray-300">{selectedProject.longDescription}</p>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-4">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((techId) => {
                      const tech = technologies.find(t => t.id === techId);
                      return tech ? (
                        <Link 
                          key={tech.id}
                          href={`/projects?tech=${tech.id}`}
                          className="bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded-full transition"
                        >
                          {tech.name}
                        </Link>
                      ) : null;
                    })}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4">Project Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium mb-2">Category</h4>
                      <button
                        onClick={() => {
                          setCategoryFilter(selectedProject.category);
                          setSelectedProject(null);
                        }}
                        className="text-blue-400 hover:text-blue-300"
                      >
                        {categories.find(c => c.id === selectedProject.category)?.name}
                      </button>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Year Completed</h4>
                      <p>{selectedProject.year}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-900/40 to-purple-900/40 border border-gray-800 rounded-2xl p-8 md:p-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Let&apos;s discuss how we can bring your ideas to life with our technical expertise.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-medium hover:shadow-xl hover:shadow-blue-500/30 transition-all"
            >
              Get in Touch
            </Link>
            <Link
              href="/services"
              className="px-8 py-4 border border-gray-700 rounded-full font-medium hover:bg-gray-800/50 transition-all"
            >
              Our Services
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}