import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

const Dock = () => {
  const dockItems = [
    { href: "https://github.com/parthajmera05", img: "/github.png", alt: "GitHub" },
    { href: "https://www.linkedin.com/in/parth-ajmera-811044213/", img: "/linkedin.webp", alt: "LinkedIn" },
    { href: "https://x.com/parth_ajmera5", img: "/x.png", alt: "Twitter" },
    { href: "mailto:parthatwork05@gmail.com", img: "/email.webp", alt: "Email" },
    { href: "https://codeforces.com/profile/hackboii", img: "/codeforces.webp", alt: "Codeforces" },
    { href: "https://www.codechef.com/users/ajmeraparth05", img: "/codechef.png", alt: "CodeChef" },
    { href: "https://leetcode.com/u/hackboii/", img: "/leetcode.webp", alt: "LeetCode" },
    { href: "https://drive.google.com/file/d/1DbfSXkPgb-fCtIeclPBpMOGv2k66bt5D/view?usp=sharing", img: "/resume.jpg", alt: "Resume" },
  ];

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="fixed bottom-12 left-1/2 transform -translate-x-1/2 flex bg-white/10 backdrop-transparent px-3 py-2 rounded-xl shadow-md border border-white/20">
      {dockItems.map((item, index) => (
        <motion.a
          key={index}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="p-1 flex items-center justify-center"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          animate={{
            scale: hoveredIndex === index ? 1.5 : hoveredIndex !== null ? 0.9 : 1,
          }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
        >
          <div className="w-14 h-14 flex justify-center items-center">
            <Image
              src={item.img}
              alt={item.alt}
              width={50}
              height={50}
              className="object-contain rounded-md"
            />
          </div>
        </motion.a>
      ))}
    </div>
  );
};

export default Dock;
