import { useState } from "react";
import Preloader from "./components/preloader/preloader";
import Canva from "./components/canvaPlane/canva";

function App() {
  const [preloader, setPreloader] = useState(true);
  return (
    <>
      {preloader && <Preloader preloader={preloader} setPreloader={setPreloader} />}
      <Canva />
      <section className="full-screen flex-center bg-[#999] text-white">lksdfjklsdfjkskkj</section>
      <section className="full-screen flex-center bg-amber-300 text-white">lksdfjklsdfjkskkj</section>
    </>
  );
}

export default App;
