import Disc from "./disc";

export default function Hero() {
  return (
    <section className="shell">
      <div className="grid items-center gap-10 py-16 md:grid-cols-[minmax(0,380px)_1fr] md:gap-6 md:py-24">
        <div className="rise rise-1 order-2 md:order-1">
          <Disc />
        </div>

        <div className="order-1 text-center md:order-2 md:pl-6 md:text-left">
          <h1 className="display rise rise-2 text-[clamp(3.4rem,9vw,6.2rem)] leading-[1.02]">
            Code. Solder. Mix.
          </h1>
          <p
            className="display rise rise-2 mt-4 text-[clamp(1.3rem,3vw,1.8rem)] italic"
            style={{ color: "var(--mist)" }}
          >
            The personal site of Domenico Valentino.
          </p>
          <p
            className="rise rise-3 mx-auto mt-6 max-w-[46ch] text-[13px] leading-relaxed md:mx-0"
            style={{ color: "var(--mist)" }}
          >
            I study computer engineering at McGill, write firmware, and
            reverse engineer old hardware. After dark I DJ. My sets go up
            here, audio and video.
          </p>
          <div className="rise rise-3 mt-8 flex justify-center gap-3 md:justify-start">
            <a href="#sets" className="gel gel--pill">
              Play the sets
            </a>
            <a href="#about" className="gel gel--graphite gel--pill">
              Who is this
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
