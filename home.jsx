/* eslint-disable */
// Homepage sections — composed in index.html

const HEROES = {
  A: {
    eyebrow: "Sovereign AI · For regulated enterprises",
    title: "AI you can defend to your regulator.",
    sub: "Arda is the sovereign AI platform regulated enterprises Own, Operate and Govern — inside their own trust boundary, with the audit trail their CISO and regulator expect.",
  },
  B: {
    eyebrow: "Own. Operate. Govern.",
    title: "The AI you own. Operate. Govern.",
    sub: "For Australia's most regulated organisations — energy networks, banks, insurers — Arda runs the AI workloads that cannot leave your boundary.",
  },
  C: {
    eyebrow: "Inside the boundary",
    title: "Sovereign AI for the workloads that can't leave the boundary.",
    sub: "Chat, code and enterprise search inside your environment. Your data stays inside. Your model decisions stay yours. Your audit trail is ready when the regulator asks.",
  },
};

function Hero({ variant = "C" }) {
  const h = HEROES[variant] || HEROES.C;
  return (
    <section className="hero bg-pattern">
      <div className="container-wide">
        <div className="hero-grid">
          <div className="hero-copy">
            <div className="eyebrow rise">{h.eyebrow}</div>
            <h1 className="display rise rise-2" style={{ marginTop: 22 }}>{h.title}</h1>
            <p className="lead rise rise-3" style={{ marginTop: 28, maxWidth: "62ch" }}>{h.sub}</p>
            <div className="hero-cta rise rise-4">
              <a href="contact.html" className="btn btn-primary">Book an architecture review<span aria-hidden>→</span></a>
              <a href="platform.html" className="btn btn-ghost">See how it works</a>
            </div>
            <div className="hero-receipts rise rise-4">
              <div><span className="mono">01</span> Inside the boundary</div>
              <div><span className="mono">02</span> Audit-grade</div>
              <div><span className="mono">03</span> Sovereign by design</div>
            </div>
          </div>
          <aside className="hero-frame rise rise-3">
            <div className="hero-frame-head">
              <span className="mono small">arda://trust-boundary</span>
              <span className="dot" /> <span className="tiny mono">live</span>
            </div>
            <div className="hero-frame-body">
              <div className="boundary">
                <div className="boundary-label mono">your trust boundary</div>
                <div className="boundary-grid">
                  <div className="b-cell">
                    <div className="b-cell-label mono">core</div>
                    <div className="b-cell-title">Chat</div>
                    <div className="b-cell-meta">28 users · prompts retained 0d</div>
                  </div>
                  <div className="b-cell">
                    <div className="b-cell-label mono">code</div>
                    <div className="b-cell-title">IDE assistant</div>
                    <div className="b-cell-meta">repo-aware · no egress</div>
                  </div>
                  <div className="b-cell">
                    <div className="b-cell-label mono">index</div>
                    <div className="b-cell-title">Enterprise search</div>
                    <div className="b-cell-meta">RBAC-bound retrieval</div>
                  </div>
                  <div className="b-cell">
                    <div className="b-cell-label mono">audit</div>
                    <div className="b-cell-title">Immutable log</div>
                    <div className="b-cell-meta">AESCSF · CPS 234</div>
                  </div>
                </div>
                <div className="boundary-foot">
                  <span className="tiny mono">egress</span>
                  <span className="bar"><span className="bar-fill" style={{ width: "0%" }} /></span>
                  <span className="tiny mono">0 / 0</span>
                </div>
              </div>
              <div className="outside">
                <div className="tiny mono" style={{ color: "var(--text-3)" }}>outside · hyperscaler frontier model APIs</div>
                <div className="outside-line" />
              </div>
            </div>
          </aside>
        </div>
      </div>
      <style>{`
        .hero { padding-top: clamp(56px, 7vw, 96px); padding-bottom: clamp(56px, 7vw, 96px); }
        .hero-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: clamp(32px, 4vw, 80px);
          align-items: center;
        }
        @media (max-width: 1000px) { .hero-grid { grid-template-columns: 1fr; } }
        .hero-cta { margin-top: 36px; display: flex; gap: 14px; flex-wrap: wrap; }
        .hero-receipts {
          margin-top: 56px;
          display: flex; flex-wrap: wrap;
          gap: 28px 40px;
          color: var(--text-3);
          font-size: 14px;
          border-top: 1px solid var(--hairline);
          padding-top: 24px;
        }
        .hero-receipts .mono { color: var(--accent); margin-right: 10px; letter-spacing: 0.16em; font-size: 11.5px; }

        .hero-frame {
          background: var(--bg-card-strong);
          border: 1px solid var(--border-strong);
          border-radius: 4px;
          overflow: hidden;
        }
        [data-theme="dark"] .hero-frame { box-shadow: 0 32px 64px rgba(0,0,0,0.4); }
        [data-theme="light"] .hero-frame { box-shadow: 0 12px 32px rgba(20,35,64,0.08); }
        .hero-frame-head {
          display: flex; align-items: center; justify-content: space-between;
          padding: 12px 16px;
          border-bottom: 1px solid var(--hairline);
          color: var(--text-3);
          gap: 8px;
        }
        .hero-frame-body { padding: 22px; }
        .boundary {
          border: 1px dashed color-mix(in oklab, var(--accent) 50%, transparent);
          border-radius: 3px;
          padding: 22px 18px 14px;
          position: relative;
          background: color-mix(in oklab, var(--accent) 4%, transparent);
        }
        .boundary-label {
          position: absolute; top: -9px; left: 16px;
          background: var(--bg-card-strong);
          padding: 0 10px;
          font-size: 10.5px;
          color: var(--accent);
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }
        .boundary-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 16px; }
        .b-cell {
          padding: 14px 14px 12px;
          background: var(--bg);
          border: 1px solid var(--border);
          border-radius: 3px;
          min-height: 92px;
        }
        .b-cell-label { font-size: 10px; letter-spacing: 0.2em; text-transform: uppercase; color: var(--accent); }
        .b-cell-title { font-size: 16px; font-weight: 600; margin-top: 6px; }
        .b-cell-meta { font-size: 12px; color: var(--text-3); margin-top: 4px; }
        .boundary-foot { display: flex; align-items: center; gap: 10px; padding-top: 8px; }
        .bar { flex: 1; height: 4px; background: var(--bg); border-radius: 2px; overflow: hidden; }
        .bar-fill { display: block; height: 100%; background: var(--accent); }
        .outside { margin-top: 14px; padding: 10px 6px 0; }
        .outside-line { height: 1px; background: var(--hairline); margin-top: 8px; }
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
              <span style={{ color: "var(--accent)" }}>Sovereign by architecture, not aspiration.</span>
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
        .vision-grid { display: grid; grid-template-columns: 220px 1fr; gap: clamp(24px, 4vw, 80px); }
        @media (max-width: 900px) { .vision-grid { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  );
}

const PILLARS = [
  {
    n: "01",
    verb: "Own",
    title: "Custody, not access.",
    sub: "Custody of the data, the model, and the audit trail.",
    defend: [
      ["No prompt or response", "leaves the trust boundary."],
      ["No customer data", "trains shared or external models."],
      ["Model weights", "remain under customer control — open-weight."],
      ["Vector indices and embeddings", "stay in customer custody."],
      ["The audit trail", "is the customer's record, not the vendor's."],
    ],
    deliver: [
      ["Deployment", "inside the customer's network — Arda cannot touch the data."],
      ["Open-weight models", "on customer-controlled GPU infrastructure."],
      ["Vector store, embeddings, retrieval", "live inside the boundary."],
      ["Immutable audit log", "persisted in customer storage, customer-keyed."],
      ["Contractual guarantee", "zero data egress, no training on customer data."],
    ],
    icon: (
      <svg viewBox="0 0 32 32" fill="none" width="28" height="28" aria-hidden>
        <path d="M16 4 L26 9 V16 C26 21.5 22 25.5 16 28 C10 25.5 6 21.5 6 16 V9 Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M11.5 16 L15 19 L20.5 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    n: "02",
    verb: "Operate",
    title: "Inside your environment.",
    sub: "Runs in your environment, on your terms.",
    defend: [
      ["No new trust boundary", ", no new identity store."],
      ["Plugs into existing IdP, RBAC and SSO", " — agents inherit user permissions."],
      ["Operable by the platform team", "that already runs the rest of the stack."],
      ["Deployment options", "match the customer's reality, not a vendor SKU."],
      ["Cost behaviour", "is predictable and defensible to a board."],
    ],
    deliver: [
      ["Identity integration", "with Okta, Azure AD, and standard enterprise IdPs."],
      ["Deployable in", "private cloud, customer data centre, or hybrid."],
      ["Standard ops surfaces", "— observability, traces, logs, capacity controls."],
      ["Open-weight models", "on dedicated infrastructure: cost flat as usage grows."],
      ["Three-year cost curve", "modelled against API-priced cloud AI for board review."],
    ],
    icon: (
      <svg viewBox="0 0 32 32" fill="none" width="28" height="28" aria-hidden>
        <rect x="5" y="9" width="22" height="14" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M5 14 H27 M10 14 V23 M22 14 V23 M16 17 H16.01 M10 17 H10.01 M22 17 H22.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    n: "03",
    verb: "Govern",
    title: "Evidence on demand.",
    sub: "Audit-grade by default. Evidence on demand.",
    defend: [
      ["Every prompt, retrieval, tool call and output", "— logged and queryable."],
      ["Aligned to the regulators", "the customer already answers to."],
      ["Policy-as-code", "guardrails reviewable by risk and legal."],
      ["Evidence pack", "producible for a regulator without a six-month audit."],
      ["Human-in-loop gates", "for high-sensitivity outputs and actions."],
    ],
    deliver: [
      ["Immutable audit log", "end-to-end lineage from prompt to output."],
      ["Alignment to AESCSF", "APRA CPS 234 / 230, SOCI Act, SOC 2 Type II."],
      ["Versioned policy", "model registry, change control, SBOM for the platform."],
      ["Regulator-ready evidence templates", "produced in hours, not months."],
      ["Approval queues", "and HITL flows for sensitive workflows."],
    ],
    icon: (
      <svg viewBox="0 0 32 32" fill="none" width="28" height="28" aria-hidden>
        <circle cx="14" cy="14" r="7" stroke="currentColor" strokeWidth="1.5" />
        <path d="M19.5 19.5 L26 26" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M11 14 L13.5 16.5 L17.5 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

function Pillars({ style = "cards" }) {
  return (
    <section className="pillars">
      <div className="container">
        <div className="section-head">
          <div className="section-label">Value pillars · Layer 04</div>
          <h2 className="h-xl">Three verbs. Three claims.<br />Three sets of receipts.</h2>
          <p className="lead">
            The pillars are the structural device anywhere we have to substantiate the worldview. Three sections of a page. Three slides of a deck. Three answers in a security review.
          </p>
        </div>

        {style === "cards" ? (
          <div className="grid-3">
            {PILLARS.map(p => (
              <article key={p.n} className="card pillar-card">
                <div className="card-header">
                  <span className="card-num">{p.n}</span>
                  <span className="eyebrow" style={{ color: "var(--accent)" }}>{p.verb.toUpperCase()}</span>
                </div>
                <div style={{ color: "var(--accent)", marginBottom: 18 }}>{p.icon}</div>
                <h3 className="h-lg" style={{ marginBottom: 10 }}>{p.title}</h3>
                <p className="body" style={{ fontSize: 15 }}>{p.sub}</p>
                <a href={`platform.html#pillar-${p.verb.toLowerCase()}`} className="link-arrow" style={{ marginTop: 22, display: "inline-flex" }}>
                  See the receipts <span className="arr">→</span>
                </a>
              </article>
            ))}
          </div>
        ) : (
          <div className="pillars-stack">
            {PILLARS.map(p => (
              <article key={p.n} className="pillar-row">
                <div className="pillar-row-lead">
                  <div style={{ display: "flex", alignItems: "baseline", gap: 14 }}>
                    <span className="card-num">{p.n}</span>
                    <span className="eyebrow" style={{ color: "var(--accent)" }}>{p.verb.toUpperCase()}</span>
                  </div>
                  <h3 className="h-lg" style={{ marginTop: 16 }}>{p.title}</h3>
                </div>
                <div className="pillar-row-defend">
                  <div className="tiny mono" style={{ color: "var(--amber)", marginBottom: 12, letterSpacing: "0.16em", textTransform: "uppercase" }}>
                    What the buyer needs to defend
                  </div>
                  <ul className="proof-list">
                    {p.defend.map((row, i) => (
                      <li key={i}><strong>{row[0]}</strong> {row[1]}</li>
                    ))}
                  </ul>
                </div>
                <div className="pillar-row-deliver">
                  <div className="tiny mono" style={{ color: "var(--accent)", marginBottom: 12, letterSpacing: "0.16em", textTransform: "uppercase" }}>
                    How Arda delivers it
                  </div>
                  <ul className="proof-list">
                    {p.deliver.map((row, i) => (
                      <li key={i}><strong>{row[0]}</strong> {row[1]}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
      <style>{`
        .pillars-stack { display: grid; gap: 0; }
        .pillar-row {
          display: grid;
          grid-template-columns: 1fr 1.2fr 1.2fr;
          gap: clamp(24px, 3vw, 56px);
          padding: clamp(36px, 4vw, 56px) 0;
          border-top: 1px solid var(--hairline);
        }
        .pillar-row:last-child { border-bottom: 1px solid var(--hairline); }
        @media (max-width: 1000px) { .pillar-row { grid-template-columns: 1fr; } }
        .proof-list { list-style: none; padding: 0; margin: 0; display: grid; gap: 10px; }
        .proof-list li { font-size: 14.5px; line-height: 1.55; color: var(--text-2); padding-left: 16px; position: relative; }
        .proof-list li::before {
          content: "▸"; position: absolute; left: 0; color: var(--accent); font-size: 11px; top: 4px;
        }
        .proof-list li strong { color: var(--text); font-weight: 600; }
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
    detail: ["In-boundary chat UI", "IdP-bound RBAC", "Audit-grade prompt log", "DLP and PII redaction", "Sanctioned scratchpad mode", "Zero retention by default"],
  },
  {
    n: "02",
    name: "Arda Code",
    role: "Sovereign coding assistant",
    blurb: "IDE-integrated for engineers in regulated codebases. Source code never leaves your environment. The energy-networks beachhead.",
    href: "code.html",
    detail: ["IDE plugins", "In-boundary code completion and review", "Repo-aware retrieval", "No code or prompts leave", "Audit trail per developer", "Cost flat as usage compounds"],
  },
  {
    n: "03",
    name: "Arda Index",
    role: "Sovereign knowledge & search",
    blurb: "Access-aware RAG over internal docs and systems. Permission-bound retrieval, cited answers, nothing indexed outside the boundary.",
    href: "index-product.html",
    detail: ["Access-aware RAG", "Permission-bound retrieval", "Cited answers with source documents", "Connectors for SharePoint / Confluence / Drive", "Re-index inside the boundary"],
  },
];

function Products() {
  return (
    <section className="products">
      <div className="container">
        <div className="section-head">
          <div className="section-label">Products · Layer 05</div>
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
                <span className="eyebrow">{p.name.toUpperCase()}</span>
              </div>
              <h3 className="h-lg" style={{ marginBottom: 8 }}>{p.role}.</h3>
              <p className="body" style={{ fontSize: 14.5, marginBottom: 22 }}>{p.blurb}</p>
              <ul className="capabilities">
                {p.detail.map((d, i) => <li key={i}>{d}</li>)}
              </ul>
              <span className="link-arrow" style={{ marginTop: 24, display: "inline-flex" }}>
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
        .capabilities li::before { content: "·"; position: absolute; left: 4px; color: var(--accent); }
        .roadmap-note {
          margin-top: clamp(28px, 3vw, 48px);
          padding: 18px 22px;
          border: 1px dashed var(--border-strong);
          border-radius: 3px;
          display: flex; gap: 18px; align-items: center; flex-wrap: wrap;
          font-size: 14.5px; color: var(--text-2);
        }
      `}</style>
    </section>
  );
}

function Industries() {
  return (
    <section className="industries bg-pattern">
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
              <span className="eyebrow">Primary segment</span>
            </div>
            <h3 className="h-lg" style={{ marginTop: 14 }}>Energy networks (T&D)</h3>
            <p className="body" style={{ fontSize: 15, marginTop: 12 }}>
              Transmission and distribution operators running AESCSF-aligned cyber programs. AI cannot mean another data path out of the boundary — and the dispatch deck cannot become a hyperscaler tenant overnight.
            </p>
            <div className="industry-meta">
              <span>AESCSF</span><span>·</span><span>SOCI Act</span><span>·</span><span>AEMO-aligned</span>
            </div>
            <span className="link-arrow" style={{ marginTop: 24, display: "inline-flex" }}>
              See the Energy brief <span className="arr">→</span>
            </span>
          </a>
          <a href="industry-fsi.html" className="industry-card">
            <div className="industry-card-head">
              <span className="card-num">02</span>
              <span className="eyebrow">Secondary segment</span>
            </div>
            <h3 className="h-lg" style={{ marginTop: 14 }}>Banks, insurers, super</h3>
            <p className="body" style={{ fontSize: 15, marginTop: 12 }}>
              APRA-regulated entities under CPS 234 and CPS 230. Underwriting models, claims handling, customer-facing assist — every prompt, every retrieval, every output answerable to operational risk and to the regulator.
            </p>
            <div className="industry-meta">
              <span>APRA CPS 234 / 230</span><span>·</span><span>SOC 2 Type II</span><span>·</span><span>ISO 27001</span>
            </div>
            <span className="link-arrow" style={{ marginTop: 24, display: "inline-flex" }}>
              See the FSI brief <span className="arr">→</span>
            </span>
          </a>
        </div>

        <div className="adjacency">
          <div className="adjacency-row">
            <span className="tag">Adjacency</span>
            <div>
              <strong style={{ color: "var(--text)" }}>Other critical infrastructure under the SOCI Act.</strong> Telecommunications, water, ports, defence-adjacent.
              The same architecture; the same evidence pack; a different regulator on the cover sheet. <a href="contact.html" className="link-arrow">Talk to us about your sector <span className="arr">→</span></a>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        .industries-grid {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: clamp(20px, 2vw, 32px);
        }
        @media (max-width: 900px) { .industries-grid { grid-template-columns: 1fr; } }
        .industry-card {
          display: block;
          padding: clamp(28px, 2.6vw, 40px);
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 4px;
          transition: border-color 200ms ease, transform 200ms ease;
        }
        .industry-card:hover { border-color: var(--accent); }
        .industry-card-head { display: flex; gap: 18px; align-items: baseline; }
        .industry-meta {
          margin-top: 22px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px; letter-spacing: 0.16em; text-transform: uppercase;
          color: var(--text-3);
          display: flex; gap: 8px; flex-wrap: wrap; align-items: center;
        }
        .adjacency { margin-top: clamp(28px, 3vw, 48px); }
        .adjacency-row {
          display: flex; gap: 18px; align-items: flex-start; flex-wrap: wrap;
          padding: 18px 22px;
          border-top: 1px solid var(--hairline);
          font-size: 15px; color: var(--text-2);
          line-height: 1.55;
        }
        .adjacency-row .tag { flex-shrink: 0; }
      `}</style>
    </section>
  );
}

function Proof() {
  return (
    <section className="proof">
      <div className="container">
        <div className="section-head">
          <div className="section-label">Proof points · Layer 06</div>
          <h2 className="h-xl">Compliance-aligned.<br />Customer-backed. Audit-ready.</h2>
          <p className="lead">
            The receipts behind the three pillars. Numbers we can defend. Certifications we can footnote. Alignments we can show on demand.
          </p>
        </div>
        <div className="proof-grid">
          <div className="proof-stat">
            <div className="proof-num display"><span style={{ color: "var(--accent)" }}>Zero</span></div>
            <div className="proof-stat-title">Data egress</div>
            <div className="proof-stat-meta">Prompts, responses, training. None leave the boundary. Contractual and architectural.</div>
          </div>
          <div className="proof-stat">
            <div className="proof-num display"><span style={{ color: "var(--accent)" }}>3 + 1</span></div>
            <div className="proof-stat-title">Regulator alignments</div>
            <div className="proof-stat-meta">AESCSF · APRA CPS 234 / 230 · SOCI Act &nbsp;+&nbsp; SOC 2 Type II.</div>
          </div>
          <div className="proof-stat">
            <div className="proof-num display"><span style={{ color: "var(--accent)" }}>&lt;90<span style={{ fontSize: "0.6em" }}>d</span></span></div>
            <div className="proof-stat-title">From signed to live</div>
            <div className="proof-stat-meta">Customer-environment deployment, target. Inside an existing platform team's operating model.</div>
          </div>
        </div>
        <div className="proof-foot tiny mono">
          Sources · Phase 1 GTM Workshop · Tone of Voice v1 · Internal POV deck
        </div>
      </div>
      <style>{`
        .proof-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: clamp(24px, 3vw, 64px); align-items: end; }
        @media (max-width: 900px) { .proof-grid { grid-template-columns: 1fr; } }
        .proof-num { font-size: clamp(72px, 9vw, 128px); line-height: 0.9; letter-spacing: -0.04em; font-weight: 700; }
        .proof-stat-title { margin-top: 16px; font-size: 17px; font-weight: 600; }
        .proof-stat-meta { margin-top: 8px; font-size: 14px; color: var(--text-2); max-width: 36ch; }
        .proof-foot { margin-top: clamp(40px, 5vw, 72px); padding-top: 18px; border-top: 1px solid var(--hairline); }
      `}</style>
    </section>
  );
}

function Persona() {
  return (
    <section className="persona">
      <div className="container">
        <div className="section-head">
          <div className="section-label">Audience · Same hierarchy, three angles</div>
          <h2 className="h-xl">What each persona<br />actually hears.</h2>
          <p className="lead">
            The CIO buys it. The Champion pulls for it. The Gatekeeper has to clear it. Same architecture, three sets of words.
          </p>
        </div>
        <div className="grid-3">
          <article className="card">
            <div className="card-header"><span className="card-num">01</span><span className="eyebrow">CIO · Buyer</span></div>
            <h3 className="h-lg">Defendable AI.</h3>
            <p className="body" style={{ fontSize: 14.5, marginTop: 12 }}>"AI you can defend to your regulator." Lead with risk and control. Reinforce with predictable cost. Reference: peer adopters in the same sector.</p>
          </article>
          <article className="card">
            <div className="card-header"><span className="card-num">02</span><span className="eyebrow">Champion · Head of AI</span></div>
            <h3 className="h-lg">AI without trade-off.</h3>
            <p className="body" style={{ fontSize: 14.5, marginTop: 12 }}>"The productivity story your CISO will sign." Lead with what becomes possible. Reinforce with time-to-value. Reference: sanctioned use cases that ship.</p>
          </article>
          <article className="card">
            <div className="card-header"><span className="card-num">03</span><span className="eyebrow">Gatekeeper · CISO</span></div>
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
          <div className="section-label" style={{ color: "var(--accent)" }}>Closing</div>
          <h2 className="display" style={{ marginTop: 18, fontSize: "clamp(40px, 5.5vw, 84px)" }}>
            Adopt AI without changing<br />your security posture.
          </h2>
          <p className="lead" style={{ marginTop: 24, maxWidth: "60ch" }}>
            Twenty-five minutes. We walk your team through the architecture, the deployment options, and how a peer in your sector is using Arda inside their boundary.
          </p>
          <div className="cta-actions">
            <a href="contact.html" className="btn btn-primary">Book an architecture review<span aria-hidden>→</span></a>
            <a href="platform.html" className="btn btn-ghost">Read the platform brief</a>
          </div>
          <div className="cta-foot tiny mono">
            Inside the boundary. Audit-grade. Sovereign by design.
          </div>
        </div>
      </div>
      <style>{`
        .cta-card {
          padding: clamp(56px, 7vw, 112px) clamp(28px, 4vw, 80px);
          border: 1px solid var(--border-strong);
          border-radius: 4px;
          background: var(--bg-2);
          color: var(--text-2);
          text-align: left;
        }
        .cta-actions { margin-top: 36px; display: flex; gap: 14px; flex-wrap: wrap; }
        .cta-foot { margin-top: 56px; padding-top: 20px; border-top: 1px solid var(--hairline); color: var(--accent); }
      `}</style>
    </section>
  );
}

Object.assign(window, { Hero, Vision, Pillars, Products, Industries, Proof, Persona, CTA, HEROES });
