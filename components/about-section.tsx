export default function AboutSection() {
  return (
    <section
      id="about"
      className="about-section section-anchor"
      aria-labelledby="about-title"
    >
      <div className="shell">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Background</p>
            <h2 id="about-title" className="display">
              Working with people.
            </h2>
          </div>
        </div>
        <div className="background-grid">
          <div>
            <span className="background-label">McGill University</span>
            <h3>Computer Engineering</h3>
            <p>
              I came to McGill through CEGEP at Dawson College, where I studied
              Mathematics and Computer Science. I like understanding a system
              well enough to build and debug it myself.
            </p>
          </div>
          <div>
            <span className="background-label">Apple</span>
            <h3>Product Specialist</h3>
            <p>
              On the retail floor, I became a technical resource for colleagues.
              I explain product capabilities in plain language and help
              customers understand why a system behaves the way it does.
            </p>
          </div>
          <div>
            <span className="background-label">FIRST Robotics</span>
            <h3>Teaching &amp; team leadership</h3>
            <p>
              I taught programming to students with no prior experience, then
              helped them build robot controls. Leading a team meant delegating
              work, reviewing pull requests and testing together.
            </p>
          </div>
        </div>
        <div className="skills-line">
          <span>Tools I work with</span>
          <p>C/C++ · Rust · Java · TypeScript · Python · Swift · Git · Linux</p>
        </div>
        <p className="languages">
          English &amp; French · Italian &amp; Spanish conversational
        </p>
      </div>
    </section>
  );
}
