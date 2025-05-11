import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import BlurFade from "@/components/blur-fade";

type PostMeta = { slug: string; title: string; description: string; date: string };

export const metadata = { title: "posts" };

export default async function postsIndex() {
    const posts = await getAllPostsMeta();
    return (
        <div className="space-y-8">
            <h1 className="text-3xl text-[#FFD700]">posts.</h1>
            <ul className="space-y-6">
                {posts.map((p, i) => (
                    <BlurFade key={p.slug} delay={i * 0.04 + 0.2} yOffset={8}>
                        <li className="group">
                            <Link href={`/posts/${p.slug}`} className="block">
                                <h2 className="text-xl text-white group-hover:text-[#FFD700] transition">
                                    {p.title}
                                </h2>
                                <p className="text-sm text-[#ffd90081]">{p.date}</p>
                                <p className="text-sm text-[#cccccc]">{p.description}</p>
                            </Link>
                        </li>
                    </BlurFade>
                ))}
            </ul>
        </div>
    );
}

async function getAllPostsMeta(): Promise<PostMeta[]> {
    const dir = path.join(process.cwd(), "content", "posts");
    const folders = await fs.readdir(dir);
    const meta = await Promise.all(
        folders.map(async (folder) => {
            const file = await fs.readFile(path.join(dir, folder, "index.mdx"), "utf8");
            const { data } = matter(file);
            return {
                slug: folder.replace(/^\d{4}-\d{2}-\d{2}-/, ""), // strip leading date
                title: data.title,
                description: data.description,
                date: data.date,
            } as PostMeta;
        })
    );
    // newest first
    return meta.sort((a, b) => +new Date(b.date) - +new Date(a.date));
}