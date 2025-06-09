"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname()
  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Calculator", href: "/calculator" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-700">
      <div className="flex items-center justify-between px-4 py-3 md:px-8">
        <Link href={"/"} className="text-xl font-arcade md:text-3xl font-bold text-white">ArcadeHub</Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10 text-white font-medium">
          {navLinks.map(({ name, href }) => (
            <Link
              key={name}
              href={href}
              className={`hover:text-yellow-400 ${pathname === href ? "text-cyan-400 font-semibold" : "text-gray-300"
                }`}
            >
              {name}
            </Link>
          ))}
        </div>

        {/* Hamburger */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="relative w-8 h-8 flex flex-col justify-center items-center group"
          >
            <motion.span
              className="absolute w-6 h-0.5 bg-white rounded origin-top-left"
              animate={isOpen ? { rotate: 45, y: -8 } : { rotate: 0, y: -6 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="absolute w-6 h-0.5 bg-white rounded"
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="absolute w-6 h-0.5 bg-white rounded origin-bottom-left"
              animate={isOpen ? { rotate: -45, y: 8 } : { rotate: 0, y: 6 }}
              transition={{ duration: 0.3 }}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          className="md:hidden bg-gray-900/90 backdrop-blur-md border-t border-gray-700 px-4 pb-4 pt-2 space-y-2 text-white"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {navLinks.map(({ name, href }) => (
            <Link
              key={name}
              href={href}
              className={` block hover:text-yellow-400 ${pathname === href ? "text-cyan-400 font-semibold" : "text-gray-300"
                }`}
              onClick={toggleMenu}
            >
              {name}
            </Link>
          ))}
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
