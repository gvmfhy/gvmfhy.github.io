import { AboutSection } from "@/components/AboutSection";
import { BlogPostCard } from "@/components/BlogPostCard";
import { Header } from "@/components/Header";
import { motion } from "framer-motion";

const BLOG_POSTS = [
  {
    title: "Getting Started with Drug Discovery",
    excerpt: "My initial journey into understanding the basics of drug discovery and the key concepts every beginner should know.",
    date: "March 20, 2024",
  },
  {
    title: "Technology in Drug Development",
    excerpt: "Exploring how modern technology and computational methods are transforming the drug discovery process.",
    date: "March 15, 2024",
  },
  {
    title: "Learning Resources for Beginners",
    excerpt: "A curated collection of resources that helped me start learning about drug discovery and related technologies.",
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
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-inter font-bold text-white">Latest Posts</h2>
            <div className="flex gap-2">
              <span className="px-3 py-1 text-sm rounded-full bg-purple-800/50 text-white">Drug Discovery</span>
              <span className="px-3 py-1 text-sm rounded-full bg-blue-800/50 text-white">Technology</span>
              <span className="px-3 py-1 text-sm rounded-full bg-green-800/50 text-white">Learning</span>
            </div>
          </div>
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