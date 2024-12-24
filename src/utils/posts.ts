import matter from 'gray-matter';

export interface Post {
  title: string;
  excerpt: string;
  date: string;
  content: string;
  slug: string;
}

export const getPosts = async (): Promise<Post[]> => {
  const posts = import.meta.glob('../posts/*.md', { eager: true, as: 'string' });
  
  return Object.entries(posts).map(([filepath, content]) => {
    const { data, content: markdown } = matter(content as string);
    const slug = filepath.replace('../posts/', '').replace('.md', '');
    
    return {
      ...data,
      content: markdown,
      slug,
    } as Post;
  }).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};