// Header.jsx · v3 — real ARDA wordmark, lime + navy palette
function Header({ theme = "dark", onTheme }) {
  return (
    <header className="ms-header" data-theme={theme}>
      <div className="ms-header-inner">
        <a className="ms-brand" href="#top" aria-label="Arda · home">
          <img src="assets/arda-logo-white.png" alt="Arda" />
        </a>
        <nav className="ms-nav">
          <a href="#platform" className="active">Platform</a>
          <a href="#architecture">Architecture</a>
          <a href="#sectors">Sectors</a>
          <a href="#evidence">Evidence</a>
          <a href="#customers">Customers</a>
        </nav>
        <div className="ms-actions">
          <button className="ms-theme" onClick={() => onTheme(theme === "dark" ? "light" : "dark")} aria-label="Toggle theme">
            {theme === "dark" ? "Light" : "Dark"}
          </button>
          <a className="btn btn-secondary" href="#evidence">Evidence pack</a>
          <a className="btn btn-primary" href="#cta">Book a deep-dive</a>
        </div>
      </div>
      <div className="ms-header-sub">
        <span><b>Sovereign AI</b> · regulated enterprise · own · operate · govern</span>
        <span className="meta">SOC 2 Type II · ISO 27001 · v2026.05</span>
      </div>
    </header>
  );
}

window.Header = Header;
