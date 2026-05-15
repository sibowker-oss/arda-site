/* eslint-disable */
// Mounts the homepage. Sees globals from shell.jsx and home.jsx.

function App() {
  return (
    <Page active="home">
      <Hero />
      <Vision />
      <OwnOperateGovern />
      <BoundaryDiagram />
      <Products />
      <Industries />
      <StatsBand />
      <Persona />
      <CTA />
    </Page>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
