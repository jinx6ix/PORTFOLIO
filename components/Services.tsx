"use client"

import { motion } from "framer-motion"
import { FiArrowRight } from "react-icons/fi"

const services = [
    { 
        id: '01', 
        title: 'Web Design', 
        description: 'Crafting visually stunning and user-friendly websites tailored to your brand\'s identity and goals.',
        benefits: [
            'Mobile-optimized designs',
            'Faster load times',
            'Higher conversion rates'
        ],
        cta: 'Get Your Custom Design'
    },
    { 
        id: '02', 
        title: 'SEO Optimization', 
        description: 'Enhancing your website\'s visibility and ranking on search engines through strategic keyword integration and technical optimization.',
        benefits: [
            'Increased organic traffic',
            'Higher search rankings',
            'Targeted keyword strategy'
        ],
        cta: 'Boost Your Rankings'
    },
    { 
        id: '03', 
        title: 'UX/UI Design', 
        description: 'Creating intuitive and engaging user experiences and interfaces that prioritize user satisfaction and ease of use.',
        benefits: [
            'Improved user retention',
            'Higher engagement rates',
            'Streamlined navigation'
        ],
        cta: 'Enhance User Experience'
    },
    { 
        id: '04', 
        title: 'Digital Marketing', 
        description: 'Strategizing and executing comprehensive digital marketing campaigns to boost your online presence and engagement.',
        benefits: [
            'Multi-channel campaigns',
            'Data-driven strategies',
            'Higher ROI on ad spend'
        ],
        cta: 'Launch Your Campaign'
    },
    { 
        id: '05', 
        title: 'Content Creation', 
        description: 'Crafting engaging and relevant content, including blogs, videos, and graphics, to connect with your audience and enhance your brand story.',
        benefits: [
            'Increased social shares',
            'Better audience connection',
            'Improved brand authority'
        ],
        cta: 'Create Compelling Content'
    },
    { 
        id: '06', 
        title: 'Social Media Management', 
        description: 'Managing your social media channels to build brand awareness, engage your audience, and grow your online presence.',
        benefits: [
            'Consistent brand voice',
            'Higher engagement rates',
            'Strategic content calendar'
        ],
        cta: 'Grow Your Social Presence'
    }
]

export const Services = () => {
    return (
        <section id="services" className="relative text-white py-28 overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute inset-0 overflow-hidden opacity-10">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl"></div>
                <div className="absolute bottom-0 right-1/3 w-64 h-64 bg-pink-500 rounded-full filter blur-3xl"></div>
            </div>
            
            <div className="container mx-auto px-4 relative z-10">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col lg:flex-row"
                >
                    {/* Left Column - Sticky Header */}
                    <div className="lg:w-1/3 pr-8 mb-12 lg:mb-0">
                        <div className="sticky top-28">
                            <span className="inline-block mb-4 px-3 py-1 bg-purple-900/50 text-purple-300 rounded-full text-sm font-medium">
                                WHAT I OFFER
                            </span>
                            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">
                                Services That Drive Results
                            </h2>
                            <p className="text-lg text-purple-100 mb-8">
                                Comprehensive digital solutions designed to elevate your brand and accelerate your business growth.
                            </p>
                            <a 
                                href="#contact" 
                                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                            >
                                Get a Free Consultation
                                <FiArrowRight className="mt-0.5" />
                            </a>
                        </div>
                    </div>

                    {/* Right Column - Services List */}
                    <div className="lg:w-2/3 space-y-16">
                        {services.map((service, index) => (
                            <motion.div 
                                key={service.id}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true, margin: "-100px" }}
                                className="group relative p-8 bg-gradient-to-br from-gray-900/50 to-gray-800/20 rounded-2xl border border-gray-800 hover:border-purple-500/30 transition-all duration-300"
                            >
                                <div className="flex flex-col md:flex-row gap-6">
                                    <div className="flex-shrink-0">
                                        <span className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-pink-400">
                                            {service.id}
                                        </span>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl md:text-3xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
                                            {service.title}
                                        </h3>
                                        <p className="text-lg text-purple-100 mb-4">
                                            {service.description}
                                        </p>
                                        
                                        <div className="mb-6">
                                            <h4 className="text-sm font-semibold text-purple-300 mb-2">KEY BENEFITS:</h4>
                                            <ul className="space-y-2">
                                                {service.benefits.map((benefit, i) => (
                                                    <li key={i} className="flex items-start">
                                                        <svg className="w-4 h-4 mt-1 mr-2 text-purple-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                        </svg>
                                                        <span>{benefit}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        
                                        <a 
                                            href="#contact" 
                                            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-lg bg-purple-900/50 text-purple-100 hover:bg-purple-800/50 hover:text-white transition-all duration-300 group-hover:bg-purple-800/70"
                                        >
                                            {service.cta}
                                            <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}