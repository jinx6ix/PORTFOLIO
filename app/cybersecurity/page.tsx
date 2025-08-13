"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiShield, FiLock, FiActivity, FiAlertTriangle, FiCode, FiGlobe } from "react-icons/fi";

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

interface SkillItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

interface ProficiencyItem {
  name: string;
  value: number;
  color: string;
}

export default function CybersecurityPage() {
  const skills: SkillItem[] = [
    {
      icon: <FiShield className="text-red-400" />,
      title: "Penetration Testing",
      description: "Comprehensive security assessments to identify vulnerabilities before attackers do",
      color: "hover:border-red-500/30"
    },
    {
      icon: <FiAlertTriangle className="text-orange-400" />,
      title: "Threat Analysis",
      description: "Advanced threat intelligence and risk assessment methodologies",
      color: "hover:border-orange-500/30"
    },
    {
      icon: <FiLock className="text-blue-400" />,
      title: "Vulnerability Management",
      description: "Systematic identification and remediation of security weaknesses",
      color: "hover:border-blue-500/30"
    },
    {
      icon: <FiGlobe className="text-green-400" />,
      title: "DDoS Protection",
      description: "Enterprise-grade mitigation against volumetric and application layer attacks",
      color: "hover:border-green-500/30"
    },
    {
      icon: <FiCode className="text-purple-400" />,
      title: "Security Automation",
      description: "Custom tools for continuous monitoring and incident response",
      color: "hover:border-purple-500/30"
    }
  ];

  const proficiencies: ProficiencyItem[] = [
    { name: "Network Security", value: 96, color: "bg-red-500" },
    { name: "Web App Security", value: 94, color: "bg-orange-500" },
    { name: "Cloud Security", value: 90, color: "bg-blue-500" },
    { name: "Incident Response", value: 88, color: "bg-green-500" }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99] as [number, number, number, number]
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <main className="min-h-screen bg-gray-950 text-gray-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-900/20 to-transparent"></div>
        <div className="container mx-auto px-6 py-24 md:py-32 flex flex-col items-center text-center relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="w-full"
          >
            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent"
            >
              Cyber Defense Engineering
            </motion.h1>
            
            <motion.p
              variants={textVariants}
              className="text-xl md:text-2xl max-w-3xl mb-8 text-gray-300"
            >
              Protecting{" "}
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="font-semibold text-red-300"
              >
                digital assets
              </motion.span>{" "}
              with advanced security measures and{" "}
              <motion.span
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.0 }}
                className="font-semibold text-orange-300"
              >
                automated defense systems
              </motion.span>{" "}
              against evolving threats
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center gap-4"
            >
              <Link 
                href="#skills" 
                className="px-8 py-3 bg-gradient-to-r from-red-600 to-orange-600 rounded-full font-medium hover:shadow-lg hover:shadow-red-500/20 transition-all"
              >
                View Capabilities
              </Link>
              <Link 
                href="/contact" 
                className="px-8 py-3 border border-gray-700 rounded-full font-medium hover:bg-gray-800/50 transition-all"
              >
                Security Audit
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Grid */}
      <section id="skills" className="container mx-auto px-6 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Security Framework</h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-20 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto mb-6"
          />
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive protection strategies tailored to modern threat landscapes
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <SkillCard {...skill} />
            </motion.div>
          ))}
        </div>

        {/* Proficiency Bars */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto bg-gray-900/50 border border-gray-800 rounded-xl p-8 backdrop-blur-sm"
        >
          <h3 className="text-2xl font-bold mb-8 text-center">Security Expertise</h3>
          {proficiencies.map((item, index) => (
            <ProgressPill 
              key={index}
              name={item.name}
              value={item.value}
              color={item.color}
            />
          ))}
        </motion.div>
      </section>

      {/* Case Study Teaser */}
      <section className="bg-gradient-to-br from-gray-900 to-red-900/20 py-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="container mx-auto px-6"
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <FiActivity className="text-5xl mx-auto text-red-400 mb-6" />
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Proven Protection</h2>
            <p className="text-xl text-gray-300 mb-8">
              Implemented security measures that reduced <span className="font-bold text-red-300">attack surface by 78%</span> and 
              decreased <span className="font-bold text-orange-300">incident response time by 65%</span> for enterprise clients
            </p>
            <Link 
              href="/case-studies" 
              className="inline-flex items-center px-6 py-3 border border-red-500 text-red-400 rounded-full hover:bg-red-500/10 transition-all group"
            >
              View Security Cases
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-red-900/40 to-orange-900/40 border border-gray-800 rounded-2xl p-8 md:p-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Robust Security?</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Let&apos;s fortify your digital assets with enterprise-grade protection and monitoring
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/contact" 
              className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-600 rounded-full font-medium hover:shadow-xl hover:shadow-red-500/30 transition-all flex items-center"
            >
              <FiShield className="mr-2" /> Request Consultation
            </Link>
            <Link 
              href="/company" 
              className="px-8 py-4 border border-gray-700 rounded-full font-medium hover:bg-gray-800/50 transition-all flex items-center"
            >
              <FiLock className="mr-2" /> About Security Team
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
