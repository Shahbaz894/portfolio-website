"use client";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Generative AI Developer",
    role: "Generative AI Developer",
    description:
      "Generative AI Developer creating interactive and user-friendly AI integrated websites for a seamless online experience.",
  },
  {
    title: "Next.js Development",
    role: "Next.js Developer",
    description:
      "Next.js developer building dynamic and responsive web applications with React for optimal user interactions.",
  },
  {
    title: "Mobile Development",
    role: "Flutter Developer",
    description:
      "Flutter developer creating cross-platform mobile applications with smooth performance and intuitive UI/UX.",
  },
];

const ProjectCard = ({
  project,
  index,
}: {
  project: { title: string; role: string; description: string };
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 * index }}
      whileHover={{ scale: 1.05 }}
      className="bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-700 hover:border-blue-500"
    >
      <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
      <h4 className="text-lg font-semibold text-blue-400 mb-4">{project.role}</h4>
      <p className="text-gray-300">{project.description}</p>
    </motion.div>
  );
};

const About = () => {
  return (
    <section id="about" className="py-20 bg-[#1E293B]">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8 text-center text-white"
        >
          About Me
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto text-gray-300 mb-12 border-l-4 border-blue-500 pl-6"
        >
          <p className="mb-4">
            I am a skilled Generative AI developer with experience in OpenAI, GPTs, Chatbots, AI Agents, LLMs fine-tuning,
            and AI integrations. I also have expertise in TypeScript and Python, along with proficiency in frameworks like
            React, FastAPI, and Next.js. I am a quick learner and collaborate closely with clients to create efficient,
            scalable, and user-friendly solutions that solve real-world problems. Let’s work together to bring your ideas
            to life!
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
