// BoundaryDiagram.jsx · v2 — type-led nodes, no stock icons
const NODES = [
  { tag: "USR", name: "Any employee",  sub: "Web client · Arda Core" },
  { tag: "DEV", name: "Developer",     sub: "IDE plugin · Arda Code" },
  { tag: "IDX", name: "Vector store",  sub: "Encrypted index" },
  { tag: "OBS", name: "Logging & API", sub: "Audit · governance" },
  { tag: "GPU", name: "GPU pool",      sub: "Open-weight LLMs" },
  { tag: "IAM", name: "IdP & RBAC",    sub: "Okta · Entra · Ping" },
];

const OUTSIDE = [
  "External LLM APIs",
  "Public cloud AI",
  "Third-party model training",
];

function BoundaryDiagram() {
  return (
    <section className="ms-arch" id="architecture">
      <div className="ms-section-head">
        <div className="t-eyebrow t-eyebrow--blue">Architecture</div>
        <h2 className="ms-h2">Inside your trust boundary.</h2>
        <p className="ms-section-lead">The whole platform sits inside the perimeter your security team already runs. No new boundary to defend. No data to repatriate later.</p>
      </div>

      <div className="ms-arch-frame">
        <div className="ms-arch-frame-lab">Your trust boundary</div>
        <div className="ms-arch-grid">
          {NODES.map(n => (
            <div className="ms-arch-node" key={n.name}>
              <span className="ms-arch-tag">{n.tag}</span>
              <b>{n.name}</b>
              <span className="ms-arch-sub">{n.sub}</span>
            </div>
          ))}
        </div>
        <div className="ms-arch-stamps">
          <span className="pill pill-good"><span className="dot" />No data egress</span>
          <span className="pill pill-good"><span className="dot" />No external API calls</span>
          <span className="pill pill-good"><span className="dot" />No training on your data</span>
        </div>
      </div>

      <div className="ms-arch-outside">
        <div className="ms-arch-outside-mark" aria-hidden="true">×</div>
        <div>
          <b>Outside the boundary</b>
          <span>{OUTSIDE.join(" · ")}</span>
        </div>
      </div>
    </section>
  );
}

window.BoundaryDiagram = BoundaryDiagram;
