'use client';

import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-950 text-white px-4 sm:px-10 py-20 flex flex-col items-center justify-start">
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-arcade sm:text-6xl font-bold text-center bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text mb-10"
      >
        Let's Connect
      </motion.h1> 

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-lg text-gray-300 text-center max-w-2xl mb-12"
      >
        Got a question, suggestion, or just wanna say hi? Drop a message or connect with me on any platform below. Let’s build something epic together.
      </motion.p>

      <div className="w-full max-w-3xl bg-gray-900 rounded-xl shadow-2xl p-8 space-y-6">
        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            alert("📨 Form submitted (functionality not wired yet).");
          }}
        >
          <div className=' flex flex-col gap-2 '>
            <label className="block text-sm font-medium text-gray-400">Your Name</label>
            <input
              type="text"
              required
              className="w-full px-5 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>

          <div className=' flex flex-col gap-2 '>
            <label className="block text-sm font-medium text-gray-400">Email</label>
            <input
              type="email"
              required
              className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>

          <div className=' flex flex-col gap-2 '>
            <label className="block text-sm font-medium text-gray-400">Message</label>
            <textarea
              rows={5}
              required
              className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-cyan-500 hover:bg-cyan-600 text-black font-semibold py-3 px-6 rounded-lg transition duration-300 hover:scale-105"
          >
            ✉️ Send Message
          </button>
        </form>
      </div>

      <div className="mt-12 text-center space-y-4">
        <h3 className="text-xl font-semibold">Follow Me</h3>
        <div className="flex justify-center space-x-6 text-2xl text-cyan-400">
          <a href="https://github.com/yourhandle" target="_blank" rel="noreferrer"><FaGithub /></a>
          <a href="https://linkedin.com/in/yourhandle" target="_blank" rel="noreferrer"><FaLinkedin /></a>
          <a href="https://twitter.com/yourhandle" target="_blank" rel="noreferrer"><FaTwitter /></a>
          <a href="mailto:your@email.com"><FaEnvelope /></a>
        </div>
      </div>
    </main>
  );
}
