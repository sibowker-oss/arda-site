/* eslint-disable */
// Platform page — the architectural deep dive.
// This is the page a CISO or platform lead opens when home conviced them
// to spend ten more minutes. Tone: structural, precise, no marketing.

function PlatformHero() {
  return (
    <section className="page-hero bg-pattern">
      <div className="container">
        <Breadcrumb items={[{ label: "Arda", href: "index.html" }, { label: "Platform" }]} />
        <div className="eyebrow eyebrow-lime" style={{ marginTop: 28 }}>Platform · Sovereign by architecture</div>
        <h1 className="display" style={{ marginTop: 18, maxWidth: "20ch" }}>
          The four <span className="accent">controls</span> every Arda workload inherits.
        </h1>
        <p className="lead" style={{ marginTop: 24, maxWidth: "58ch" }}>
          Identity, policy, custody and audit aren't features. They're the four substrates
          every chat message, code suggestion, and search result on Arda is constructed from.
          The same answer your operator sees is the answer your audit trail can prove.
        </p>
      </div>
    </section>
  );
}

const PILLARS = [
  {
    n: "01",
    code: "IDENTITY",
    title: "Your IdP. Your perimeter. Your principals.",
    body: "Arda authenticates against your existing identity provider. Every prompt, retrieval and tool call carries the operator's principal — not a service account. SSO, role-based access, just-in-time elevation, and SCIM lifecycle work the way they already do in your stack.",
    points: [
      ["IdP-native:", "Entra ID, Okta, Ping, AD FS — your tenant, your conditional access."],
      ["Principal-bound:", "every model invocation cites the human, the role, and the consent."],
      ["No shadow accounts:", "no Arda-owned identity ever touches your data."],
    ],
  },
  {
    n: "02",
    code: "POLICY",
    title: "Policy as code, not policy as PowerPoint.",
    body: "Acceptable use, data classifications, prompt redaction, retrieval scopes, model choice — all expressed as a versioned policy bundle that lives in your Git, runs in your environment, and produces a denial reason the operator and auditor can both read.",
    points: [
      ["Versioned bundles:", "policy commits travel with change-control like any other deploy."],
      ["Pre-flight redaction:", "PII, PCI, ISM-classified material caught before it reaches a model."],
      ["Explainable denials:", "every block carries a rule reference and a human-readable reason."],
    ],
  },
  {
    n: "03",
    code: "CUSTODY",
    title: "Data and prompts stay inside your boundary.",
    body: "Arda runs in your VPC, your VNet, your tenancy. Prompts, retrievals, embeddings, training signal — none leave. Model traffic uses your private connectivity to the model of record. There is no Arda-side store for customer content. Period.",
    points: [
      ["Customer-environment deployment:", "your cloud account, your subscription, your keys."],
      ["Zero data egress:", "contractual and architectural — the network path doesn't exist."],
      ["Model choice:", "open-weights on-prem, your hyperscaler private endpoint, or a fronted SaaS model under your contract."],
    ],
  },
  {
    n: "04",
    code: "AUDIT",
    title: "Every output is reproducible. Months later. By name.",
    body: "Each interaction emits a signed, append-only record: who asked, what policy fired, which retrievals were considered, which model answered, and the exact context window. Pipe it into your SIEM. Replay it for the regulator. The receipt is the product.",
    points: [
      ["Tamper-evident log:", "hash-chained records, exportable to your SIEM and WORM store."],
      ["Reproducible runs:", "any answer can be re-derived from the receipt — same context, same model, same output."],
      ["Sector-aligned mappings:", "AESCSF controls, APRA CPS 234 / 230 evidence, SOCI Act obligations, SOC 2 Type II."],
    ],
  },
];

// Per-pillar marks. 1.5px stroke, no fill; primary in arda-lime-500, secondary
// detail in arda-slate-300. Drawn from Lucide-style geometry to match the deck.
function PillarMark({ code }) {
  const A = "var(--arda-lime-500)";
  const B = "var(--arda-slate-300)";
  const common = { strokeWidth: 1.5, fill: "none", strokeLinecap: "round", strokeLinejoin: "round" };
  switch (code) {
    case "IDENTITY":
      return (
        <svg viewBox="0 0 48 48" width="56" height="56" aria-hidden="true">
          {/* person silhouette */}
          <g {...common} stroke={A}>
            <circle cx="18" cy="17" r="5" />
            <path d="M 8 36 C 8 28 12 25 18 25 C 24 25 28 28 28 36" />
          </g>
          {/* key */}
          <g {...common} stroke={B}>
            <circle cx="36" cy="22" r="4" />
            <path d="M 36 26 V 38 M 33 34 H 36" />
          </g>
        </svg>
      );
    case "POLICY":
      return (
        <svg viewBox="0 0 48 48" width="56" height="56" aria-hidden="true">
          {/* shield with check */}
          <g {...common} stroke={A}>
            <path d="M 16 6 L 28 10 V 22 C 28 30 22 38 16 40 C 10 38 4 30 4 22 V 10 Z" />
            <path d="M 10 22 L 14 26 L 22 17" />
          </g>
          {/* document with corner fold */}
          <g {...common} stroke={B}>
            <path d="M 30 14 H 38 L 44 20 V 42 H 30 Z" />
            <path d="M 38 14 V 20 H 44" />
          </g>
        </svg>
      );
    case "CUSTODY":
      return (
        <svg viewBox="0 0 48 48" width="56" height="56" aria-hidden="true">
          {/* citadel walls */}
          <g {...common} stroke={A}>
            <path d="M 6 18 V 42 H 42 V 18" />
            <path d="M 6 18 V 13 H 12 V 18 M 18 18 V 13 H 24 V 18 M 30 18 V 13 H 36 V 18" />
            <path d="M 6 42 H 42" />
          </g>
          {/* vault door / dial */}
          <g {...common} stroke={B}>
            <circle cx="24" cy="30" r="6" />
            <path d="M 24 30 L 28 30" />
          </g>
        </svg>
      );
    case "AUDIT":
      return (
        <svg viewBox="0 0 48 48" width="56" height="56" aria-hidden="true">
          {/* stacked log lines */}
          <g {...common} stroke={A}>
            <path d="M 6 12 H 32 M 6 20 H 28 M 6 28 H 24 M 6 36 H 20" />
          </g>
          {/* tick badge */}
          <g {...common} stroke={B}>
            <circle cx="38" cy="34" r="6" />
            <path d="M 35 34 L 37 36 L 41 32" />
          </g>
        </svg>
      );
    default:
      return null;
  }
}

function Pillar({ p, i }) {
  return (
    <article className="pillar-row">
      <div className="pillar-num">
        <div className="pillar-mark"><PillarMark code={p.code} /></div>
        <div className="tiny mono">{p.code}</div>
        <div className="big-num accent" style={{ fontSize: "clamp(64px, 7vw, 120px)" }}>{p.n}</div>
      </div>
      <div className="pillar-body">
        <h3 className="h-lg" style={{ maxWidth: "22ch" }}>{p.title}</h3>
        <p className="lead" style={{ marginTop: 20, maxWidth: "60ch" }}>{p.body}</p>
        <ul className="proof-list" style={{ marginTop: 28, maxWidth: "62ch" }}>
          {p.points.map((row, k) => (<li key={k}><strong>{row[0]}</strong> {row[1]}</li>))}
        </ul>
      </div>
      <style>{`
        .pillar-mark { margin-bottom: 14px; }
        .pillar-row {
          display: grid; grid-template-columns: 200px 1fr;
          gap: clamp(20px, 3vw, 56px);
          padding: clamp(40px, 5vw, 80px) 0;
          border-top: 1px solid var(--hairline);
        }
        .pillar-row:first-of-type { border-top: 0; padding-top: 24px; }
        .pillar-num { position: sticky; top: 96px; align-self: start; }
        .pillar-num .big-num { font-family: var(--font-display); font-weight: 600; line-height: 0.95; letter-spacing: -0.03em; }
        @media (max-width: 800px) {
          .pillar-row { grid-template-columns: 1fr; gap: 16px; }
          .pillar-num { position: static; display: flex; align-items: baseline; gap: 16px; }
          .pillar-num .big-num { font-size: 56px !important; }
        }
        .proof-list { list-style: none; padding: 0; margin: 0; display: grid; gap: 10px; }
        .proof-list li { font-size: 14.5px; line-height: 1.6; color: var(--text-2); padding-left: 18px; position: relative; }
        .proof-list li::before { content: "▸"; position: absolute; left: 0; color: var(--accent); font-size: 11px; top: 5px; }
        .proof-list li strong { color: var(--text); font-weight: 600; }
      `}</style>
    </article>
  );
}

// The visual statement of "Own / Operate / Govern": three states pinned to
// a single customer trust boundary rectangle. Filled OK chip lives inside,
// outlined WARN chip straddles the boundary edge, outlined RISK chip sits
// outside. Reads at a glance and uses the semantic trio as the spec defines:
// boundary status, not decoration.
function BoundaryGraphic() {
  return (
    <svg
      role="img"
      aria-label="Boundary status: prompts, retrievals, embeddings and audit stay inside the customer boundary; model traffic crosses it under contract; nothing leaves."
      viewBox="0 0 1200 220"
      width="100%"
      style={{ display: "block", maxWidth: 1200, marginInline: "auto" }}
    >
      <title>Boundary status</title>
      <desc>A horizontal customer trust boundary rectangle with three pinned states: in-boundary (filled), contractual (outlined warn) straddling the edge, leaves-boundary (outlined risk) sitting outside.</desc>

      {/* eyebrow */}
      <text x="20" y="22" style={{ fontFamily: "var(--font-mono)", fontSize: 11, fill: "var(--arda-slate-300)", letterSpacing: "0.16em" }}>
        BOUNDARY STATUS · WHERE THE WORK HAPPENS
      </text>

      {/* customer trust boundary */}
      <rect x="20" y="44" width="800" height="160" rx="6"
        style={{ fill: "color-mix(in oklab, var(--arda-lime-500) 4%, transparent)", stroke: "var(--arda-lime-500)", strokeWidth: 1 }} />
      <text x="36" y="68" style={{ fontFamily: "var(--font-mono)", fontSize: 11, fill: "var(--arda-lime-500)", letterSpacing: "0.16em" }}>
        CUSTOMER TRUST BOUNDARY
      </text>

      {/* Chip 1 — In your boundary (filled OK) */}
      <g>
        <rect x="44" y="92" width="320" height="92" rx="4"
          style={{ fill: "color-mix(in oklab, var(--arda-ok) 14%, transparent)", stroke: "var(--arda-ok)", strokeWidth: 1 }} />
        <text x="60" y="118" style={{ fontFamily: "var(--font-mono)", fontSize: 11, fill: "var(--arda-ok)", letterSpacing: "0.16em" }}>
          IN YOUR BOUNDARY
        </text>
        <text x="60" y="146" style={{ fontFamily: "var(--font-body)", fontSize: 16, fontWeight: 600, fill: "var(--fg-on-dark)" }}>
          Prompts · Retrievals · Embeddings · Audit
        </text>
        <text x="60" y="168" style={{ fontFamily: "var(--font-body)", fontSize: 12, fill: "var(--fg-on-dark-muted)" }}>
          Stays in your VPC, your VNet, your tenancy.
        </text>
      </g>

      {/* Chip 2 — Contractual protection (outlined warn, straddling boundary edge x=820) */}
      <g>
        <rect x="690" y="92" width="320" height="92" rx="4"
          style={{ fill: "color-mix(in oklab, var(--arda-warn) 6%, transparent)", stroke: "var(--arda-warn)", strokeWidth: 1, strokeDasharray: "4 4" }} />
        <text x="706" y="118" style={{ fontFamily: "var(--font-mono)", fontSize: 11, fill: "var(--arda-warn)", letterSpacing: "0.16em" }}>
          CONTRACTUAL PROTECTION
        </text>
        <text x="706" y="146" style={{ fontFamily: "var(--font-body)", fontSize: 16, fontWeight: 600, fill: "var(--fg-on-dark)" }}>
          Model traffic via private link
        </text>
        <text x="706" y="168" style={{ fontFamily: "var(--font-body)", fontSize: 12, fill: "var(--fg-on-dark-muted)" }}>
          Mutual TLS, customer-signed DPA.
        </text>
      </g>

      {/* Chip 3 — Leaves your boundary (outlined risk, fully outside) */}
      <g>
        <rect x="1020" y="92" width="160" height="92" rx="4"
          style={{ fill: "none", stroke: "var(--arda-risk)", strokeWidth: 1, strokeDasharray: "4 4" }} />
        <text x="1036" y="118" style={{ fontFamily: "var(--font-mono)", fontSize: 11, fill: "var(--arda-risk)", letterSpacing: "0.16em" }}>
          LEAVES BOUNDARY
        </text>
        <text x="1036" y="146" style={{ fontFamily: "var(--font-body)", fontSize: 16, fontWeight: 600, fill: "var(--fg-on-dark)" }}>
          Nothing.
        </text>
        <text x="1036" y="168" style={{ fontFamily: "var(--font-body)", fontSize: 12, fill: "var(--fg-on-dark-muted)" }}>
          By design.
        </text>
      </g>
    </svg>
  );
}

function Pillars() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <div className="section-label">The four substrates</div>
          <h2 className="h-xl">Four controls. <span className="accent">Inherited by every workload.</span></h2>
          <p className="lead">Arda Core, Code and Index are surfaces. The substrate underneath is the same on every page, every prompt, every audit.</p>
        </div>
        <div style={{ marginTop: 28, marginBottom: 8 }}>
          <BoundaryGraphic />
        </div>
        <div style={{ marginTop: 32 }}>
          {PILLARS.map((p, i) => <Pillar key={p.n} p={p} i={i} />)}
        </div>
      </div>
    </section>
  );
}

// Component-box helper for the architecture diagram. Each box is a rect
// with an eyebrow, title, sub, and an optional small inline-SVG icon at
// the top-right. `strong` flags the Arda Control Plane as the emphasised
// element (1.5px blue stroke, soft blue tint) per the spec.
function ArchBox({ x, y, w, h, eyebrow, title, sub, strong, icon }) {
  const fill = strong ? "color-mix(in oklab, var(--arda-lime-500) 8%, transparent)" : "var(--arda-navy-700)";
  const stroke = strong ? "var(--arda-lime-500)" : "var(--rule-on-dark-strong)";
  const strokeWidth = strong ? 1.5 : 1;
  const eyebrowFill = strong ? "var(--arda-lime-500)" : "var(--arda-slate-300)";
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx="4"
        style={{ fill, stroke, strokeWidth }} />
      <text x={x + 18} y={y + 26}
        style={{ fontFamily: "var(--font-mono)", fontSize: 11, fill: eyebrowFill, letterSpacing: "0.16em" }}>
        {eyebrow}
      </text>
      <text x={x + 18} y={y + 56}
        style={{ fontFamily: "var(--font-body)", fontSize: 16, fontWeight: 600, fill: "var(--fg-on-dark)" }}>
        {title}
      </text>
      {sub && (
        <text x={x + 18} y={y + h - 18}
          style={{ fontFamily: "var(--font-body)", fontSize: 12, fill: "var(--fg-on-dark-muted)" }}>
          {sub}
        </text>
      )}
      {icon && (
        <g transform={`translate(${x + w - 36}, ${y + 16})`}
          stroke={strong ? "var(--arda-lime-500)" : "var(--arda-slate-300)"}
          strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
          {icon}
        </g>
      )}
    </g>
  );
}

// Reference architecture as an inline SVG. ViewBox 1280×720 (16:9). One zone
// for the customer trust boundary (solid blue stroke), connected via a single
// labelled edge to the models-of-record zone (dashed warn stroke = contractual,
// not in-boundary). All colours come from design-system tokens; no drop shadows
// on dark; structure reads like a network drawing, not a marketing diagram.
function ArchitectureDiagram() {
  // Icon paths — drawn in 16×16 unit space, stroked by the parent <g>.
  const iconShield = <path d="M 8 1 L 14 4 V 8 C 14 12 11 14 8 15 C 5 14 2 12 2 8 V 4 Z M 5 8 L 7 10 L 11 6" />;
  const iconStack = (
    <>
      <ellipse cx="8" cy="3.5" rx="6" ry="1.5" />
      <path d="M 2 3.5 V 8 C 2 9.4 4.7 10 8 10 C 11.3 10 14 9.4 14 8 V 3.5" />
      <path d="M 2 8 V 12.5 C 2 13.9 4.7 14.5 8 14.5 C 11.3 14.5 14 13.9 14 12.5 V 8" />
    </>
  );
  const iconDocument = (
    <>
      <path d="M 3.5 2 H 10 L 13 5 V 14.5 H 3.5 Z" />
      <path d="M 10 2 V 5 H 13" />
      <path d="M 5.5 8 H 11 M 5.5 10.5 H 11 M 5.5 13 H 9" />
    </>
  );
  const iconLock = (
    <>
      <rect x="3.5" y="7" width="9" height="7.5" rx="1" />
      <path d="M 5 7 V 4.5 a 3 3 0 0 1 6 0 V 7" />
    </>
  );
  const iconChip = (
    <>
      <rect x="4" y="4" width="8" height="8" rx="0.5" />
      <rect x="6.5" y="6.5" width="3" height="3" />
      <path d="M 6 2 V 4 M 8 2 V 4 M 10 2 V 4 M 6 12 V 14 M 8 12 V 14 M 10 12 V 14 M 2 6 H 4 M 2 8 H 4 M 2 10 H 4 M 12 6 H 14 M 12 8 H 14 M 12 10 H 14" />
    </>
  );

  return (
    <svg
      role="img"
      aria-label="Arda reference architecture: customer trust boundary and models of record."
      viewBox="0 0 1280 720"
      width="100%"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: "block", maxWidth: 1280, marginInline: "auto" }}
    >
      <title>Arda reference architecture</title>
      <desc>
        Customer trust boundary contains the Arda Control Plane (Identity broker,
        Policy engine, Audit ledger), the Data Plane (Vector index, Document gateway,
        Tool runtime), Sources of Truth (Confluence, SharePoint, Git, Policy library,
        Operational systems), and the Existing Stack (SIEM, IdP, KMS, Secrets,
        Observability). A single labelled edge — Private Link, Mutual TLS, Contract —
        connects to the Models of Record zone, which sits outside the boundary and is
        protected by the customer's contracts: open-weights on-premise, hyperscaler
        private endpoint, or fronted SaaS under DPA.
      </desc>

      {/* Customer trust boundary */}
      <rect x="20" y="40" width="1240" height="430" rx="6"
        style={{ fill: "color-mix(in oklab, var(--arda-lime-500) 4%, transparent)", stroke: "var(--arda-lime-500)", strokeWidth: 1 }} />
      <text x="40" y="68"
        style={{ fontFamily: "var(--font-mono)", fontSize: 11, fill: "var(--arda-lime-500)", letterSpacing: "0.16em" }}>
        CUSTOMER TRUST BOUNDARY
      </text>
      <text x="1240" y="68" textAnchor="end"
        style={{ fontFamily: "var(--font-mono)", fontSize: 11, fill: "var(--arda-slate-300)", letterSpacing: "0.16em" }}>
        VPC · VNET · TENANCY
      </text>

      {/* Row 1: Control Plane (strong) + Data Plane */}
      <ArchBox x={44} y={94} w={586} h={130}
        eyebrow="ARDA CONTROL PLANE"
        title="Identity broker · Policy engine · Audit ledger"
        sub="Customer-deployed. No Arda-side state."
        strong
        icon={iconShield} />
      <ArchBox x={650} y={94} w={586} h={130}
        eyebrow="DATA PLANE"
        title="Vector index · Document gateway · Tool runtime"
        sub="Embeddings, retrievals, code workspaces — all in-tenant."
        icon={iconStack} />

      {/* Row 2: Sources of Truth (full width) */}
      <ArchBox x={44} y={244} w={1192} h={100}
        eyebrow="SOURCES OF TRUTH"
        title="Confluence · SharePoint · Git · Policy library · Operational systems"
        sub="Read via service accounts you own; principal authorization at retrieval time."
        icon={iconDocument} />

      {/* Row 3: Existing Stack (full width) */}
      <ArchBox x={44} y={358} w={1192} h={96}
        eyebrow="EXISTING STACK"
        title="SIEM · IdP · KMS · Secrets · Observability"
        sub="Arda integrates as a tenant, not a parallel platform."
        icon={iconLock} />

      {/* Edge connector: horizontal rule broken by labelled chip */}
      <line x1="40" y1="510" x2="466" y2="510"
        style={{ stroke: "var(--arda-slate-400)", strokeWidth: 1 }} />
      <line x1="814" y1="510" x2="1240" y2="510"
        style={{ stroke: "var(--arda-slate-400)", strokeWidth: 1 }} />
      <rect x="466" y="494" width="348" height="32" rx="16"
        style={{ fill: "var(--arda-navy-800)", stroke: "var(--arda-slate-400)", strokeWidth: 1 }} />
      <text x="640" y="515" textAnchor="middle"
        style={{ fontFamily: "var(--font-mono)", fontSize: 11, fill: "var(--arda-slate-300)", letterSpacing: "0.16em" }}>
        PRIVATE LINK · MUTUAL TLS · CONTRACT
      </text>

      {/* Models of record — outside the boundary; dashed warn stroke = contractual */}
      <rect x="20" y="546" width="1240" height="158" rx="6"
        style={{ fill: "color-mix(in oklab, var(--arda-warn) 4%, transparent)", stroke: "var(--arda-warn)", strokeWidth: 1, strokeDasharray: "5 5" }} />
      <text x="40" y="574"
        style={{ fontFamily: "var(--font-mono)", fontSize: 11, fill: "var(--arda-warn)", letterSpacing: "0.16em" }}>
        MODELS OF RECORD
      </text>
      <text x="1240" y="574" textAnchor="end"
        style={{ fontFamily: "var(--font-mono)", fontSize: 11, fill: "var(--arda-slate-300)", letterSpacing: "0.16em" }}>
        CUSTOMER'S CONTRACT
      </text>

      {/* Three model options as pills */}
      {[
        { x: 44,   label: "Open-weights on-prem" },
        { x: 434,  label: "Hyperscaler private endpoint" },
        { x: 824,  label: "Fronted SaaS under your DPA" },
      ].map((m) => (
        <g key={m.x}>
          <rect x={m.x} y={596} width={372} height={48} rx="24"
            style={{ fill: "var(--arda-navy-700)", stroke: "var(--rule-on-dark-strong)", strokeWidth: 1 }} />
          <g transform={`translate(${m.x + 16}, ${m.y || 612})`} stroke="var(--arda-slate-300)" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
            {iconChip}
          </g>
          <text x={m.x + 44} y={626}
            style={{ fontFamily: "var(--font-body)", fontSize: 14, fontWeight: 600, fill: "var(--fg-on-dark)" }}>
            {m.label}
          </text>
        </g>
      ))}

      {/* Footnote */}
      <text x="44" y="678"
        style={{ fontFamily: "var(--font-body)", fontSize: 12, fill: "var(--fg-on-dark-faint)" }}>
        Arda doesn't broker model contracts. The customer chooses, signs, and rotates.
      </text>
    </svg>
  );
}

function Architecture() {
  return (
    <section className="section section-quiet">
      <div className="container">
        <div className="section-head">
          <div className="section-label">Architecture · Inside the boundary</div>
          <h2 className="h-xl">What lives where.</h2>
          <p className="lead">A regulated enterprise reference deployment. Every line on this diagram is a contract, a network policy, or a control objective — not just a box.</p>
        </div>

        <div className="arch">
          <ArchitectureDiagram />
        </div>

        <style>{`
          .arch {
            margin-top: 48px;
            background: var(--surface);
            border: 1px solid var(--hairline);
            border-radius: var(--r-lg);
            padding: clamp(24px, 3vw, 40px);
          }
        `}</style>
      </div>
    </section>
  );
}

function Receipt() {
  return (
    <section className="section">
      <div className="container">
        <div className="grid-2" style={{ gap: "clamp(28px, 4vw, 64px)", alignItems: "start" }}>
          <div>
            <div className="section-label" style={{ marginBottom: 16 }}>The receipt</div>
            <h2 className="h-xl">Every answer comes with a <span className="accent">paper trail</span>.</h2>
            <p className="lead" style={{ marginTop: 20, maxWidth: "44ch" }}>
              Arda doesn't just log usage. It captures the entire decision: which retrievals were considered,
              which were filtered by policy, which model was called, and what the exact context window contained.
            </p>
            <p className="lead" style={{ marginTop: 16, maxWidth: "44ch" }}>
              Months later, an auditor can pull a single ID and replay the run end-to-end.
            </p>
          </div>
          <div className="receipt">
            <div className="receipt-head">
              <span className="tiny mono" style={{ color: "var(--text-3)" }}>RECEIPT · 0x4f8a…c2e1</span>
              <span className="tiny mono" style={{ color: "var(--accent)" }}>VERIFIED</span>
            </div>
            <div className="receipt-row"><span>principal</span><span>e.holm@acme-energy.com.au · ops-engineer</span></div>
            <div className="receipt-row"><span>policy</span><span>aescsf-controls@v2.4 · classification: OFFICIAL</span></div>
            <div className="receipt-row"><span>retrievals</span><span>3 considered · 2 admitted · 1 redacted (PII)</span></div>
            <div className="receipt-row"><span>model</span><span>llama-3.1-70b · on-prem · seed: 18293</span></div>
            <div className="receipt-row"><span>tokens</span><span>2,418 in · 612 out</span></div>
            <div className="receipt-row"><span>egress</span><span style={{ color: "var(--accent)" }}>none · stayed in-boundary</span></div>
            <div className="receipt-row"><span>signed</span><span>cust-kms@2025-04-18T08:14:22Z</span></div>
            <div className="receipt-foot">
              <span className="tiny mono">REPLAYABLE</span>
              <span className="tiny mono">SIEM-EXPORTED</span>
              <span className="tiny mono">CPS-234-MAPPED</span>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        .receipt {
          background: var(--surface);
          border: 1px solid var(--hairline);
          border-radius: var(--r-md);
          padding: 24px;
          font-family: var(--font-mono);
          font-size: 13px;
          line-height: 1.6;
        }
        .receipt-head { display: flex; justify-content: space-between; padding-bottom: 14px; border-bottom: 1px solid var(--hairline); margin-bottom: 14px; }
        .receipt-row { display: flex; justify-content: space-between; gap: 12px; padding: 6px 0; color: var(--text-2); }
        .receipt-row span:first-child { color: var(--text-3); min-width: 92px; }
        .receipt-row span:last-child { text-align: right; }
        .receipt-foot { display: flex; flex-wrap: wrap; gap: 10px; padding-top: 14px; margin-top: 14px; border-top: 1px solid var(--hairline); }
        .receipt-foot .tiny { background: var(--surface-2); padding: 4px 10px; border-radius: 999px; color: var(--accent); }
      `}</style>
    </section>
  );
}

function PlatformPage() {
  return (
    <Page active="platform">
      <PlatformHero />
      <Pillars />
      <Architecture />
      <Receipt />
      <PageCTA
        title="Ready to put this in front of your CISO?"
        sub="We bring a reference architecture, a deployment plan keyed to your cloud, and a draft control mapping for your sector. You bring the questions you've been told are unanswerable."
        primaryHref="contact.html"
        secondaryHref="index.html"
        secondary="Back to overview"
      />
    </Page>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<PlatformPage />);
