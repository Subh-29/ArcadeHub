'use client';

import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
 


  // Lock or unlock scroll based on loading
  // useEffect(() => {
  //   document.body.style.visibility = loading ? "hidden" : "visible";
  //   return () => {
  //     document.body.style.overflow = "auto"; // just in case on unmount
  //   };
  // }, [loading]);

  return (
    <>
      
      <main className={` min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white px-4 py-20 flex flex-col items-center justify-center gap-10`}>
        <motion.span initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className=" text-4xl sm:text-6xl md:text-7xl "
          >
            🚀</motion.span>
          <motion.span
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-arcade sm:text-6xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500"
        >
          Welcome to Arcade Hub
        </motion.span>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="max-w-3xl text-lg sm:text-xl text-center text-gray-300 leading-relaxed"
        >
          Track, Analyze, and Flex your{" "}
          <span className="text-cyan-400 font-bold">
            Google Cloud Arcade Points
          </span>{" "}
          with style. Calculate bonuses, view badges, and unlock your inner cloud
          ninja ☁️✨.
        </motion.p>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex gap-5 mt-6 flex-wrap justify-center"
        >
          <Link
            href="/calculator"
            className="bg-cyan-500 hover:bg-cyan-600 text-black px-6 py-3 rounded-lg text-lg font-semibold shadow-lg transition-all duration-300 hover:scale-105"
          >
            🎮 Start Calculating
          </Link>
          <Link
            href="/about"
            className="border border-cyan-500 text-cyan-400 px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-cyan-800/30 transition-all duration-300 hover:scale-105"
          >
            🔍 Learn More
          </Link>
        </motion.div>

        <motion.img
          src="https://www.googlecloudcommunity.com/gc/image/serverpage/image-id/71399i340852AD64F76D27/image-size/large?v=v2&px=999" // Your gif file in /public
          alt="Arcade Action"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="w-full max-w-lg rounded-xl mt-10 shadow-2xl"
        />
      </main>
    </>
  );
}
