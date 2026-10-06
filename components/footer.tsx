const LINKS = [
  { label: "Email me", href: "mailto:domenico2727@icloud.com" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/domenico-valentino-686454305/",
  },
  { label: "GitHub", href: "https://github.com/domilx" },
];

export default function Footer() {
  return (
    <footer id="contact" className="contact-section section-anchor">
      <div className="shell">
        <p className="eyebrow">Contact</p>
        <h2 className="display">Let’s talk engineering.</h2>
        <p className="contact-note">
          Software, embedded systems, robotics or audio.
          <br />
          Based in Montréal. Open to relocating.
        </p>
        <div className="contact-links">
          {LINKS.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              className={`gel gel--pill${index ? "gel--graphite" : ""}`}
              {...(link.href.startsWith("http")
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="resume-links">
          <span>CVs</span>
          <a href="/cv/Domenico_Valentino_Software_CV.pdf">Software CV (PDF)</a>
          <a href="/cv/Domenico_Valentino_Embedded_Robotics_CV.pdf">
            Embedded &amp; robotics CV (PDF)
          </a>
        </div>
        <p className="copyright">
          © {new Date().getFullYear()} Domenico Valentino · Made in Montréal
        </p>
      </div>
    </footer>
  );
}
