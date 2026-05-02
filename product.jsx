/* eslint-disable */
// Shared product-page layout — used by core/code/index pages.
// Each product wears the same skeleton; only the copy and accent change.

const PRODUCT_DATA = {
  core: {
    code: "ARDA CORE",
    n: "01",
    title: "Sovereign chat for the conversations that can't leave the building.",
    sub: "The sanctioned scratchpad regulated operators reach for first — drafting, reasoning, summarising — without the IP, the customer data, or the privileged information leaving the boundary.",
    meta: [
      { label: "Audience", value: "All sanctioned operators" },
      { label: "Deployment target", value: "<90 days" },
      { label: "Boundary", value: "Customer VPC / VNet" },
    ],
    blurb: "Anywhere your team is using shadow AI today — the personal subscriptions, the browser tabs no one talks about — Arda Core is the version your CISO can actually approve.",
    sections: [
      {
        eyebrow: "What it replaces",
        title: "The shadow AI tab.",
        body: "Sanctioned, observable, and connected to the corpus your team actually works against — not the public internet circa six months ago. Same speed. Same fluency. Inside your boundary.",
      },
      {
        eyebrow: "What's in the box",
        title: "Chat, but the way regulated work is done.",
        body: "Project workspaces with retention rules. Document upload that respects classification. Prompt templates curated by your risk team. Conversation export that an auditor can sign off on.",
      },
    ],
    capabilities: {
      defend: [
        ["Classification-aware:", "OFFICIAL, PROTECTED and SECRET surfaces tagged at the prompt level — denials carry the rule reference."],
        ["No public-cloud egress:", "every conversation stays inside the deployed boundary; the network path doesn't exist."],
        ["Per-conversation receipts:", "principal, policy, retrievals, model, signed and exportable to your SIEM."],
        ["Bring-your-own-model:", "open-weights on-prem for the sensitive surface; hyperscaler private endpoint for the rest."],
      ],
      deliver: [
        ["IdP-native sign-in:", "Entra ID, Okta, Ping — the operator's principal flows into every model call."],
        ["Curated prompt library:", "your risk team writes the templates; operators get guard-rails as muscle memory."],
        ["Document workspaces:", "drop in a 200-page tariff filing; ask questions; export the answer with citations."],
        ["Quiet by default:", "no marketing surface, no animated mascot — the UI gets out of the way."],
      ],
    },
    next: { label: "Arda Code", href: "code.html", desc: "The same trust boundary, applied to the IDE." },
  },
  code: {
    code: "ARDA CODE",
    n: "02",
    title: "An AI coding assistant that respects your source-code custody.",
    sub: "IDE-integrated suggestions, refactors and reviews — wired into your repos and your control plane, not a vendor's. Source code is the most sensitive corpus most enterprises own. It's treated that way here.",
    meta: [
      { label: "Audience", value: "Engineering, platform, SRE" },
      { label: "IDEs", value: "VS Code · JetBrains · Vim" },
      { label: "Repo custody", value: "Stays in your VCS" },
    ],
    blurb: "The teams shipping critical infrastructure can't paste production code into a public assistant. Arda Code gives them the same productivity uplift — without the contract problem.",
    sections: [
      {
        eyebrow: "What it replaces",
        title: "The pasted snippet.",
        body: "Inline completion, diff explanation, test scaffolding and PR summarisation — all running against your code, in your environment, with the model your security team approved.",
      },
      {
        eyebrow: "Repo-aware, not repo-extracting",
        title: "Context without exfiltration.",
        body: "Arda Code retrieves from your repos using a service principal you own. Embeddings live in your tenant. Suggestions are generated in your model contract. The repo never leaves.",
      },
    ],
    capabilities: {
      defend: [
        ["No source code egress:", "ever — embeddings, retrievals and prompts stay in the deployed environment."],
        ["License-aware completions:", "trained-data provenance and customer policy choke the suggestions surface."],
        ["Branch-scoped retrieval:", "secret-bearing branches and protected paths are excluded by policy, not by hope."],
        ["Reviewable by design:", "every accepted suggestion is logged with its source context and the prompt that produced it."],
      ],
      deliver: [
        ["IDE-first:", "the assistant lives where the engineer already is. No new tab. No new login."],
        ["PR-ready outputs:", "diffs land with rationale, test deltas, and a citation to the rules they were checked against."],
        ["Customer-controlled model:", "swap the underlying coder model without renegotiating Arda."],
        ["Air-gap-capable:", "the on-prem profile runs without internet access end-to-end."],
      ],
    },
    next: { label: "Arda Index", href: "index-product.html", desc: "Sovereign retrieval over the rest of the corpus." },
  },
  index: {
    code: "ARDA INDEX",
    n: "03",
    title: "Enterprise search and FAQ — answerable to the regulator.",
    sub: "An assistant grounded in your sanctioned corpus — policy, procedure, technical documentation, ops runbooks. Citations every time. No confabulation. Nothing leaves the boundary.",
    meta: [
      { label: "Audience", value: "Front-line operators, ops leads" },
      { label: "Latency budget", value: "Sub-second over your corpus" },
      { label: "Citation policy", value: "Every claim, every time" },
    ],
    blurb: "The assistant your operators ask before they call the desk. The assistant your auditor can ask after the fact. Same answer, same citations.",
    sections: [
      {
        eyebrow: "Grounded retrieval",
        title: "If it's not in the corpus, it isn't in the answer.",
        body: "Arda Index refuses to fabricate. Every claim is anchored to a passage your team curated — and the operator can open the source in one click.",
      },
      {
        eyebrow: "Curated, not crawled",
        title: "Your risk team owns the corpus.",
        body: "What's indexed is what's been approved. Lifecycle, freshness and retraction live in a UI your governance lead can use — without writing a Python script.",
      },
    ],
    capabilities: {
      defend: [
        ["Corpus governance UI:", "publish, retract, reclassify — every change is logged and reversible."],
        ["Citation-or-silence:", "no answer without a passage; declines are reasoned, not awkward."],
        ["Principal-scoped retrieval:", "operators only see passages their role is authorised to read."],
        ["Auditable Q&A history:", "every question and answer pair is stored with its retrievals and signing key."],
      ],
      deliver: [
        ["Sub-second over millions:", "vector + lexical hybrid retrieval, tuned for the regulated-corpus shape."],
        ["Plug-in connectors:", "SharePoint, Confluence, Git, S3, network shares — all read-side, principal-aware."],
        ["Multilingual where it matters:", "EN-AU, EN-GB, EN-US — and language-tagged corpora for global teams."],
        ["No model lock-in:", "swap the embedding and answer models on quarterly cycles without re-indexing."],
      ],
    },
    next: { label: "Arda Core", href: "core.html", desc: "The chat surface that started this." },
  },
};

function ProductPage({ id }) {
  const p = PRODUCT_DATA[id];
  return (
    <Page active="products">
      <section className="page-hero bg-pattern">
        <div className="container">
          <Breadcrumb items={[{ label: "Arda", href: "index.html" }, { label: "Products" }, { label: p.code.replace("ARDA ", "Arda ") }]} />
          <div className="prod-head" style={{ marginTop: 28 }}>
            <div>
              <div className="eyebrow">{p.code} <span style={{ opacity: 0.4, margin: "0 10px" }}>·</span> Layer {p.n}</div>
              <h1 className="display" style={{ marginTop: 18, maxWidth: "20ch" }}>{p.title}</h1>
              <p className="lead" style={{ marginTop: 24, maxWidth: "58ch" }}>{p.sub}</p>
            </div>
            <div className="prod-card-side">
              <div className="big-num" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(96px, 12vw, 200px)", lineHeight: 0.9, letterSpacing: "-0.04em", color: "var(--accent)", fontWeight: 600 }}>{p.n}</div>
              <div className="tiny mono" style={{ color: "var(--text-3)", marginTop: 8 }}>{p.code}</div>
            </div>
          </div>
          <div className="prod-meta">
            {p.meta.map((m, i) => (
              <div key={i} className="prod-meta-item">
                <div className="tiny mono" style={{ color: "var(--text-3)" }}>{m.label}</div>
                <div className="h-md" style={{ marginTop: 4 }}>{m.value}</div>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          .prod-head { display: grid; grid-template-columns: 1fr auto; gap: clamp(20px, 3vw, 56px); align-items: end; }
          .prod-card-side { text-align: right; }
          @media (max-width: 800px) { .prod-head { grid-template-columns: 1fr; } .prod-card-side { text-align: left; } }
          .prod-meta {
            margin-top: clamp(36px, 4vw, 64px);
            display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
            gap: 24px;
            padding-top: 24px; border-top: 1px solid var(--hairline);
            max-width: 800px;
          }
        `}</style>
      </section>

      <section className="section">
        <div className="container">
          <p className="lead" style={{ maxWidth: "60ch", fontSize: "clamp(20px, 1.8vw, 26px)" }}>{p.blurb}</p>
        </div>
      </section>

      <section className="section section-quiet">
        <div className="container">
          <div className="grid-2" style={{ gap: "clamp(28px, 4vw, 80px)" }}>
            {p.sections.map((s, i) => (
              <div key={i}>
                <div className="section-label" style={{ marginBottom: 14 }}>{s.eyebrow}</div>
                <h3 className="h-lg">{s.title}</h3>
                <p className="lead" style={{ marginTop: 16, maxWidth: "44ch" }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="section-label">Defend / deliver</div>
            <h2 className="h-xl">In your CISO's words. <span className="accent">In our architecture.</span></h2>
          </div>
          <div style={{ marginTop: 48 }}>
            <DefendDeliver defend={p.capabilities.defend} deliver={p.capabilities.deliver} />
          </div>
        </div>
      </section>

      <section className="section section-quiet">
        <div className="container">
          <div className="next-up">
            <div>
              <div className="tiny mono" style={{ color: "var(--text-3)", letterSpacing: "0.16em", textTransform: "uppercase" }}>Next in the platform</div>
              <h3 className="h-lg" style={{ marginTop: 8 }}>{p.next.label}</h3>
              <p className="lead" style={{ marginTop: 8, maxWidth: "44ch" }}>{p.next.desc}</p>
            </div>
            <a href={p.next.href} className="btn btn-ghost">Read on<span aria-hidden>→</span></a>
          </div>
        </div>
        <style>{`
          .next-up {
            display: grid; grid-template-columns: 1fr auto; gap: 24px; align-items: center;
            border: 1px solid var(--hairline); border-radius: var(--r-md);
            padding: clamp(24px, 3vw, 36px); background: var(--surface);
          }
          @media (max-width: 700px) { .next-up { grid-template-columns: 1fr; } }
        `}</style>
      </section>

      <PageCTA primaryHref="contact.html" secondaryHref="platform.html" secondary="Read the platform brief" />
    </Page>
  );
}

window.ProductPage = ProductPage;
window.PRODUCT_DATA = PRODUCT_DATA;
