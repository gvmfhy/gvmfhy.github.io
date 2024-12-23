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
      <Card className="border border-blog-light/10 bg-blog-dark hover:bg-blog-dark/80 transition-colors">
        <CardHeader className="text-blog-light">
          <time className="text-sm text-blog-gray">{date}</time>
          <h2 className="text-xl font-inter font-bold hover:text-blog-primary transition-colors">
            {title}
          </h2>
        </CardHeader>
        <CardContent>
          <p className="text-blog-gray">{excerpt}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};