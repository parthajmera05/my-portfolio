import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

const Dock = () => {
  const dockItems = [
    { href: "https://github.com", img: "/github.png", alt: "GitHub" },
    { href: "https://linkedin.com", img: "/linkedin.webp", alt: "LinkedIn" },
    { href: "https://twitter.com", img: "/x.png", alt: "Twitter" },
    { href: "https://mail.google.com", img: "/email.webp", alt: "Email" },
    { href: "https://codeforces.com", img: "/codeforces.webp", alt: "Codeforces" },
    { href: "https://codechef.com", img: "/codechef.png", alt: "CodeChef" },
    { href: "https://leetcode.com", img: "/leetcode.webp", alt: "LeetCode" },
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
