import { useEffect, useState } from "react";
import Preloader from "./components/preloader/preloader";
import Canva from "./components/canvaPlane/canva";
import FirstSection from "./components/firstSection/firstSec";
import { Elastic, gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactLenis } from "@studio-freight/react-lenis";
import { Power4 } from "gsap";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [preloader, setPreloader] = useState(true);

  return (
    <>
      <ReactLenis root>
        {preloader && <Preloader preloader={preloader} setPreloader={setPreloader} />}
        <main id="main">
          <Canva preloader={preloader} setPreloader={setPreloader} />
          <FirstSection preloader={preloader} setPreloader={setPreloader} />
          <section className="full-screen flex-center text-white">lksdfjklsdfjkskkj</section>
          <section className="full-screen flex-center text-white">lksdfjklsdfjkskkj</section>
        </main>
      </ReactLenis>
    </>
  );
}

export default App;
