import { useState } from "react";
import Preloader from "./components/preloader/preloader";
import Canva from "./components/canvaPlane/canva";
import { ReactLenis } from "@studio-freight/react-lenis";
import FirstSection from "./components/firstSection/firstSec";

function App() {
  const [preloader, setPreloader] = useState(true);
  return (
    <>
      <ReactLenis root>
        {preloader && <Preloader preloader={preloader} setPreloader={setPreloader} />}
        <Canva />
        <FirstSection preloader={preloader} setPreloader={setPreloader} />
        <section className="full-screen flex-center bg-amber-300 text-white">lksdfjklsdfjkskkj</section>
      </ReactLenis>
    </>
  );
}

export default App;
