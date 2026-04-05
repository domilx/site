"use client";

import ScrollReveal from "./scroll-reveal";

const links = [
  { name: "GITHUB", url: "https://github.com/domilx" },
  { name: "INSTAGRAM", url: "https://www.instagram.com/domenico.valentino27/" },
  { name: "MAIL", url: "mailto:hello@domidev.net" },
  { name: "LINKEDIN", url: "https://www.linkedin.com/in/domenico-valentino-686454305/" },
  { name: "KASKARAA", url: "https://www.kaskaraa.com" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] px-6 py-16 md:px-12 md:py-24 lg:px-20">
      <ScrollReveal>
        <p
          className="text-[10px] uppercase tracking-[0.4em] text-white/20 mb-10"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          Connect
        </p>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <div className="flex flex-wrap gap-8 md:gap-16">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative text-sm font-medium tracking-[0.2em] text-white/30 transition-colors hover:text-white"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-white transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <p
          className="mt-16 text-[11px] text-white/10"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          &copy; {new Date().getFullYear()} DOMIDEV
        </p>
      </ScrollReveal>
    </footer>
  );
}
