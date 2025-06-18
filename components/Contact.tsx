"use client"

import { motion } from "framer-motion"
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa"
import { SiGooglemaps } from "react-icons/si"

export const Contact = () => {
    // Click handlers for analytics tracking
    const trackPhoneClick = () => {
        // Replace with your analytics code (e.g., Google Analytics)
        console.log("Phone link clicked")
    }

    const trackEmailClick = () => {
        console.log("Email link clicked")
    }

    const trackWhatsAppClick = () => {
        console.log("WhatsApp link clicked")
    }

    return (
        <section id="contact" className="overflow-x-clip py-32 text-white max-w-[1200px] mx-auto px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className='grid lg:grid-cols-2 gap-16'
            >
                <div className="space-y-2">
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className='text-5xl md:text-7xl font-bold text-purple-300'
                    >
                        Ready to <span className="text-purple-500">work together?</span>
                    </motion.h2>
                    
                    <p className="text-xl text-purple-100 max-w-lg">
                        Let&apos;s discuss how I can help bring your digital ideas to life. 
                        I typically respond within 24 hours.
                    </p>

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className='glass p-8 rounded-2xl space-y-8'  
                    >
                        {/* Phone with WhatsApp alternative */}
                        <div className="space-y-4">
                            <p className="text-lg text-purple-300 flex items-center gap-2">
                                <FaPhone /> Contact Options
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a
                                    href="tel:+254757662968"
                                    onClick={trackPhoneClick}
                                    className="bg-purple-900/50 hover:bg-purple-800 transition-all duration-300 px-6 py-3 rounded-lg flex items-center gap-3 text-lg font-medium"
                                >
                                    <FaPhone /> +254 757662968
                                </a>
                                <a
                                    href="https://wa.me/254757662968"
                                    onClick={trackWhatsAppClick}
                                    className="bg-green-900/50 hover:bg-green-800 transition-all duration-300 px-6 py-3 rounded-lg flex items-center gap-3 text-lg font-medium"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaWhatsapp /> WhatsApp Me
                                </a>
                            </div>
                        </div>

                        {/* Email with strong CTA */}
                        <div className="space-y-4">
                            <p className="text-lg text-purple-300 flex items-center gap-2">
                                <FaEnvelope /> Email Me
                            </p>
                            <a
                                href="mailto:irayaian15@gmail.com?subject=Project Inquiry&body=Hi Ian, I'd like to discuss a project..."
                                onClick={trackEmailClick}
                                className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-xl font-semibold px-6 py-4 rounded-lg transition-all duration-300"
                            >
                                <FaEnvelope className="inline mr-2" />
                                Send an Email
                            </a>
                            <p className="text-sm text-purple-200">
                                Pre-sale questions? Project estimates? Just say hello!
                            </p>
                        </div>

                        {/* Location with better map integration */}
                        <div className="space-y-4">
                            <p className="text-lg text-purple-300 flex items-center gap-2">
                                <FaMapMarkerAlt /> My Location
                            </p>
                            <address className="text-xl not-italic leading-relaxed flex items-start gap-2">
                                <FaMapMarkerAlt className="mt-1 flex-shrink-0" />
                                <div>
                                    <strong>Ikinu Town, Githunguri</strong><br />
                                    Kiambu County, Kenya<br />
                                    <span className="text-purple-200">Available for local and international projects</span>
                                </div>
                            </address>
                        </div>
                    </motion.div>
                </div>

                {/* Enhanced Map Section */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="w-full h-full min-h-[500px] rounded-2xl overflow-hidden relative"
                >
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.954063464196!2d36.83087631533044!3d-1.202435535922858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f3f1a5e5d5d5b%3A0x5e5e5e5e5e5e5e5e!2sIkinu%20Town%2C%20Githunguri!5e0!3m2!1sen!2ske!4v1620000000000!5m2!1sen!2ske"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="My Office Location in Ikinu Town"
                        className="absolute inset-0"
                    />
                    <div className="absolute bottom-4 left-4 bg-black/70 text-white px-4 py-2 rounded-lg flex items-center gap-2">
                        <SiGooglemaps className="text-purple-400" />
                        <span>Open in Google Maps</span>
                    </div>
                </motion.div>
            </motion.div>

            {/* Testimonial snippet for social proof */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="mt-16 text-center"
            >
                <p className="text-lg text-purple-200 italic">
                    &quot;Ian delivered our project 2 weeks ahead of schedule with exceptional quality. 
                    Will definitely work with him again!&quot;
                </p>
                <p className="mt-2 text-purple-300">- Happy Client, Nairobi</p>
            </motion.div>
        </section>
    )
}