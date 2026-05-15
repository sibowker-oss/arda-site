/* eslint-disable */
// Homepage sections · v3 (Static palette: navy + lime + alert magenta).
// Composed by app.jsx into <Page active="home">.

function Hero() {
  return (
    <section className="hero bg-pattern">
      <div className="container-wide">
        <div className="hero-grid">
          <div className="hero-copy">
            <div className="eyebrow eyebrow-lime rise">Sovereign AI · for regulated enterprises</div>
            <h1 className="display rise rise-2" style={{ marginTop: 22 }}>
              AI you can defend<br />
              <span className="accent">to your regulator.</span>
            </h1>
            <p className="lead rise rise-3" style={{ marginTop: 28, maxWidth: "60ch" }}>
              Arda is the sovereign AI platform regulated enterprises own, operate and govern — inside their own trust boundary, with the audit trail their CISO and their regulator expect.
            </p>
            <div className="hero-cta rise rise-4">
              <a href="contact.html" className="btn btn-primary btn-lg">Book an architecture review<span aria-hidden>→</span></a>
              <a href="platform.html" className="btn btn-ghost btn-lg">See the architecture</a>
            </div>
            <div className="hero-foot rise rise-4">
              <strong>Sovereignty here</strong> means control, operation and governance — not location.
            </div>
          </div>
          <aside className="hero-frame rise rise-3" aria-label="Inside the trust boundary">
            <div className="hero-frame-head">
              <span className="mono small" style={{ color: "var(--text-3)" }}>arda://trust-boundary</span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "var(--arda-lime-500)" }}>
                <span className="dot" /> <span className="tiny mono">live</span>
              </span>
            </div>
            <div className="hero-frame-body">
              <div className="boundary">
                <div className="boundary-label">your trust boundary</div>
                <div className="boundary-grid">
                  <div className="b-cell">
                    <div className="b-cell-label">core</div>
                    <div className="b-cell-title">Chat</div>
                    <div className="b-cell-meta">28 users · prompts retained 0d</div>
                  </div>
                  <div className="b-cell">
                    <div className="b-cell-label">code</div>
                    <div className="b-cell-title">IDE assistant</div>
                    <div className="b-cell-meta">repo-aware · no egress</div>
                  </div>
                  <div className="b-cell">
                    <div className="b-cell-label">index</div>
                    <div className="b-cell-title">Enterprise search</div>
                    <div className="b-cell-meta">RBAC-bound retrieval</div>
                  </div>
                  <div className="b-cell">
                    <div className="b-cell-label">audit</div>
                    <div className="b-cell-title">Immutable log</div>
                    <div className="b-cell-meta">AESCSF · CPS 234</div>
                  </div>
                </div>
                <div className="boundary-foot">
                  <span className="tiny mono" style={{ color: "var(--text-3)" }}>egress</span>
                  <span className="bar"><span className="bar-fill" style={{ width: "0%" }} /></span>
                  <span className="tiny mono" style={{ color: "var(--arda-lime-500)" }}>0 / 0</span>
                </div>
              </div>
              <div className="outside">
                <span className="outside-mark" aria-hidden>×</span>
                <span>outside · hyperscaler frontier model APIs</span>
              </div>
            </div>
          </aside>
        </div>
      </div>
      <style>{`
        .hero { padding-top: clamp(64px, 7vw, 104px); padding-bottom: clamp(64px, 7vw, 104px); }
        .hero-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: clamp(32px, 4vw, 72px);
          align-items: center;
        }
        @media (max-width: 1000px) { .hero-grid { grid-template-columns: 1fr; } }
        .hero-cta { margin-top: 36px; display: flex; gap: 14px; flex-wrap: wrap; }
        .hero-foot {
          margin-top: 48px;
          padding-top: 22px;
          border-top: 1px solid var(--hairline);
          font-size: 14px;
          color: var(--text-2);
          max-width: 560px;
        }
        .hero-foot strong { color: var(--text); font-weight: 700; }

        .hero-frame {
          background: var(--bg-card);
          border: 1px solid var(--border-strong);
          border-radius: var(--r-lg);
          overflow: hidden;
        }
        [data-theme="dark"] .hero-frame { box-shadow: var(--shadow-lg); }
        [data-theme="light"] .hero-frame { box-shadow: var(--shadow-md); }
        .hero-frame-head {
          display: flex; align-items: center; justify-content: space-between;
          padding: 12px 16px;
          border-bottom: 1px solid var(--hairline);
          gap: 8px;
        }
        .hero-frame-body { padding: 24px; }
        .boundary {
          border: 1.5px dashed rgba(199,242,63,0.45);
          border-radius: var(--r-md);
          padding: 24px 18px 16px;
          position: relative;
          background: rgba(199,242,63,0.04);
        }
        .boundary-label {
          position: absolute; top: -9px; left: 18px;
          background: var(--bg-card);
          padding: 0 10px;
          font-family: var(--font-body);
          font-size: 11px; font-weight: 700;
          color: var(--arda-lime-500);
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }
        .boundary-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 14px; }
        .b-cell {
          padding: 14px;
          background: var(--bg-2);
          border: 1px solid var(--border);
          border-radius: var(--r-sm);
          min-height: 96px;
        }
        .b-cell-label {
          font-family: var(--font-mono);
          font-size: 10px; letter-spacing: 0.20em;
          text-transform: uppercase; color: var(--arda-lime-500);
        }
        .b-cell-title { font-size: 15px; font-weight: 700; margin-top: 6px; color: var(--text); }
        .b-cell-meta { font-size: 12px; color: var(--text-3); margin-top: 4px; font-family: var(--font-mono); }
        .boundary-foot { display: flex; align-items: center; gap: 10px; padding-top: 4px; }
        .bar { flex: 1; height: 4px; background: var(--bg-2); border-radius: 2px; overflow: hidden; }
        .bar-fill { display: block; height: 100%; background: var(--arda-lime-500); }
        .outside {
          margin-top: 18px;
          padding: 12px 14px;
          display: flex; align-items: center; gap: 12px;
          border: 1px dashed rgba(255,51,102,0.40);
          border-radius: var(--r-sm);
          background: rgba(255,51,102,0.04);
          font-size: 13px; color: var(--text-2);
        }
        .outside-mark {
          width: 22px; height: 22px; border-radius: 50%;
          background: rgba(255,51,102,0.18);
          color: var(--arda-alert-500);
          display: inline-flex; align-items: center; justify-content: center;
          font-family: var(--font-display); font-weight: 800; font-size: 16px; line-height: 1;
          flex: 0 0 auto;
        }
      `}</style>
    </section>
  );
}

function Vision() {
  return (
    <section className="vision">
      <div className="container">
        <div className="vision-grid">
          <div>
            <div className="section-label">Worldview · Layer 01</div>
          </div>
          <div>
            <h2 className="h-xl">
              Different workloads.<br />Different stacks.<br />
              <span className="accent">Sovereign by architecture, not aspiration.</span>
            </h2>
            <p className="lead" style={{ marginTop: 28 }}>
              Day-to-day productivity AI will run where it makes sense — Microsoft, Google, Anthropic. Fast, cheap, and good enough for the security model.
            </p>
            <p className="lead" style={{ marginTop: 16 }}>
              But the workloads regulated enterprises <em>cannot allow to fail</em> — the core processes, the most sensitive data, AI running at scale on regulated information — those cannot run there. Not because the contract is bad. Because the standard hyperscaler AI stack was not built to carry them.
            </p>
            <p className="lead" style={{ marginTop: 16 }}>
              Arda is the platform for that second tier. Whoever builds it gets to write the rules of regulated AI for the next decade.
            </p>
          </div>
        </div>
      </div>
      <style>{`
        .vision-grid { display: grid; grid-template-columns: 220px 1fr; gap: clamp(24px, 4vw, 72px); }
        @media (max-width: 900px) { .vision-grid { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  );
}

const OOG_ITEMS = [
  {
    n: "01",
    eyebrow: "Own",
    glyph: "O",
    title: "Custody, not access.",
    body: "Custody of the data, the model, and the audit trail. No prompt or response leaves the trust boundary. Vector indices, embeddings and weights stay inside.",
    proof: "Zero data egress · contractual and architectural.",
  },
  {
    n: "02",
    eyebrow: "Operate",
    glyph: "P",
    title: "Inside your environment.",
    body: "No new trust boundary. No new identity store. Plugs into your IdP, your RBAC, your SIEM. Operable by the platform team that runs the rest of the stack.",
    proof: "Same controls · same logs · same posture.",
  },
  {
    n: "03",
    eyebrow: "Govern",
    glyph: "G",
    title: "Evidence on demand.",
    body: "Every prompt, retrieval, tool call and output — logged and queryable. Aligned to the regulators the customer already answers to. Evidence pack producible in hours, not months.",
    proof: "AESCSF · CPS 234 / 230 · SOCI Act · SOC 2 Type II.",
  },
];

function OwnOperateGovern() {
  return (
    <section className="oog" id="own-operate-govern">
      <div className="container">
        <div className="section-head">
          <div className="section-label">The platform · Layer 02</div>
          <h2 className="h-xl">Own. Operate. Govern.</h2>
          <p className="lead">Three sub-claims, three proof points. The structural device the rest of this page is built on.</p>
        </div>
        <div className="oog-grid">
          {OOG_ITEMS.map(it => (
            <article className="oog-tile" key={it.n}>
              <div className="oog-rule">
                <span className="oog-num mono">{it.n}</span>
                <span className="oog-glyph" aria-hidden>{it.glyph}</span>
              </div>
              <div className="eyebrow eyebrow-lime">{it.eyebrow}</div>
              <h3 className="h-lg" style={{ marginTop: 6 }}>{it.title}</h3>
              <p className="body" style={{ fontSize: 15 }}>{it.body}</p>
              <div className="oog-proof mono">{it.proof}</div>
            </article>
          ))}
        </div>
      </div>
      <style>{`
        .oog-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
        @media (max-width: 900px) { .oog-grid { grid-template-columns: 1fr; } }
        .oog-tile {
          position: relative;
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--r-lg);
          padding: 32px 28px;
          display: flex; flex-direction: column; gap: 10px;
          min-height: 360px;
          transition: transform var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out);
        }
        .oog-tile:hover { transform: translateY(-2px); border-color: var(--border-strong); }
        [data-theme="light"] .oog-tile { box-shadow: var(--shadow-sm); }
        .oog-rule {
          display: flex; align-items: baseline; justify-content: space-between;
          padding-bottom: 18px; margin-bottom: 4px;
          border-bottom: 1px solid var(--border);
        }
        .oog-num { font-size: 12px; letter-spacing: 0.16em; color: var(--text-3); }
        .oog-glyph {
          font-family: var(--font-display);
          font-weight: 800; font-size: 92px; line-height: 0.85;
          letter-spacing: -0.05em;
          color: var(--arda-lime-500);
        }
        .oog-proof {
          margin-top: auto; padding-top: 18px;
          font-size: 12px; letter-spacing: 0.02em;
          color: var(--arda-lime-400);
          border-top: 1px solid var(--border);
        }
        [data-theme="light"] .oog-proof { color: var(--arda-lime-700); }
      `}</style>
    </section>
  );
}

const NODES = [
  { tag: "USR", name: "Any employee",  sub: "Web client · Arda Core" },
  { tag: "DEV", name: "Developer",     sub: "IDE plugin · Arda Code" },
  { tag: "IDX", name: "Vector store",  sub: "Encrypted index" },
  { tag: "OBS", name: "Logging & API", sub: "Audit · governance" },
  { tag: "GPU", name: "GPU pool",      sub: "Open-weight LLMs" },
  { tag: "IAM", name: "IdP & RBAC",    sub: "Okta · Entra · Ping" },
];

function BoundaryDiagram() {
  return (
    <section className="arch" id="architecture">
      <div className="container">
        <div className="section-head">
          <div className="section-label">Architecture · Layer 03</div>
          <h2 className="h-xl">Inside your trust boundary.</h2>
          <p className="lead">
            The whole platform sits inside the perimeter your security team already runs. No new boundary to defend. No data to repatriate later.
          </p>
        </div>

        <div className="arch-frame">
          <div className="arch-frame-lab">your trust boundary</div>
          <div className="arch-grid">
            {NODES.map(n => (
              <div className="arch-node" key={n.name}>
                <span className="arch-tag mono">{n.tag}</span>
                <b>{n.name}</b>
                <span className="arch-sub">{n.sub}</span>
              </div>
            ))}
          </div>
          <div className="arch-stamps">
            <span className="tag tag-accent"><span className="dot" />No data egress</span>
            <span className="tag tag-accent"><span className="dot" />No external API calls</span>
            <span className="tag tag-accent"><span className="dot" />No training on your data</span>
          </div>
        </div>

        <div className="arch-outside">
          <div className="arch-outside-mark" aria-hidden>×</div>
          <div>
            <b>Outside the boundary</b>
            <span>External LLM APIs · Public cloud AI · Third-party model training</span>
          </div>
        </div>
      </div>
      <style>{`
        .arch-frame {
          position: relative;
          padding: 36px 16px 24px;
        }
        .arch-frame::before {
          content: ""; position: absolute; inset: 14px;
          border: 1.5px dashed rgba(199,242,63,0.35);
          border-radius: var(--r-xl);
          background: rgba(199,242,63,0.04);
          pointer-events: none;
        }
        [data-theme="light"] .arch-frame::before { border-color: rgba(142,179,30,0.40); background: rgba(199,242,63,0.06); }
        .arch-frame-lab {
          position: absolute; top: 4px; left: 60px;
          padding: 0 12px; z-index: 1;
          background: var(--bg);
          font-family: var(--font-body);
          font-weight: 700; font-size: 12px;
          letter-spacing: var(--track-eyebrow); text-transform: uppercase;
          color: var(--arda-lime-500);
        }
        [data-theme="light"] .arch-frame-lab { color: var(--arda-lime-700); }
        .arch-grid {
          display: grid; grid-template-columns: repeat(6, 1fr); gap: 12px;
          padding: 8px;
          position: relative; z-index: 1;
        }
        @media (max-width: 1100px) { .arch-grid { grid-template-columns: repeat(3, 1fr); } }
        @media (max-width: 640px)  { .arch-grid { grid-template-columns: repeat(2, 1fr); } }
        .arch-node {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--r-md);
          padding: 16px 14px;
          display: flex; flex-direction: column; gap: 6px;
          min-height: 110px;
        }
        .arch-tag { font-size: 11px; font-weight: 700; letter-spacing: 0.18em; color: var(--text-3); }
        .arch-node b {
          font-family: var(--font-display);
          font-weight: 700; font-size: 15px; letter-spacing: -0.01em;
          color: var(--text);
        }
        .arch-sub { font-size: 12px; line-height: 1.35; color: var(--text-2); }
        .arch-stamps {
          display: flex; gap: 10px; flex-wrap: wrap;
          padding: 14px 8px 0;
          position: relative; z-index: 1;
        }
        .arch-outside {
          margin-top: 28px;
          display: flex; gap: 18px; align-items: flex-start;
          padding-top: 24px;
          border-top: 1px solid var(--hairline);
        }
        .arch-outside-mark {
          width: 32px; height: 32px; border-radius: 50%;
          background: rgba(255,51,102,0.18);
          color: var(--arda-alert-500);
          display: flex; align-items: center; justify-content: center;
          font-family: var(--font-display);
          font-weight: 800; font-size: 22px; line-height: 1;
          flex: 0 0 auto;
        }
        .arch-outside b { color: var(--arda-alert-500); font-weight: 700; display: block; margin-bottom: 4px; }
        .arch-outside span { font-size: 14px; color: var(--text-2); }
      `}</style>
    </section>
  );
}

const PRODUCTS = [
  {
    n: "01",
    name: "Arda Core",
    role: "Sovereign chat",
    blurb: "Sanctioned scratchpad for sensitive, ad-hoc queries. The only place a regulated user can paste internal data without leaving the boundary.",
    href: "core.html",
    detail: ["In-boundary chat UI", "IdP-bound RBAC", "Audit-grade prompt log", "DLP and PII redaction", "Zero retention by default"],
  },
  {
    n: "02",
    name: "Arda Code",
    role: "Sovereign coding assistant",
    blurb: "IDE-integrated for engineers in regulated codebases. Source code never leaves your environment. The energy-networks beachhead.",
    href: "code.html",
    detail: ["IDE plugins", "In-boundary completion & review", "Repo-aware retrieval", "No code or prompts leave", "Audit trail per developer"],
  },
  {
    n: "03",
    name: "Arda Index",
    role: "Sovereign knowledge & search",
    blurb: "Access-aware RAG over internal docs and systems. Permission-bound retrieval, cited answers, nothing indexed outside the boundary.",
    href: "index-product.html",
    detail: ["Access-aware RAG", "Permission-bound retrieval", "Cited answers with sources", "Connectors for SharePoint / Confluence / Drive", "Re-index inside the boundary"],
  },
];

function Products() {
  return (
    <section className="products">
      <div className="container">
        <div className="section-head">
          <div className="section-label">Products · Layer 04</div>
          <h2 className="h-xl">One platform.<br />Three sovereign workloads.</h2>
          <p className="lead">
            All three products inherit identity, policy, custody and audit from the Arda sovereign platform. A fourth — Arda Graph — is on the near-term roadmap.
          </p>
        </div>
        <div className="grid-3">
          {PRODUCTS.map(p => (
            <a key={p.n} href={p.href} className="card product-card">
              <div className="card-header">
                <span className="card-num">{p.n}</span>
                <span className="eyebrow eyebrow-lime">{p.name}</span>
              </div>
              <h3 className="h-lg" style={{ marginBottom: 8 }}>{p.role}.</h3>
              <p className="body" style={{ fontSize: 14.5, marginBottom: 20 }}>{p.blurb}</p>
              <ul className="capabilities">
                {p.detail.map((d, i) => <li key={i}>{d}</li>)}
              </ul>
              <span className="link-arrow" style={{ marginTop: 22, display: "inline-flex" }}>
                Read the {p.name} brief <span className="arr">→</span>
              </span>
            </a>
          ))}
        </div>
        <div className="roadmap-note">
          <span className="tag">Next · Roadmap</span>
          <span><strong style={{ color: "var(--text)" }}>Arda Graph.</strong> Agent and tool orchestration with the same custody, identity and audit guarantees. Forward-looking until v1 ships.</span>
        </div>
      </div>
      <style>{`
        .product-card { display: block; }
        .capabilities { list-style: none; padding: 0; margin: 0; display: grid; gap: 6px; }
        .capabilities li { font-size: 13.5px; color: var(--text-2); padding-left: 14px; position: relative; }
        .capabilities li::before { content: "·"; position: absolute; left: 4px; color: var(--arda-lime-500); font-weight: 700; }
        .roadmap-note {
          margin-top: clamp(28px, 3vw, 48px);
          padding: 18px 22px;
          border: 1px dashed var(--border-strong);
          border-radius: var(--r-md);
          display: flex; gap: 18px; align-items: center; flex-wrap: wrap;
          font-size: 14px; color: var(--text-2);
        }
      `}</style>
    </section>
  );
}

function Industries() {
  return (
    <section className="industries">
      <div className="container">
        <div className="section-head">
          <div className="section-label">Industries · Where Arda lives</div>
          <h2 className="h-xl">For the workloads regulators<br />already have an opinion about.</h2>
          <p className="lead">
            We name the regulator and the workflow because that's what makes us sound like we already work with you. Energy networks first. Financial services second. Other critical infrastructure as the wedge expands.
          </p>
        </div>

        <div className="industries-grid">
          <a href="industry-energy.html" className="industry-card">
            <div className="industry-card-head">
              <span className="card-num">01</span>
              <span className="eyebrow eyebrow-lime">Primary segment</span>
            </div>
            <h3 className="h-lg" style={{ marginTop: 14 }}>Energy networks (T&D)</h3>
            <p className="body" style={{ fontSize: 15, marginTop: 12 }}>
              Transmission and distribution operators running AESCSF-aligned cyber programs. AI cannot mean another data path out of the boundary — and the dispatch deck cannot become a hyperscaler tenant overnight.
            </p>
            <div className="industry-meta">
              <span>AESCSF</span><span>·</span><span>SOCI Act</span><span>·</span><span>AEMO-aligned</span>
            </div>
            <span className="link-arrow" style={{ marginTop: 22, display: "inline-flex" }}>
              See the Energy brief <span className="arr">→</span>
            </span>
          </a>
          <a href="industry-fsi.html" className="industry-card">
            <div className="industry-card-head">
              <span className="card-num">02</span>
              <span className="eyebrow eyebrow-lime">Secondary segment</span>
            </div>
            <h3 className="h-lg" style={{ marginTop: 14 }}>Banks, insurers, super</h3>
            <p className="body" style={{ fontSize: 15, marginTop: 12 }}>
              APRA-regulated entities under CPS 234 and CPS 230. Underwriting models, claims handling, customer-facing assist — every prompt, every retrieval, every output answerable to operational risk and to the regulator.
            </p>
            <div className="industry-meta">
              <span>APRA CPS 234 / 230</span><span>·</span><span>SOC 2 Type II</span><span>·</span><span>ISO 27001</span>
            </div>
            <span className="link-arrow" style={{ marginTop: 22, display: "inline-flex" }}>
              See the FSI brief <span className="arr">→</span>
            </span>
          </a>
        </div>

        <div className="adjacency">
          <span className="tag">Adjacency</span>
          <div>
            <strong style={{ color: "var(--text)" }}>Other critical infrastructure under the SOCI Act.</strong> Telecommunications, water, ports, defence-adjacent.
            The same architecture; the same evidence pack; a different regulator on the cover sheet. <a href="contact.html" className="link-arrow">Talk to us about your sector <span className="arr">→</span></a>
          </div>
        </div>
      </div>
      <style>{`
        .industries-grid { display: grid; grid-template-columns: 1fr 1fr; gap: clamp(20px, 2vw, 28px); }
        @media (max-width: 900px) { .industries-grid { grid-template-columns: 1fr; } }
        .industry-card {
          display: block;
          padding: clamp(28px, 2.6vw, 36px);
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--r-lg);
          transition: border-color var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out);
        }
        .industry-card:hover { border-color: var(--arda-lime-500); transform: translateY(-2px); }
        .industry-card-head { display: flex; gap: 18px; align-items: baseline; }
        .industry-meta {
          margin-top: 20px;
          font-family: var(--font-mono);
          font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase;
          color: var(--text-3);
          display: flex; gap: 8px; flex-wrap: wrap; align-items: center;
        }
        .adjacency {
          margin-top: clamp(28px, 3vw, 40px);
          display: flex; gap: 18px; align-items: flex-start; flex-wrap: wrap;
          padding: 22px 0 0;
          border-top: 1px solid var(--hairline);
          font-size: 14.5px; color: var(--text-2); line-height: 1.55;
        }
        .adjacency .tag { flex-shrink: 0; }
      `}</style>
    </section>
  );
}

const STATS = [
  { num: "Zero",  suf: "",  lab: "Data egress",                 src: "Contractual & architectural." },
  { num: "3 + 1", suf: "",  lab: "Regulator alignments",        src: "AESCSF · CPS 234 / 230 · SOCI + SOC 2." },
  { num: "<90",   suf: "d", lab: "Signed to live",              src: "Customer-environment deployment target." },
  { num: "100",   suf: "%", lab: "Open-weight models supported", src: "Llama, Mistral, Qwen on your GPUs." },
];

function StatsBand() {
  return (
    <section className="stats">
      <div className="container">
        <div className="section-head" style={{ textAlign: "center", margin: "0 auto clamp(40px,5vw,64px)", justifyItems: "center" }}>
          <div className="section-label" style={{ justifySelf: "center" }}>Proof · the receipts</div>
          <h2 className="h-xl">Compliance-aligned. Customer-backed.<br />Audit-ready.</h2>
          <p className="lead" style={{ margin: "0 auto" }}>
            Numbers we can defend. Certifications we can footnote. Alignments we can show on demand.
          </p>
        </div>
        <div className="stats-grid">
          {STATS.map(s => (
            <div className="stat" key={s.lab}>
              <div className="stat-num">{s.num}{s.suf && <small>{s.suf}</small>}</div>
              <div className="stat-lab">{s.lab}</div>
              <div className="stat-src mono">{s.src}</div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .stats-grid {
          display: grid; grid-template-columns: repeat(4, 1fr); gap: 0;
          border-top: 1px solid var(--hairline);
          border-bottom: 1px solid var(--hairline);
        }
        @media (max-width: 900px) { .stats-grid { grid-template-columns: repeat(2, 1fr); } }
        .stat { padding: 36px 24px; border-right: 1px solid var(--hairline); }
        .stat:last-child { border-right: 0; }
        @media (max-width: 900px) {
          .stat:nth-child(2n) { border-right: 0; }
          .stat:nth-child(1), .stat:nth-child(2) { border-bottom: 1px solid var(--hairline); }
        }
        .stat-num {
          font-family: var(--font-display);
          font-weight: 800; font-size: clamp(56px, 6.5vw, 84px);
          line-height: 1; letter-spacing: -0.04em;
          color: var(--arda-lime-500);
        }
        .stat-num small { font-size: 0.42em; opacity: 0.55; font-weight: 700; }
        .stat-lab { margin-top: 14px; font-size: 13px; line-height: 1.3; font-weight: 700; color: var(--text); letter-spacing: 0.02em; }
        .stat-src { margin-top: 8px; font-size: 11px; color: var(--text-3); }
      `}</style>
    </section>
  );
}

function Persona() {
  return (
    <section className="persona">
      <div className="container">
        <div className="section-head">
          <div className="section-label">Audience · same hierarchy, three angles</div>
          <h2 className="h-xl">What each persona<br />actually hears.</h2>
          <p className="lead">
            The CIO buys it. The Champion pulls for it. The Gatekeeper has to clear it. Same architecture, three sets of words.
          </p>
        </div>
        <div className="grid-3">
          <article className="card">
            <div className="card-header"><span className="card-num">01</span><span className="eyebrow eyebrow-lime">CIO · Buyer</span></div>
            <h3 className="h-lg">Defendable AI.</h3>
            <p className="body" style={{ fontSize: 14.5, marginTop: 12 }}>"AI you can defend to your regulator." Lead with risk and control. Reinforce with predictable cost. Reference: peer adopters in the same sector.</p>
          </article>
          <article className="card">
            <div className="card-header"><span className="card-num">02</span><span className="eyebrow eyebrow-lime">Champion · Head of AI</span></div>
            <h3 className="h-lg">AI without trade-off.</h3>
            <p className="body" style={{ fontSize: 14.5, marginTop: 12 }}>"The productivity story your CISO will sign." Lead with what becomes possible. Reinforce with time-to-value. Reference: sanctioned use cases that ship.</p>
          </article>
          <article className="card">
            <div className="card-header"><span className="card-num">03</span><span className="eyebrow eyebrow-lime">Gatekeeper · CISO</span></div>
            <h3 className="h-lg">Inside the boundary.</h3>
            <p className="body" style={{ fontSize: 14.5, marginTop: 12 }}>"Audit-grade AI inside your trust boundary." Lead with custody, lineage, evidence. Reinforce with named regulator alignments. Reference: control-set, not capability list.</p>
          </article>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="cta">
      <div className="container">
        <div className="cta-card bg-pattern">
          <div className="section-label">Closing</div>
          <h2 className="display" style={{ marginTop: 18, fontSize: "clamp(40px, 5.5vw, 80px)" }}>
            Adopt AI without changing<br />your <span className="accent">security posture.</span>
          </h2>
          <p className="lead" style={{ marginTop: 24, maxWidth: "60ch" }}>
            Twenty-five minutes. We walk your team through the architecture, the deployment options, and how a peer in your sector is using Arda inside their boundary.
          </p>
          <div className="cta-actions">
            <a href="contact.html" className="btn btn-primary btn-lg">Book an architecture review<span aria-hidden>→</span></a>
            <a href="platform.html" className="btn btn-ghost btn-lg">Read the platform brief</a>
          </div>
          <div className="cta-foot mono">
            Inside the boundary. Audit-grade. Sovereign by design.
          </div>
        </div>
      </div>
      <style>{`
        .cta-card {
          padding: clamp(56px, 7vw, 104px) clamp(28px, 4vw, 72px);
          border: 1px solid var(--border-strong);
          border-radius: var(--r-lg);
          background: var(--bg-2);
        }
        .cta-actions { margin-top: 36px; display: flex; gap: 14px; flex-wrap: wrap; }
        .cta-foot {
          margin-top: 56px; padding-top: 20px;
          border-top: 1px solid var(--hairline);
          color: var(--arda-lime-500);
          font-size: 12px; letter-spacing: 0.04em; text-transform: uppercase;
        }
      `}</style>
    </section>
  );
}

Object.assign(window, { Hero, Vision, OwnOperateGovern, BoundaryDiagram, Products, Industries, StatsBand, Persona, CTA });
