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
  const modules = await import.meta.glob('../prompts/*.md', { as: 'string', eager: true });
  console.log('Available modules:', modules);
  
  const prompts = Object.entries(modules).map(([filepath, content]) => {
    console.log('Processing filepath:', filepath);
    const { data, content: markdown } = matter(content);
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