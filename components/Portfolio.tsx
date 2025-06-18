"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image"
import project1 from "@/assets/proj5.png"
import project2 from "@/assets/proj6.png"
import project3 from "@/assets/proj7.png"
import { useMotionTemplate, useMotionValue, motion, animate } from "framer-motion"
import { FiExternalLink, FiGithub, FiArrowRight } from "react-icons/fi"

const projects = [
    {
        id: 1, 
        year: 2023, 
        title: 'Doodle - Customer Support Chatbot', 
        description: "Built an advanced AI chatbot that now handles 87% of Doodle's customer support inquiries, reducing response time from 2 hours to 2 minutes.",
        results: [
            "87% of support queries automated",
            "2 min average response time",
            "$250k annual savings"
        ],
        technologies: ["React", "Node.js", "NLP", "AWS"],
        image: project1,
        liveUrl: "#",
        githubUrl: "#"
    },
    {
        id: 2, 
        year: 2024, 
        title: 'Dash - AI Calling System', 
        description: 'Developed an AI-powered calling system that enhances customer communication with intelligent call routing and sentiment analysis.',
        results: [
            "30% increase in call resolution",
            "15% higher customer satisfaction",
            "24/7 automated support"
        ],
        technologies: ["Python", "Twilio API", "TensorFlow"],
        image: project2,
        liveUrl: "#",
        githubUrl: "#"
    },
    {
        id: 3, 
        year: 2024, 
        title: 'Atomic - AI Outreach Platform', 
        description: 'Created an AI-driven outreach tool that maximizes engagement and conversions through intelligent automation and personalized messaging.',
        results: [
            "45% higher open rates",
            "3x more conversions",
            "500+ active users"
        ],
        technologies: ["Next.js", "Firebase", "GPT-4"],
        image: project3,
        liveUrl: "#",
        githubUrl: "#"
    },
]

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"]

export const Portfolio = () => {
    const [selectedProject, setSelectedProject] = useState(projects[0])
    const color = useMotionValue(COLORS_TOP[0])

    useEffect(() => {
        animate(color, COLORS_TOP, {
            ease: "easeInOut",
            duration: 10,
            repeat: Infinity,
            repeatType: "mirror"
        })
    }, [])

    const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`

    return (
        <motion.section 
            style={{ backgroundImage }}
            id="portfolio" 
            className="py-32 text-white relative overflow-hidden"
        >
            {/* Decorative elements */}
            <div className="absolute inset-0 overflow-hidden opacity-10">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl"></div>
                <div className="absolute bottom-0 right-1/3 w-64 h-64 bg-pink-500 rounded-full filter blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Projects list */}
                    <div>
                        <motion.h2 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-5xl md:text-6xl font-bold mb-10"
                        >
                            Selected <span className="text-purple-400">Projects</span>
                        </motion.h2>
                        
                        <div className="space-y-8">
                            {projects.map((project) => (
                                <motion.div
                                    key={project.id}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6 }}
                                    onClick={() => setSelectedProject(project)}
                                    className={`cursor-pointer p-6 rounded-xl transition-all duration-300 ${
                                        selectedProject.id === project.id 
                                            ? 'bg-gray-900/50 border border-purple-500/30 shadow-lg' 
                                            : 'hover:bg-gray-900/30'
                                    }`}
                                >
                                    <p className="text-purple-300 text-lg mb-2">{project.year}</p>
                                    <h3 className={`text-2xl md:text-3xl font-semibold mb-3 transition-colors ${
                                        selectedProject.id === project.id 
                                            ? 'text-purple-200' 
                                            : 'text-white hover:text-purple-300'
                                    }`}>
                                        {project.title}
                                    </h3>
                                    
                                    {selectedProject.id === project.id && (
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ duration: 0.4 }}
                                            className="space-y-4"
                                        >
                                            <p className="text-purple-100">{project.description}</p>
                                            
                                            <div className="mt-4">
                                                <h4 className="text-sm font-semibold text-purple-300 mb-2">KEY RESULTS:</h4>
                                                <ul className="space-y-2">
                                                    {project.results.map((result, i) => (
                                                        <li key={i} className="flex items-start text-sm">
                                                            <span className="text-purple-400 mr-2">✓</span>
                                                            {result}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            
                                            <div className="flex flex-wrap gap-2 mt-4">
                                                {project.technologies.map((tech) => (
                                                    <span 
                                                        key={tech} 
                                                        className="px-3 py-1 text-xs rounded-full bg-purple-900/50 text-purple-200"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                            
                                            <div className="flex gap-4 mt-6">
                                                <a 
                                                    href={project.liveUrl} 
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-2 text-sm font-medium hover:text-purple-300 transition-colors"
                                                >
                                                    <FiExternalLink /> Live Demo
                                                </a>
                                                <a 
                                                    href={project.githubUrl} 
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-2 text-sm font-medium hover:text-purple-300 transition-colors"
                                                >
                                                    <FiGithub /> View Code
                                                </a>
                                            </div>
                                        </motion.div>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Project image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <Image 
                            src={selectedProject.image.src}
                            alt={selectedProject.title}
                            className="rounded-xl shadow-2xl border border-gray-800 transition-all duration-500"
                            width={800}
                            height={450}
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-xl pointer-events-none" />
                    </motion.div>
                </div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="mt-24 text-center"
                >
                    <h3 className="text-2xl font-bold mb-4">Ready to create something amazing together?</h3>
                    <a 
                        href="#contact" 
                        className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/20"
                    >
                        Start Your Project
                        <FiArrowRight className="ml-2" />
                    </a>
                </motion.div>
            </div>
        </motion.section>
    )
}