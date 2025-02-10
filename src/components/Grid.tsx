"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  { 
    title: "CelebX", 
    description: "World's First Celebrity Exchange.", 
    image: "/CelebX.png", 
    link: "https://celebx.vercel.app/", 
    github: "https://github.com/parthajmera05/CelebEx",
    underDevelopment: true
  },
  { 
    title: "Portfolio", 
    description: "My Portfolio.", 
    image: "/portfolio.png", 
    link: "https://myportfolio-sandy-eight.vercel.app/", 
    github: "https://github.com/parthajmera05/my-portfolio"
  },
  { 
    title: "BlogArticles", 
    description: "A Blogging Platform.", 
    image: "/blogarticles.png", 
    link: "https://blog-articles-sigma.vercel.app/", 
    github: "https://github.com/parthajmera05/BlogArticles"
  },
  { 
    title: "MultiThreaded Server", 
    description: "A Multi-Threaded Server.", 
    image: "/code.jpeg", 
    
    github: "https://github.com/parthajmera05/Multithreaded-Server"
  },
  { 
    title: "Visualisation Tool", 
    description: "A visualization tool for algorithms.", 
    image: "/code.jpeg", 
    
    github: "https://github.com/parthajmera05/Visualization-tool"
  },
];

// Animation Variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

export default function Portfolio() {
  return (
    <div className="relative h-full bg-black text-white flex flex-col items-center">
      {/* Top Row */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4"
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
      >
        {projects.slice(0, 3).map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 p-4 rounded-2xl shadow-lg w-80 relative transition-transform transform hover:scale-105"
            custom={index}
            variants={fadeIn}
          >
            {project.underDevelopment && (
              <span className="absolute top-2 right-2 bg-yellow-500 text-black text-xs px-2 py-1 rounded-md font-semibold">
                Under Development
              </span>
            )}
            <Image src={project.image} alt={project.title} width={300} height={100} className="rounded-lg" />
            <h3 className="font-bold mt-3">{project.title}</h3>
            <p className="text-gray-400">{project.description}</p>
            <div className="flex gap-4 mt-2">
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                  <FaGithub size={20} />
                </a>
              )}
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                  <FaExternalLinkAlt size={20} />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom Row */}
      <motion.div
        className="flex justify-center w-full mt-6"
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.slice(3).map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-4 rounded-2xl shadow-lg w-80 transition-transform transform hover:scale-105"
              custom={index}
              variants={fadeIn}
            >
              <Image src={project.image} alt={project.title} width={300} height={200} className="rounded-lg" />
              <h3 className="font-bold mt-3">{project.title}</h3>
              <p className="text-gray-400">{project.description}</p>
              <div className="flex gap-4 mt-2">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                    <FaGithub size={20} />
                  </a>
                )}
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                    <FaExternalLinkAlt size={20} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}