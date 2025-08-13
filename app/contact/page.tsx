"use client";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiSend, FiUser, FiMessageSquare } from "react-icons/fi";
import Link from "next/link";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
  service?: string;
};

export default function ContactPage() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    // Handle form submission (e.g., send to API)
    console.log(data);
    alert("Thank you for your message! We'll get back to you soon.");
    reset();
  };

  const contactMethods = [
    {
      icon: <FiMail className="text-blue-400 text-2xl" />,
      title: "Email Us",
      description: "Send us a message anytime",
      value: "irayaian15@gmail.com",
      href: "mailto:irayaian15@gmail.com"
    },
    {
      icon: <FiPhone className="text-purple-400 text-2xl" />,
      title: "Call Us",
      description: "Available 24/7 for urgent inquiries",
      value: "+254 757 662968",
      href: "tel:+254757662968"
    },
    {
      icon: <FiMapPin className="text-green-400 text-2xl" />,
      title: "Our Location",
      description: "Based in Kiambu, serving globally",
      value: "Ikinu Town, Githunguri, Kiambu County, Kenya",
      href: "https://maps.google.com?q=Ikinu+Town,+Githunguri,+Kiambu+County,+Kenya"
    }
  ];

  const services = [
    "Web Hosting",
    "SEO Services",
    "Cybersecurity",
    "Web Development",
    "Website Maintenance",
    "Digital Marketing",
    "Other Inquiry"
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
            Get In Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 text-gray-300"
          >
            Available for local and international projects. Reach out anytime!
          </motion.p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 border border-gray-700 rounded-2xl p-8 md:p-10"
          >
            <h2 className="text-3xl font-bold mb-8">Send Us a Message</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiUser className="text-gray-500" />
                  </div>
                  <input
                    id="name"
                    type="text"
                    {...register("name", { required: "Name is required" })}
                    className={`pl-10 w-full bg-gray-700 border ${errors.name ? "border-red-500" : "border-gray-600"} rounded-lg py-3 px-4 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition`}
                    placeholder="Your name"
                  />
                </div>
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiMail className="text-gray-500" />
                  </div>
                  <input
                    id="email"
                    type="email"
                    {...register("email", { 
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address"
                      }
                    })}
                    className={`pl-10 w-full bg-gray-700 border ${errors.email ? "border-red-500" : "border-gray-600"} rounded-lg py-3 px-4 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition`}
                    placeholder="your.email@example.com"
                  />
                </div>
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject <span className="text-red-500">*</span>
                </label>
                <input
                  id="subject"
                  type="text"
                  {...register("subject", { required: "Subject is required" })}
                  className={`w-full bg-gray-700 border ${errors.subject ? "border-red-500" : "border-gray-600"} rounded-lg py-3 px-4 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition`}
                  placeholder="How can we help?"
                />
                {errors.subject && (
                  <p className="mt-1 text-sm text-red-500">{errors.subject.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium mb-2">
                  Service (Optional)
                </label>
                <select
                  id="service"
                  {...register("service")}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg py-3 px-4 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                >
                  <option value="">Select a service</option>
                  {services.map((service) => (
                    <option key={service} value={service}>{service}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 pt-3 flex items-start pointer-events-none">
                    <FiMessageSquare className="text-gray-500" />
                  </div>
                  <textarea
                    id="message"
                    rows={5}
                    {...register("message", { required: "Message is required" })}
                    className={`pl-10 w-full bg-gray-700 border ${errors.message ? "border-red-500" : "border-gray-600"} rounded-lg py-3 px-4 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition`}
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
                )}
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-3 px-6 rounded-lg transition-all flex items-center justify-center"
              >
                <FiSend className="mr-2" />
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-bold mb-8">Other Ways to Connect</h2>
            
            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 5 }}
                  className="flex items-start"
                >
                  <div className="flex-shrink-0 mr-6 mt-1">
                    {method.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">{method.title}</h3>
                    <p className="text-gray-400 mb-2">{method.description}</p>
                    <Link 
                      href={method.href} 
                      className="text-blue-400 hover:text-blue-300 transition"
                    >
                      {method.value}
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="pt-8">
              <h3 className="text-xl font-bold mb-4">Availability</h3>
              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span className="text-gray-400">Sunday - Sunday</span>
                    <span>24/7 Availability</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-400">Phone Support</span>
                    <span>All Day</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-400">Response Time</span>
                    <span>Within 24 hours</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-8">
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                {[
                  { name: "Twitter", href: "#" },
                  { name: "LinkedIn", href: "#" },
                  { name: "GitHub", href: "#" },
                  { name: "Instagram", href: "#" }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    whileHover={{ y: -2 }}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-lg px-4 py-2 transition"
                  >
                    {social.name}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}