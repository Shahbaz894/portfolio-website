"use client";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState } from "react";

type Project = {
  title: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
};

const projects: Project[] = [
  {
    title: "YouTube Text Summarization",
    description:
      "Built an AI-driven application to summarize YouTube videos into concise text summaries.",
    technologies: ["Python", "Streamlit", "OpenAI API"],
    github: "https://github.com/yourusername/youtube-text-summarization",
    demo: "https://youtube-text-summarization-demo.com",
  },
  {
    title: "Financial Insights Agent Using PhiData",
    description:
      "Developed a financial agent to provide insights and forecasts based on real-time data.",
    technologies: ["Python", "PhiData", "Streamlit"],
    github: "https://github.com/yourusername/financial-insights-agent",
    demo: "https://financial-insights-agent-demo.com",
  },
  {
    title: "Multi-agent Customer Support Automation",
    description:
      "Designed a multi-agent system for automating customer support queries and reducing response times.",
    technologies: ["Python", "Streamlit",],
    github: "https://github.com/yourusername/customer-support-automation",
    demo: "https://customer-support-automation-demo.com",
  },
  {
    title: "Music Streaming Platform",
    description:
      "Developed a Next.js project for a music streaming platform with an elegant user interface.",
    technologies: ["Next.js", "React", "Tailwind CSS"],
    github: "https://github.com/yourusername/music-nextjs-project",
    demo: "https://music-nextjs-project-demo.com",
  },
  {
    title: "E-commerce App Using Bloc",
    description:
      "Built a high-performance e-commerce app using the Bloc architecture for state management.",
    technologies: ["Dart", "Flutter", "Bloc"],
    github: "https://github.com/yourusername/ecommerce-app-bloc",
    demo: "https://ecommerce-app-bloc-demo.com",
  },
];

const ProjectCard = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = event.clientX - centerX;
    const mouseY = event.clientY - centerY;
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.1 * index }}
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
              {project.technologies.map((tech: string) => (
                <span
                  key={tech}
                  className="bg-blue-500 text-white text-sm px-2 py-1 rounded"
                >
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
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-[#0F172A]">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
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
  );
};

export default Projects;
