/* eslint-disable */
// Tweaks panel — exposes hero variant, theme, pillar style, density

function ArdaTweaks({ tweaks, setTweak }) {
  return (
    <TweaksPanel title="Tweaks">
      <TweakSection label="Hero variant" />
      <TweakRadio
        label="Line"
        value={tweaks.heroVariant}
        onChange={v => setTweak("heroVariant", v)}
        options={[
          { value: "A", label: "A" },
          { value: "B", label: "B" },
          { value: "C", label: "C" },
        ]}
      />
      <div style={{ margin: "2px 0 6px", fontSize: 11, color: "#9aa3b6", fontFamily: "JetBrains Mono, monospace", lineHeight: 1.45 }}>
        {tweaks.heroVariant === "A" && "AI you can defend to your regulator."}
        {tweaks.heroVariant === "B" && "The AI you own. Operate. Govern."}
        {tweaks.heroVariant === "C" && "Sovereign AI for the workloads that can't leave the boundary."}
      </div>

      <TweakSection label="Theme" />
      <TweakRadio
        label="Mode"
        value={tweaks.theme}
        onChange={v => setTweak("theme", v)}
        options={[
          { value: "dark", label: "Dark" },
          { value: "light", label: "Light" },
        ]}
      />

      <TweakSection label="Pillars" />
      <TweakRadio
        label="Layout"
        value={tweaks.pillarStyle}
        onChange={v => setTweak("pillarStyle", v)}
        options={[
          { value: "cards", label: "Cards" },
          { value: "split", label: "Split" },
        ]}
      />

      <TweakSection label="Density" />
      <TweakRadio
        label="Spacing"
        value={tweaks.density}
        onChange={v => setTweak("density", v)}
        options={[
          { value: "compressed", label: "Tight" },
          { value: "default", label: "Default" },
          { value: "expansive", label: "Open" },
        ]}
      />
    </TweaksPanel>
  );
}

window.ArdaTweaks = ArdaTweaks;
