import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getPosts } from "@/utils/posts";
import { motion } from "framer-motion";

const BlogPost = () => {
  const { slug } = useParams();
  const { data: posts = [] } = useQuery({
    queryKey: ['posts'],
    queryFn: getPosts,
  });

  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blog-dark to-gray-900 text-white flex items-center justify-center">
        <h1>Post not found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blog-dark to-gray-900">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="prose prose-invert mx-auto"
        >
          <time className="text-gray-400">{post.date}</time>
          <h1 className="text-4xl font-bold text-white mb-8">{post.title}</h1>
          <div className="text-gray-200 whitespace-pre-wrap">{post.content}</div>
        </motion.article>
      </div>
    </div>
  );
};

export default BlogPost;