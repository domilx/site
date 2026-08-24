const LINKS = [
  { label: "GitHub", href: "https://github.com/domilx" },
  { label: "Email", href: "mailto:hello@domidev.net" },
  { label: "Instagram", href: "https://www.instagram.com/domenico.valentino27/" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/domenico-valentino-686454305/",
  },
  { label: "Kaskaraa", href: "https://www.kaskaraa.com" },
];

export default function Footer() {
  return (
    <footer
      id="contact"
      className="scroll-mt-6 border-t"
      style={{ borderColor: "var(--hairline)" }}
    >
      <div className="shell py-12 text-center md:py-14">
        <h2 className="display text-[clamp(1.7rem,4vw,2.1rem)]">
          Say hello.
        </h2>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5">
          {LINKS.map((l) => {
            const external = l.href.startsWith("http");
            return (
              <a
                key={l.label}
                href={l.href}
                className="gel gel--graphite gel--pill"
                {...(external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                {l.label}
              </a>
            );
          })}
        </div>
        <p className="mt-10 text-[10px]" style={{ color: "var(--ghost)" }}>
          Copyright &copy; {new Date().getFullYear()} Domenico Valentino. All
          rights reserved.
        </p>
      </div>
      <div className="pinstripe border-t" style={{ borderColor: "var(--hairline)" }}>
        <p
          className="py-2 text-center text-[10px]"
          style={{ color: "var(--ghost)" }}
        >
          made in montréal
        </p>
      </div>
    </footer>
  );
}
