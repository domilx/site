const TABS = [
  { label: "Home", href: "#top", active: true },
  { label: "Sets", href: "#sets" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];


export default function NavTabs() {
  return (
    <header id="top">
      <nav className="tabbar" aria-label="Main">
        <div className="shell">
          <div className="tabbar-row">
            <a href="#top" className="tab" aria-label="domidev home">
              <span className="tab-mark" aria-hidden="true" />
            </a>
            {TABS.map((t) => (
              <a
                key={t.label}
                href={t.href}
                className={`tab${t.active ? " is-active" : ""}`}
              >
                {t.label}
              </a>
            ))}
          </div>
        </div>
      </nav>
      <div className="subbar">
        <div className="subbar-row">
          <span className="subbar-place">montréal</span>
        </div>
      </div>
    </header>
  );
}
