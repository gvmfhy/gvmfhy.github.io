import matter from 'gray-matter';

export interface Post {
  title: string;
  excerpt: string;
  date: string;
  content: string;
  slug: string;
}

export const getPosts = async (): Promise<Post[]> => {
  const modules = import.meta.glob('../posts/*.md', { eager: true });
  
  return Object.entries(modules).map(([filepath, module]) => {
    const content = module as { default: string };
    const { data, content: markdown } = matter(content.default);
    const slug = filepath.replace('../posts/', '').replace('.md', '');
    
    return {
      ...data,
      content: markdown,
      slug,
    } as Post;
  }).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};