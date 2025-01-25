"use client"
import { motion } from "framer-motion"
import Image from "next/image"

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#0F172A] to-[#1E293B] px-4 sm:px-6 lg:px-8"
    >
      <div className="text-center relative z-10 max-w-screen-md w-full">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-4"
        >
          Hi, I am Shahbaz Zulfiqar
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-gray-300 mb-6"
        >
          Generative AI Engineer | Innovating the Future of Artificial Intelligence
        </motion.p>

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto mb-8"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full h-full"
          >
            <Image
              src="/data.jpg" // Path to the image
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
