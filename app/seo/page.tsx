"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import * as FiIcons from "react-icons/fi";
import React from "react";

// Safe icon loader - returns fallback if missing
function getIcon(name: keyof typeof FiIcons, fallback: keyof typeof FiIcons = "FiActivity") {
  return FiIcons[name] ?? FiIcons[fallback];
}


interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

interface ProgressPillProps {
  name: string;
  value: number;
  color: string;
}

const SkillCard = ({ icon, title, description, color }: SkillCardProps) => (
  <motion.div
    whileHover={{ y: -5 }}
    className={`p-6 rounded-xl border border-gray-800 bg-gradient-to-br from-gray-900 to-gray-800 ${color} shadow-lg`}
  >
    <div className="text-3xl mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-300">{description}</p>
  </motion.div>
);

const ProgressPill = ({ name, value, color }: ProgressPillProps) => (
  <div className="mb-4">
    <div className="flex justify-between mb-1">
      <span className="font-medium">{name}</span>
      <span className="text-gray-400">{value}%</span>
    </div>
    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${value}%` }}
        transition={{ duration: 1 }}
        className={`h-full ${color}`}
      />
    </div>
  </div>
);

export default function SEOPage() {
  const skills = [
    {
      icon: React.createElement(getIcon("FiSearch"), { className: "text-blue-400" }),
      title: "Keyword Intelligence",
      description: "Advanced semantic analysis and intent mapping for strategic targeting",
      color: "hover:border-blue-500/30"
    },
    {
      icon: React.createElement(getIcon("FiCode"), { className: "text-purple-400" }),
      title: "Technical Optimization",
      description: "Architecting websites for peak crawlability and index efficiency",
      color: "hover:border-purple-500/30"
    },
    {
      icon: React.createElement(getIcon("FiTrendingUp"), { className: "text-green-400" }),
      title: "Growth Engineering",
      description: "Systematic frameworks for sustainable organic growth",
      color: "hover:border-green-500/30"
    },
    {
      icon: React.createElement(getIcon("FiCpu"), { className: "text-yellow-400" }),
      title: "Automation Systems",
      description: "Custom tools for competitive analysis and performance tracking",
      color: "hover:border-yellow-500/30"
    }
  ];

  const proficiencies = [
    { name: "Technical SEO", value: 95, color: "bg-blue-500" },
    { name: "Content Strategy", value: 90, color: "bg-purple-500" },
    { name: "Data Analysis", value: 88, color: "bg-green-500" },
    { name: "Automation", value: 85, color: "bg-yellow-500" }
  ];

  const FiBarChart2Safe = getIcon("FiBarChart2");

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
            Search Engine Alchemy
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl max-w-3xl mb-8 text-gray-300"
          >
            Transforming websites into <span className="font-semibold text-blue-300">high-performance assets</span> through
            scientific SEO engineering and <span className="font-semibold text-purple-300">predictive analytics</span>
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link
              href="#skills"
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-medium hover:shadow-lg hover:shadow-blue-500/20 transition-all"
            >
              Explore Capabilities
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 border border-gray-700 rounded-full font-medium hover:bg-gray-800/50 transition-all"
            >
              Request Audit
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Skills Grid */}
      <section id="skills" className="container mx-auto px-6 py-16 md:py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Precision SEO Framework</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My methodology combines cutting-edge technical implementation with strategic content architecture
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <SkillCard {...skill} />
            </motion.div>
          ))}
        </div>

        {/* Proficiency Bars */}
        <div className="max-w-3xl mx-auto bg-gray-900/50 border border-gray-800 rounded-xl p-8 backdrop-blur-sm">
          <h3 className="text-2xl font-bold mb-8 text-center">Technical Proficiency</h3>
          {proficiencies.map((item, index) => (
            <ProgressPill
              key={index}
              name={item.name}
              value={item.value}
              color={item.color}
            />
          ))}
        </div>
      </section>

      {/* Case Study Teaser */}
      <section className="bg-gradient-to-br from-gray-900 to-blue-900/20 py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            {React.createElement(FiBarChart2Safe, { className: "text-5xl mx-auto text-blue-400 mb-6" })}
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Proven Impact</h2>
            <p className="text-xl text-gray-300 mb-8">
              Recent project delivered <span className="font-bold text-blue-300">427% organic traffic growth</span> in
              6 months through comprehensive technical restructuring and content optimization
            </p>
            <Link
              href="/case-studies"
              className="inline-flex items-center px-6 py-3 border border-blue-500 text-blue-400 rounded-full hover:bg-blue-500/10 transition-all group"
            >
              View Case Studies
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-24">
        <div className="bg-gradient-to-r from-blue-900/40 to-purple-900/40 border border-gray-800 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Dominate Search?</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Let&apos;s engineer an SEO system that delivers sustainable growth and competitive advantage
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-medium hover:shadow-xl hover:shadow-blue-500/30 transition-all flex items-center"
            >
              {React.createElement(getIcon("FiSearch"), { className: "mr-2" })} Schedule Discovery Call
            </Link>
            <Link
              href="/company"
              className="px-8 py-4 border border-gray-700 rounded-full font-medium hover:bg-gray-800/50 transition-all flex items-center"
            >
              {React.createElement(getIcon("FiShield"), { className: "mr-2" })} Learn About My Agency
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
