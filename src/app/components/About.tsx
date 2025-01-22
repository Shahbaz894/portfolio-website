"use client"
import { motion } from "framer-motion"
import { FaPython, FaReact } from "react-icons/fa"
import { SiTensorflow, SiPytorch, SiOpenai } from "react-icons/si"

const skills = [
  { name: "Python", icon: FaPython },
  { name: "TensorFlow", icon: SiTensorflow },
  { name: "PyTorch", icon: SiPytorch },
  { name: "React", icon: FaReact },
  { name: "OpenAI", icon: SiOpenai },
]

const About = () => {
  return (
    <section id="about" className="py-20 bg-[#1E293B]">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8 text-center"
        >
          About Me
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto text-gray-300 mb-12"
        >
        <p className="mb-4">
  I am a skilled Generative AI developer with experience in OpenAI, GPTs, Chatbots, AI Agents, and LLMs fine-tuning
  and AI integrations. I also have expertise in TypeScript and Python, along with proficiency in frameworks like
  React, FastAPI, and Next.js. I am a quick learner and collaborate closely with clients to create efficient, scalable,
  and user-friendly solutions that solve real-world problems. Lets work together to bring your ideas to life!
</p>

        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold mb-4 text-center">Skills & Technologies</h3>
          <div className="flex justify-center flex-wrap gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="flex flex-col items-center"
              >
                <skill.icon className="text-4xl mb-2" />
                <span>{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About

