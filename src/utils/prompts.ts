import matter from 'gray-matter';

export interface Prompt {
  title: string;
  description: string;
  category: string;
  date: string;
  content: string;
  slug: string;
}

export const getPrompts = async (): Promise<Prompt[]> => {
  const modules = import.meta.glob('../prompts/*.md', { eager: true });
  
  return Object.entries(modules).map(([filepath, module]) => {
    const content = module as { default: string };
    const { data, content: markdown } = matter(content.default);
    const slug = filepath.replace('../prompts/', '').replace('.md', '');
    
    return {
      ...data,
      content: markdown,
      slug,
    } as Prompt;
  }).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};