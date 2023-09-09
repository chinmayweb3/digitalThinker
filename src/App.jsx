import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [remove, setRem] = useState(false);
  useEffect(() => {
    if (!remove) return;
    gsap.to("#animated-hidden", {
      delay: 1,
      top: "-100vh",
      onComplete: () => {
        document.getElementsByTagName("body")[0].style.overflow = "auto";
      },
    });
  }, [remove]);

  return (
    <>
      {/* <ReactLenis root option={{ smoothWheel: true, infinite: true }}> */}
      <div id="animated-hidden" className="fixed top-0 left-0 bg-lime-500 h-[100vh] w-full flex justify-center items-center overflow-">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2 }}
          className="font-mono flex flex-col justify-start items-center h-[350px] "
        >
          <span className="font-thin text-[32px]">This is it </span>
          <h2 className=" text-[72px] font-black ">HELLO WORLD</h2>
        </motion.div>
        <motion.div
          onAnimationComplete={() => setRem(true)}
          animate={{
            width: "100vw",
            height: "100vh",
            top: "0",
            bottom: "auto",
            transform: "translateY(0)",
            borderRadius: 0,
          }}
          transition={{ duration: 4, ease: "easeInOut" }}
          className="absolute bottom-0 translate-y-[50%] bg-slate-300 w-[100px] h-[100px] rounded-tl-full rounded-tr-full "
        ></motion.div>
      </div>
      <section className="bg-slate-600 min-h-screen w-full flex justify-center items-center">lksdfjklsdfjkskkj</section>
      <section className="bg-red-600 min-h-screen w-full flex justify-center items-center">lksdfjklsdfjkskkj</section>
      <section className="bg-gray-600 min-h-screen w-full flex justify-center items-center">lksdfjklsdfjkskkj</section>
      {/* </ReactLenis> */}
    </>
  );
}

export default App;
