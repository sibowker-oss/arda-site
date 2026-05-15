// WormDiagram.jsx · v2 — boundary metaphor, energy + FSI variants
function WormDiagram({ variant = "energy" }) {
  const isEnergy = variant === "energy";
  const sorTitle = isEnergy ? "SCADA" : "Claims DB";
  const sorSub   = isEnergy ? "OT system of record" : "underwriting record";
  return (
    <div className="ms-worm">
      <svg viewBox="0 0 760 380" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Inside vs outside the boundary">
        <rect className="ms-worm-boundary" x="120" y="50" width="430" height="220" rx="14"/>
        <text className="ms-worm-bound-lab" x="138" y="72">Your trust boundary</text>

        <g>
          <rect className="ms-worm-node" x="20" y="158" width="100" height="90" rx="8"/>
          <text className="ms-worm-node-t" x="70" y="200" textAnchor="middle">User</text>
          <text className="ms-worm-node-s" x="70" y="220" textAnchor="middle">{isEnergy ? "operator" : "underwriter"}</text>
        </g>

        <g>
          <rect className="ms-worm-node" x="220" y="120" width="140" height="80" rx="8"/>
          <text className="ms-worm-node-t" x="290" y="160" textAnchor="middle">Arda agent</text>
          <text className="ms-worm-node-s" x="290" y="180" textAnchor="middle">in your VPC</text>
        </g>

        <g>
          <rect className="ms-worm-node" x="420" y="120" width="120" height="80" rx="8"/>
          <text className="ms-worm-node-t" x="480" y="160" textAnchor="middle">{sorTitle}</text>
          <text className="ms-worm-node-s" x="480" y="180" textAnchor="middle">{sorSub}</text>
        </g>

        <g>
          <rect className="ms-worm-node ms-worm-node--bad" x="600" y="148" width="140" height="100" rx="8"/>
          <text className="ms-worm-node-t" x="670" y="186" textAnchor="middle">Public cloud</text>
          <text className="ms-worm-node-s" x="670" y="206" textAnchor="middle">third-party LLM</text>
          <text className="ms-worm-node-s ms-worm-node-warn" x="670" y="224" textAnchor="middle">PII visible</text>
        </g>

        <path className="ms-worm-base" d="M 120 200 L 220 160" />
        <path className="ms-worm-base" d="M 360 160 L 420 160" />
        <path className="ms-worm-base" d="M 120 200 C 220 280, 500 320, 600 200" />

        <path className="ms-worm-good ms-worm-anim-good"
              d="M 120 200 C 170 175, 200 165, 220 160 L 360 160 C 390 160, 410 160, 420 160" />
        <path className="ms-worm-bad ms-worm-anim-bad"
              d="M 120 200 C 220 280, 500 320, 600 200" />

        <circle className="ms-worm-leak" cx="350" cy="296" r="3.5"/>
        <circle className="ms-worm-leak" cx="410" cy="304" r="3" style={{animationDelay: "0.6s"}}/>
        <circle className="ms-worm-leak" cx="470" cy="296" r="3.5" style={{animationDelay: "1.2s"}}/>

        <text className="ms-worm-lab ms-worm-lab--good" x="290" y="106">Inside the boundary</text>
        <text className="ms-worm-lab ms-worm-lab--bad"  x="380" y="346">Outside the boundary</text>
      </svg>
    </div>
  );
}

window.WormDiagram = WormDiagram;
