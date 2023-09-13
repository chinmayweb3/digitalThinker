import React from "react";

const FirstSection = ({ preloader, setPreloader }) => {
  return (
    <section id="home" className="full-screen flex-center justify-start mx-auto w-[90%] ">
      <div className="z-[21]">
        <h2 className="text-[72px] font-rajdhani font-bold text-transparent text- bg-clip-text bg-gradient-to-r from-[#8f8b94] to-[#5f576a] mix-blend-difference">
          THE SUKHOI SU-57 - FIGHTER JET
        </h2>
        <h2 className="first-para-shadow text-white font-orbitron text-[22px] tracking-[5px]">
          It is a twin-engine stealth multirole <br /> fighter aircraft developed by Sukhoi{" "}
        </h2>
      </div>
    </section>
  );
};

export default FirstSection;
