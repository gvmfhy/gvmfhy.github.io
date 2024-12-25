import frontMatter from 'front-matter';

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
      const { attributes, body } = frontMatter(content);
      console.log('Parsed frontmatter:', attributes);
      
      const slug = filepath
        .split(/[/\\]/)
        .pop()
        ?.replace('.md', '') || '';
      
      return {
        ...(attributes as Omit<Prompt, 'content' | 'slug'>),
        content: body,
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