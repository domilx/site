import Disc from "./disc";

export default function Hero() {
  return (
    <section className="shell hero" aria-labelledby="intro-title">
      <div className="hero-copy rise rise-1">
        <p className="eyebrow">Computer Engineering at McGill · Montréal</p>
        <h1 id="intro-title" className="display hero-name">
          Domenico
          <br />
          Valentino.
        </h1>
        <p className="hero-intro">
          I write software for DJ equipment,
          <br className="desktop-break" /> robots and lab instruments.
        </p>
        <p className="hero-note">
          From the interface to the electronics underneath. Co-founder of
          Kaskaraa Instruments, builder of OverCue, and former FRC programming
          lead.
        </p>
        <div className="hero-actions">
          <a href="#work" className="gel gel--pill">
            Explore my work
          </a>
          <a href="mailto:domenico2727@icloud.com" className="quiet-link">
            Get in touch <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="resume-links" aria-label="Download my CV">
          <span>CVs</span>
          <a href="/cv/Domenico_Valentino_Software_CV.pdf">Software CV (PDF)</a>
          <a href="/cv/Domenico_Valentino_Embedded_Robotics_CV.pdf">
            Embedded &amp; robotics CV (PDF)
          </a>
        </div>
      </div>
      <div className="hero-object rise rise-2">
        <Disc />
        <p className="object-caption">Code. Solder. Mix.</p>
      </div>
    </section>
  );
}
