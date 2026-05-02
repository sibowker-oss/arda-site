/* eslint-disable */
// About — the company POV. Per Tone of Voice, this page tells the
// "why this company exists" story: the second tier of regulated AI buyers,
// and what infrastructure has to look like for that tier.

function AboutPage() {
  return (
    <Page active="about">
      <section className="page-hero bg-pattern">
        <div className="container">
          <Breadcrumb items={[{ label: "Arda", href: "index.html" }, { label: "About" }]} />
          <div className="eyebrow" style={{ marginTop: 28 }}>About · The wedge thesis</div>
          <h1 className="display" style={{ marginTop: 18, maxWidth: "20ch" }}>
            We exist because the <span className="accent">second tier</span> can't run on hyperscaler defaults.
          </h1>
          <p className="lead" style={{ marginTop: 24, maxWidth: "62ch" }}>
            Day-to-day productivity AI will run on Microsoft, Google and Anthropic — fast, cheap, and good enough for the security model. But the workloads regulated enterprises cannot allow to fail — the core processes, the most sensitive data, AI running at scale on regulated information — those cannot run there. Not because the contract is bad. Because the standard hyperscaler stack was not built to carry them.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ gap: "clamp(28px, 4vw, 80px)", alignItems: "start" }}>
            <div>
              <div className="section-label">Two tiers, two stacks</div>
              <h2 className="h-xl">Two stacks. Two workloads. <span className="accent">One coherent answer.</span></h2>
            </div>
            <div>
              <p className="lead" style={{ maxWidth: "44ch" }}>
                Arda is the platform for that second tier. Whoever builds it gets to write the rules of regulated AI for the next decade. We intend to write them.
              </p>
              <p className="lead" style={{ maxWidth: "44ch", marginTop: 16 }}>
                Not by competing with the hyperscalers. By solving the workloads they architecturally won't.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-quiet">
        <div className="container">
          <div className="section-head">
            <div className="section-label">Principles</div>
            <h2 className="h-xl">How we build, in three lines.</h2>
          </div>

          <div className="principles">
            <article className="principle">
              <div className="big-num accent" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(72px, 8vw, 140px)", lineHeight: 0.95, fontWeight: 600, letterSpacing: "-0.03em" }}>01</div>
              <h3 className="h-lg" style={{ marginTop: 16 }}>Sovereign by architecture, not aspiration.</h3>
              <p className="body" style={{ marginTop: 16, color: "var(--text-2)", lineHeight: 1.6, maxWidth: "44ch" }}>
                Every claim we make about data custody is enforced by the network path, the deployment topology, and the contract — not by a checkbox in a settings page.
              </p>
            </article>

            <article className="principle">
              <div className="big-num accent" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(72px, 8vw, 140px)", lineHeight: 0.95, fontWeight: 600, letterSpacing: "-0.03em" }}>02</div>
              <h3 className="h-lg" style={{ marginTop: 16 }}>The receipt is the product.</h3>
              <p className="body" style={{ marginTop: 16, color: "var(--text-2)", lineHeight: 1.6, maxWidth: "44ch" }}>
                A regulated AI system that you cannot reproduce, replay, or hand to an auditor is not a regulated AI system. It is a liability with a chat box on top.
              </p>
            </article>

            <article className="principle">
              <div className="big-num accent" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(72px, 8vw, 140px)", lineHeight: 0.95, fontWeight: 600, letterSpacing: "-0.03em" }}>03</div>
              <h3 className="h-lg" style={{ marginTop: 16 }}>Plain language, plainly defended.</h3>
              <p className="body" style={{ marginTop: 16, color: "var(--text-2)", lineHeight: 1.6, maxWidth: "44ch" }}>
                We name the regulator. We name the workflow. We don't sell breakthroughs. We sell something defensible — to a CISO, to operational risk, and to a regulator who already has an opinion.
              </p>
            </article>
          </div>
          <style>{`
            .principles { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px; background: var(--hairline); border: 1px solid var(--hairline); border-radius: var(--r-md); overflow: hidden; margin-top: 48px; }
            @media (max-width: 800px) { .principles { grid-template-columns: 1fr; } }
            .principle { background: var(--bg); padding: clamp(28px, 3vw, 40px); }
          `}</style>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ gap: "clamp(28px, 4vw, 80px)", alignItems: "start" }}>
            <div>
              <div className="section-label">Where we are</div>
              <h2 className="h-xl">Australian ground truth. <span className="accent">Internationally portable.</span></h2>
              <p className="lead" style={{ marginTop: 20, maxWidth: "44ch" }}>
                We started where the regulators already have an opinion: AESCSF on the energy side, APRA's CPS 234 and CPS 230 on the financial side, and the SOCI Act for critical infrastructure. The control mappings travel — the obligations rhyme everywhere.
              </p>
            </div>
            <div className="pillars-mini">
              <div className="pillar-mini">
                <div className="tiny mono" style={{ color: "var(--text-3)" }}>HQ</div>
                <div className="h-md" style={{ marginTop: 6 }}>Sydney, AU</div>
              </div>
              <div className="pillar-mini">
                <div className="tiny mono" style={{ color: "var(--text-3)" }}>FOUNDED</div>
                <div className="h-md" style={{ marginTop: 6 }}>2024</div>
              </div>
              <div className="pillar-mini">
                <div className="tiny mono" style={{ color: "var(--text-3)" }}>STAGE</div>
                <div className="h-md" style={{ marginTop: 6 }}>Phase 1 GTM</div>
              </div>
              <div className="pillar-mini">
                <div className="tiny mono" style={{ color: "var(--text-3)" }}>FOCUS</div>
                <div className="h-md" style={{ marginTop: 6 }}>Energy · FSI</div>
              </div>
            </div>
          </div>
          <style>{`
            .pillars-mini { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1px; background: var(--hairline); border: 1px solid var(--hairline); border-radius: var(--r-md); overflow: hidden; }
            .pillar-mini { background: var(--surface); padding: 24px; }
          `}</style>
        </div>
      </section>

      <PageCTA
        title="If this thesis sounds right, we should probably talk."
        sub="An architecture review with our team is twenty-five minutes — your security, platform and risk leads on one call. We bring the deployment plan; you bring the constraints we'll have to design around."
        primaryHref="contact.html"
        secondaryHref="platform.html"
        secondary="Read the platform brief"
      />
    </Page>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<AboutPage />);
