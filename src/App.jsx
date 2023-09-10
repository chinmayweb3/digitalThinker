import { useState } from "react";
import Preloader from "./components/preloader/preloader";
import Canva from "./components/canvaPlane/canva";
import { ReactLenis } from "@studio-freight/react-lenis";
import FirstSection from "./components/firstSection/firstSec";

function App() {
  const [preloader, setPreloader] = useState(true);
  return (
    <>
      <main className="main">
        {/* <ReactLenis root> */}
        {preloader && <Preloader preloader={preloader} setPreloader={setPreloader} />}
        <Canva preloader={preloader} setPreloader={setPreloader} />
        <FirstSection preloader={preloader} setPreloader={setPreloader} />
        <section className="full-screen flex-center bg-amber-300 text-white">lksdfjklsdfjkskkj</section>
        <section className="full-screen flex-center bg-rose-400 text-white">lksdfjklsdfjkskkj</section>
        {/* </ReactLenis> */}
      </main>
    </>
  );
}

export default App;
