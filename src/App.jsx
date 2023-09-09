import { useState } from "react";
import Preloader from "./components/preloader/preloader";
import Canva from "./components/canvaPlane/canva";
import { ReactLenis } from "@studio-freight/react-lenis";

function App() {
  const [preloader, setPreloader] = useState(true);
  return (
    <>
      <ReactLenis root>
        {preloader && <Preloader preloader={preloader} setPreloader={setPreloader} />}
        <Canva />
        <section className="full-screen flex-center bg-[#999] text-white text-[72px]">
          <h2 className="z-[21]">sdklfj lkjjlk</h2>
          <h2 className="z-[19]">sdklfj lkjjkl lkjjlk</h2>
        </section>
        <section className="full-screen flex-center bg-amber-300 text-white">lksdfjklsdfjkskkj</section>
      </ReactLenis>
    </>
  );
}

export default App;
