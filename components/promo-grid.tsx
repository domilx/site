type PromoLink = { label: string; href: string };
type PromoBox = {
  bead: string;
  title: string;
  blurb: string;
  link: PromoLink;
  link2?: PromoLink;
};

const BOXES: PromoBox[] = [
  {
    bead: "var(--blueberry)",
    title: "Kaskaraa Instruments",
    blurb:
      "Co-founder. We automate pathology, and I write the entire software stack.",
    link: { label: "Visit Kaskaraa", href: "https://www.kaskaraa.com" },
  },
  {
    bead: "var(--tangerine)",
    title: "OverCue",
    blurb: "Custom firmware for Pioneer DJ gear.",
    link: { label: "Visit overcue.gg", href: "https://overcue.gg" },
    link2: { label: "GitHub", href: "https://github.com/OverCue-gg" },
  },
  {
    bead: "var(--lime)",
    title: "Bare metal",
    blurb:
      "Reverse engineering, dead DRM schemes, a breadboard 6502, and an oscilloscope that gets used.",
    link: { label: "Browse the code", href: "https://github.com/domilx" },
  },
  {
    bead: "var(--grape)",
    title: "In the booth",
    blurb: "Production and DJ sets. Long blends, recorded live.",
    link: { label: "Jump to the sets", href: "#sets" },
  },
];

export default function PromoGrid() {
  return (
    <section id="work" className="scroll-mt-6 border-t pinstripe" style={{ borderColor: "var(--hairline)" }}>
      <div className="shell py-14 md:py-16">
        <h2 className="display mb-6 text-[clamp(2rem,4.5vw,2.6rem)]">
          Selected work.
        </h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {BOXES.map((b) => (
            <div key={b.title} className="promo">
              <div className="flex items-center gap-2">
                <span className="bead" style={{ background: b.bead }} />
                <h3 className="text-[12px] font-bold">{b.title}</h3>
              </div>
              <p
                className="flex-1 text-[11px] leading-relaxed"
                style={{ color: "var(--mist)" }}
              >
                {b.blurb}
              </p>
              <div className="flex gap-4">
                {[b.link, ...(b.link2 ? [b.link2] : [])].map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    className="text-[11px]"
                    {...(l.href.startsWith("http")
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    {l.label} &rsaquo;
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
