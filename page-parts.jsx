/* eslint-disable */
// Inner-page sections — used by platform, product, industry, about pages

function PageHero({ eyebrow, title, sub, meta }) {
  return (
    <section className="page-hero bg-pattern">
      <div className="container">
        <div className="eyebrow">{eyebrow}</div>
        <h1 className="display" style={{ marginTop: 18, maxWidth: "18ch" }}>{title}</h1>
        {sub && <p className="lead" style={{ marginTop: 24, maxWidth: "62ch" }}>{sub}</p>}
        {meta && (
          <div className="page-hero-meta">
            {meta.map((m, i) => (
              <div key={i} className="page-hero-meta-item">
                <div className="tiny mono" style={{ color: "var(--text-3)" }}>{m.label}</div>
                <div className="h-md" style={{ marginTop: 4 }}>{m.value}</div>
              </div>
            ))}
          </div>
        )}
      </div>
      <style>{`
        .page-hero { padding-top: clamp(48px, 6vw, 88px); padding-bottom: clamp(48px, 6vw, 96px); }
        .page-hero-meta {
          margin-top: clamp(36px, 4vw, 64px);
          display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
          gap: 24px;
          padding-top: 24px; border-top: 1px solid var(--hairline);
          max-width: 760px;
        }
      `}</style>
    </section>
  );
}

function CapabilityList({ title, items, accent = "var(--accent)" }) {
  return (
    <div>
      <div className="tiny mono" style={{ color: accent, letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: 16 }}>{title}</div>
      <ul className="proof-list">
        {items.map((row, i) => (
          <li key={i}><strong>{row[0]}</strong> {row[1]}</li>
        ))}
      </ul>
      <style>{`
        .proof-list { list-style: none; padding: 0; margin: 0; display: grid; gap: 10px; }
        .proof-list li { font-size: 14.5px; line-height: 1.55; color: var(--text-2); padding-left: 16px; position: relative; }
        .proof-list li::before { content: "▸"; position: absolute; left: 0; color: var(--accent); font-size: 11px; top: 4px; }
        .proof-list li strong { color: var(--text); font-weight: 600; }
      `}</style>
    </div>
  );
}

function SectionTitle({ eyebrow, title, sub, align = "left" }) {
  return (
    <div className="section-head" style={{ textAlign: align }}>
      <div className="section-label" style={{ justifySelf: align === "center" ? "center" : "start" }}>{eyebrow}</div>
      <h2 className="h-xl" dangerouslySetInnerHTML={{ __html: title }} />
      {sub && <p className="lead">{sub}</p>}
    </div>
  );
}

function DefendDeliver({ defend, deliver }) {
  return (
    <div className="grid-2" style={{ gap: "clamp(20px, 2.4vw, 36px)" }}>
      <div className="card">
        <div className="tiny mono" style={{ color: "var(--amber)", letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: 8 }}>What the buyer needs to defend</div>
        <h3 className="h-lg" style={{ marginBottom: 18 }}>Defensible, in their words.</h3>
        <ul className="proof-list">
          {defend.map((row, i) => (
            <li key={i}><strong>{row[0]}</strong> {row[1]}</li>
          ))}
        </ul>
      </div>
      <div className="card">
        <div className="tiny mono" style={{ color: "var(--accent)", letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: 8 }}>How Arda delivers it</div>
        <h3 className="h-lg" style={{ marginBottom: 18 }}>In the architecture, not the marketing.</h3>
        <ul className="proof-list">
          {deliver.map((row, i) => (
            <li key={i}><strong>{row[0]}</strong> {row[1]}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function PageCTA({ title = "Adopt AI without changing your security posture.", sub = "Twenty-five minutes. We walk your team through the architecture, the deployment options, and how a peer in your sector is using Arda.", primary = "Book an architecture review", secondary = "Read the platform brief", primaryHref = "../contact.html", secondaryHref = "../platform.html" }) {
  return (
    <section className="page-cta">
      <div className="container">
        <div className="hairline" style={{ marginBottom: 56 }} />
        <div className="page-cta-grid">
          <div>
            <h2 className="h-xl" style={{ maxWidth: "16ch" }}>{title}</h2>
          </div>
          <div>
            <p className="lead" style={{ maxWidth: "44ch" }}>{sub}</p>
            <div style={{ marginTop: 28, display: "flex", gap: 14, flexWrap: "wrap" }}>
              <a href={primaryHref} className="btn btn-primary">{primary}<span aria-hidden>→</span></a>
              <a href={secondaryHref} className="btn btn-ghost">{secondary}</a>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        .page-cta-grid { display: grid; grid-template-columns: 1fr 1fr; gap: clamp(28px, 4vw, 64px); align-items: start; }
        @media (max-width: 800px) { .page-cta-grid { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  );
}

function Breadcrumb({ items }) {
  return (
    <div className="breadcrumb tiny mono">
      {items.map((it, i) => (
        <React.Fragment key={i}>
          {i > 0 && <span className="bc-sep">/</span>}
          {it.href ? <a href={it.href}>{it.label}</a> : <span style={{ color: "var(--text)" }}>{it.label}</span>}
        </React.Fragment>
      ))}
      <style>{`
        .breadcrumb {
          color: var(--text-3);
          letter-spacing: 0.14em; text-transform: uppercase;
          padding: 28px 0 0; display: flex; gap: 10px; flex-wrap: wrap;
        }
        .breadcrumb a:hover { color: var(--text); }
        .breadcrumb .bc-sep { color: var(--text-3); opacity: 0.5; }
      `}</style>
    </div>
  );
}

Object.assign(window, { PageHero, CapabilityList, SectionTitle, DefendDeliver, PageCTA, Breadcrumb });
