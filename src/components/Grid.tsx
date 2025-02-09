"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  { title: "Project One", description: "A short description of Project One.", image: "/project1.png" },
  { title: "Project Two", description: "A short description of Project Two.", image: "/project2.png" },
  { title: "Project Three", description: "A short description of Project Three.", image: "/project3.png" },
  { title: "Project Four", description: "A short description of Project Four.", image: "/project4.png" },
  { title: "Project Five", description: "A short description of Project Five.", image: "/project5.png" },
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
          <motion.div key={index} className="bg-gray-800 p-4 rounded-2xl shadow-lg w-80" custom={index} variants={fadeIn}>
            <Image src={project.image} alt={project.title} width={300} height={200} className="rounded-lg" />
            <h3 className="font-bold mt-3">{project.title}</h3>
            <p className="text-gray-400">{project.description}</p>
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
            <motion.div key={index} className="bg-gray-800 p-4 rounded-2xl shadow-lg w-80" custom={index} variants={fadeIn}>
              <Image src={project.image} alt={project.title} width={300} height={200} className="rounded-lg" />
              <h3 className="font-bold mt-3">{project.title}</h3>
              <p className="text-gray-400">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Dock */}
      <motion.div
        className="fixed bottom-12 bg-gray-900 p-3 rounded-2xl flex space-x-4 shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 1, duration: 0.6, ease: "easeOut" } }}
      >
        <Image src="/github.svg" alt="GitHub" width={40} height={40} />
        <Image src="/linkedin.svg" alt="LinkedIn" width={40} height={40} />
        <Image src="/x.svg" alt="X" width={40} height={40} />
        <Image src="/mail.svg" alt="Mail" width={40} height={40} />
        <Image src="/stats.svg" alt="Stats" width={40} height={40} />
      </motion.div>
    </div>
  );
}
