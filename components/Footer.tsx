"use client"

import { motion } from "framer-motion"
import { AiFillGithub, AiOutlineTwitter, AiFillInstagram, AiOutlineMail } from 'react-icons/ai'
import { FaTelegramPlane, FaLinkedinIn } from 'react-icons/fa'
import { FiArrowUpRight } from 'react-icons/fi'

const socialLinks = [
  { 
    href: "https://github.com/yourusername", 
    Icon: AiFillGithub, 
    label: "GitHub",
    color: "hover:text-purple-400"
  },
  { 
    href: "https://x.com/yourhandle", 
    Icon: AiOutlineTwitter, 
    label: "X (Twitter)",
    color: "hover:text-blue-400"
  },
  { 
    href: "https://linkedin.com/in/yourprofile", 
    Icon: FaLinkedinIn, 
    label: "LinkedIn",
    color: "hover:text-blue-500"
  },
  { 
    href: "https://instagram.com/@i_raya_w_ainaina", 
    Icon: AiFillInstagram, 
    label: "Instagram",
    color: "hover:text-pink-500"
  },
  { 
    href: "https://telegram.org/yourchannel", 
    Icon: FaTelegramPlane, 
    label: "Telegram",
    color: "hover:text-blue-300"
  },
  { 
    href: "mailto:irayaian15@gmail.com", 
    Icon: AiOutlineMail, 
    label: "Email",
    color: "hover:text-red-400"
  }
]

const footerLinks = [
  { name: "Home", href: "#home" },
  { name: "Projects", href: "#projects" },
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" }
]

export const Footer = () => {
  return (
    <footer className="relative py-16 bg-gradient-to-b from-gray-900 to-black overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-64 h-64 bg-pink-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 relative z-10">
        {/* Main footer content */}
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Brand info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Your Name
            </h3>
            <p className="text-gray-300">
              Full-stack developer creating digital experiences that matter.
            </p>
            <div className="flex gap-4">
              {socialLinks.map(({ href, Icon, label, color }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className={`text-gray-400 ${color} transition-colors`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <motion.li
                  key={link.name}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a 
                    href={link.href} 
                    className="flex items-center gap-1 text-gray-400 hover:text-purple-300 transition-colors"
                  >
                    {link.name}
                    <FiArrowUpRight className="text-xs opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white">Stay Updated</h4>
            <p className="text-gray-300">
              Subscribe to my newsletter for project updates and insights.
            </p>
            <form className="flex gap-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="flex-1 px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
              <button 
                type="submit"
                className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all"
              >
                Join
              </button>
            </form>
          </motion.div>
        </div>

        {/* Bottom footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <p className="text-gray-400">
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </p>
          
          <div className="flex gap-6">
            <a href="/privacy" className="text-gray-400 hover:text-purple-300 transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="text-gray-400 hover:text-purple-300 transition-colors">
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}