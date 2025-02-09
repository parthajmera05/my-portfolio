"use client";
import "@/styles/globals.css";
import Image from "next/image";
import { motion } from "framer-motion";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

export default function Profile() {
  return (
    <motion.div
      className="w-full h-full bg-[#0D1117] flex p-10 text-white"
      initial="hidden"
      animate="visible"
    >
      {/* Left Section - Profile Image */}
      <motion.div
        className="w-2/5 flex flex-col justify-center items-center"
        variants={fadeInUp}
      >
        <div className="w-52 h-52 relative rounded-full border-4 border-[#161B22]">
          <Image
            src="/parth.jpeg"
            alt="Profile Picture"
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
        </div>
      </motion.div>

      {/* Right Section - Profile Details */}
      <motion.div
        className="w-3/5 flex flex-col justify-center space-y-4 mb-10"
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
      >
        <motion.p className="colour text-sm" variants={fadeInLeft} custom={1}>
          ~ whoami
        </motion.p>
        <motion.h1 className="text-3xl font-bold" variants={fadeInLeft} custom={2}>
          Hey, I&apos;m <span className="colour">Parth</span> 👋
        </motion.h1>
        <motion.p className="text-gray-400 colour2" variants={fadeInLeft} custom={3}>
          Developer👨🏾‍💻 | Building CelebX - World&apos;s First Personality Trading Platform | CP🍿 | Music | NIT Delhi 26
        </motion.p>
        <motion.p  variants={fadeInLeft} custom={4}>
          I am currently in my pre-final year at NIT Delhi, building <b>CelebX</b>, a personality stocks trading platform that allows users to invest in celebrities like stocks. Alongside this, I actively participate in competitive programming to sharpen my problem-solving skills.
        </motion.p>

        {/* Interests */}
        <motion.p className="colour font-semibold" variants={fadeInLeft} custom={5}>
          Interested in:
        </motion.p>
        <motion.p className="colour" variants={fadeInLeft} custom={6}>
          • Backend Engineering • Frontend Engineering • Databases • Competitive Programming
        </motion.p>

        {/* Experience */}
        <motion.p className="colour font-semibold" variants={fadeInLeft} custom={7}>
          🏆 Previous Experience:
        </motion.p>
        <motion.ul className="space-y-2" variants={fadeInLeft} custom={8}>
          <li className="flex items-center space-x-2">
            <span className="bg-gray-800 p-2 rounded-lg">💻</span>
            <span>Intern @ Renew Power</span>
          </li>
        </motion.ul>

        {/* Call to Action */}
        <motion.p className="colour font-semibold" variants={fadeInLeft} custom={9}>
          🤝 Let&apos;s connect and create something amazing!
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
