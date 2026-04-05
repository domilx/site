"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface PostItemProps {
  slug: string;
  title: string;
  description: string;
  date: string;
  index: number;
}

export default function PostItem({
  slug,
  title,
  description,
  date,
  index,
}: PostItemProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const num = String(index + 1).padStart(2, "0");

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
        ease: [0.33, 1, 0.68, 1],
      }}
    >
      <Link
        href={`/posts/${slug}`}
        className="group block border-b border-white/[0.06] py-6 transition-colors hover:bg-white/[0.02] md:py-8"
      >
        <div className="flex items-start gap-4 md:gap-8">
          {/* Number */}
          <span
            className="shrink-0 text-[11px] tabular-nums text-white/15 transition-colors group-hover:text-white/50 pt-1"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            {num}
          </span>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between md:gap-8">
              <h3 className="text-[clamp(1rem,2.5vw,1.25rem)] font-medium text-white/90 transition-colors group-hover:text-white">
                {title}
              </h3>
              <time
                className="shrink-0 text-[11px] text-white/20"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {formatDate(date)}
              </time>
            </div>
            <p className="mt-1.5 text-[13px] leading-relaxed text-white/30 transition-colors group-hover:text-white/50">
              {description}
            </p>
          </div>

          {/* Arrow */}
          <span className="shrink-0 pt-1 text-white/0 transition-all group-hover:text-white/40 group-hover:translate-x-1">
            &rarr;
          </span>
        </div>
      </Link>
    </motion.div>
  );
}

function formatDate(dateStr: string): string {
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
}
