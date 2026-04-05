import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import Image from "next/image";

import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeHighlight from "rehype-highlight";
import { copyAssetsToPublic } from "@/lib/copyPostAssets";
import PostLayout from "@/components/post-layout";

declare module "next-mdx-remote/rsc";

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

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const { mdxSource, frontmatter } = await getPost(params.slug);

  return (
    <PostLayout frontmatter={frontmatter}>
      {mdxSource}
    </PostLayout>
  );
}

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
    components: {
      a: (props: any) => (
        <a
          {...props}
          className={`text-white/70 underline decoration-white/20 underline-offset-4 transition-colors hover:text-white hover:decoration-white/50 ${props.className || ""}`}
        />
      ),
      img: ({ src, ...rest }: any) => {
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
            style={{ display: "block", margin: "2rem auto" }}
            className={`rounded ${rest.className || ""}`}
          />
        );
      },
      pre: (props: any) => (
        <pre
          {...props}
          className={`overflow-x-auto rounded-md border border-white/[0.06] bg-[#111] p-5 text-[13px] ${props.className || ""}`}
        />
      ),
      blockquote: (props: any) => (
        <blockquote
          {...props}
          className={`border-l-2 border-white/20 pl-5 text-white/35 ${props.className || ""}`}
          style={{ fontFamily: "var(--font-serif)", fontStyle: "italic" }}
        />
      ),
      h1: (props: any) => (
        <h1
          {...props}
          className={`mt-12 mb-4 text-[clamp(1.5rem,3vw,2rem)] font-bold tracking-tight text-white ${props.className || ""}`}
        />
      ),
      h2: (props: any) => (
        <h2
          {...props}
          className={`mt-12 mb-4 text-[clamp(1.1rem,2vw,1.4rem)] font-bold tracking-tight text-white/90 ${props.className || ""}`}
        />
      ),
      ul: (props: any) => (
        <ul {...props} className="list-disc space-y-2 pl-5" />
      ),
      ol: (props: any) => (
        <ol {...props} className="list-decimal space-y-2 pl-5" />
      ),
      li: (props: any) => (
        <li {...props} className={`text-white/50 ${props.className || ""}`} />
      ),
      p: (props: any) => (
        <p
          {...props}
          className={`text-white/50 leading-[1.85] ${props.className || ""}`}
        />
      ),
      strong: (props: any) => (
        <strong
          {...props}
          className={`font-semibold text-white/80 ${props.className || ""}`}
        />
      ),
      em: (props: any) => (
        <em
          {...props}
          className={`text-white/40 ${props.className || ""}`}
          style={{ fontFamily: "var(--font-serif)" }}
        />
      ),
      table: (props: any) => (
        <table
          {...props}
          className="min-w-full border-collapse border border-white/[0.08]"
        />
      ),
      thead: (props: any) => <thead {...props} className="bg-white/[0.03]" />,
      th: (props: any) => (
        <th
          {...props}
          className="border border-white/[0.08] px-4 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-white/40"
        />
      ),
      td: (props: any) => (
        <td
          {...props}
          className="border border-white/[0.08] px-4 py-2 text-[13px] text-white/50"
        />
      ),
    },
    options: {
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [rehypeSlug, rehypeHighlight],
        baseUrl: path.join("/content/posts", folder),
      },
    },
  });

  return { mdxSource: mdx.content, frontmatter: data as any };
}
