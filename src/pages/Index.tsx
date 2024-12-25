import { AboutSection } from "@/components/AboutSection";
import { PromptCard } from "@/components/PromptCard";
import { Header } from "@/components/Header";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { getPrompts } from "@/utils/prompts";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  const { data: prompts = [], isLoading: isPromptsLoading, isError: isPromptsError } = useQuery({
    queryKey: ['prompts'],
    queryFn: getPrompts,
  });

  console.log('Prompts data:', prompts);

  const categories = [...new Set(prompts.map(prompt => prompt.category))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blog-dark to-gray-900">
      <Header />
      <div className="pt-20">
        <AboutSection />
        
        {/* Prompt Library Section */}
        <main className="max-w-4xl mx-auto px-4 pb-16 space-y-16">
          <section className="mt-12">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-inter font-bold text-white">LLM Prompt Library</h2>
            </div>
            
            <Tabs defaultValue={categories[0]} className="w-full">
              <TabsList className="w-full justify-start mb-6 bg-gray-800/50 text-white">
                {categories.map((category) => (
                  <TabsTrigger 
                    key={category} 
                    value={category}
                    className="data-[state=active]:bg-purple-800/50"
                  >
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {categories.map((category) => (
                <TabsContent key={category} value={category}>
                  <div className="grid gap-6 md:grid-cols-2">
                    {isPromptsLoading ? (
                      <p className="text-white">Loading prompts...</p>
                    ) : isPromptsError ? (
                      <p className="text-red-500">Error loading prompts</p>
                    ) : (
                      prompts
                        .filter(prompt => prompt.category === category)
                        .map((prompt) => (
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
                </TabsContent>
              ))}
            </Tabs>
          </section>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-4xl mx-auto px-4 py-8 text-center"
          >
            <p className="text-blog-primary text-lg font-medium mb-2">Want to build something together?</p>
            <p className="text-gray-300">Reach out through any of the social links above.</p>
          </motion.div>
        </main>
      </div>
    </div>
  );
};

export default Index;