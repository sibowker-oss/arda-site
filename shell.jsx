/* eslint-disable */
// Shared layout components for arda — nav, footer, brand, page wrapper
// Loaded as Babel script. Exposes: BrandMark, Nav, Footer, Page, applyTheme.

const ARDA_NAV = [
  { label: "Platform", href: "platform.html" },
  { label: "Products", href: "core.html", children: [
    { label: "Arda Core", desc: "Sovereign chat", href: "core.html" },
    { label: "Arda Code", desc: "Sovereign coding assistant", href: "code.html" },
    { label: "Arda Index", desc: "Sovereign knowledge & search", href: "index-product.html" },
  ]},
  { label: "Industries", href: "industry-energy.html", children: [
    { label: "Energy networks", desc: "Transmission & distribution", href: "industry-energy.html" },
    { label: "Financial services", desc: "Banks, insurers, super", href: "industry-fsi.html" },
  ]},
  { label: "About", href: "about.html" },
  { label: "Contact", href: "contact.html" },
];

function BrandMark({ size = 22 }) {
  // Compass / target glyph, matches the deck's small lockup mark
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="10.25" stroke="currentColor" strokeWidth="1.25" />
      <circle cx="12" cy="12" r="1.6" fill="currentColor" />
      <path d="M12 2.5V6 M12 18V21.5 M2.5 12H6 M18 12H21.5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
    </svg>
  );
}

function Brand({ href = "index.html" }) {
  return (
    <a href={href} className="brand" aria-label="Arda — home">
      <span className="brand-mark"><BrandMark /></span>
      <span>Arda</span>
    </a>
  );
}

function NavLinks({ active }) {
  const [open, setOpen] = React.useState(null);
  return (
    <div className="nav-links" onMouseLeave={() => setOpen(null)}>
      {ARDA_NAV.map((item) => {
        const isActive = active === item.label.toLowerCase();
        if (item.children) {
          return (
            <div
              key={item.label}
              className="nav-item-wrap"
              onMouseEnter={() => setOpen(item.label)}
              style={{ position: "relative" }}
            >
              <a href={item.href} className={isActive ? "active" : ""} style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
                {item.label}
                <svg width="9" height="9" viewBox="0 0 10 10" style={{ opacity: 0.6 }}><path d="M2 3.5 L5 6.5 L8 3.5" stroke="currentColor" strokeWidth="1.3" fill="none" strokeLinecap="round" /></svg>
              </a>
              {open === item.label && (
                <div className="nav-dropdown">
                  {item.children.map((c) => (
                    <a key={c.label} href={c.href} className="nav-dropdown-item">
                      <div style={{ fontWeight: 500, color: "var(--text)" }}>{c.label}</div>
                      <div className="small" style={{ marginTop: 2 }}>{c.desc}</div>
                    </a>
                  ))}
                </div>
              )}
            </div>
          );
        }
        return (
          <a key={item.label} href={item.href} className={isActive ? "active" : ""}>
            {item.label}
          </a>
        );
      })}
    </div>
  );
}

function Nav({ active }) {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <Brand />
        <NavLinks active={active} />
        <div className="nav-cta">
          <a href="contact.html" className="btn btn-ghost" style={{ padding: "9px 16px", fontSize: 14 }}>
            Talk to Arda
          </a>
        </div>
      </div>
      <style>{`
        .nav-dropdown {
          position: absolute; top: calc(100% + 12px); left: -16px;
          min-width: 320px;
          background: var(--bg-2);
          border: 1px solid var(--border-strong);
          border-radius: 4px;
          padding: 10px;
          display: grid; gap: 2px;
          box-shadow: var(--shadow-lg);
          animation: rise 180ms ease both;
        }
        .nav-dropdown-item {
          padding: 12px 14px;
          border-radius: 3px;
          color: var(--text-2);
          transition: background 160ms ease;
        }
        .nav-dropdown-item:hover { background: color-mix(in oklab, var(--accent) 8%, transparent); }
      `}</style>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container-wide">
        <div className="footer-grid">
          <div className="footer-col">
            <a href="index.html" className="brand" style={{ marginBottom: 18, display: "inline-flex" }}>
              <span className="brand-mark"><BrandMark /></span>
              <span>Arda</span>
            </a>
            <p className="footer-boilerplate">
              Arda is the sovereign AI platform regulated enterprises Own, Operate and Govern — so they can adopt AI without changing their security posture.
            </p>
          </div>
          <div className="footer-col">
            <h6>Platform</h6>
            <ul>
              <li><a href="platform.html">Sovereign architecture</a></li>
              <li><a href="platform.html#deployment">Deployment options</a></li>
              <li><a href="platform.html#governance">Audit & governance</a></li>
              <li><a href="platform.html#security">Security posture</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h6>Products</h6>
            <ul>
              <li><a href="core.html">Arda Core — chat</a></li>
              <li><a href="code.html">Arda Code — coding</a></li>
              <li><a href="index-product.html">Arda Index — search</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h6>Company</h6>
            <ul>
              <li><a href="industry-energy.html">Energy networks</a></li>
              <li><a href="industry-fsi.html">Financial services</a></li>
              <li><a href="about.html">About Arda</a></li>
              <li><a href="contact.html">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-meta">
          <span>© 2026 Arda Technologies</span>
          <span>Sydney · Melbourne</span>
          <span>AESCSF · APRA CPS 234 / 230 · SOCI Act · SOC 2 Type II</span>
          <span style={{ marginLeft: "auto" }}>Inside the boundary. Audit-grade. Sovereign by design.</span>
        </div>
      </div>
    </footer>
  );
}

// ---- Theme / density / hero variant — read from #__arda_state script tag, persist via tweaks-panel host -----
function readARDAState() {
  try {
    const el = document.getElementById("__arda_state");
    if (!el) return {};
    return JSON.parse(el.textContent || "{}");
  } catch (e) { return {}; }
}

function applyTheme() {
  const s = readARDAState();
  const theme = s.theme || "dark";
  const density = s.density || "default";
  document.documentElement.setAttribute("data-theme", theme);
  document.documentElement.setAttribute("data-density", density);
}

function Page({ active, children }) {
  React.useEffect(() => { applyTheme(); }, []);
  return (
    <>
      <Nav active={active} />
      <main>{children}</main>
      <Footer />
    </>
  );
}

Object.assign(window, { BrandMark, Brand, Nav, Footer, Page, applyTheme, ARDA_NAV });
