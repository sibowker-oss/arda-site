/* eslint-disable */
// Mounts the homepage. In its own file so it sees the globals from
// shell.jsx, home.jsx, tweaks-panel.jsx, tweaks.jsx (each Babel <script>
// is isolated; sharing happens through window).

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "theme": "dark",
  "density": "default",
  "heroVariant": "C",
  "pillarStyle": "cards"
}/*EDITMODE-END*/;

function App() {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);

  React.useEffect(() => {
    const el = document.getElementById("__arda_state");
    if (el) el.textContent = JSON.stringify(tweaks);
    document.documentElement.setAttribute("data-theme", tweaks.theme);
    document.documentElement.setAttribute("data-density", tweaks.density);
  }, [tweaks]);

  return (
    <Page active="home">
      <Hero variant={tweaks.heroVariant} />
      <Vision />
      <Pillars style={tweaks.pillarStyle} />
      <Products />
      <Industries />
      <Proof />
      <Persona />
      <CTA />
      <ArdaTweaks tweaks={tweaks} setTweak={setTweak} />
    </Page>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
