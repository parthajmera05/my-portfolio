import { motion } from "framer-motion";
import Image from "next/image";

const technologies = [
  { name: "JavaScript", icon: "/js.png" },
  { name: "TypeScript", icon: "/typescript.png" },
  { name: "React.js", icon: "/react.png" },
  { name: "Next.js", icon: "/next.webp" },
  { name: "Node.js", icon: "/node.png" },
  { name: "Express.js", icon: "/express.png" },
  { name: "MongoDB", icon: "/mongo.jpeg" },
  { name: "PostgreSQL", icon: "/postgress.png" },
  { name: "Tailwind CSS", icon: "/tailwind.png" },
  { name: "C++", icon: "/C++.png" },
];

export default function Tech() {
  return (
    <div className="flex flex-col items-center py-10">
      <h2 className="text-3xl font-bold text-white mb-10">Technologies I Know</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        {technologies.map((tech, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="bg-gray-800 p-4 rounded-2xl shadow-lg flex flex-col items-center w-32 h-32"
          >
            <div className="w-16 h-16 flex items-center justify-center">
              <Image
                src={tech.icon}
                alt={tech.name}
                width={64}
                height={64}
                className="object-contain"
              />
            </div>
            <span className="text-white font-medium mt-2">{tech.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
