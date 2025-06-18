"use client"

import { motion, useInView } from 'framer-motion'
import React from 'react'
import { FiTrendingUp, FiCode, FiLayers, FiCheckCircle, FiGitCommit } from 'react-icons/fi'

const metrics = [
  {
    id: 1,
    value: '5+',
    label: 'Years of Experience',
    description: 'Dedicated to honing my skills in full-stack development.',
    icon: <FiTrendingUp className="text-3xl" />
  },
  {
    id: 2,
    value: '50+',
    label: 'Projects Completed',
    description: 'From small applications to complex web platforms.',
    icon: <FiLayers className="text-3xl" />
  },
  {
    id: 3,
    value: '10+',
    label: 'Technologies Mastered',
    description: 'Proficient in various programming languages and frameworks.',
    icon: <FiCode className="text-3xl" />
  },
  {
    id: 4,
    value: '99%',
    label: 'Code Quality',
    description: 'Committed to writing clean, efficient, and maintainable code.',
    icon: <FiCheckCircle className="text-3xl" />
  },
  {
    id: 5,
    value: '1000+',
    label: 'Commits on GitHub',
    description: 'Active contributor to open-source and personal projects.',
    icon: <FiGitCommit className="text-3xl" />
  },
]

export const KeyMetrics = () => {
  const ref = React.useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: false, margin: "-100px" })

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
      className='px-4 py-32 bg-gradient-to-br from-gray-900 to-purple-900/20 relative overflow-hidden'
      id='about'
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-48 h-48 bg-pink-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className='container mx-auto relative z-10'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 bg-purple-800/30 rounded-full text-sm font-medium mb-4">
            BY THE NUMBERS
          </span>
          <h2 className='text-4xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300'>
            Proven Results
          </h2>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto">
            Quantifiable achievements that demonstrate my expertise and commitment
          </p>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8'>
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ 
                delay: 0.4 + index * 0.1, 
                duration: 0.6,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ y: -5 }}
              className='bg-gradient-to-b from-gray-800/50 to-gray-900/30 p-8 rounded-xl border border-gray-800 hover:border-purple-500/30 transition-all'
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-purple-900/30 mb-6 text-purple-300">
                {metric.icon}
              </div>
              
              <motion.h3
                initial={{ scale: 0.5 }}
                animate={isInView ? { scale: 1 } : { scale: 0.5 }}
                transition={{ 
                  delay: 0.6 + index * 0.1, 
                  duration: 0.4, 
                  type: 'spring'
                }}
                className='text-5xl font-bold text-purple-300 mb-2'
              >
                {metric.value}
              </motion.h3>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.4 }}
                className='text-xl font-semibold mb-2'
              >
                {metric.label}
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 1 + index * 0.1, duration: 0.4 }}
                className='text-gray-400'
              >
                {metric.description}
              </motion.p>
            </motion.div>
          ))}
        </div>

        {/* Client testimonials section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-24 max-w-4xl mx-auto bg-gradient-to-r from-purple-900/30 to-pink-900/20 p-8 rounded-xl"
        >
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 rounded-full bg-purple-700/30 flex items-center justify-center text-3xl">
                👏
              </div>
            </div>
            <div>
              <blockquote className="text-xl italic mb-4">
                &quot;Ian&apos;s metrics translate to real-world results - our project was delivered 2 weeks early with 30% fewer bugs than industry average.&quot;
              </blockquote>
              <div className="font-medium">
                <p>Jessica M.</p>
                <p className="text-purple-300">Product Manager at TechCorp</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold mb-4">Ready to see these results for your project?</h3>
          <a 
            href="#contact" 
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/20"
          >
            Let&apos;s Work Together
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </motion.div>
      </div>
    </motion.section>
  )
}