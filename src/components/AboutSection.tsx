import { motion } from "framer-motion";
import { Github, Linkedin, BookOpen } from "lucide-react";

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
        This blog emerges from the ethos of building in public, adapting it to scientific exploration. Instead of sharing only polished results, I'm documenting the messy, fascinating process of understanding biology and drug development. By committing to regular, public exploration of these topics, I'm creating a space to learn out loud and track this journey over time. Here is where I keep my reflections on learning the basics of drug discovery and technology, and any related interests. Written from the perspective of someone new to these domains, it functions as both a personal learning journal and a potential resource for others at early stages of their educational journey.
      </p>
      <div className="flex gap-6">
        <a
          href="https://github.com/gvmfhy"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
        >
          <Github size={20} />
          <span>GitHub</span>
        </a>
        <a
          href="https://www.linkedin.com/in/austin-p-morrissey/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
        >
          <Linkedin size={20} />
          <span>LinkedIn</span>
        </a>
        <a
          href="https://austinpatrick.substack.com/about"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
        >
          <BookOpen size={20} />
          <span>Substack</span>
        </a>
      </div>
    </motion.section>
  );
};