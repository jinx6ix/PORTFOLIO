"use client"

import React from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { FaReact } from "react-icons/fa"
import { IoLogoNodejs } from "react-icons/io"
import { SiTypescript, SiMongodb, SiExpress, SiTailwindcss, SiGraphql } from "react-icons/si"
import { TbBrandNextjs } from "react-icons/tb"

const stackItems = [
    {
        id: 1, 
        name: 'React', 
        icon: FaReact, 
        color: '#61DAFB', 
        description: 'Building interactive UIs with component-based architecture',
        filter: 'react'
    },
    {
        id: 2, 
        name: 'Node.js', 
        icon: IoLogoNodejs, 
        color: '#339933', 
        description: 'Creating scalable server-side applications',
        filter: 'node'
    },
    {
        id: 3, 
        name: 'TypeScript', 
        icon: SiTypescript, 
        color: '#3178C6', 
        description: 'Type-safe JavaScript for robust applications',
        filter: 'typescript'
    },
    {
        id: 4, 
        name: 'MongoDB', 
        icon: SiMongodb, 
        color: '#47A248', 
        description: 'Flexible NoSQL database for modern applications',
        filter: 'mongodb'
    },
    {
        id: 5, 
        name: 'Next.js', 
        icon: TbBrandNextjs, 
        color: '#000000', 
        description: 'Production-grade React framework for the web',
        filter: 'nextjs'
    },
    {
        id: 6, 
        name: 'Express', 
        icon: SiExpress, 
        color: '#000000', 
        description: 'Minimalist web framework for Node.js',
        filter: 'express'
    },
    {
        id: 7, 
        name: 'Tailwind CSS', 
        icon: SiTailwindcss, 
        color: '#38B2AC', 
        description: 'Utility-first CSS framework for rapid UI development',
        filter: 'tailwind'
    },
    {
        id: 8, 
        name: 'GraphQL', 
        icon: SiGraphql, 
        color: '#E10098', 
        description: 'Modern API query language for efficient data fetching',
        filter: 'graphql'
    }
]

export const Stack = () => {
    return (
        <section className="relative py-20 bg-gradient-to-b from-gray-900 to-purple-900/10 overflow-hidden" id="stack">
            {/* Decorative elements */}
            <div className="absolute inset-0 overflow-hidden opacity-10">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl"></div>
                <div className="absolute bottom-0 right-1/3 w-64 h-64 bg-pink-500 rounded-full filter blur-3xl"></div>
            </div>

            <div className="max-w-[1200px] mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-1 bg-purple-800/30 rounded-full text-sm font-medium mb-4">
                        TECHNICAL EXPERTISE
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">
                        My Development Stack
                    </h2>
                    <p className="text-xl text-purple-100 max-w-2xl mx-auto">
                        Click any technology to see related projects
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                    {stackItems.map((item) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ type: "spring", stiffness: 100 }}
                            whileHover={{ y: -5 }}
                            className="group"
                        >
                            <Link 
                                href={`/projects?tech=${item.filter}`}
                                className="flex flex-col items-center bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-purple-500/30 transition-all h-full block"
                            >
                                <div className="mb-4 bg-white/10 p-4 rounded-lg group-hover:bg-white/20 transition-all">
                                    {React.createElement(item.icon, {
                                        className: "w-16 h-16",
                                        style: { color: item.color }
                                    })}
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-2">{item.name}</h3>
                                <p className="text-gray-400 text-sm text-center">{item.description}</p>
                                <span className="mt-3 text-xs text-purple-300 opacity-0 group-hover:opacity-100 transition-opacity">
                                    View Projects →
                                </span>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-center mt-16"
                >
                    <h3 className="text-2xl font-bold mb-4">Want to see these technologies in action?</h3>
                    <Link 
                        href="/projects"
                        className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/20"
                    >
                        View All Projects
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </Link>
                </motion.div>
            </div>
        </section>
    )
}