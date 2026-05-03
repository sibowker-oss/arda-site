/* eslint-disable */
// Contact page — purpose is the architecture review, not a generic "get in touch".
// Form is a real-feeling mock; submit is no-op (this is a marketing site mock).

function ContactPage() {
  const [submitted, setSubmitted] = React.useState(false);
  const onSubmit = (e) => { e.preventDefault(); setSubmitted(true); };

  return (
    <Page active="contact">
      <section className="page-hero bg-pattern">
        <div className="container">
          <Breadcrumb items={[{ label: "Arda", href: "index.html" }, { label: "Contact" }]} />
          <div className="eyebrow" style={{ marginTop: 28 }}>Contact · Architecture review</div>
          <h1 className="display" style={{ marginTop: 18, maxWidth: "20ch" }}>
            Twenty-five minutes. <span className="accent">Your CISO included.</span>
          </h1>
          <p className="lead" style={{ marginTop: 24, maxWidth: "60ch" }}>
            We don't run discovery calls. The first conversation is an architecture review — your security, platform and risk leads on one call, our team in the other window, and a working agenda for the next ninety days at the end.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <aside className="contact-aside">
              <div className="section-label">What you'll leave with</div>
              <ul className="proof-list" style={{ marginTop: 18 }}>
                <li><strong>A reference architecture</strong> for your cloud — VPC topology, identity wiring, model-traffic path.</li>
                <li><strong>A control mapping</strong> drafted to your sector — AESCSF, CPS 234 / 230, SOCI Act, SOC 2.</li>
                <li><strong>A deployment plan</strong> targeting under 90 days from signed to live.</li>
                <li><strong>A peer reference</strong> in your sector — what they deployed, what they didn't, what they wish they'd known.</li>
              </ul>

              <div className="hairline" style={{ margin: "32px 0" }} />

              <div className="section-label">Or, the quiet route</div>
              <div className="quiet-contact">
                <div className="quiet-row">
                  <span className="tiny mono" style={{ color: "var(--text-3)" }}>EMAIL</span>
                  <a href="mailto:architecture@arda.ai" className="contact-link">architecture@arda.ai</a>
                </div>
                <div className="quiet-row">
                  <span className="tiny mono" style={{ color: "var(--text-3)" }}>SECURITY</span>
                  <a href="mailto:security@arda.ai" className="contact-link">security@arda.ai · PGP on request</a>
                </div>
                <div className="quiet-row">
                  <span className="tiny mono" style={{ color: "var(--text-3)" }}>SYDNEY</span>
                  <span style={{ color: "var(--text-2)" }}>Level 18, 1 Martin Place</span>
                </div>
              </div>
            </aside>

            <form className="contact-form" onSubmit={onSubmit}>
              {!submitted && (
                <>
                  <div className="form-row">
                    <label>
                      <div className="form-lbl">Name</div>
                      <input type="text" required placeholder="Avery Holm" />
                    </label>
                    <label>
                      <div className="form-lbl">Work email</div>
                      <input type="email" required placeholder="avery.holm@yourbank.com.au" />
                    </label>
                  </div>
                  <div className="form-row">
                    <label>
                      <div className="form-lbl">Organisation</div>
                      <input type="text" required placeholder="Your bank, network or insurer" />
                    </label>
                    <label>
                      <div className="form-lbl">Sector</div>
                      <select defaultValue="">
                        <option value="" disabled>Select…</option>
                        <option>Energy networks (T&D)</option>
                        <option>Banking</option>
                        <option>Insurance</option>
                        <option>Superannuation</option>
                        <option>Other critical infrastructure</option>
                      </select>
                    </label>
                  </div>
                  <label>
                    <div className="form-lbl">Workload you'd open with</div>
                    <textarea rows={5} placeholder="Briefly: the workflow you want to put AI inside, and the reason your current stack can't carry it. Example: 'Underwriter assist over broker submissions; the policy team won't approve any path that egresses customer PII to a hyperscaler endpoint.'" />
                  </label>
                  <div className="form-row form-row-meta">
                    <label className="checkbox-row">
                      <input type="checkbox" />
                      <span>I'm authorised to discuss our security and architecture posture.</span>
                    </label>
                  </div>
                  <div style={{ display: "flex", gap: 14, marginTop: 8, alignItems: "center", flexWrap: "wrap" }}>
                    <button type="submit" className="btn btn-primary">Request architecture review<span aria-hidden>→</span></button>
                    <span className="tiny mono" style={{ color: "var(--text-3)" }}>Reply within one business day · Sydney time</span>
                  </div>
                </>
              )}
              {submitted && (
                <div className="thanks">
                  <div className="tiny mono" style={{ color: "var(--accent)" }}>RECEIVED</div>
                  <h3 className="h-lg" style={{ marginTop: 8 }}>Thanks. Someone from our architecture team will be in touch within one business day.</h3>
                  <p className="body" style={{ marginTop: 14, color: "var(--text-2)", maxWidth: "44ch" }}>
                    They'll send three time options and a short pre-read keyed to the workload you described — so the call starts inside your problem, not at the start of ours.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      <style>{`
        .contact-grid {
          display: grid; grid-template-columns: 0.85fr 1.15fr;
          gap: clamp(24px, 4vw, 64px);
          align-items: start;
        }
        @media (max-width: 900px) { .contact-grid { grid-template-columns: 1fr; } }

        .contact-aside { padding-right: clamp(0px, 2vw, 24px); }
        .contact-link { color: var(--text); border-bottom: 1px solid color-mix(in oklab, var(--accent) 40%, transparent); }
        .contact-link:hover { color: var(--accent); }
        .quiet-contact { display: grid; gap: 14px; margin-top: 18px; }
        .quiet-row { display: grid; grid-template-columns: 84px 1fr; gap: 14px; align-items: baseline; }

        .proof-list { list-style: none; padding: 0; margin: 0; display: grid; gap: 12px; }
        .proof-list li { font-size: 14.5px; line-height: 1.6; color: var(--text-2); padding-left: 18px; position: relative; }
        .proof-list li::before { content: "▸"; position: absolute; left: 0; color: var(--accent); font-size: 11px; top: 5px; }
        .proof-list li strong { color: var(--text); font-weight: 600; }

        .contact-form {
          background: var(--surface);
          border: 1px solid var(--hairline);
          border-radius: var(--r-md);
          padding: clamp(24px, 3vw, 40px);
          display: grid; gap: 18px;
        }
        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; }
        .form-row-meta { grid-template-columns: 1fr; }
        @media (max-width: 600px) { .form-row { grid-template-columns: 1fr; } }
        .form-lbl { font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.16em; text-transform: uppercase; color: var(--text-3); margin-bottom: 8px; }
        .contact-form input[type=text],
        .contact-form input[type=email],
        .contact-form select,
        .contact-form textarea {
          width: 100%;
          background: var(--surface-2);
          border: 1px solid var(--hairline);
          border-radius: var(--r-sm);
          padding: 12px 14px;
          color: var(--text);
          font-family: var(--font-body);
          font-size: 15px;
          transition: border-color 160ms ease;
        }
        .contact-form textarea { font-family: var(--font-body); resize: vertical; line-height: 1.55; }
        .contact-form input:focus,
        .contact-form select:focus,
        .contact-form textarea:focus { outline: none; border-color: var(--accent); }
        .contact-form ::placeholder { color: var(--text-3); }

        .checkbox-row { display: flex; gap: 10px; align-items: flex-start; cursor: pointer; font-size: 14px; color: var(--text-2); }
        .checkbox-row input { margin-top: 3px; accent-color: var(--accent); }

        .thanks { padding: 8px 0; }
      `}</style>
    </Page>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<ContactPage />);
