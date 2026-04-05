"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ITEMS = [
  "KASKARAA",
  "APPLE",
  "McGILL",
  "6502",
  "PATHOLOGY",
  "REVERSE ENGINEERING",
  "HARDWARE",
  "EMBEDDED",
  "SWIFT",
  "ELECTRICAL",
  "DAWSON COLLEGE",
  "FRC ALUMN",
];

export default function Marquee() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const content = ITEMS.map((item, i) => (
    <span key={i} className="flex items-center gap-8 px-4">
      <span
        className="whitespace-nowrap text-[clamp(0.7rem,1.2vw,0.85rem)] font-medium tracking-[0.3em]"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        {item}
      </span>
      <span className="h-1 w-1 rounded-full bg-white/20" />
    </span>
  ));

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 1, delay: 0.2 }}
      className="relative w-screen -ml-[50vw] left-1/2 overflow-hidden border-y border-white/[0.06] py-5"
    >
      <div className="marquee-track">
        <div className="flex">{content}</div>
        <div className="flex">{content}</div>
      </div>
    </motion.div>
  );
}
