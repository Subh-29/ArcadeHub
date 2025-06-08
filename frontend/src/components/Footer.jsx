'use client';

import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-10 pb-6 px-6 sm:px-20 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10">
        
        {/* Brand/Logo/Intro */}
        <div>
          <h2 className="text-2xl font-bold text-white">Arcade Hub</h2>
          <p className="mt-4 text-sm text-gray-400">
            Your companion for tracking Google Cloud Arcade points, bonuses, and badges. Master the cloud, one game at a time.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Explore</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-cyan-400 transition">Home</Link></li>
            <li><Link href="/about" className="hover:text-cyan-400 transition">About</Link></li>
            <li><Link href="/calculator" className="hover:text-cyan-400 transition">Calculator</Link></li>
            <li><Link href="/contact" className="hover:text-cyan-400 transition">Contact</Link></li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Connect with us</h3>
          <div className="flex space-x-4 text-lg">
            <a href="https://github.com/yourhandle" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition"><FaGithub /></a>
            <a href="https://linkedin.com/in/yourhandle" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition"><FaLinkedin /></a>
            <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition"><FaTwitter /></a>
            <a href="mailto:your@email.com" className="hover:text-cyan-400 transition"><FaEnvelope /></a>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-sm text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} Arcade Hub. All rights reserved.</p>
        <div className="mt-2 flex justify-center space-x-4">
          <Link href="/privacy" className="hover:text-cyan-400 transition">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-cyan-400 transition">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
