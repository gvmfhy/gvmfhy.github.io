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
  console.log('Fetching prompts...');
  const modules = import.meta.glob('../prompts/*.md', { eager: true });
  console.log('Available modules:', modules);
  
  const prompts = Object.entries(modules).map(([filepath, module]) => {
    console.log('Processing filepath:', filepath);
    const content = module as { default: string };
    const { data, content: markdown } = matter(content.default);
    console.log('Parsed frontmatter:', data);
    const slug = filepath.replace('../prompts/', '').replace('.md', '');
    
    return {
      ...data,
      content: markdown,
      slug,
    } as Prompt;
  }).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  console.log('Final prompts:', prompts);
  return prompts;
};