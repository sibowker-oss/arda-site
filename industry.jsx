/* eslint-disable */
// Industry pages — Energy networks (T&D) and Banks/insurers/super.
// These are the two named primary segments per the GTM workshop.

const INDUSTRY_DATA = {
  energy: {
    code: "ENERGY NETWORKS",
    sector: "Transmission & distribution",
    title: "AI for the dispatch deck. Not just the customer portal.",
    sub: "Transmission and distribution operators running AESCSF-aligned cyber programs need an AI surface that doesn't add a new exfiltration path. Arda is that surface.",
    why: {
      title: "What's actually different about energy networks.",
      body: "The customer portal is a normal SaaS problem. The dispatch deck, the protection settings, the asset condition models, the bushfire-risk overlays — those are the workloads where every incident becomes an AEMO conversation, and every AI vendor's standard contract becomes a problem.",
    },
    receipts: [
      ["AESCSF-aligned by design:", "control mappings drafted to the maturity level your program is targeting, not retrofitted after."],
      ["No model traffic out:", "open-weights on-prem profile for the operational technology side; private endpoints for the corporate side."],
      ["Operator-grade UX:", "operators ask in their language — 'show me the protection settings on feeder 412 and the last three trip events' — and get cited answers."],
      ["Explainable refusals:", "when a question crosses a policy boundary, the operator gets a reason, not a vague 'I can't help with that'."],
    ],
    workflows: [
      { name: "Asset condition narrative", desc: "Summarise sensor histories and inspection notes for a transformer fleet — citing the records." },
      { name: "Outage post-mortem drafting", desc: "Pull dispatch logs, protection events and weather data into a structured event reconstruction." },
      { name: "Procedure assistant", desc: "Front-line operators ask the runbook, get the page and the line — every time." },
      { name: "Incident-comms drafting", desc: "Draft the AEMO and regulator notifications from the event timeline; the analyst edits, never starts blank." },
    ],
    accent: "var(--accent)",
  },
  fsi: {
    code: "BANKS · INSURERS · SUPER",
    sector: "APRA-regulated entities",
    title: "AI productivity that survives a CPS 234 review.",
    sub: "APRA-regulated entities under CPS 234 and CPS 230. Underwriting models, claims handling, customer-facing assist, retrieval over policy and product — every prompt, every output answerable to operational risk and the regulator.",
    why: {
      title: "Why hyperscaler defaults aren't enough.",
      body: "The contract terms work. The data residency story works. What doesn't work — yet — is proving to operational risk that an AI-assisted decision can be reconstructed months later, with the same model, the same retrievals, the same context. Arda's substrate is that proof.",
    },
    receipts: [
      ["CPS 234 / CPS 230 mapped:", "every Arda control objective ties to a CPS clause your second line already cares about."],
      ["Reconstructable decisions:", "an underwriter's AI-assist run can be replayed with the same model, prompt, retrievals — and signed."],
      ["Customer-data custody:", "PII never leaves the deployed environment; the redaction layer is pre-flight, not aspirational."],
      ["Operational risk fit:", "the audit ledger is shaped for the evidence pack, not for vendor demoware."],
    ],
    workflows: [
      { name: "Underwriter assist", desc: "Cited summarisation of broker submissions, with a receipt the second line can replay." },
      { name: "Claims handler co-pilot", desc: "Policy-grounded answers to claimant questions, with the policy version pinned in the receipt." },
      { name: "Customer-service knowledge", desc: "Front-line agents ask the product manual, get the page; supervisors get the audit log." },
      { name: "Internal-audit research", desc: "Sanctioned retrieval over the control library, the policy library, and the prior audit pack." },
    ],
    accent: "var(--accent)",
  },
};

function IndustryPage({ id }) {
  const d = INDUSTRY_DATA[id];
  return (
    <Page active="industries">
      <section className="page-hero bg-pattern">
        <div className="container">
          <Breadcrumb items={[{ label: "Arda", href: "index.html" }, { label: "Industries" }, { label: d.code.split(" · ")[0] }]} />
          <div className="eyebrow" style={{ marginTop: 28, color: d.accent }}>{d.code} <span style={{ opacity: 0.4, margin: "0 10px" }}>·</span> {d.sector}</div>
          <h1 className="display" style={{ marginTop: 18, maxWidth: "20ch" }}>{d.title}</h1>
          <p className="lead" style={{ marginTop: 24, maxWidth: "60ch" }}>{d.sub}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ gap: "clamp(28px, 4vw, 80px)", alignItems: "start" }}>
            <div>
              <div className="section-label" style={{ marginBottom: 14, color: d.accent }}>Why it's different</div>
              <h2 className="h-xl">{d.why.title}</h2>
            </div>
            <p className="lead" style={{ maxWidth: "44ch", fontSize: "clamp(19px, 1.6vw, 22px)" }}>{d.why.body}</p>
          </div>
        </div>
      </section>

      <section className="section section-quiet">
        <div className="container">
          <div className="section-head">
            <div className="section-label" style={{ color: d.accent }}>What the regulator already cares about</div>
            <h2 className="h-xl">Defensible — to the body that matters in your sector.</h2>
          </div>
          <ul className="proof-list" style={{ marginTop: 40, maxWidth: "72ch" }}>
            {d.receipts.map((r, i) => <li key={i}><strong>{r[0]}</strong> {r[1]}</li>)}
          </ul>
        </div>
        <style>{`
          .proof-list { list-style: none; padding: 0; margin: 0; display: grid; gap: 14px; }
          .proof-list li { font-size: 16px; line-height: 1.6; color: var(--text-2); padding-left: 22px; position: relative; }
          .proof-list li::before { content: "▸"; position: absolute; left: 0; color: ${d.accent}; font-size: 12px; top: 5px; }
          .proof-list li strong { color: var(--text); font-weight: 600; }
        `}</style>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="section-label" style={{ color: d.accent }}>Workflows we name first</div>
            <h2 className="h-xl">Where Arda earns its first 90 days.</h2>
            <p className="lead">No imaginary roadmaps. The four surfaces a customer in your sector typically deploys before the first review with their CISO.</p>
          </div>
          <div className="wflow-grid" style={{ marginTop: 56 }}>
            {d.workflows.map((w, i) => (
              <article key={i} className="wflow">
                <div className="tiny mono" style={{ color: "var(--text-3)" }}>{String(i + 1).padStart(2, "0")} / WORKFLOW</div>
                <h3 className="h-md" style={{ marginTop: 10 }}>{w.name}</h3>
                <p className="body" style={{ color: "var(--text-2)", marginTop: 10, lineHeight: 1.55 }}>{w.desc}</p>
              </article>
            ))}
          </div>
        </div>
        <style>{`
          .wflow-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1px; background: var(--hairline); border: 1px solid var(--hairline); border-radius: var(--r-md); overflow: hidden; }
          @media (max-width: 700px) { .wflow-grid { grid-template-columns: 1fr; } }
          .wflow { background: var(--bg); padding: clamp(28px, 3vw, 40px); }
        `}</style>
      </section>

      <PageCTA
        title={`Want a workshop tailored to ${d.sector.toLowerCase()}?`}
        sub="Two hours with your security, risk and platform leads. We bring a control mapping for your sector and a deployment plan keyed to your cloud."
        primaryHref="contact.html"
        secondaryHref="platform.html"
        secondary="Read the platform brief"
      />
    </Page>
  );
}

window.IndustryPage = IndustryPage;
window.INDUSTRY_DATA = INDUSTRY_DATA;
