import React, { useEffect } from "react";

const Navbar = () => {
  useEffect(() => {}, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-[21]">
      <div className="mx-auto w-[90%] h-[66px] flex justify-between items-center">
        <h1 className="font-black ">sdklfj</h1>
        <div className=" flex h-full font-orbitron mix-blend-difference tracking-[50px] text-[10px]">
          <a href="#home" className="navbar-cta">
            HOME
          </a>
          <div className="nav-line h-[50%] my-auto w-[0.5px] bg-white" />
          <a href="#about" className="navbar-cta">
            ABOUT
          </a>
          <div className="nav-line h-[50%] my-auto w-[0.5px] bg-white" />
          <a href="#jet" className="navbar-cta">
            JET
          </a>
        </div>
      </div>
      <div className="nav-line mx-auto w-[90%] h-[0.5px] bg-white " />
    </nav>
  );
};

export default Navbar;
