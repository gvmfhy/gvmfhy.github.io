import { motion } from "framer-motion";
import { Github, Linkedin, BookOpen } from "lucide-react";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm bg-blog-dark/80 border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <motion.h1 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-inter font-bold text-white hover:text-blog-primary transition-colors"
        >
          Austin Morrissey
        </motion.h1>
        <nav className="flex items-center gap-6">
          <a
            href="https://github.com/gvmfhy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-colors"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/austin-p-morrissey/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-colors"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://austinpatrick.substack.com/about"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-colors"
          >
            <BookOpen size={20} />
          </a>
        </nav>
      </div>
    </header>
  );
};