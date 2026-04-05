"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
  once?: boolean;
}

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  duration = 0.7,
  y = 50,
  once = true,
}: ScrollRevealProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{
        duration,
        delay,
        ease: [0.33, 1, 0.68, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

export function ScrollRevealStagger({
  children,
  className = "",
  stagger = 0.08,
  y = 40,
}: {
  children: React.ReactNode[];
  className?: string;
  stagger?: number;
  y?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div ref={ref} className={className}>
      {children.map((child, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
          transition={{
            duration: 0.7,
            delay: i * stagger,
            ease: [0.33, 1, 0.68, 1],
          }}
        >
          {child}
        </motion.div>
      ))}
    </div>
  );
}
