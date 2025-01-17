import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'content');

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => ({
    params: { id: fileName.replace(/\.md$/, '') },
  }));
}

export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const { data, content } = matter(fileContents);
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    id,
    contentHtml,
    ...data,
  };
}


export function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDirectory);

  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, ''); // Elimina la extensión .md
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const { data } = matter(fileContents); // Extrae los metadatos (frontmatter)

    return {
      id,
      ...data, // Incluye los metadatos (por ejemplo, title, date)
    };
  });

    // Ordena los posts por fecha (descendente)
  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}