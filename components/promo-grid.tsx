type Project = {
  number: string;
  category: string;
  title: string;
  role: string;
  summary: string;
  contributions: string[];
  stack: string[];
  detail: string;
  links: { label: string; href: string }[];
  color: string;
};

const PROJECTS: Project[] = [
  {
    number: "01",
    category: "Software & audio",
    title: "OverCue",
    role: "Core software & firmware",
    summary:
      "Tools that give DJs more control over the music and hardware they already use.",
    contributions: [
      "Built most of the software, spanning a desktop app and custom DJ hardware firmware.",
      "Added DJM knob control of stems on CDJs, with a switch back to regular EQ. External apps handle stem processing.",
    ],
    stack: ["Rust", "C/C++", "React", "Tauri", "Core ML"],
    detail:
      "My work includes audio processing, synchronization, bounded buffers, resampling and playback transitions. Collaborators contributed testing on equipment I did not own and related bug fixes. The software and firmware are publicly released; the source is private.",
    links: [{ label: "Explore OverCue", href: "https://overcue.gg" }],
    color: "var(--tangerine)",
  },
  {
    number: "02",
    category: "Robotics & leadership",
    title: "FIRST Robotics",
    role: "Programming lead · Teams 3990 & 9406",
    summary: "Robot software written, tested and tuned for competition.",
    contributions: [
      "Developed swerve drive, autonomous routines, vision localization and scoring controls in Java/WPILib.",
      "Led 10 programmers, reviewed their code and taught beginners who progressed to writing robot control systems.",
    ],
    stack: ["Java", "WPILib", "PathPlanner", "PID control"],
    detail:
      "I wrote and oversaw competition software for both teams, with most of my work on 3990. I integrated encoders, a gyro and AprilTag cameras using WPILib’s pose estimator, and used telemetry and system identification for tuning. I also built TechScout and TechInsights for scouting, offline collection, QR transfer and analysis. Teammates contributed through delegated tasks and reviewed pull requests.",
    links: [
      {
        label: "Watch a match",
        href: "https://www.thebluealliance.com/match/2025gal_sf5m1",
      },
      { label: "TechScout code", href: "https://github.com/domilx/TechScout" },
      {
        label: "App Store",
        href: "https://apps.apple.com/in/app/tech-scout/id6446188906",
      },
    ],
    color: "var(--blueberry)",
  },
  {
    number: "03",
    category: "Embedded systems & instruments",
    title: "Kaskaraa Instruments",
    role: "Co-founder · Software & electronics",
    summary:
      "Building prototype automated microtomes for tissue preparation in pathology.",
    contributions: [
      "Lead instrument software, including UI, motor control, safety logic and AI imaging.",
      "Develop embedded electronics, circuit boards and wiring, and manage interns alongside my co-founders.",
    ],
    stack: ["Embedded software", "Motor control", "Electronics", "AI imaging"],
    detail:
      "I work across the instrument’s software and electronics, and take part in research coordination, grant applications and company development. These are prototypes under development. Technical methods and partner details are kept private.",
    links: [{ label: "Visit Kaskaraa", href: "https://kaskaraa.com" }],
    color: "var(--lime)",
  },
  {
    number: "04",
    category: "Digital hardware",
    title: "6502 Computer",
    role: "Independent hardware & assembly project",
    summary: "A working computer built from the CPU and wiring up.",
    contributions: [
      "Wired the processor, memory, clock, reset, address decoding and I/O.",
      "Brought up the system with ROM programming and 6502 assembly.",
    ],
    stack: ["6502 assembly", "Digital circuits", "ROM programming"],
    detail:
      "Building this computer let me work directly with the relationship between instructions, memory, timing and physical signals. The source and build documentation are private.",
    links: [],
    color: "var(--grape)",
  },
];

export default function PromoGrid() {
  return (
    <section
      id="work"
      className="work-section section-anchor"
      aria-labelledby="work-title"
    >
      <div className="shell">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Selected engineering work</p>
            <h2 id="work-title" className="display">
              What I’ve built.
            </h2>
          </div>
          <p>
            From motor control
            <br />
            to audio software.
          </p>
        </div>
        <div className="project-grid">
          {PROJECTS.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-topline">
                <span>
                  <span
                    className="bead"
                    style={{ background: project.color }}
                    aria-hidden="true"
                  />
                  {project.category}
                </span>
                <span className="project-number" aria-hidden="true">
                  {project.number}
                </span>
              </div>
              <h3 className="display">{project.title}</h3>
              <p className="project-role">{project.role}</p>
              <p className="project-summary">{project.summary}</p>
              <ul className="contributions">
                {project.contributions.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <ul
                className="stack"
                aria-label={`${project.title} technologies`}
              >
                {project.stack.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <details className="project-details">
                <summary>My contribution in more detail</summary>
                <p>{project.detail}</p>
              </details>
              {project.links.length > 0 && (
                <div className="project-links">
                  {project.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.label} <span aria-hidden="true">↗</span>
                    </a>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
