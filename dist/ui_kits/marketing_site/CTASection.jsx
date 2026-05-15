// CTASection.jsx · v2 — no stock icons, sober list, sober form
function CTASection() {
  const [submitted, setSubmitted] = React.useState(false);
  const [email, setEmail] = React.useState("");

  return (
    <section className="ms-cta" id="cta">
      <div className="ms-cta-inner">
        <div>
          <div className="t-eyebrow t-eyebrow--lime">Next step</div>
          <h2 className="ms-h2">Book a deep-dive with your<br/>infrastructure team.</h2>
          <p className="ms-cta-lead">
            We sit down with your CISO, your platform leads and your regulator-facing team. Tailored cost model, scoped proof of concept, security review — in that order.
          </p>
          <ol className="ms-cta-list">
            <li><span className="ms-cta-num">01</span><span>Architecture review with your security team</span></li>
            <li><span className="ms-cta-num">02</span><span>Cost model based on your actual usage profile</span></li>
            <li><span className="ms-cta-num">03</span><span>Proof of concept scoped to one workload</span></li>
          </ol>
        </div>
        <form className="ms-cta-form" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
          {!submitted ? (
            <>
              <div className="t-eyebrow">Request a deep-dive</div>
              <label>Work email</label>
              <input className="input" type="email" placeholder="risk.lead@yourcompany.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
              <label>Regulator</label>
              <select className="select" defaultValue="APRA CPS 234 · Banking">
                <option>AESCSF · Australian Energy</option>
                <option>APRA CPS 234 · Banking</option>
                <option>FCA · UK Financial</option>
                <option>NIST 800-53 · US Federal</option>
                <option>HIPAA · US Healthcare</option>
              </select>
              <label>Workload of interest</label>
              <select className="select" defaultValue="Knowledge agent · internal">
                <option>Knowledge agent · internal</option>
                <option>Coding assistant · developer</option>
                <option>Customer-facing assistant</option>
                <option>Document review · contracts</option>
              </select>
              <button className="btn btn-primary btn-lg" type="submit">Request deep-dive<span className="arr"/></button>
              <div className="ms-cta-fineprint">No marketing automation. A human will reply within two business days.</div>
            </>
          ) : (
            <div className="ms-cta-thanks">
              <div className="ms-cta-stamp">Received</div>
              <h3 className="ms-h3">Booked. We'll be in touch within two business days.</h3>
              <p>You'll get a calendar invite from a human, not a bot. The first session is scoped to architecture and security — bring whoever owns those.</p>
              <button className="btn btn-secondary" onClick={() => { setSubmitted(false); setEmail(""); }}>Send another</button>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

window.CTASection = CTASection;
