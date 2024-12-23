import { motion } from "framer-motion";

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
        Here is where I keep my reflections on learning the basics of drug discovery and technology, and any related interests. Written from the perspective of someone new to these domains, it functions as both a personal learning journal and a potential resource for others at early stages of their educational journey.
      </p>
    </motion.section>
  );
};