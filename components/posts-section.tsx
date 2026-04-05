"use client";

import ScrollReveal from "./scroll-reveal";
import PostItem from "./post-item";
import type { PostMeta } from "@/lib/posts";

export default function PostsSection({ posts }: { posts: PostMeta[] }) {
  return (
    <section className="px-6 py-24 md:px-12 md:py-32 lg:px-20">
      <ScrollReveal>
        <p
          className="text-[10px] uppercase tracking-[0.4em] text-white/20 mb-8"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          Writing
        </p>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <p className="text-[clamp(1.25rem,3vw,2rem)] font-medium leading-[1.4] text-white/90 mb-12">
          Things I&apos;ve been thinking about.
        </p>
      </ScrollReveal>

      <div>
        {posts.map((p, i) => (
          <PostItem
            key={p.slug}
            slug={p.slug}
            title={p.title}
            description={p.description}
            date={p.date}
            index={i}
          />
        ))}
      </div>
    </section>
  );
}
