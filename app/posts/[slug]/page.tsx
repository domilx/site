import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";

import Image from "next/image";
import BlurFade, { BlueFadeStaggerChildren } from "@/components/blur-fade";

// MDX plugins
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeHighlight from "rehype-highlight";
import { copyAssetsToPublic } from "@/lib/copyPostAssets";

declare module "next-mdx-remote/rsc";

// ——————————————————————————————————————————
//  Static params & metadata
// ——————————————————————————————————————————
export async function generateStaticParams() {
    const base = path.join(process.cwd(), "content", "posts");
    const folders = await fs.readdir(base);
    return folders.map((f) => ({ slug: f.replace(/^\d{4}-\d{2}-\d{2}-/, "") }));
}

export async function generateMetadata({
    params,
}: {
    params: { slug: string };
}) {
    const { frontmatter } = await getPost(params.slug);
    return { title: frontmatter.title, description: frontmatter.description };
}

// ——————————————————————————————————————————
//  Page
// ——————————————————————————————————————————
export default async function PostPage({
    params,
}: {
    params: { slug: string };
}) {
    const { mdxSource, frontmatter } = await getPost(params.slug);

    return (
        <BlueFadeStaggerChildren
            delay={0.5}
            staggerDelay={0.04}
            yOffset={8}
            className="space-y-4 font-light leading-snug text-white"
        >
            <article className="space-y-6 leading-relaxed text-white">
                <BlurFade delay={0.1} yOffset={8}>
                    <h1 className="text-3xl text-[#FFD700]">{frontmatter.title}</h1>
                    <p className="text-sm text-[#ffd90081]">{frontmatter.date}</p>
                </BlurFade>

                {frontmatter.cover && (
                    <div className="my-4">
                        <Image
                            src={frontmatter.cover}
                            alt={frontmatter.title}
                            width={1280}
                            height={640}
                            priority
                            className="rounded"
                        />
                    </div>
                )}

                <div className="prose prose-invert max-w-none [&_*]:max-w-full">
                    {mdxSource /* ← MDX renders here */}
                </div>
            </article>
        </BlueFadeStaggerChildren>
    );
}

// ——————————————————————————————————————————
//  Helpers
// ——————————————————————————————————————————
async function getPost(slug: string) {
    const dir = path.join(process.cwd(), "content", "posts");
    const folders = await fs.readdir(dir);
    const folder = folders.find((f) => f.endsWith(slug));
    if (!folder) throw new Error("Post not found");

    const filepath = path.join(dir, folder, "index.mdx");
    const raw = await fs.readFile(filepath, "utf8");
    const { content, data } = matter(raw);

    await copyAssetsToPublic(folder);

    const mdx = await compileMDX({
        source: content,
        // Custom component mapping
        components: {
            /* gold‑hover links */
            a: (props: any) => (
                <a
                    {...props}
                    className={`text-[#FFD700] hover:text-[rgb(255,251,0)] ${props.className || ""}`}
                />
            ),
            /* optimise all images & GIFs */
            img: ({ src, ...rest }: any) => {
                // ./hierarchy.jpeg  -->  /posts/<folder>/hierarchy.jpeg
                const resolved =
                    src?.startsWith("http") || src?.startsWith("/")
                        ? src
                        : `/posts/${folder}/${src.replace(/^\.\//, "")}`;

                return (
                    <Image
                        {...rest}
                        src={resolved}
                        alt={rest.alt || ""}
                        width={rest.width || 500}
                        height={rest.height || 0}
                        style={{ display: "block", margin: "0 auto", padding: "0.5rem" }}
                        className={`rounded ${rest.className || ""}`}
                    />
                );
            },
            /* prettier code blocks (class added by rehype‑highlight) */
            pre: (props: any) => (
                <pre
                    {...props}
                    className={`overflow-x-auto rounded-lg bg-[#1d1d1d] p-4 ${props.className || ""}`}
                />
            ),
            /* block‑quotes with gold accent */
            blockquote: (props: any) => (
                <blockquote
                    {...props}
                    className={`pt-4 border-l-4 border-[#FFD700] pl-4 italic ${props.className || ""}`}
                />
            ),

            h1: (props: any) => (
                <h1
                    {...props}
                    className={`pt-4 text-3xl text-[#FFD700] ${props.className || ""}`}
                />
            ),

            h2: (props: any) => (
                <h2
                    {...props}
                    className={`pt-4 text-2xl text-[#FFD700] ${props.className || ""}`}
                />
            ),
            ul: (props: any) => (
                <ul {...props} className="list-disc pl-6 space-y-2" />
            ),
            ol: (props: any) => (
                <ol {...props} className="list-decimal pl-6 space-y-2" />
            ),

            li: (props: any) => (
                <li {...props} className={`text-[#cccccc] ${props.className || ""}`} />
            ),
            table: (props: any) => (
                <table {...props} className="min-w-full border-collapse border border-gray-700" />
            ),
            thead: (props: any) => (
                <thead {...props} className="bg-gray-800" />
            ),
            tbody: (props: any) => (
                <tbody {...props} className="bg-gray-900" />
            ),
            tr: (props: any) => <tr {...props} />,
            th: (props: any) => (
                <th
                    {...props}
                    className="px-4 py-2 text-left text-xs font-medium text-gray-200 uppercase tracking-wider border border-gray-800"
                />
            ),
            td: (props: any) => (
                <td
                    {...props}
                    className="px-4 py-2 text-sm text-gray-300 border border-gray-800"
                />
            ),
        },
        options: {
            mdxOptions: {
                remarkPlugins: [remarkGfm],
                rehypePlugins: [rehypeSlug, rehypeHighlight],
                baseUrl: path.join("/content/posts", folder), // resolve relative media paths
            },
        },
    });

    return { mdxSource: mdx.content, frontmatter: data as any };
}
