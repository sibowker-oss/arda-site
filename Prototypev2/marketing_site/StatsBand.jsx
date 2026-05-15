// StatsBand.jsx — sourced stat row
const STATS = [
  { num: "~18", suf: "×", lab: "Token growth by 2030", src: "Capgemini, Gartner 2025" },
  { num: "5–30", suf: "×", lab: "More tokens per agentic task", src: "Capgemini agentic AI report" },
  { num: "33", suf: "%", lab: "Enterprise apps agentic by 2028", src: "Gartner, 2026" },
  { num: ">40", suf: "%", lab: "Cloud AI projects cancelled by 2027", src: "Gartner cloud AI tracker" },
];

function StatsBand() {
  return (
    <section className="ms-stats">
      <div className="ms-stats-pattern" aria-hidden="true" />
      <div className="ms-stats-inner">
        <div className="ms-section-head" style={{textAlign: 'center', maxWidth: 720, margin: '0 auto 48px'}}>
          <div className="t-eyebrow t-eyebrow--on-dark">The trajectory</div>
          <h2 className="ms-h2 ms-h2--center">Enterprise token demand<br/>is going up by an order of magnitude.</h2>
          <p className="ms-section-lead ms-section-lead--on-dark">
            Agents use 5–30× more tokens than chat. By 2028, a third of enterprise apps include them. The economics of API-priced AI fall apart in this regime.
          </p>
        </div>
        <div className="ms-stats-grid">
          {STATS.map(s => (
            <div className="ms-stat" key={s.lab}>
              <div className="ms-stat-num">{s.num}<small>{s.suf}</small></div>
              <div className="ms-stat-lab">{s.lab}</div>
              <div className="ms-stat-src">{s.src}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

window.StatsBand = StatsBand;
