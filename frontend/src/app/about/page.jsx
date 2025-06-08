"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white px-6 py-20 flex flex-col items-center gap-12">
            <motion.h1
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-5xl font-arcade font-bold text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
            >
                About Arcade Hub
            </motion.h1>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="max-w-3xl text-center text-lg text-gray-300"
            >
                🚀 Arcade Hub is your one-stop destination to track, analyze, and flex your
                <span className="text-cyan-400 font-semibold"> Google Cloud Arcade </span> progress like a pro.
                Built with love, caffeine, and cutting-edge tech, it simplifies your journey to cloud mastery.
            </motion.p>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="max-w-4xl w-full grid grid-cols-1 sm:grid-cols-2 gap-8"
            >
                <div className="bg-gray-800/60 p-6 rounded-xl shadow-lg border border-cyan-500">
                    <h2 className="text-xl font-semibold text-cyan-300 mb-2">🛠 Tech Stack</h2>
                    <ul className="text-gray-300 list-disc list-inside space-y-1">
                        <li><strong>Next.js (App Router)</strong> – React-based framework for server-side rendering and routing</li>
                        <li><strong>Tailwind CSS</strong> + <strong>Framer Motion</strong> – For modern styling and smooth animations</li>
                        <li><strong>Node.js</strong> with <strong>Tesseract.js</strong> – OCR processing and API handling</li>
                        <li><strong>Axios</strong> – Handling HTTP requests</li>
                        <li><strong>Vercel & Render</strong> – Hosting and deployment platform</li>
                    </ul>

                </div>
                <div className="bg-gray-800/60 p-6 rounded-xl shadow-lg border border-purple-500">
                    <h2 className="text-xl font-semibold text-purple-300 mb-2">👨‍💻 Built By</h2>
                    <p className="text-gray-300">
                        A dedicated Computer Science student with a flair for development and a vision for innovation in defense technology.
                        Driven by purpose, blending technical skill with discipline
                    </p>
                    <p className="mt-4 text-cyan-400 font-bold">— Subhchintak ⚡</p>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="flex gap-4 mt-10"
            >
                <Link
                    href="/"
                    className="px-5 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-600 text-black font-semibold transition-all duration-300 hover:scale-105"
                >
                    ← Back to Home
                </Link>
                <Link
                    href="/contact"
                    className="px-5 py-2 rounded-lg border border-cyan-400 text-cyan-400 hover:bg-cyan-800/40 transition-all duration-300 hover:scale-105"
                >
                    📬 Contact Me
                </Link>
            </motion.div>
        </main>
    );
}
