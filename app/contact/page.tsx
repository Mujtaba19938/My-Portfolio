"use client"

import { motion } from "framer-motion"
import { Send } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white font-poppins">
      <Navbar />

      {/* Contact Section */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-3xl md:text-5xl font-bold text-[#c9a86a] mb-4">Get In Touch</h1>
            <div className="w-20 h-1 bg-[#c9a86a] mx-auto mb-6"></div>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Have a project in mind or want to discuss a potential collaboration? Feel free to reach out using the form
              below or connect with me on social media.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-[#252525] p-6 rounded-lg text-center"
              >
                <div className="w-12 h-12 bg-[#c9a86a]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-[#c9a86a]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-[#c9a86a]">Email</h3>
                <p className="text-gray-300">contact@mujtabakhanani.com</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-[#252525] p-6 rounded-lg text-center"
              >
                <div className="w-12 h-12 bg-[#c9a86a]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-[#c9a86a]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-[#c9a86a]">Location</h3>
                <p className="text-gray-300">San Francisco, CA</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-[#252525] p-6 rounded-lg text-center"
              >
                <div className="w-12 h-12 bg-[#c9a86a]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-[#c9a86a]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-[#c9a86a]">Working Hours</h3>
                <p className="text-gray-300">Mon - Fri: 9AM - 6PM</p>
              </motion.div>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-[#252525] border border-[#333] focus:border-[#c9a86a] rounded-md py-3 px-4 text-white focus:outline-none focus:ring-1 focus:ring-[#c9a86a] transition-colors duration-300"
                    placeholder="Your Name"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-[#252525] border border-[#333] focus:border-[#c9a86a] rounded-md py-3 px-4 text-white focus:outline-none focus:ring-1 focus:ring-[#c9a86a] transition-colors duration-300"
                    placeholder="Your Email"
                  />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full bg-[#252525] border border-[#333] focus:border-[#c9a86a] rounded-md py-3 px-4 text-white focus:outline-none focus:ring-1 focus:ring-[#c9a86a] transition-colors duration-300"
                  placeholder="Subject"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full bg-[#252525] border border-[#333] focus:border-[#c9a86a] rounded-md py-3 px-4 text-white focus:outline-none focus:ring-1 focus:ring-[#c9a86a] transition-colors duration-300"
                  placeholder="Your Message"
                ></textarea>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex justify-center"
              >
                <button
                  type="submit"
                  className="bg-[#c9a86a] hover:bg-[#b89559] text-[#1a1a1a] font-semibold py-3 px-8 rounded-md transition-all duration-300 flex items-center"
                >
                  Send Message
                  <Send size={18} className="ml-2" />
                </button>
              </motion.div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
