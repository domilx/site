"use client";

import { motion } from "framer-motion";
import TextReveal, { LineReveal } from "./text-reveal";

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col justify-center px-6 md:px-12 lg:px-20">
      {/* Main title */}
      <div className="space-y-2">
        <TextReveal
          text="DOMIDEV"
          delay={0.3}
          stagger={0.06}
          duration={1}
          className="text-[clamp(4.5rem,16vw,14rem)] font-bold leading-[0.85] tracking-[-0.04em] text-white"
        />
        <TextReveal
          text="domenico VALENTINO"
          delay={0.6}
          stagger={0.04}
          duration={1}
          className="text-[clamp(2rem,7vw,6rem)] leading-[1] tracking-[-0.02em] text-white/40"
          as="div"
        />
      </div>

      {/* Subtitle */}
      <LineReveal delay={1.2} duration={0.8}>
        <p
          className="mt-8 text-[clamp(0.7rem,1.1vw,0.85rem)] uppercase tracking-[0.35em] text-white/25"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          Software &middot; Hardware &middot; Everything between
        </p>
      </LineReveal>

      {/* Line */}
      <motion.div
        className="mt-10 h-px bg-white/10 origin-left"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, delay: 1.5, ease: [0.33, 1, 0.68, 1] }}
      />

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <span
          className="text-[10px] uppercase tracking-[0.4em] text-white/15"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          Scroll
        </span>
        <motion.div
          className="h-8 w-px bg-white/20"
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "top" }}
        />
      </motion.div>
    </section>
  );
}
