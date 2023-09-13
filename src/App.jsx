import { useState } from "react";
import Preloader from "./components/preloader/preloader";
import Canva from "./components/canvaPlane/canva";
import FirstSection from "./components/firstSection/firstSec";
import { ReactLenis } from "@studio-freight/react-lenis";
import Navbar from "./components/navbar/nav";

function App() {
  const [preloader, setPreloader] = useState(true);

  return (
    <>
      <ReactLenis root>
        {preloader && <Preloader preloader={preloader} setPreloader={setPreloader} />}
        <main id="main">
          <Navbar />
          <Canva preloader={preloader} setPreloader={setPreloader} />
          <FirstSection preloader={preloader} setPreloader={setPreloader} />
          <section id="about" className="full-screen flex-center text-white">
            lksdfjklsdfjkskkj
          </section>
          <section id="jet" className="full-screen flex-center text-white ">
            <h2 className="z-[21] mix-blend-difference text-[72px] ">lksdfjklsdfjkskkj</h2>
          </section>
        </main>
      </ReactLenis>
    </>
  );
}

export default App;
