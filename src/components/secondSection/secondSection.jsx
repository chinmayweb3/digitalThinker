import React from "react";

const SecondSection = () => {
  return (
    <section id="about" className="full-screen flex-center text-white  mx-auto w-[90%] justify-end">
      <div className="text-right">
        <h2 className="text-[56px] font-rajdhani font-bold text-transparent text- bg-clip-text bg-gradient-to-r from-[#5f576a] to-[#8f8b94]">
          Su-57 Felon fighter jet design and features
        </h2>
        <p className="max-w-[700px] ml-auto first-para-shadow text-white font-orbitron text-[22px] tracking-[5px]">
          The aircraft is equipped with 3D thrust vector jets for higher manoeuvrability. Short take-offs, network centricity and multi-role
          capabilities are the other features that fulfil the criteria for the fifth-generation aircraft.
        </p>
      </div>
    </section>
  );
};

export default SecondSection;
