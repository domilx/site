import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";

export type PostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
};

export async function getAllPostsMeta(): Promise<PostMeta[]> {
  const dir = path.join(process.cwd(), "content", "posts");
  const folders = await fs.readdir(dir);
  const meta = await Promise.all(
    folders.map(async (folder) => {
      const file = await fs.readFile(
        path.join(dir, folder, "index.mdx"),
        "utf8"
      );
      const { data } = matter(file);
      return {
        slug: folder.replace(/^\d{4}-\d{2}-\d{2}-/, ""),
        title: data.title,
        description: data.description,
        date: data.date,
      } as PostMeta;
    })
  );
  return meta.sort((a, b) => +new Date(b.date) - +new Date(a.date));
}
