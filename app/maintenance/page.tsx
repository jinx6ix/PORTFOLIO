"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  FiSettings,
  FiShield,
  FiUploadCloud,
  FiClock,
  FiBarChart2,
  FiCode,
  FiServer} from "react-icons/fi";



interface PlanCardProps {
  name: string;
  price: string;
  period: string;
  features: string[];
  cta: string;
  featured?: boolean;
  href: string;
}

interface ServiceFeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const PlanCard = ({ name, price, period, features, cta, featured = false, href }: PlanCardProps) => (
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

const ServiceFeature = ({ icon, title, description }: ServiceFeatureProps) => (
  <motion.div 
    whileHover={{ scale: 1.05 }}
    className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 text-center h-full"
  >
    <div className="text-4xl mb-4 text-blue-400 flex justify-center">{icon}</div>
    <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
    <p className="text-gray-300">{description}</p>
  </motion.div>
);

export default function MaintenancePage() {
  const maintenancePlans = [
    {
      name: "Basic Care",
      price: "$99",
      period: "month",
      features: [
        "Weekly backups",
        "Security monitoring",
        "Uptime monitoring",
        "Basic updates",
        "Email support",
        "Monthly report"
      ],
      cta: "Get Basic Care",
      href: "/signup?plan=basic-maintenance",
      featured: false
    },
    {
      name: "Professional Care",
      price: "$199",
      period: "month",
      features: [
        "Daily backups",
        "Advanced security",
        "Performance optimization",
        "Plugin/theme updates",
        "Content updates (up to 2 hrs)",
        "Priority support",
        "Weekly report"
      ],
      cta: "Get Professional Care",
      href: "/signup?plan=pro-maintenance",
      featured: true
    },
    {
      name: "Enterprise Care",
      price: "$399",
      period: "month",
      features: [
        "Real-time backups",
        "Enterprise security",
        "Advanced performance tuning",
        "Unlimited updates",
        "Content updates (up to 5 hrs)",
        "24/7 emergency support",
        "Custom reporting",
        "Dedicated account manager"
      ],
      cta: "Get Enterprise Care",
      href: "/signup?plan=enterprise-maintenance",
      featured: false
    }
  ];

  const features = [
    {
      icon: <FiSettings />,
      title: "Regular Updates",
      description: "Keep your CMS, plugins, and themes up-to-date and secure"
    },
    {
      icon: <FiShield />,
      title: "Security Protection",
      description: "Malware scanning, firewall protection, and vulnerability fixes"
    },
    {
      icon: <FiUploadCloud />,
      title: "Automated Backups",
      description: "Daily or weekly backups with easy one-click restoration"
    },
    {
      icon: <FiClock />,
      title: "Uptime Monitoring",
      description: "24/7 monitoring with instant alerts if your site goes down"
    },
    {
      icon: <FiBarChart2 />,
      title: "Performance Optimization",
      description: "Speed tuning and database optimization"
    },
    {
      icon: <FiCode />,
      title: "Content Updates",
      description: "Text, image, and product updates without developer hassle"
    }
  ];

  const commonIssues = [
    "Slow loading pages hurting conversions",
    "Security vulnerabilities from outdated software",
    "Broken links and 404 errors",
    "Plugin conflicts after updates",
    "Database bloat slowing down your site",
    "Mobile responsiveness issues"
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
            Website Maintenance Plans
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 text-gray-300"
          >
            Keep your website secure, fast, and up-to-date with our professional maintenance services
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link
              href="#plans"
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-medium hover:shadow-lg hover:shadow-blue-500/20 transition-all"
            >
              View Maintenance Plans
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 border border-gray-700 rounded-full font-medium hover:bg-gray-800/50 transition-all"
            >
              Emergency Fix Request
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Maintenance Services</h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"
          />
          <p className="text-gray-400 max-w-2xl mx-auto">
            We handle the technical details so you can focus on your business
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <ServiceFeature {...feature} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Common Issues Section */}
      <section className="bg-gradient-to-br from-gray-900 to-blue-900/20 py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Common Website Issues We Fix
            </h2>
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {commonIssues.map((issue, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start"
                  >
                    <svg className="w-5 h-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                    <span className="text-gray-300">{issue}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="plans" className="container mx-auto px-6 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Maintenance Plans</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Choose the level of care that fits your website&apos;s needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {maintenancePlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <PlanCard {...plan} />
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
          <FiServer className="text-5xl mx-auto text-blue-400 mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Immediate Help?</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Our emergency support team is ready to fix critical issues within hours.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact?priority=emergency"
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-medium hover:shadow-xl hover:shadow-blue-500/30 transition-all"
            >
              Request Emergency Support
            </Link>
            <Link
              href="/maintenance#plans"
              className="px-8 py-4 border border-gray-700 rounded-full font-medium hover:bg-gray-800/50 transition-all"
            >
              View Maintenance Plans
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}