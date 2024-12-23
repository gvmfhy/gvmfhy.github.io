import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { motion } from "framer-motion";

interface BlogPostCardProps {
  title: string;
  excerpt: string;
  date: string;
}

export const BlogPostCard = ({ title, excerpt, date }: BlogPostCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className="w-full"
    >
      <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
        <CardHeader>
          <time className="text-sm text-gray-400">{date}</time>
          <h2 className="text-xl font-inter font-bold text-white hover:text-blog-primary transition-colors">
            {title}
          </h2>
        </CardHeader>
        <CardContent>
          <p className="text-gray-300">{excerpt}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};