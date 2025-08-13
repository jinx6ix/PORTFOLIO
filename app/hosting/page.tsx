"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  FiServer, 
  FiZap, 
  FiShield,
  FiGlobe,
  FiDatabase,
  FiUploadCloud,
  FiHeadphones} from "react-icons/fi";


interface PricingTierProps {
  name: string;
  price: string;
  period: string;
  features: string[];
  cta: string;
  featured?: boolean;
  href: string;
}

const PricingTier = ({ name, price, period, features, cta, featured = false, href }: PricingTierProps) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className={`p-8 rounded-xl border ${featured ? 'border-blue-500 bg-gray-800/50' : 'border-gray-800 bg-gray-900'} shadow-lg h-full flex flex-col`}
  >
    {featured && (
      <div className="bg-blue-600 text-white text-sm font-bold px-4 py-1 rounded-full mb-4 w-fit">
        Most Popular
      </div>
    )}
    <h3 className="text-2xl font-bold mb-2 text-white">{name}</h3>
    <div className="mb-6">
      <span className="text-4xl font-bold">{price}</span>
      <span className="text-gray-400">/{period}</span>
    </div>
    <ul className="mb-8 space-y-3 flex-grow">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start">
          <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
          <span className="text-gray-300">{feature}</span>
        </li>
      ))}
    </ul>
    <Link 
      href={href}
      className={`mt-auto px-6 py-3 rounded-full font-medium text-center ${featured ? 'bg-gradient-to-r from-blue-500 to-purple-600 hover:shadow-lg hover:shadow-blue-500/20' : 'bg-gray-800 hover:bg-gray-700'} transition-all`}
    >
      {cta}
    </Link>
  </motion.div>
);

export default function HostingPage() {
  const hostingPlans = [
    {
      name: "Starter",
      price: "$9.99",
      period: "month",
      features: [
        "1 Website",
        "10GB SSD Storage",
        "Unmetered Bandwidth",
        "Free SSL Certificate",
        "24/7 Basic Support",
        "99.9% Uptime Guarantee"
      ],
      cta: "Get Started",
      href: "/signup?plan=starter",
      featured: false
    },
    {
      name: "Business",
      price: "$19.99",
      period: "month",
      features: [
        "Unlimited Websites",
        "50GB SSD Storage",
        "Unmetered Bandwidth",
        "Free SSL Certificate",
        "Free Domain (1 year)",
        "24/7 Priority Support",
        "99.9% Uptime Guarantee",
        "Daily Backups"
      ],
      cta: "Get Business Hosting",
      href: "/signup?plan=business",
      featured: true
    },
    {
      name: "Enterprise",
      price: "$49.99",
      period: "month",
      features: [
        "Unlimited Websites",
        "200GB NVMe Storage",
        "Unmetered Bandwidth",
        "Free SSL Certificate",
        "Free Domain (1 year)",
        "24/7 VIP Support",
        "100% Uptime SLA",
        "Daily Backups + Staging",
        "DDoS Protection",
        "Dedicated Resources"
      ],
      cta: "Get Enterprise Hosting",
      href: "/signup?plan=enterprise",
      featured: false
    }
  ];

  const features = [
    {
      icon: <FiZap className="text-blue-400" />,
      title: "Lightning Fast",
      description: "SSD/NVMe storage and optimized servers for maximum speed"
    },
    {
      icon: <FiShield className="text-purple-400" />,
      title: "Rock Solid Security",
      description: "Free SSL, DDoS protection, and malware scanning"
    },
    {
      icon: <FiGlobe className="text-green-400" />,
      title: "Global Network",
      description: "20+ datacenters worldwide for optimal performance"
    },
    {
      icon: <FiDatabase className="text-yellow-400" />,
      title: "One-Click Apps",
      description: "WordPress, Joomla, and 100+ other apps with 1-click install"
    },
    {
      icon: <FiUploadCloud className="text-red-400" />,
      title: "Easy Migrations",
      description: "Free website migration from your current host"
    },
    {
      icon: <FiHeadphones className="text-indigo-400" />,
      title: "24/7 Support",
      description: "Expert support whenever you need it"
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
            Premium Web Hosting
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 text-gray-300"
          >
            Blazing-fast hosting with 99.9% uptime, free SSL, and 24/7 expert support
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link
              href="#pricing"
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-medium hover:shadow-lg hover:shadow-blue-500/20 transition-all"
            >
              View Plans
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 border border-gray-700 rounded-full font-medium hover:bg-gray-800/50 transition-all"
            >
              Get Custom Quote
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Our Hosting Stands Out</h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 border border-gray-700 rounded-xl p-8"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="bg-gradient-to-br from-gray-900 to-blue-900/20 py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              No hidden fees. Cancel anytime. 30-day money-back guarantee.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {hostingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <PricingTier {...plan} />
              </motion.div>
            ))}
          </div>
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
          <div className="max-w-4xl mx-auto">
            <FiServer className="text-5xl mx-auto text-blue-400 mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Launch Your Website?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Get started with our high-performance hosting today. Migrate your existing site for free!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/signup"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-medium hover:shadow-xl hover:shadow-blue-500/30 transition-all"
              >
                Get Started Now
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 border border-gray-700 rounded-full font-medium hover:bg-gray-800/50 transition-all"
              >
                Ask Questions
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}