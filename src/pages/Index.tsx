import { AboutSection } from "@/components/AboutSection";
import { BlogPostCard } from "@/components/BlogPostCard";
import { PromptCard } from "@/components/PromptCard";
import { Header } from "@/components/Header";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { getPosts } from "@/utils/posts";
import { getPrompts } from "@/utils/prompts";

const Index = () => {
  const { data: posts = [] } = useQuery({
    queryKey: ['posts'],
    queryFn: getPosts,
  });

  const { data: prompts = [], isLoading: isPromptsLoading, isError: isPromptsError } = useQuery({
    queryKey: ['prompts'],
    queryFn: getPrompts,
  });

  console.log('Prompts data:', prompts);
  console.log('Prompts loading:', isPromptsLoading);
  console.log('Prompts error:', isPromptsError);

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
          <p className="text-gray-300">Reach out through any of the social links above.</p>
        </motion.div>
        
        <main className="max-w-4xl mx-auto px-4 pb-16 space-y-16">
          {/* Blog Posts Section */}
          <section>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-inter font-bold text-white">Latest Posts</h2>
              <div className="flex gap-2">
                <span className="px-3 py-1 text-sm rounded-full bg-purple-800/50 text-white">Drug Discovery</span>
                <span className="px-3 py-1 text-sm rounded-full bg-blue-800/50 text-white">Technology</span>
                <span className="px-3 py-1 text-sm rounded-full bg-green-800/50 text-white">Learning</span>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {posts.map((post) => (
                <BlogPostCard 
                  key={post.slug}
                  title={post.title}
                  excerpt={post.excerpt}
                  date={post.date}
                  slug={post.slug}
                />
              ))}
            </div>
          </section>

          {/* Prompts Section */}
          <section>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-inter font-bold text-white">LLM Prompt Library</h2>
              <div className="flex gap-2">
                <span className="px-3 py-1 text-sm rounded-full bg-purple-800/50 text-white">Development</span>
                <span className="px-3 py-1 text-sm rounded-full bg-blue-800/50 text-white">Research</span>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {isPromptsLoading ? (
                <p className="text-white">Loading prompts...</p>
              ) : isPromptsError ? (
                <p className="text-red-500">Error loading prompts</p>
              ) : prompts.length === 0 ? (
                <p className="text-white">No prompts available</p>
              ) : (
                prompts.map((prompt) => (
                  <PromptCard
                    key={prompt.slug}
                    title={prompt.title}
                    description={prompt.description}
                    category={prompt.category}
                    slug={prompt.slug}
                  />
                ))
              )}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Index;