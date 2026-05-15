// OwnOperateGovern.jsx · v2 — type-led, no stock icons, monogram numerals
const OOG_ITEMS = [
  {
    eyebrow: "Own",
    glyph: "O",
    title: "Open weights, on your hardware",
    body: "Llama, Mistral, Qwen — running on your GPU pool, in your environment. The weights are yours. The custody of every prompt and response is yours.",
    proof: "No third-party model API in the data path."
  },
  {
    eyebrow: "Operate",
    glyph: "P",
    title: "Inside your existing trust boundary",
    body: "Integrates with your IdP, your RBAC, your SIEM. No new perimeter, no new vendor risk review. Your security team sees one capability — not a sprawl of pilots.",
    proof: "Same controls. Same logs. Same posture."
  },
  {
    eyebrow: "Govern",
    glyph: "G",
    title: "Audit-grade trail, by default",
    body: "Every prompt, response and model interaction logged. Reportable to APRA, AESCSF, FCA — whoever sits across the table. Built for the regulator review, not the demo.",
    proof: "Every claim above is backed by a control listed in the evidence pack."
  }
];

function OwnOperateGovern() {
  return (
    <section className="ms-oog" id="platform">
      <div className="ms-section-head">
        <div className="t-eyebrow t-eyebrow--blue">The platform</div>
        <h2 className="ms-h2">Own. Operate. Govern.</h2>
        <p className="ms-section-lead">Three sub-claims, three proof points. The structural device the rest of this page is built on.</p>
      </div>
      <div className="ms-oog-grid">
        {OOG_ITEMS.map((it, i) => (
          <article className="ms-oog-tile" key={it.eyebrow}>
            <div className="ms-oog-rule">
              <span className="ms-oog-num">0{i + 1}</span>
              <span className="ms-oog-glyph" aria-hidden="true">{it.glyph}</span>
            </div>
            <div className="t-eyebrow t-eyebrow--blue">{it.eyebrow}</div>
            <h3 className="ms-oog-title">{it.title}</h3>
            <p className="ms-oog-body">{it.body}</p>
            <div className="ms-oog-proof">{it.proof}</div>
          </article>
        ))}
      </div>
    </section>
  );
}

window.OwnOperateGovern = OwnOperateGovern;
