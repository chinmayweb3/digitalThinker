import { useState } from "react";
import Preloader from "./components/preloader/preloader";
import Canva from "./components/canvaPlane/canva";
import FirstSection from "./components/firstSection/firstSec";
import Navbar from "./components/navbar/nav";
import SecondSection from "./components/secondSection/secondSection";
import ThirdSection from "./components/thirdSection/thirdSection";

function App() {
  const [preloader, setPreloader] = useState(true);

  return (
    <>
      {/* <ReactLenis root > */}
      {preloader && <Preloader preloader={preloader} setPreloader={setPreloader} />}
      <main id="main">
        <Navbar />
        <Canva preloader={preloader} setPreloader={setPreloader} />

        <FirstSection />

        <SecondSection />

        <ThirdSection />
      </main>
      {/* </ReactLenis> */}
    </>
  );
}

export default App;
