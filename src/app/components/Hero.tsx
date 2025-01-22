"use client"
import { motion } from "framer-motion"
import Image from "next/image"

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#0F172A] to-[#1E293B]"
    >
      <div className="text-center relative z-10 px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl font-semibold text-white mb-4"
        >
          Hi, I am Shahbaz Zulfiqar
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg sm:text-xl text-gray-300 mb-6"
        >
          Generative AI Engineer | Innovating the Future of Artificial Intelligence
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative w-48 h-48 mx-auto mb-8"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full h-full"
          >
            <Image
              src="/data.jpg"  // Path to the image
              alt="Shahbaz Zulfiqar"
              layout="fill"
              objectFit="cover"
              className="rounded-full shadow-md"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
