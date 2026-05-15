// ThreeBarriers.jsx — Challenge / Opportunity / Arda's Answer table
const BARRIERS = [
  {
    head: "Access to the right data",
    challenge: "Core systems and sensitive data are off-limits to public cloud AI. Security blocks adoption before it starts.",
    opportunity: "Increased adoption through value-driven projects, on the data that actually matters.",
    answer: "Sovereign platform linked to existing systems."
  },
  {
    head: "Security & trust",
    challenge: "Pilots create new perimeters and new vendor risk reviews. Same posture, more surface.",
    opportunity: "No new trust boundary. Same security posture and controls.",
    answer: "Runs entirely inside your environment."
  },
  {
    head: "Cost & ROI",
    challenge: "Token-based pricing is unpredictable. Hard to build a board-level payback case.",
    opportunity: "Predictable and scalable costs. Better economics at scale.",
    answer: "Open-weight models on dedicated GPU. Costs stay flat as usage grows."
  },
];

function ThreeBarriers() {
  return (
    <section className="ms-barriers" id="sectors">
      <div className="ms-section-head">
        <div className="t-eyebrow">The three barriers</div>
        <h2 className="ms-h2">What blocks enterprise AI today.<br/>And how we answer it.</h2>
      </div>
      <div className="ms-barriers-table">
        <div className="ms-barriers-row ms-barriers-head">
          <div></div>
          <div className="t-eyebrow">The challenge</div>
          <div className="t-eyebrow">The opportunity</div>
          <div className="t-eyebrow t-eyebrow--blue">Arda's answer</div>
        </div>
        {BARRIERS.map(b => (
          <div className="ms-barriers-row" key={b.head}>
            <div className="ms-barriers-h">{b.head}</div>
            <div className="ms-barriers-c">{b.challenge}</div>
            <div className="ms-barriers-c">{b.opportunity}</div>
            <div className="ms-barriers-a">{b.answer}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

window.ThreeBarriers = ThreeBarriers;
