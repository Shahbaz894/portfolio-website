"use client"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"

const Header = () => {
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "contact"]
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0F172A] bg-opacity-90 backdrop-blur-sm">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          <Link href="/" className="text-2xl font-bold">
            Shahbaz Zulfiqar
          </Link>
        </motion.div>
        <ul className="flex space-x-6">
          {["Home", "About", "Projects", "Contact"].map((item) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * ["Home", "About", "Projects", "Contact"].indexOf(item) }}
            >
              <Link
                href={`#${item.toLowerCase()}`}
                className={`hover:text-blue-400 transition-colors ${
                  activeSection === item.toLowerCase() ? "text-blue-400" : ""
                }`}
              >
                {item}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header

