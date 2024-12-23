import { AboutSection } from "@/components/AboutSection";
import { BlogPostCard } from "@/components/BlogPostCard";
import { Header } from "@/components/Header";
import { motion } from "framer-motion";

const BLOG_POSTS = [
  {
    title: "Building a Modern Developer Blog",
    excerpt: "A deep dive into creating a performant and beautiful blog using React and Tailwind CSS.",
    date: "March 20, 2024",
  },
  {
    title: "The Power of Custom Hooks in React",
    excerpt: "Exploring how custom hooks can make your React code more reusable and maintainable.",
    date: "March 15, 2024",
  },
  {
    title: "Mastering TypeScript Generics",
    excerpt: "Understanding and effectively using TypeScript generics in your projects.",
    date: "March 10, 2024",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blog-dark to-gray-900">
      <Header />
      <div className="pt-20">
        <AboutSection />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-4xl mx-auto px-4 py-8 text-center"
        >
          <p className="text-blog-primary text-lg font-medium mb-2">Want to build something together?</p>
          <p className="text-gray-300">Reach out through any of the social links above!</p>
        </motion.div>
        <main className="max-w-4xl mx-auto px-4 pb-16">
          <h2 className="text-2xl font-inter font-bold text-white mb-8">
            Latest Posts
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {BLOG_POSTS.map((post) => (
              <BlogPostCard key={post.title} {...post} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;