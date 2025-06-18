"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useState } from "react"
import udemy from "../assets/udemy.png"
import fiverr from "../assets/fiverr.png"
import elementor from "../assets/elementor.png"
import logitech from "../assets/logitech.png"
import oracle from "../assets/oracle.png"
import Link from "next/link"

const partners = [
  { 
    src: udemy, 
    alt: "Udemy",
    testimonial: "Ian's course development helped us increase student engagement by 40%",
    name: "Sarah T.",
    role: "Content Manager at Udemy",
    caseStudy: "/case-studies/udemy"
  },
  { 
    src: fiverr, 
    alt: "Fiverr",
    testimonial: "Exceptional freelance talent that delivered beyond our expectations",
    name: "Michael R.",
    role: "Project Lead at Fiverr",
    caseStudy: "/case-studies/fiverr"
  },
  { 
    src: elementor, 
    alt: "Elementor",
    testimonial: "His plugin development skills enhanced our platform's capabilities",
    name: "David L.",
    role: "Developer Relations at Elementor",
    caseStudy: "/case-studies/elementor"
  },
  { 
    src: logitech, 
    alt: "Logitech",
    testimonial: "The web application Ian built streamlined our internal processes",
    name: "Jessica M.",
    role: "Product Manager at Logitech",
    caseStudy: "/case-studies/logitech"
  },
  { 
    src: oracle, 
    alt: "Oracle",
    testimonial: "His cloud solution architecture saved us 30% in infrastructure costs",
    name: "Robert K.",
    role: "CTO at Oracle",
    caseStudy: "/case-studies/oracle"
  }
]

export const LogoAnimation = () => {
  const [activeTestimonial, setActiveTestimonial] = useState<number | null>(null)
  const [isPaused, setIsPaused] = useState(false)

  return (
    <section className="py-20 bg-gradient-to-b from-purple-900/10 to-purple-950/20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-48 h-48 bg-pink-500 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 bg-purple-800/30 rounded-full text-sm font-medium mb-4">
            INDUSTRY RECOGNITION
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">
            Trusted by Leading Brands
          </h2>
          <p className="text-lg text-purple-100 max-w-2xl mx-auto">
            Collaborating with innovative companies to deliver exceptional digital experiences
          </p>
        </motion.div>

        {/* Featured In Section */}
        <div className="mb-16 text-center">
          <h3 className="text-xl font-semibold text-purple-300 mb-6">As Featured In:</h3>
          <div className="flex flex-wrap justify-center gap-8">
            {['TechCrunch', 'Forbes', 'The Verge', 'Wired', 'Smashing Magazine'].map((publication) => (
              <span key={publication} className="text-lg font-medium text-purple-100/80 hover:text-white transition-colors">
                {publication}
              </span>
            ))}
          </div>
        </div>

        {/* Logo Carousel */}
        <div 
          className="relative h-40 mb-20 overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="absolute inset-0 flex items-center">
            <motion.div 
              className="flex gap-16 items-center"
              animate={{
                x: ['0%', '-100%'],
              }}
              transition={{
                duration: 40,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
            >
              {[...partners, ...partners].map((partner, index) => (
                <motion.div 
                  key={`first-${index}`}
                  whileHover={{ scale: 1.1 }}
                  className="flex-shrink-0 px-4 cursor-pointer"
                  onClick={() => setActiveTestimonial(index % partners.length)}
                >
                  <Image 
                    src={partner.src}
                    alt={partner.alt}
                    width={160}
                    height={60}
                    className="object-contain h-12 opacity-80 hover:opacity-100 transition-opacity"
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
          
          <div className="absolute inset-0 flex items-center">
            <motion.div 
              className="flex gap-16 items-center"
              animate={{
                x: ['100%', '0%'],
              }}
              transition={{
                duration: 40,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
            >
              {[...partners, ...partners].map((partner, index) => (
                <motion.div 
                  key={`second-${index}`}
                  whileHover={{ scale: 1.1 }}
                  className="flex-shrink-0 px-4 cursor-pointer"
                  onClick={() => setActiveTestimonial(index % partners.length)}
                >
                  <Image 
                    src={partner.src}
                    alt={partner.alt}
                    width={160}
                    height={60}
                    className="object-contain h-12 opacity-80 hover:opacity-100 transition-opacity"
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Testimonial Display */}
        {activeTestimonial !== null && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-r from-purple-900/30 to-pink-900/20 p-8 rounded-xl mb-12 max-w-4xl mx-auto"
          >
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="flex-shrink-0">
                <Image 
                  src={partners[activeTestimonial].src}
                  alt={partners[activeTestimonial].alt}
                  width={80}
                  height={80}
                  className="rounded-lg object-contain"
                />
              </div>
              <div>
                <blockquote className="text-lg italic mb-4">
                  &quot;{partners[activeTestimonial].testimonial}&quot;
                </blockquote>
                <div className="font-medium">
                  <p>{partners[activeTestimonial].name}</p>
                  <p className="text-purple-300">{partners[activeTestimonial].role}</p>
                </div>
                <Link
                  href={partners[activeTestimonial].caseStudy}
                  className="inline-flex items-center mt-4 text-sm font-medium text-purple-300 hover:text-white transition-colors"
                >
                  Read case study
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          </motion.div>
        )}

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <div className="mb-6">
            <h3 className="text-2xl font-bold mb-2">Ready to join these industry leaders?</h3>
            <p className="text-purple-200 max-w-2xl mx-auto">
              Let&apos;s collaborate on your next project and achieve exceptional results together.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/20"
            >
              Start Your Project
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center justify-center px-8 py-4 border border-purple-700 text-purple-100 rounded-lg font-medium hover:bg-purple-900/30 transition-colors"
            >
              View All Case Studies
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}