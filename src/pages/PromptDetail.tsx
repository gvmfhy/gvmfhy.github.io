import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getPrompts } from "@/utils/prompts";
import { motion } from "framer-motion";
import ReactMarkdown from 'react-markdown';
import { Header } from "@/components/Header";
import { Badge } from "@/components/ui/badge";

const PromptDetail = () => {
  const { slug } = useParams();
  const { data: prompts = [] } = useQuery({
    queryKey: ['prompts'],
    queryFn: getPrompts,
  });

  const prompt = prompts.find((p) => p.slug === slug);

  if (!prompt) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blog-dark to-gray-900 text-white flex items-center justify-center">
        <h1>Prompt not found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blog-dark to-gray-900">
      <Header />
      <div className="max-w-4xl mx-auto px-4 py-16">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="prose prose-invert mx-auto"
        >
          <div className="flex items-center gap-4 mb-4">
            <time className="text-gray-400">{prompt.date}</time>
            <Badge variant="secondary" className="bg-purple-800/50 text-white">
              {prompt.category}
            </Badge>
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">{prompt.title}</h1>
          <p className="text-xl text-gray-300 mb-8">{prompt.description}</p>
          <div className="text-gray-200">
            <ReactMarkdown>{prompt.content}</ReactMarkdown>
          </div>
        </motion.article>
      </div>
    </div>
  );
};

export default PromptDetail;