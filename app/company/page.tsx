"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiShield, FiGlobe, FiTrendingUp, FiServer, FiClock, FiAward } from "react-icons/fi";



interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

interface StatCardProps {
  value: string;
  label: string;
  icon: React.ReactNode;
}

const ServiceCard = ({ icon, title, description, color }: ServiceCardProps) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className={`p-8 rounded-xl border border-gray-800 bg-gradient-to-br from-gray-900 to-gray-800 ${color} shadow-lg`}
  >
    <div className="text-4xl mb-6 text-blue-400">{icon}</div>
    <h3 className="text-2xl font-bold mb-4 text-white">{title}</h3>
    <p className="text-gray-300">{description}</p>
  </motion.div>
);

const StatCard = ({ value, label, icon }: StatCardProps) => (
  <motion.div 
    whileHover={{ scale: 1.05 }}
    className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 text-center backdrop-blur-sm"
  >
    <div className="text-blue-400 text-3xl mb-4 flex justify-center">{icon}</div>
    <p className="text-5xl font-bold text-white mb-2">{value}</p>
    <p className="text-gray-400 uppercase text-sm tracking-wider">{label}</p>
  </motion.div>
);

export default function CompanyPage() {
  const services = [
    {
      icon: <FiServer />,
      title: "Web Hosting",
      description: "Blazing-fast hosting with 99.9% uptime guarantee",
      color: "hover:border-blue-500/30"
    },
    {
      icon: <FiShield />,
      title: "Cybersecurity",
      description: "Enterprise-grade protection for your digital assets",
      color: "hover:border-purple-500/30"
    },
    {
      icon: <FiTrendingUp />,
      title: "SEO Services",
      description: "Data-driven strategies to dominate search rankings",
      color: "hover:border-green-500/30"
    },
  ];

  const stats = [
    { value: "99.9%", label: "Uptime", icon: <FiClock /> },
    { value: "500+", label: "Clients", icon: <FiGlobe /> },
    { value: "24/7", label: "Support", icon: <FiAward /> },
  ];

  return (
    <main className="min-h-screen bg-gray-950 text-gray-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 to-transparent"></div>
        <div className="container mx-auto px-6 py-24 md:py-32 flex flex-col items-center text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block bg-blue-900/30 text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            Trusted by 500+ businesses
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Digital Excellence
            </span>{" "}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Redefined
            </motion.span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto mb-10 text-gray-300"
          >
            We deliver cutting-edge web hosting, impenetrable cybersecurity, and
            results-driven SEO solutions to power your digital transformation.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link
              href="/contact"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-medium hover:shadow-lg hover:shadow-blue-500/20 transition-all"
            >
              Get Started Today
            </Link>
            <Link
              href="/services"
              className="px-8 py-4 border border-gray-700 rounded-full font-medium hover:bg-gray-800/50 transition-all"
            >
              Explore Services
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Services</h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

      {/* Stats Section */}
      <section className="bg-gradient-to-br from-gray-900 to-blue-900/20 py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <StatCard {...stat} />
              </motion.div>
            ))}
          </motion.div>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Digital Presence?</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Let&apos;s discuss how we can help your business grow online.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-medium hover:shadow-xl hover:shadow-blue-500/30 transition-all flex items-center"
            >
              Schedule Free Consultation
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}