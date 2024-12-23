import { motion } from "framer-motion";

export const AboutSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-2xl mx-auto py-16 px-4"
    >
      <h1 className="text-4xl font-inter font-bold text-blog-light mb-4">
        Austin Morrissey
      </h1>
      <p className="text-blog-gray text-lg mb-6">
        Welcome to my corner of the internet. I write about software development,
        technology, and my journey as a developer.
      </p>
      <div className="flex gap-4">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blog-primary hover:text-blog-light transition-colors"
        >
          GitHub
        </a>
        <a
          href="https://twitter.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blog-primary hover:text-blog-light transition-colors"
        >
          Twitter
        </a>
      </div>
    </motion.section>
  );
};