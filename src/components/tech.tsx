import { motion } from "framer-motion";
import Image from "next/image";

const technologies = [
  { name: "JavaScript", icon: "/icons/javascript.svg" },
  { name: "TypeScript", icon: "/icons/typescript.svg" },
  { name: "React.js", icon: "/icons/react.svg" },
  { name: "Next.js", icon: "/icons/nextjs.svg" },
  { name: "Node.js", icon: "/icons/nodejs.svg" },
  { name: "Express.js", icon: "/icons/express.svg" },
  { name: "MongoDB", icon: "/icons/mongodb.svg" },
  { name: "PostgreSQL", icon: "/icons/postgresql.svg" },
  { name: "Tailwind CSS", icon: "/icons/tailwind.svg" },
  { name: "Framer Motion", icon: "/icons/framer.svg" },
];

export default function Tech() {
  return (
    <div className="flex flex-col items-center py-10">
      <h2 className="text-3xl font-bold text-white mb-6">🚀 Technologies I Know</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        {technologies.map((tech, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="bg-gray-800 p-4 rounded-2xl shadow-lg flex flex-col items-center"
          >
            <Image src={tech.icon} alt={tech.name} width={50} height={50} className="mb-2" />
            <span className="text-white font-medium">{tech.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
