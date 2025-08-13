"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  FiSearch, 
  FiServer, 
  FiShield, 
  FiCode,
  FiSettings,
  FiBarChart2,
  FiGlobe,
  FiLock,
  FiCpu
} from "react-icons/fi";



interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  color: string;
  cta: string;
}

const ServiceCard = ({ icon, title, description, href, color, cta }: ServiceCardProps) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className={`p-8 rounded-xl border border-gray-800 bg-gradient-to-br from-gray-900 to-gray-800 ${color} shadow-lg h-full flex flex-col`}
  >
    <div className="text-4xl mb-6">{icon}</div>
    <h3 className="text-2xl font-bold mb-4 text-white">{title}</h3>
    <p className="text-gray-300 mb-6 flex-grow">{description}</p>
    <Link 
      href={href}
      className={`mt-auto px-6 py-3 rounded-full font-medium w-fit ${color.includes('blue') ? 'bg-blue-600 hover:bg-blue-700' : color.includes('purple') ? 'bg-purple-600 hover:bg-purple-700' : 'bg-green-600 hover:bg-green-700'} transition-all`}
    >
      {cta}
    </Link>
  </motion.div>
);

export default function ServicesPage() {
  const services = [
    {
      icon: <FiSearch className="text-blue-400" />,
      title: "SEO Services",
      description: "Comprehensive search engine optimization to increase your visibility and organic traffic with data-driven strategies.",
      href: "/seo",
      color: "hover:border-blue-500/30",
      cta: "Boost Rankings"
    },
    {
      icon: <FiServer className="text-purple-400" />,
      title: "Web Hosting",
      description: "High-performance hosting solutions with 99.9% uptime, SSD storage, and free SSL certificates for optimal website speed and security.",
      href: "/hosting",
      color: "hover:border-purple-500/30",
      cta: "View Plans"
    },
    {
      icon: <FiShield className="text-red-400" />,
      title: "Cybersecurity",
      description: "Enterprise-grade protection including malware scanning, DDoS protection, and vulnerability assessments to safeguard your digital assets.",
      href: "/cybersecurity",
      color: "hover:border-red-500/30",
      cta: "Secure My Site"
    },
    {
      icon: <FiCode className="text-green-400" />,
      title: "Web Development",
      description: "Custom website and application development tailored to your business needs with modern technologies and responsive design.",
      href: "/development",
      color: "hover:border-green-500/30",
      cta: "Build My Project"
    },
    {
      icon: <FiSettings className="text-yellow-400" />,
      title: "Website Maintenance",
      description: "Ongoing support including updates, backups, performance optimization, and content changes to keep your site running smoothly.",
      href: "/maintenance",
      color: "hover:border-yellow-500/30",
      cta: "Maintain My Site"
    },
    {
      icon: <FiBarChart2 className="text-indigo-400" />,
      title: "Digital Marketing",
      description: "Complete digital strategies including PPC, social media, and content marketing to grow your online presence and conversions.",
      href: "/marketing",
      color: "hover:border-indigo-500/30",
      cta: "Grow My Business"
    }
  ];

  const features = [
    {
      icon: <FiGlobe className="text-blue-400" />,
      title: "Global Network",
      description: "Servers worldwide for optimal performance"
    },
    {
      icon: <FiLock className="text-purple-400" />,
      title: "Enterprise Security",
      description: "Military-grade encryption and protection"
    },
    {
      icon: <FiCpu className="text-green-400" />,
      title: "Cutting-Edge Tech",
      description: "Latest frameworks and technologies"
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
            Comprehensive Digital Solutions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 text-gray-300"
          >
            All the services you need to build, grow, and protect your online presence
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-6 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"
          />
          <p className="text-gray-400 max-w-2xl mx-auto">
            End-to-end solutions tailored to your business requirements
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
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

        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gray-800/50 border border-gray-700 rounded-2xl p-8 md:p-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">Why Choose Us?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-900/50 p-6 rounded-xl text-center"
              >
                <div className="text-4xl mb-4 flex justify-center">{feature.icon}</div>
                <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
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
          className="bg-gradient-to-r from-blue-900/40 to-purple-900/40 border border-gray-800 rounded-2xl p-8 md:p-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Custom Solutions?</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            We specialize in tailored digital solutions for businesses of all sizes.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-medium hover:shadow-xl hover:shadow-blue-500/30 transition-all"
            >
              Get a Free Consultation
            </Link>
            <Link
              href="/"
              className="px-8 py-4 border border-gray-700 rounded-full font-medium hover:bg-gray-800/50 transition-all"
            >
              View Our Work
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}