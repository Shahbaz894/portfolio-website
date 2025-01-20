"use client"
import { motion, useMotionValue, useTransform } from "framer-motion"
import { useState } from "react"

const projects = [
  {
    title: "AI-Powered Content Generator",
    description:
      "Developed a state-of-the-art content generation system using GPT-3 and custom fine-tuning techniques.",
    technologies: ["Python", "OpenAI API", "Flask"],
    github: "https://github.com/yourusername/ai-content-generator",
    demo: "https://ai-content-generator-demo.com",
  },
  {
    title: "Intelligent Chatbot with RAG",
    description:
      "Created a chatbot that utilizes Retrieval-Augmented Generation for accurate and context-aware responses.",
    technologies: ["Python", "LangChain", "Elasticsearch"],
    github: "https://github.com/yourusername/intelligent-chatbot",
    demo: "https://intelligent-chatbot-demo.com",
  },
  {
    title: "AI Image Generation Platform",
    description: "Built a web application that generates unique images based on text prompts using DALL-E 2.",
    technologies: ["React", "Node.js", "OpenAI API"],
    github: "https://github.com/yourusername/ai-image-generator",
    demo: "https://ai-image-generator-demo.com",
  },
  {
    title: "Sentiment Analysis Dashboard",
    description:
      "Developed a real-time sentiment analysis tool for social media posts using natural language processing.",
    technologies: ["Python", "TensorFlow", "React", "D3.js"],
    github: "https://github.com/yourusername/sentiment-analysis-dashboard",
    demo: "https://sentiment-analysis-dashboard-demo.com",
  },
  {
    title: "Automated Code Review Assistant",
    description: "Created an AI-powered tool that provides automated code reviews and suggestions for improvement.",
    technologies: ["Python", "Machine Learning", "GitHub API"],
    github: "https://github.com/yourusername/code-review-assistant",
    demo: "https://code-review-assistant-demo.com",
  },
  {
    title: "Virtual Reality Data Visualization",
    description: "Designed and implemented a VR application for immersive data visualization and analysis.",
    technologies: ["Unity", "C#", "VR SDK", "D3.js"],
    github: "https://github.com/yourusername/vr-data-viz",
    demo: "https://vr-data-viz-demo.com",
  },
  {
    title: "AI-Driven Financial Forecasting",
    description: "Developed a machine learning model for predicting stock prices and market trends.",
    technologies: ["Python", "TensorFlow", "Pandas", "Plotly"],
    github: "https://github.com/yourusername/ai-financial-forecasting",
    demo: "https://ai-financial-forecasting-demo.com",
  },
  {
    title: "Blockchain-based Supply Chain Tracker",
    description:
      "Built a decentralized application for tracking and verifying supply chain processes using blockchain technology.",
    technologies: ["Solidity", "Ethereum", "React", "Web3.js"],
    github: "https://github.com/yourusername/blockchain-supply-chain",
    demo: "https://blockchain-supply-chain-demo.com",
  },
]

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, [-100, 100], [30, -30])
  const rotateY = useTransform(x, [-100, 100], [-30, 30])

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const mouseX = event.clientX - centerX
    const mouseY = event.clientY - centerY
    x.set(mouseX)
    y.set(mouseY)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
    setIsHovered(false)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.1 * index }} // Increased duration for slower animation
      style={{ perspective: 2000 }}
    >
      <motion.div
        className="bg-[#1E293B] rounded-lg overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
      >
        <div className="p-6" style={{ transform: "translateZ(50px)" }}>
          <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
          <p className="text-gray-300 mb-4">{project.description}</p>
          <div className="mb-4">
            <h4 className="font-semibold mb-2 text-white">Technologies:</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="bg-blue-500 text-white text-sm px-2 py-1 rounded">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <motion.div
            className="flex justify-between"
            style={{
              opacity: isHovered ? 1 : 0,
              transition: "opacity 0.3s ease-in-out",
            }}
          >
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              GitHub
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              Live Demo
            </a>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
}

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-[#0F172A]">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }} // Slower entrance animation for the title
          className="text-3xl font-bold mb-12 text-center text-white"
        >
          Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
