// Footer.jsx · v2 — wordmark only
function Footer() {
  return (
    <footer className="ms-footer">
      <div className="ms-footer-inner">
        <div className="ms-footer-brand">
          <div className="ms-brand">
            <span className="ms-brand-mark" aria-hidden="true"><span /><span /><span /></span>
            <b>arda</b>
          </div>
          <p>Sovereign AI for regulated enterprise. Own. Operate. Govern.</p>
        </div>
        <div className="ms-footer-cols">
          <div>
            <div className="t-eyebrow">Platform</div>
            <a href="#">Arda Core</a>
            <a href="#">Arda Code</a>
            <a href="#">Arda Index</a>
            <a href="#">Arda Graph</a>
          </div>
          <div>
            <div className="t-eyebrow">Sectors</div>
            <a href="#">Banking &amp; insurance</a>
            <a href="#">Energy &amp; utilities</a>
            <a href="#">Government</a>
            <a href="#">Healthcare</a>
          </div>
          <div>
            <div className="t-eyebrow">Reference</div>
            <a href="#">Architecture POV</a>
            <a href="#">Deployment options</a>
            <a href="#">Security white-paper</a>
            <a href="#">Audit checklist</a>
          </div>
          <div>
            <div className="t-eyebrow">Company</div>
            <a href="#">About Arda</a>
            <a href="#">Customers</a>
            <a href="#">Careers</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </div>
      <div className="ms-footer-base">
        <span>© 2026 Arda Computing. All rights reserved.</span>
        <span className="meta">SOC 2 Type II · ISO 27001 · ardacomputing.com</span>
      </div>
    </footer>
  );
}

window.Footer = Footer;
