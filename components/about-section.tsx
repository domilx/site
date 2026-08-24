export default function AboutSection() {
  return (
    <section
      id="about"
      className="scroll-mt-6 border-t"
      style={{ borderColor: "var(--hairline)" }}
    >
      <div className="shell max-w-[700px] py-16 text-center md:py-20">
        <h2 className="display text-[clamp(1.9rem,4.5vw,2.5rem)] leading-snug">
          In short.
        </h2>
        <div
          className="mx-auto mt-7 max-w-[54ch] space-y-4 text-left text-[13px] leading-relaxed md:text-center"
          style={{ color: "var(--mist)" }}
        >
          <p>
            Computer Engineering student at McGill. Co-founder of Kaskaraa
            Instruments, where we automate pathology and I write everything
            that runs on a screen.
          </p>
          <p>
            I reverse engineer iOS apps and long-dead copy protection,
            breadboard old processors, and debug firmware with an oscilloscope.
            When the bench cools down, I make music and play long sets.
          </p>
        </div>
      </div>
    </section>
  );
}
