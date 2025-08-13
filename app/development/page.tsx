"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  FiLayers,
  FiSmartphone,
  FiDatabase,
  FiPocket
} from "react-icons/fi";


interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

interface ProjectTypeProps {
  title: string;
  description: string;
  features: string[];
  cta: string;
  href: string;
}

const ServiceCard = ({ icon, title, description, color }: ServiceCardProps) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className={`p-8 rounded-xl border border-gray-800 bg-gradient-to-br from-gray-900 to-gray-800 ${color} shadow-lg`}
  >
    <div className="text-4xl mb-6">{icon}</div>
    <h3 className="text-2xl font-bold mb-4 text-white">{title}</h3>
    <p className="text-gray-300">{description}</p>
  </motion.div>
);

const ProjectType = ({ title, description, features, cta, href }: ProjectTypeProps) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 shadow-lg h-full"
  >
    <h3 className="text-2xl font-bold mb-4 text-white">{title}</h3>
    <p className="text-gray-300 mb-6">{description}</p>
    <ul className="mb-8 space-y-3">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start">
          <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
          <span className="text-gray-300">{feature}</span>
        </li>
      ))}
    </ul>
    <Link 
      href={href}
      className="mt-auto px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-medium hover:shadow-lg hover:shadow-blue-500/20 transition-all inline-block"
    >
      {cta}
    </Link>
  </motion.div>
);

export default function DevelopmentPage() {
  const services = [
    {
      icon: <FiLayers className="text-blue-400" />,
      title: "Frontend Development",
      description: "Modern, responsive interfaces with React, Next.js, and Tailwind CSS",
      color: "hover:border-blue-500/30"
    },
    {
      icon: <FiDatabase className="text-purple-400" />,
      title: "Backend Development",
      description: "Scalable server architecture with Node.js, Python, and cloud services",
      color: "hover:border-purple-500/30"
    },
    {
      icon: <FiSmartphone className="text-green-400" />,
      title: "Mobile Apps",
      description: "Cross-platform mobile applications with React Native and Flutter",
      color: "hover:border-green-500/30"
    }
  ];

  const projectTypes = [
    {
      title: "Business Websites",
      description: "Professional websites that convert visitors into customers",
      features: [
        "Custom design",
        "CMS integration",
        "SEO optimized",
        "Contact forms",
        "Analytics setup"
      ],
      cta: "Get Business Site",
      href: "/contact?type=business"
    },
    {
      title: "E-Commerce Stores",
      description: "Full-featured online stores with secure payments",
      features: [
        "Shopify/WordPress WooCommerce",
        "Product management",
        "Secure checkout",
        "Inventory system",
        "Mobile optimized"
      ],
      cta: "Build Online Store",
      href: "/contact?type=ecommerce"
    },
    {
      title: "Web Applications",
      description: "Custom solutions for complex business needs",
      features: [
        "User authentication",
        "Database integration",
        "API development",
        "Admin dashboards",
        "Cloud deployment"
      ],
      cta: "Discuss Project",
      href: "/contact?type=webapp"
    }
  ];

  const technologies = [
    {
      name: "React/Next.js",
      category: "Frontend"
    },
    {
      name: "TypeScript",
      category: "Frontend"
    },
    {
      name: "Node.js",
      category: "Backend"
    },
    {
      name: "Python/Django",
      category: "Backend"
    },
    {
      name: "PostgreSQL",
      category: "Database"
    },
    {
      name: "MongoDB",
      category: "Database"
    },
    {
      name: "AWS/GCP",
      category: "Cloud"
    },
    {
      name: "Docker",
      category: "DevOps"
    }
  ];

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
            Custom Web Development
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 text-gray-300"
          >
            Bespoke digital solutions built to your exact specifications with modern technologies
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link
              href="#projects"
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-medium hover:shadow-lg hover:shadow-blue-500/20 transition-all"
            >
              View Project Types
            </Link>
            <Link
              href="/"
              className="px-8 py-3 border border-gray-700 rounded-full font-medium hover:bg-gray-800/50 transition-all"
            >
              See Our Work
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-6 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Development Services</h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Project Types Section */}
      <section id="projects" className="bg-gradient-to-br from-gray-900 to-blue-900/20 py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Project Types We Build</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Custom solutions tailored to your specific business requirements
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {projectTypes.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <ProjectType {...project} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="container mx-auto px-6 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Technology Stack</h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"
          />
          <p className="text-gray-400 max-w-2xl mx-auto">
            We work with modern technologies to build fast, secure, and scalable solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 text-center"
            >
              <div className="text-sm text-gray-400 mb-1">{tech.category}</div>
              <div className="text-lg font-medium">{tech.name}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gradient-to-br from-gray-900 to-purple-900/20 py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Development Process</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A structured approach to ensure project success
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-5 h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>
              {[
                {
                  title: "Discovery",
                  description: "Requirements gathering and planning"
                },
                {
                  title: "Design",
                  description: "Wireframing and UI/UX planning"
                },
                {
                  title: "Development",
                  description: "Agile sprints with regular updates"
                },
                {
                  title: "Testing",
                  description: "Quality assurance and refinement"
                },
                {
                  title: "Launch",
                  description: "Deployment and post-launch support"
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative pl-16 pb-10 last:pb-0"
                >
                  <div className="absolute left-0 w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-900/40 to-purple-900/40 border border-gray-800 rounded-2xl p-8 md:p-12 text-center"
        >
          <FiPocket className="text-5xl mx-auto text-blue-400 mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Build Your Project?</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Let&apos;s discuss your vision and create a custom solution that drives results.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-medium hover:shadow-xl hover:shadow-blue-500/30 transition-all"
            >
              Get Free Consultation
            </Link>
            <Link
              href="/"
              className="px-8 py-4 border border-gray-700 rounded-full font-medium hover:bg-gray-800/50 transition-all"
            >
              View Portfolio
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}