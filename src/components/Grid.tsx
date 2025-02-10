"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  { title: "CelebX", description: "World's First Celebrity Exchange.", image: "/CelebX.png", link: "#", underDevelopment: true },
  { title: "Portfolio", description: "My Portfolio.", image: "/portfolio.png", link: "https://parthajmera.dev" },
  { title: "BlogArticles", description: "A Blogging Platform.", image: "/blogarticles.png", link: "https://blog.parthajmera.dev" },
  { title: "MultiThreaded Server", description: "A Multi-Threaded Server.", image: "/code.jpeg", link: "https://github.com/parthajmera/multithreaded-server" },
  { title: "Visualisation Tool", description: "A visualization tool for algorithms.", image: "/code.jpeg", link: "https://github.com/parthajmera/algorithm-visualizer" },
];

// Animation Variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
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
          <motion.a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
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
          </motion.a>
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
            <motion.a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 p-4 rounded-2xl shadow-lg w-80 transition-transform transform hover:scale-105"
              custom={index}
              variants={fadeIn}
            >
              <Image src={project.image} alt={project.title} width={300} height={200} className="rounded-lg" />
              <h3 className="font-bold mt-3">{project.title}</h3>
              <p className="text-gray-400">{project.description}</p>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
