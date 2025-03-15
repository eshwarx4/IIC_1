import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Youtube } from 'lucide-react';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#ed502e] mb-4">Contact Us</h2>
          <p className="text-gray-900 max-w-2xl mx-auto">
            Get in touch with us for any inquiries about our programs or support.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="bg-gray-100 p-8 rounded-lg"
          >
            <h3 className="text-2xl font-bold text-[#ed502e]/80 mb-6">Send us a message</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 bg-gray-200 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-[#ed502e]/60"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 bg-gray-200 border border-gray-300 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#ed502e]/60"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 bg-gray-200 border border-gray-300 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#ed502e]/60"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-[#ed502e] text-white rounded-md hover:bg-[#ed502e]/80 transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="bg-gray-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-[#ed502e] mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center text-gray-800">
                  <MapPin className="h-6 w-6 text-[#ed502e] mr-3" />
                  <span>IIT Kharagpur, West Bengal, India - 721302</span>
                </div>
                <div className="flex items-center text-gray-800">
                  <Mail className="h-6 w-6 text-[#ed502e] mr-3" />
                  <a href="mailto:contact@iic.edu" className="hover:text-white">iic.main@gmail.com</a>
                </div>
                <div className="flex items-center text-gray-800">
                  <Phone className="h-6 w-6 text-[#ed502e] mr-3" />
                  <a href="tel:+919876543210" className="hover:text-white">+91 987 654 3210</a>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-[#ed502e] mb-6">Follow Us</h3>
              <div className="flex space-x-6">
                <a href="https://www.linkedin.com/company/iic-iit-kgp/posts/?feedView=all" className="text-gray-400 hover:text-blue-500 transition-colors">
                  <Linkedin className="h-8 w-8" />
                </a>
                {/* <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <Twitter className="h-8 w-8" />
                </a> */}
                <a href="https://www.instagram.com/iic.iitkgp?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="text-gray-400 hover:text-pink-500 transition-colors">
                  <Instagram className="h-8 w-8" />
                </a>
                {/* <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                  <Youtube className="h-8 w-8" />
                </a> */}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;