"use client";

import ScrollReveal from "./scroll-reveal";

export default function AboutSection() {
  return (
    <section className="px-6 py-24 md:px-12 md:py-32 lg:px-20">
      <ScrollReveal>
        <p
          className="text-[10px] uppercase tracking-[0.4em] text-white/20 mb-8"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          About
        </p>
      </ScrollReveal>

      <div className="max-w-3xl space-y-6">
        <ScrollReveal delay={0.1}>
          <p className="text-[clamp(1.25rem,3vw,2rem)] font-medium leading-[1.4] text-white/90">
            I build things that sit at the intersection of software and
            hardware.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <p className="text-[clamp(1rem,2vw,1.15rem)] leading-[1.7] text-white/40">
            CS student heading to{" "}
            <span className="text-white/70">McGill Computer Engineering</span>{" "}
            this fall. Product Specialist at{" "}
            <span className="text-white/70">Apple</span>. Co-founder of{" "}
            <span className="text-white/70">Kaskaraa Instruments</span>, where
            we&apos;re automating pathology and I write the entire software
            stack.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="text-[clamp(1rem,2vw,1.15rem)] leading-[1.7] text-white/40">
            I reverse engineer iOS apps and old DRMs, design circuits, solder
            boards, debug embedded firmware with an oscilloscope, and write
            production code. Not a specialist —{" "}
            <span className="text-white/70 italic" style={{ fontFamily: "var(--font-serif)" }}>a generalist who goes deep</span>.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
