// Hero.jsx · v2 — typographic + WORM metaphor as visual hero
function Hero({ variant = "energy", onVariant }) {
  const isEnergy = variant === "energy";
  return (
    <section className="ms-hero" id="top">
      <div className="ms-hero-inner">
        <div className="ms-hero-copy">
          <div className="t-eyebrow t-eyebrow--blue">Sovereign AI · {isEnergy ? "energy & utilities" : "banking & insurance"}</div>
          <h1 className="ms-hero-title">
            AI you can defend<br/>
            <span className="ms-hero-accent">to your regulator.</span>
          </h1>
          <p className="ms-hero-lead">
            Arda is the sovereign AI platform regulated enterprises own, operate and govern — inside their own trust boundary, with the audit trail their CISO and their regulator expect.
          </p>
          <div className="ms-hero-actions">
            <a className="btn btn-primary btn-lg" href="#cta">Book a deep-dive<span className="arr"/></a>
            <a className="btn btn-ghost btn-lg" href="#architecture">See the architecture →</a>
          </div>
          <div className="ms-hero-foot">
            <span><b>Sovereignty here</b> means control, operation and governance — not location.</span>
          </div>
        </div>

        <div className="ms-hero-art">
          <WormDiagram variant={variant} />
          <div className="ms-hero-switch" role="tablist" aria-label="Variant">
            <button aria-pressed={isEnergy}  onClick={() => onVariant("energy")}>Energy · OT</button>
            <button aria-pressed={!isEnergy} onClick={() => onVariant("fsi")}>FSI · claims</button>
          </div>
        </div>
      </div>
    </section>
  );
}

window.Hero = Hero;
