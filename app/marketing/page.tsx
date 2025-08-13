"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  FiBarChart2,
  FiTrendingUp,
  FiDollarSign,
  FiTarget,
  FiMail,
  FiUsers,
  FiLayers} from "react-icons/fi";



interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  href: string;
  cta: string;
}

interface StrategyCardProps {
  step: string;
  title: string;
  description: string;
}

const ServiceCard = ({ icon, title, description, color, href, cta }: ServiceCardProps) => (
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

const StrategyCard = ({ step, title, description }: StrategyCardProps) => (
  <motion.div 
    whileHover={{ scale: 1.02 }}
    className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 h-full"
  >
    <div className="text-blue-400 text-sm font-bold mb-2">{step}</div>
    <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
    <p className="text-gray-300">{description}</p>
  </motion.div>
);

export default function MarketingPage() {
  const services = [
    {
      icon: <FiTrendingUp className="text-blue-400" />,
      title: "SEO Services",
      description: "Increase organic traffic with comprehensive search engine optimization strategies tailored to your business.",
      color: "hover:border-blue-500/30",
      href: "/seo",
      cta: "Boost Rankings"
    },
    {
      icon: <FiDollarSign className="text-purple-400" />,
      title: "PPC Advertising",
      description: "Launch targeted pay-per-click campaigns on Google, Bing, and social media to drive qualified leads.",
      color: "hover:border-purple-500/30",
      href: "/ppc",
      cta: "Run Ads"
    },
    {
      icon: <FiMail className="text-green-400" />,
      title: "Email Marketing",
      description: "Convert subscribers into customers with automated email sequences and personalized campaigns.",
      color: "hover:border-green-500/30",
      href: "/email-marketing",
      cta: "Grow Your List"
    },
    {
      icon: <FiUsers className="text-yellow-400" />,
      title: "Social Media Marketing",
      description: "Build brand awareness and engagement through strategic social media content and advertising.",
      color: "hover:border-yellow-500/30",
      href: "/social-media",
      cta: "Get Social"
    },
    {
      icon: <FiLayers className="text-red-400" />,
      title: "Content Marketing",
      description: "Attract and retain customers through valuable blog posts, videos, and downloadable resources.",
      color: "hover:border-red-500/30",
      href: "/content-marketing",
      cta: "Create Content"
    },
    {
      icon: <FiTarget className="text-indigo-400" />,
      title: "Conversion Optimization",
      description: "Increase your conversion rates through A/B testing, heatmaps, and data-driven UX improvements.",
      color: "hover:border-indigo-500/30",
      href: "/conversion-optimization",
      cta: "Optimize Now"
    }
  ];

  const strategies = [
    {
      step: "STEP 1",
      title: "Audit & Analysis",
      description: "We analyze your current digital presence and identify growth opportunities."
    },
    {
      step: "STEP 2",
      title: "Strategy Development",
      description: "Custom marketing plan tailored to your business goals and target audience."
    },
    {
      step: "STEP 3",
      title: "Implementation",
      description: "Our team executes the strategy while maintaining brand consistency."
    },
    {
      step: "STEP 4",
      title: "Optimization",
      description: "Continuous testing and refinement based on performance data."
    }
  ];

  const metrics = [
    { value: "300%+", label: "Average Traffic Growth", icon: <FiTrendingUp /> },
    { value: "5-10X", label: "ROI on Ad Spend", icon: <FiDollarSign /> },
    { value: "40%+", label: "Increase in Conversions", icon: <FiTarget /> }
  ];

  return (
    <main className="min-h-screen bg-gray-950 text-gray-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 to-transparent"></div>
        <div className="container mx-auto px-6 py-24 md:py-32 flex flex-col items-center text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent"
          >
            Data-Driven Digital Marketing
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 text-gray-300"
          >
            Grow your business online with proven strategies that deliver measurable results
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link
              href="#services"
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full font-medium hover:shadow-lg hover:shadow-purple-500/20 transition-all"
            >
              Explore Services
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 border border-gray-700 rounded-full font-medium hover:bg-gray-800/50 transition-all"
            >
              Free Strategy Session
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="bg-gradient-to-br from-gray-900 to-purple-900/20 py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 text-center"
              >
                <div className="text-purple-400 text-3xl mb-4 flex justify-center">{metric.icon}</div>
                <p className="text-4xl font-bold text-white mb-2">{metric.value}</p>
                <p className="text-gray-400">{metric.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="container mx-auto px-6 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Marketing Services</h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-6"
          />
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive solutions to attract, engage, and convert your audience
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
      </section>

      {/* Strategy Section */}
      <section className="bg-gradient-to-br from-gray-900 to-blue-900/20 py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our 4-Step Marketing Process</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A systematic approach to ensure marketing success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {strategies.map((strategy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <StrategyCard {...strategy} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="container mx-auto px-6 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Industries We Serve</h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"
          />
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            "E-Commerce",
            "SaaS",
            "Healthcare",
            "Finance",
            "Education",
            "Real Estate",
            "Legal",
            "Manufacturing"
          ].map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 text-center"
            >
              <div className="text-lg font-medium">{industry}</div>
            </motion.div>
          ))}
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
          <FiBarChart2 className="text-5xl mx-auto text-purple-400 mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Grow Your Business?</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Let&apos;s develop a custom marketing strategy that delivers real results.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full font-medium hover:shadow-xl hover:shadow-purple-500/30 transition-all"
            >
              Get Your Free Audit
            </Link>
            <Link
              href="/case-studies"
              className="px-8 py-4 border border-gray-700 rounded-full font-medium hover:bg-gray-800/50 transition-all"
            >
              View Case Studies
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}