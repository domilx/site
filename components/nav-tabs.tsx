const TABS = [
  { label: "Home", href: "#top" },
  { label: "Work", href: "#work" },
  { label: "Background", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function NavTabs() {
  return (
    <header id="top">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <nav className="tabbar" aria-label="Main">
        <div className="shell">
          <div className="tabbar-row">
            <a href="#top" className="tab" aria-label="domidev home">
              <span className="tab-mark" aria-hidden="true" />
            </a>
            {TABS.map((tab) => (
              <a key={tab.label} href={tab.href} className="tab">
                {tab.label}
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
