import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface PromptCardProps {
  title: string;
  description: string;
  category: string;
  slug: string;
}

export const PromptCard = ({ title, description, category, slug }: PromptCardProps) => {
  return (
    <Link to={`/prompts/${slug}`} className="block w-full">
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
        className="w-full"
      >
        <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
          <CardHeader>
            <div className="flex justify-between items-start">
              <h2 className="text-xl font-inter font-bold text-white hover:text-blog-primary transition-colors">
                {title}
              </h2>
              <Badge variant="secondary" className="bg-purple-800/50 text-white">
                {category}
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-gray-300">{description}</p>
          </CardContent>
        </Card>
      </motion.div>
    </Link>
  );
};