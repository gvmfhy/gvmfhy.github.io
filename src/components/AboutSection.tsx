import { motion } from "framer-motion";
import { Github, Twitter } from "lucide-react";

export const AboutSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-2xl mx-auto py-16 px-4"
    >
      <h1 className="text-4xl font-inter font-bold text-white mb-4">
        Austin Morrissey
      </h1>
      <p className="text-gray-300 text-lg mb-8 leading-relaxed">
        Welcome to my corner of the internet. I write about software development,
        technology, and my journey as a developer.
      </p>
      <div className="flex gap-6">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
        >
          <Github size={20} />
          <span>GitHub</span>
        </a>
        <a
          href="https://twitter.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
        >
          <Twitter size={20} />
          <span>Twitter</span>
        </a>
      </div>
    </motion.section>
  );
};