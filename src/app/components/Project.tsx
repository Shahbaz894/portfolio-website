"use client";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState } from "react";

type Project = {
  title: string;
  description: string;
  technologies: string[];
  github: string;
};

const projects: Project[] = [
  {
    title: "YouTube Text Summarization",
    description:
      "Built an AI-driven application to summarize YouTube videos into concise text summaries.",
    technologies: ["Python", "Streamlit", "OpenAI API"],
    github: "https://github.com/Shahbaz894/youtube-text-summarization",
  },
  {
    title: "Financial Insights Agent Using PhiData",
    description:
      "Developed a financial agent to provide insights and forecasts based on real-time data.",
    technologies: ["Python", "PhiData", "Streamlit"],
    github: "https://github.com/Shahbaz894/agenticAi",
  },
  {
    title: "Multi-agent Customer Support Automation",
    description:
      "Designed a multi-agent system for automating customer support queries and reducing response times.",
    technologies: ["Python", "Streamlit"],
    github: "https://github.com/Shahbaz894/crewAi_agent/blob/main/customer_support_automation_agent.py",
  },
  {
    title: "Music Streaming Platform",
    description:
      "Developed a Next.js project for a music streaming platform with an elegant user interface.",
    technologies: ["Next.js", "React", "Tailwind CSS"],
    github: "https://github.com/Shahbaz894/music-nextjs-project",
  },
  {
    title: "E-commerce App Using Bloc",
    description:
      "Built a high-performance e-commerce app using the Bloc architecture for state management.",
    technologies: ["Dart", "Flutter", "Bloc"],
    github: "https://github.com/Shahbaz894/ecomerce_app_bloc",
  },
  {
    title: "Crafting Effective Marketing Strategies with AI",
    description:
      "Leverage the power of CrewAI to automatically generate targeted marketing strategies for enterprise-level products. This AI-driven tool crafts detailed plans to enhance brand awareness, audience engagement, and market positioning.",
    technologies: ["Python", "CrewAi"],
    github: "https://github.com/Shahbaz894/stock-Analysis-crewAgent",
  },
  {
    title: "YouTube Commit Analyzer Chrome Plugin",
    description:
      " A Chrome plugin that analyzes Git commits for YouTube projects, providing detailed insights and summaries. It helps developers quickly track code changes and contributions.",
    technologies: ["Python", "ML"],
    github: "https://github.com/Shahbaz894/yt-chrome-plugin/tree/main/chrome-plugin",
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
        className="bg-[#1E293B] rounded-lg overflow-hidden shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-[#1E40AF] hover:border-[#3B82F6]"
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
          <h3 className="text-lg md:text-xl font-bold mb-2 text-white">
            {project.title}
          </h3>
          <p className="text-sm md:text-base text-gray-300 mb-4">
            {project.description}
          </p>
          <div className="mb-4">
            <h4 className="font-semibold mb-2 text-white">Technologies:</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech: string) => (
                <span
                  key={tech}
                  className="bg-blue-500 text-white text-xs md:text-sm px-2 py-1 rounded"
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
          className="text-2xl md:text-3xl font-bold mb-12 text-center text-white"
        >
          Projects
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
