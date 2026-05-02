/* eslint-disable */
// Platform page — the architectural deep dive.
// This is the page a CISO or platform lead opens when home conviced them
// to spend ten more minutes. Tone: structural, precise, no marketing.

function PlatformHero() {
  return (
    <section className="page-hero bg-pattern">
      <div className="container">
        <Breadcrumb items={[{ label: "Arda", href: "index.html" }, { label: "Platform" }]} />
        <div className="eyebrow" style={{ marginTop: 28 }}>Platform · Sovereign by architecture</div>
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

function Pillar({ p, i }) {
  return (
    <article className="pillar-row">
      <div className="pillar-num">
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

function Pillars() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <div className="section-label">The four substrates</div>
          <h2 className="h-xl">Four controls. <span className="accent">Inherited by every workload.</span></h2>
          <p className="lead">Arda Core, Code and Index are surfaces. The substrate underneath is the same on every page, every prompt, every audit.</p>
        </div>
        <div style={{ marginTop: 56 }}>
          {PILLARS.map((p, i) => <Pillar key={p.n} p={p} i={i} />)}
        </div>
      </div>
    </section>
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
          <div className="arch-zone arch-customer">
            <div className="arch-zone-head">
              <span className="tiny mono">CUSTOMER TRUST BOUNDARY</span>
              <span className="tiny mono" style={{ color: "var(--text-3)" }}>VPC · VNet · Tenancy</span>
            </div>

            <div className="arch-row">
              <div className="arch-box arch-box-strong">
                <div className="tiny mono accent">ARDA CONTROL PLANE</div>
                <div className="h-md" style={{ marginTop: 6 }}>Identity broker · Policy engine · Audit ledger</div>
                <div className="tiny" style={{ color: "var(--text-3)", marginTop: 6 }}>Customer-deployed. No Arda-side state.</div>
              </div>
              <div className="arch-box">
                <div className="tiny mono">DATA PLANE</div>
                <div className="h-md" style={{ marginTop: 6 }}>Vector index · Document gateway · Tool runtime</div>
                <div className="tiny" style={{ color: "var(--text-3)", marginTop: 6 }}>Embeddings, retrievals, code workspaces — all in-tenant.</div>
              </div>
            </div>

            <div className="arch-row">
              <div className="arch-box arch-box-soft">
                <div className="tiny mono">SOURCES OF TRUTH</div>
                <div className="h-md" style={{ marginTop: 6 }}>Confluence · SharePoint · Git · Policy library · Operational systems</div>
                <div className="tiny" style={{ color: "var(--text-3)", marginTop: 6 }}>Read via service accounts you own; principal authorization at retrieval time.</div>
              </div>
            </div>

            <div className="arch-row">
              <div className="arch-box arch-box-soft">
                <div className="tiny mono">EXISTING STACK</div>
                <div className="h-md" style={{ marginTop: 6 }}>SIEM · IdP · KMS · Secrets · Observability</div>
                <div className="tiny" style={{ color: "var(--text-3)", marginTop: 6 }}>Arda integrates as a tenant, not a parallel platform.</div>
              </div>
            </div>
          </div>

          <div className="arch-edge">
            <div className="arch-edge-line" />
            <div className="tiny mono arch-edge-label">PRIVATE LINK · MUTUAL TLS · CONTRACT</div>
            <div className="arch-edge-line" />
          </div>

          <div className="arch-zone arch-models">
            <div className="arch-zone-head">
              <span className="tiny mono">MODELS OF RECORD</span>
              <span className="tiny mono" style={{ color: "var(--text-3)" }}>Customer's contract</span>
            </div>
            <div className="arch-row arch-row-models">
              <div className="arch-pill">Open-weights on-prem</div>
              <div className="arch-pill">Hyperscaler private endpoint</div>
              <div className="arch-pill">Fronted SaaS under your DPA</div>
            </div>
            <p className="tiny" style={{ color: "var(--text-3)", marginTop: 12, maxWidth: "44ch" }}>
              Arda doesn't broker model contracts. The customer chooses, signs, and rotates.
            </p>
          </div>
        </div>

        <style>{`
          .arch {
            margin-top: 48px;
            background: var(--surface);
            border: 1px solid var(--hairline);
            border-radius: var(--r-lg);
            padding: clamp(24px, 3vw, 40px);
            display: grid; gap: 28px;
          }
          .arch-zone {
            border: 1px dashed var(--hairline);
            border-radius: var(--r-md);
            padding: 24px;
            background: rgba(255,255,255,0.015);
          }
          .arch-customer { border-color: rgba(58,140,255,0.35); }
          .arch-models { border-color: rgba(241,178,77,0.35); }
          .arch-zone-head { display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; letter-spacing: 0.16em; text-transform: uppercase; }
          .arch-row { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-top: 14px; }
          .arch-row:first-of-type { margin-top: 0; }
          @media (max-width: 700px) { .arch-row { grid-template-columns: 1fr; } }
          .arch-row-models { grid-template-columns: repeat(3, 1fr); }
          @media (max-width: 700px) { .arch-row-models { grid-template-columns: 1fr; } }
          .arch-box {
            background: var(--surface-2);
            border: 1px solid var(--hairline);
            border-radius: var(--r-md);
            padding: 18px 20px;
          }
          .arch-box-strong { border-color: rgba(58,140,255,0.5); background: rgba(58,140,255,0.06); }
          .arch-box-soft { background: transparent; }
          .arch-pill {
            background: var(--surface-2);
            border: 1px solid var(--hairline);
            border-radius: 999px;
            padding: 10px 18px;
            font-size: 13.5px; color: var(--text-2);
            text-align: center;
          }
          .arch-edge { display: grid; grid-template-columns: 1fr auto 1fr; align-items: center; gap: 12px; }
          .arch-edge-line { height: 1px; background: var(--hairline); }
          .arch-edge-label { color: var(--text-3); letter-spacing: 0.18em; text-transform: uppercase; white-space: nowrap; }
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
