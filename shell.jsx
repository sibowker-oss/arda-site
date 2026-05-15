/* eslint-disable */
// Shared layout components for Arda — nav, footer, page wrapper.
// Loaded as a Babel script. Exposes: Brand, Nav, Footer, Page, applyTheme.
// v3: tweaks panel removed, ARDA wordmark PNG replaces the inline SVG mark.

const ARDA_NAV = [
  { label: "Platform", href: "platform.html" },
  { label: "Products", href: "core.html", children: [
    { label: "Arda Core",  desc: "Sovereign chat",                    href: "core.html" },
    { label: "Arda Code",  desc: "Sovereign coding assistant",        href: "code.html" },
    { label: "Arda Index", desc: "Sovereign knowledge & search",      href: "index-product.html" },
  ]},
  { label: "Industries", href: "industry-energy.html", children: [
    { label: "Energy networks",       desc: "Transmission & distribution", href: "industry-energy.html" },
    { label: "Financial services",    desc: "Banks, insurers, super",      href: "industry-fsi.html" },
  ]},
  { label: "About",   href: "about.html" },
  { label: "Contact", href: "contact.html" },
];

function Brand({ href = "index.html" }) {
  return (
    <a href={href} className="brand" aria-label="Arda — home">
      <img src="design-system/assets/arda-logo-white.png" alt="Arda" />
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
                <svg width="9" height="9" viewBox="0 0 10 10" style={{ opacity: 0.6 }} aria-hidden="true">
                  <path d="M2 3.5 L5 6.5 L8 3.5" stroke="currentColor" strokeWidth="1.3" fill="none" strokeLinecap="round" />
                </svg>
              </a>
              {open === item.label && (
                <div className="nav-dropdown">
                  {item.children.map((c) => (
                    <a key={c.label} href={c.href} className="nav-dropdown-item">
                      <div style={{ fontWeight: 700, color: "var(--text)", fontSize: 14 }}>{c.label}</div>
                      <div className="small" style={{ marginTop: 2, fontSize: 13 }}>{c.desc}</div>
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
          <a href="contact.html" className="btn btn-primary" style={{ padding: "10px 18px", fontSize: 13 }}>
            Book an architecture review
          </a>
        </div>
      </div>
      <style>{`
        .nav-dropdown {
          position: absolute; top: calc(100% + 14px); left: -16px;
          min-width: 320px;
          background: var(--arda-navy-800);
          border: 1px solid var(--rule-on-dark-strong);
          border-radius: var(--r-lg);
          padding: 10px;
          display: grid; gap: 2px;
          box-shadow: var(--shadow-lg);
          animation: rise 180ms var(--ease-out) both;
        }
        [data-theme="light"] .nav-dropdown {
          background: #fff;
          border-color: var(--rule-on-light-strong);
        }
        .nav-dropdown-item {
          padding: 12px 14px;
          border-radius: var(--r-sm);
          color: var(--text-2);
          transition: background 160ms var(--ease-out);
        }
        .nav-dropdown-item:hover {
          background: rgba(199,242,63,0.08);
        }
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
              <img src="design-system/assets/arda-logo-white.png" alt="Arda" />
            </a>
            <p className="footer-boilerplate">
              Arda is the sovereign AI platform regulated enterprises own, operate and govern — inside their own trust boundary, with the audit trail their CISO and their regulator expect.
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
          <span>© 2026 Arda Computing</span>
          <span>Sydney · Melbourne</span>
          <span>AESCSF · APRA CPS 234 / 230 · SOCI Act · SOC 2 Type II</span>
          <span style={{ marginLeft: "auto" }}>Inside the boundary. Audit-grade. Sovereign by design.</span>
        </div>
      </div>
    </footer>
  );
}

// ---- Theme bootstrap — v3 is dark by default. Light theme available via [data-theme="light"] on <html>. ----
function applyTheme() {
  if (!document.documentElement.hasAttribute("data-theme")) {
    document.documentElement.setAttribute("data-theme", "dark");
  }
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

Object.assign(window, { Brand, Nav, Footer, Page, applyTheme, ARDA_NAV });
