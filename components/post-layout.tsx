"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import TextReveal, { LineReveal } from "./text-reveal";

interface PostLayoutProps {
  frontmatter: {
    title: string;
    date: string;
    description: string;
    cover?: string;
  };
  children: React.ReactNode;
}

export default function PostLayout({ frontmatter, children }: PostLayoutProps) {
  return (
    <article className="min-h-screen">
      {/* Header */}
      <header className="px-6 pt-12 pb-16 md:px-12 md:pt-16 md:pb-24 lg:px-20">
        <LineReveal delay={0.1}>
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-white/20 transition-colors hover:text-white/60 mb-16 md:mb-20"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            <span className="transition-transform group-hover:-translate-x-1">
              &larr;
            </span>
            Back
          </Link>
        </LineReveal>

        <div className="max-w-3xl">
          <TextReveal
            text={frontmatter.title}
            delay={0.3}
            stagger={0.02}
            duration={0.8}
            className="text-[clamp(1.75rem,5vw,3.5rem)] font-bold leading-[1.1] tracking-tight text-white"
          />

          <LineReveal delay={0.8}>
            <time
              className="mt-4 block text-[11px] uppercase tracking-[0.3em] text-white/20"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              {new Date(frontmatter.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
            </time>
          </LineReveal>
        </div>

        <motion.div
          className="mt-10 h-px bg-white/10 origin-left"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{
            duration: 1,
            delay: 1,
            ease: [0.33, 1, 0.68, 1],
          }}
        />
      </header>

      {/* Content */}
      <motion.div
        className="px-6 pb-24 md:px-12 md:pb-32 lg:px-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2, ease: [0.33, 1, 0.68, 1] }}
      >
        <div className="prose-editorial max-w-2xl">{children}</div>
      </motion.div>

      {/* Footer */}
      <footer className="border-t border-white/[0.06] px-6 py-10 md:px-12 lg:px-20">
        <Link
          href="/"
          className="group inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-white/20 transition-colors hover:text-white/60"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          <span className="transition-transform group-hover:-translate-x-1">
            &larr;
          </span>
          All posts
        </Link>
      </footer>
    </article>
  );
}
