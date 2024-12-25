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
  
  // Use correct path relative to src directory
  const modules = import.meta.glob('/src/prompts/*.md', { 
    as: 'raw',
    eager: true 
  });
  
  console.log('Available modules:', modules);
  
  const prompts = Object.entries(modules).map(([filepath, content]) => {
    console.log('Processing filepath:', filepath);
    
    if (typeof content !== 'string') {
      console.error('Invalid content type for file:', filepath);
      return null;
    }
    
    try {
      const { data, content: markdown } = matter(content);
      console.log('Parsed frontmatter:', data);
      
      // Extract slug from filepath, handling both Windows and Unix paths
      const slug = filepath
        .split(/[/\\]/)
        .pop()
        ?.replace('.md', '') || '';
      
      return {
        ...data,
        content: markdown,
        slug,
      } as Prompt;
    } catch (error) {
      console.error('Error parsing markdown file:', filepath, error);
      return null;
    }
  })
  .filter((prompt): prompt is Prompt => prompt !== null)
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  console.log('Final prompts:', prompts);
  return prompts;
};